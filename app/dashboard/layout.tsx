import { DashboardAppShell } from "@/components/appshell";

import { getUserData } from "@/app/dashboard/_requests";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userData = await getUserData();

  return <DashboardAppShell userData={userData}>{children}</DashboardAppShell>;
}
