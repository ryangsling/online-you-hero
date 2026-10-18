import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(255),
  projectType: z.string().trim().min(1).max(100),
  budget: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(4000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const payload = {
      email: data.email,
      project_type: data.projectType,
      budget: data.budget,
      message: data.message,
    };

    let savedToDb = false;
    let sentViaResend = false;
    let dbErrorMessage = "";
    let resendErrorMessage = "";

    // 1) Save to Supabase when server env is available.
    // This is optional now: form can still succeed via Resend-only delivery.
    const hasSupabaseAdminEnv = Boolean(
      process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
    );

    if (hasSupabaseAdminEnv) {
      try {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const admin = supabaseAdmin as unknown as {
          from: (table: string) => {
            insert: (value: unknown) => Promise<{ error: { message?: string } | null }>;
          };
        };
        const { error } = await admin.from("contact_inquiries").insert(payload);
        if (error) throw error;
        savedToDb = true;
      } catch (error) {
        dbErrorMessage = error instanceof Error ? error.message : String(error);
        console.error("[contact] supabase save failed", error);
      }
    } else {
      dbErrorMessage = "SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY missing";
      console.warn("[contact] supabase save skipped: missing admin env");
    }

    // 2) Send email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_FROM = process.env.RESEND_FROM ?? "Portfolio Inquiry <onboarding@resend.dev>";
    const toRaw = process.env.RESEND_TO ?? "ahmedalif1371@gmail.com";
    const to = toRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (RESEND_API_KEY) {
      try {
        const html = `
          <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.55;color:#141414;">
            <h2 style="margin:0 0 12px;font-family:Georgia,serif;">New portfolio inquiry</h2>
            <p style="margin:0 0 6px;"><strong>From:</strong> ${escapeHtml(data.email)}</p>
            <p style="margin:0 0 6px;"><strong>Project type:</strong> ${escapeHtml(data.projectType)}</p>
            <p style="margin:0 0 16px;"><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>
            <div style="padding:14px 16px;border-left:3px solid #c65f3a;background:#f7f5f0;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
          </div>`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: RESEND_FROM,
            to: to.length > 0 ? to : ["ahmedalif1371@gmail.com"],
            reply_to: data.email,
            subject: `New inquiry: ${data.projectType} (${data.budget})`,
            html,
          }),
        });

        if (!res.ok) {
          const body = await res.text();
          throw new Error(`Resend failed (${res.status}): ${body}`);
        }

        sentViaResend = true;
      } catch (error) {
        resendErrorMessage = error instanceof Error ? error.message : String(error);
        console.error("[contact] resend failed", error);
      }
    } else {
      resendErrorMessage = "RESEND_API_KEY is missing";
      console.warn("[contact] RESEND_API_KEY is not set; skipping email delivery");
    }

    if (!savedToDb && !sentViaResend) {
      const details = [
        dbErrorMessage ? `Supabase: ${dbErrorMessage}` : "Supabase: unavailable",
        resendErrorMessage ? `Resend: ${resendErrorMessage}` : "Resend: unavailable",
      ].join(" | ");
      throw new Error(`Could not submit inquiry right now. ${details}`);
    }

    return { ok: true as const, savedToDb, sentViaResend };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
