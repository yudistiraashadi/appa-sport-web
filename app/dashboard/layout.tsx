import { DashboardAppShell } from "@/components/appshell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardAppShell>{children}</DashboardAppShell>;
}
