"use client";

import React from "react";
import { useSidebar } from "@/contexts/sidebarContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon, Menu, Network, Settings, User } from "lucide-react";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";

export function ProfileMenu({ session }: { session: Session | null }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-9 w-9 border border-muted-foreground/50 flex items-center justify-center cursor-pointer">
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback>
              <User className="w-5 h-5" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" sideOffset={10}>
          <DropdownMenuLabel className="-space-y-1">
            <h3 className="font-medium">{session?.user.email}</h3>
            <span className="text-xs text-muted-foreground">
              Role : {session?.user.role}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <User /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Settings /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Network /> API
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => signOut()}
          >
            <LogOutIcon /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Button onClick={toggleSidebar} variant="secondary" size="icon">
        <Menu className="w-8 h-8" />
      </Button>
    </>
  );
}
