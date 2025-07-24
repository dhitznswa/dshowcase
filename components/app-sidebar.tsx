"use client";

import { useSidebar } from "@/contexts/sidebarContext";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { PaintBucket } from "lucide-react";

export default function AppSidebar() {
  const { isOpen, setStatus } = useSidebar();
  const pathname = usePathname();

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOutSideClick = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setStatus(false);
    }
  };

  const activeLink = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  });

  useEffect(() => {
    const closeIFPathChange = () => {
      setStatus(false);
    };

    closeIFPathChange();
  }, [pathname, setStatus]);
  return (
    <div
      ref={sidebarRef}
      className={cn(
        "w-[65%] lg:w-1/6 h-dvh fixed shadow-md px-5 bg-background transition-all duration-500",
        isOpen ? "top-0 left-0" : "top-0 -left-full lg:left-0"
      )}
    >
      <div className="w-full h-20 flex item-center">
        <div className="flex items-center gap-3">
          <div className="">
            <PaintBucket className="w-7 h-7" />
          </div>
          <div className="">
            <h1 className="font-bold">D&apos;Showcase</h1>
            <p className="text-xs text-muted-foreground">
              Powered by @dhitznswa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
