import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { getSupabaseSession } from "@/utils/auth";
import { Title, Paper, Breadcrumbs, Anchor } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

import formationPlan from "@/public/formation_plan.png";
import { PlayerCard } from "@/components/player-card";

export default async function Dashboard() {
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
      <Breadcrumbs>
        <Anchor component={Link} href={"/dashboard"}>
          Dashboard
        </Anchor>
        <Anchor>Profil Tim</Anchor>
      </Breadcrumbs>

      {/* strategi utama */}
      <Paper p="md" withBorder radius={"md"}>
        <Title className="font-semibold" order={4} mb="md">
          Strategi Utama
        </Title>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
          <Image
            src={formationPlan}
            alt="Formation plan"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <div className="col-span-1 pt-2 md:col-span-3">
            <div className="text-xl font-semibold">Formasi 1 - 5 - 3 - 2</div>
            <div className="text-lg">Attacking</div>
          </div>
        </div>
      </Paper>

      {/* statistik pemain */}
      <Paper p="md" withBorder radius={"md"}>
        <Title order={4} mb="md" className="font-semibold">
          Statistik Pemain
        </Title>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          {/* player cards */}
          {data?.map((player, index) => <PlayerCard {...player} key={index} />)}
        </div>
      </Paper>
    </div>
  );
}
