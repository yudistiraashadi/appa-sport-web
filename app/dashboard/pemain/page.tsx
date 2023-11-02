import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { getSupabaseSession } from "@/utils/auth";
import { Title, Paper, Breadcrumbs, Anchor } from "@mantine/core";
import Link from "next/link";

import { PlayerCard } from "@/components/player-card";

export default async function Pemain() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const session = await getSupabaseSession(supabase);

  const { data, error } = await supabase
    .from("players")
    .select(
      `
      id,
      name,
      position,
      birthDate:birth_date,
      height,
      weight
    `,
    )
    .eq("team_id", session?.user.id);

  return (
    <div className="mt-2 space-y-4">
      {/* breadcrumb */}
      <Breadcrumbs mb={"-0.5rem"}>
        <Anchor component={Link} href={"/dashboard"}>
          Dashboard
        </Anchor>
        <Anchor>Daftar Pemain</Anchor>
      </Breadcrumbs>

      {/* title */}
      <Title order={2} className="font-semibold">
        Daftar Pemain
      </Title>

      {/* daftar pemain */}
      <Paper p="md" withBorder radius={"md"}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {/* player cards */}
          {data?.map((player, index) => <PlayerCard {...player} key={index} />)}
        </div>
      </Paper>
    </div>
  );
}
