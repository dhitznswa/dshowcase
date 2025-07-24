"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/sidebarContext";

export default function AppNavbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="w-full p-5 h-20 bg-background flex items-center justify-between">
      <div>General / Dashboard</div>
      <div>
        <Button onClick={toggleSidebar}>Open</Button>
      </div>
    </div>
  );
}
