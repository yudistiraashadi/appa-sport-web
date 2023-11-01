import { DashboardAppShell } from "@/components/appshell";

export default function Dashboardayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardAppShell>{children}</DashboardAppShell>;
}
