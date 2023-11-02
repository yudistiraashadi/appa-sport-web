import "server-only";
import { unstable_cache } from "next/cache";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import { getSupabaseSession } from "@/utils/auth";

export const getUserData = unstable_cache(
  async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const session = await getSupabaseSession(supabase);

    // fetch profiles data
    const { data, error } = await supabase
      .from("profiles")
      .select(
        `
              id,
              team_name,
              sport_types ( type )
            `
      )
      .eq("id", session?.user.id)
      .single();

    if (error) throw error;

    return {
      id: session?.user.id,
      email: session?.user.email,
      teamName: data?.team_name,
      //@ts-ignore
      sportType: data?.sport_types.type,
    };
  },
  ["user-data"],
  {
    tags: ["user-data"],
    revalidate: 10 * 60, // 10 mins
  }
);
