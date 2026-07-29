import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(255),
  projectType: z.string().trim().min(1).max(100),
  budget: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(4000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await (supabaseAdmin.from as any)("contact_inquiries").insert({
      email: data.email,
      project_type: data.projectType,
      budget: data.budget,
      message: data.message,
    });
    if (error) {
      console.error("[contact] insert failed", error);
      throw new Error("Could not save inquiry");
    }

    // Notify inbox via Resend. Uses onboarding@resend.dev which delivers only
    // to the Resend account owner email — perfect for personal notifications.
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
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
            from: "Portfolio Inquiry <hello@incodet.com>",
            to: ["ahmedalif1371@gmail.com"],
            reply_to: data.email,
            subject: `New inquiry: ${data.projectType} (${data.budget})`,
            html,
          }),
        });
        if (!res.ok) {
          const body = await res.text();
          console.error("[contact] resend failed", res.status, body);
        }
      } catch (e) {
        console.error("[contact] resend threw", e);
      }
    }

    return { ok: true as const };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}