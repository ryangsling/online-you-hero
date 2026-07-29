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
    const { error } = await supabaseAdmin.from("contact_inquiries").insert({
      email: data.email,
      project_type: data.projectType,
      budget: data.budget,
      message: data.message,
    });
    if (error) {
      console.error("[contact] insert failed", error);
      throw new Error("Could not save inquiry");
    }
    return { ok: true as const };
  });