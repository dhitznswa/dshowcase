"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  GaugeCircleIcon,
  LucideIcon,
  MessageSquareIcon,
  PlusIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function AppSidebarList() {
  const { data: session } = useSession();
  const general_items: SidebarItemType[] = [
    {
      label: "Dashboard",
      url: "/",
      icon: GaugeCircleIcon,
    },
    {
      label: "Forum",
      url: "/",
      icon: MessageSquareIcon,
    },
  ];

  const admin_items: SidebarItemType[] = [
    {
      label: "Users",
      url: "/dashboard/users",
      icon: UsersIcon,
    },
  ];

  const produk_items: SidebarItemType[] = [
    {
      label: "Produk Saya",
      url: "/dashbord/my-products",
      icon: ShoppingCartIcon,
    },
  ];

  return (
    <div className="py-4">
      <Button className="w-full">
        <PlusIcon /> Tambah Produk
      </Button>
      <div className="mt-6">
        <AppSidebarListItem category="General" items={general_items} />
        {session?.user.role === "Admin" ? (
          <AppSidebarListItem category="Area Admin" items={admin_items} />
        ) : null}
        <AppSidebarListItem category="Produk" items={produk_items} />
      </div>
    </div>
  );
}

interface SidebarItemType {
  label: string;
  url: string;
  icon: LucideIcon;
}

function AppSidebarListItem({
  category,
  items,
}: {
  category: string;
  items: SidebarItemType[];
}) {
  return (
    <div className="mb-7">
      <h3 className="text-xs text-muted-foreground mb-2 uppercase">
        {category}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.url} className="flex items-center gap-2">
              <item.icon className="w-5 h-5" /> {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
