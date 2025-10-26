import { Outlet } from "react-router";
import DashboardHeader from "../components/dashboard/DashboardHeader";

export default function DashboardLayout() {
  return (
    <main>
      <DashboardHeader />
      <Outlet />
    </main>
  );
}
