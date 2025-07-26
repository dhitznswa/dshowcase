import AppNavbar from "@/components/app-navbar";
import AppSidebar from "@/components/app-sidebar";
import { SidebarContextProvider } from "@/contexts/sidebarContext";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <SidebarContextProvider>
        <div className="w-full flex">
          <AppSidebar />
          <main className="w-full lg:w-5/6 min-h-screen ml-auto bg-secondary">
            <AppNavbar />
            <div className="py-10 px-4 lg:px-16">{children}</div>
          </main>
        </div>
      </SidebarContextProvider>
    </SessionProvider>
  );
}
