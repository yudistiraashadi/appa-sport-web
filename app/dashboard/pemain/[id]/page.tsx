import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { Title, Paper, Breadcrumbs, Anchor } from "@mantine/core";
import Link from "next/link";

export default async function PemainId({ params }: { params: { id: number } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

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
    .eq("id", params.id)
    .single();

  let formattedBirthDate = new Date(data?.birthDate).toLocaleDateString(
    "id-ID",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="mt-2 space-y-4">
      {/* breadcrumb */}
      <Breadcrumbs mb={"-0.5rem"}>
        <Anchor component={Link} href={"/dashboard"}>
          Dashboard
        </Anchor>
        <Anchor component={Link} href={"/dashboard/pemain"}>
          Daftar Pemain
        </Anchor>
        <Anchor>Detail Pemain</Anchor>
      </Breadcrumbs>

      {/* title */}
      <Title order={2} className="font-semibold">
        {data?.name}
      </Title>

      {/* informasi dasar */}
      <Paper p="md" withBorder radius={"md"}>
        <Title order={4} mb="md" className="font-semibold">
          Informasi Dasar
        </Title>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="col-span-1 space-y-1 text-sm font-semibold">
            <div>Nama</div>
            <div>Posisi</div>
            <div>Tanggal Lahir</div>
            <div>Tinggi Badan</div>
            <div>Berat Badan</div>
          </div>

          <div className="col-span-1 space-y-1 text-sm md:col-span-3">
            <div>{data?.name}</div>
            <div>{data?.position}</div>
            <div>{formattedBirthDate}</div>
            <div>{data?.height} cm</div>
            <div>{data?.weight} kg</div>
          </div>
        </div>
      </Paper>

      {/* Statistik */}
      <Paper p="md" withBorder radius={"md"}>
        <Title order={4} mb="md" className="font-semibold">
          Statistik
        </Title>
      </Paper>
    </div>
  );
}
