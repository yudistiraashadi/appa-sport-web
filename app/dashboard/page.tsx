import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { getSupabaseSession } from "@/utils/auth";
import { Title, Paper, Breadcrumbs, Anchor, Box, NavLink } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { IconUserFilled } from "@tabler/icons-react";

import formationPlan from "@/public/formation_plan.png";

const PLAYER_LIST = [
  {
    posisi: "GK",
    nama: "Jordi Alba",
    nomor: 1,
    umur: 24,
    berat: 70,
    tinggi: 170,
  },
  {
    posisi: "CB",
    nama: "ALvarez",
    nomor: 27,
    umur: 27,
    berat: 80,
    tinggi: 182,
  },
  {
    posisi: "GK",
    nama: "Jordi Alba",
    nomor: 19,
    umur: 24,
    berat: 70,
    tinggi: 170,
  },
  {
    posisi: "CB",
    nama: "ALvarez",
    nomor: 10,
    umur: 27,
    berat: 80,
    tinggi: 182,
  },
  {
    posisi: "GK",
    nama: "Jordi Alba",
    nomor: 36,
    umur: 24,
    berat: 70,
    tinggi: 170,
  },
  {
    posisi: "CB",
    nama: "ALvarez",
    nomor: 7,
    umur: 27,
    berat: 80,
    tinggi: 182,
  },
];

function PlayerCard(props: (typeof PLAYER_LIST)[number]) {
  return (
    <Link href={"#!"} className="p-2.5 border rounded-lg hover:bg-gray-100">
      <div className="mb-1">
        <IconUserFilled className={"w-full h-auto"} />
      </div>

      <div className="font-semibold text-lg mb-1 leading-4">{props.nama}</div>
      <div className="text-sm">
        No. {props.nomor} / {props.posisi}
      </div>
      <div className="text-sm">
        {props.tinggi} cm / {props.berat} kg
      </div>
      <div className="text-sm">{props.umur} tahun</div>
    </Link>
  );
}

export default async function Dashboard() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const session = await getSupabaseSession(supabase);

  return (
    <div className="space-y-4 mt-2">
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

        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <Image
            src={formationPlan}
            alt="Formation plan"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <div className="pt-2 md:col-span-3 col-span-1">
            <div className="font-semibold text-xl">Formasi 1 - 5 - 3 - 2</div>
            <div className="text-lg">Attacking</div>
          </div>
        </div>
      </Paper>

      {/* statistik pemain */}
      <Paper p="md" withBorder radius={"md"}>
        <Title order={4} mb="md" className="font-semibold">
          Statistik Pemain
        </Title>

        <div className="grid xl:grid-cols-6  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {/* player cards */}
          {PLAYER_LIST.map((player, index) => (
            <PlayerCard {...player} key={index} />
          ))}
        </div>
      </Paper>
    </div>
  );
}
