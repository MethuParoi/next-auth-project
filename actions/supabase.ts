"use server";

import { supabaseServerClient } from "@/utils/supabaseServer";

export async function registerWithEmailAndPassword({
  email,
}: {
  email: string;
}) {
  const supabase = await supabaseServerClient();

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000",
    },
  });

  return JSON.stringify(response);
}
