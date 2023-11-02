import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { getSupabaseSession } from "@/utils/auth";
import { Title, Paper, Breadcrumbs, Anchor, Box, NavLink } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { IconUserFilled } from "@tabler/icons-react";

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
        <Anchor>Daftar Pemain</Anchor>
      </Breadcrumbs>
    </div>
  );
}
