import { Outlet } from "@remix-run/react";
import TwoColumns from "~/components/TwoColumns";
import VerticalNav from "~/components/VerticalNav";

export default function DashboardRoute() {
  return (
    <div className="h-full">
      <TwoColumns leftBg={"bg-gray-800"}>
        <VerticalNav />
        <Outlet />
      </TwoColumns>
    </div>
  );
}
