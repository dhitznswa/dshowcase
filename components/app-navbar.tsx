import React from "react";
import { ProfileMenu, SidebarToggle } from "@/components/app-navbar-action";
import { auth } from "@/auth";

export default async function AppNavbar() {
  const session = await auth();
  return (
    <div className="w-full p-5 h-20 bg-background flex items-center justify-between">
      <div>General / Dashboard</div>
      <div className="flex items-center gap-3">
        <ProfileMenu session={session} />
        <SidebarToggle />
      </div>
    </div>
  );
}
