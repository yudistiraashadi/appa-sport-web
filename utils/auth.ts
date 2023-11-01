import { redirect } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getSupabaseSession(supabase: SupabaseClient) {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  // not signed in / session expired
  if (!sessionData) {
    redirect("/");
  }

  return sessionData.session;
}
