"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createContext, useContext, useState } from "react";
import { X } from "lucide-react";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebar();

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className={`fixed left-0 top-0 z-30 h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b px-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleSidebar()}
          className="md:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav className="p-4 space-y-2">
        <Link
          href="/dashboard/nfts"
          className={`block px-4 py-2 rounded-md transition-colors ${
            isActive("/dashboard/nfts")
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          My NFTs
        </Link>
        <Link
          href="/dashboard/mint"
          className={`block px-4 py-2 rounded-md transition-colors ${
            isActive("/dashboard/mint")
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          Mint NFT
        </Link>
        <Link
          href="/dashboard/profile"
          className={`block px-4 py-2 rounded-md transition-colors ${
            isActive("/dashboard/profile")
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          Profile Settings
        </Link>
      </nav>
    </aside>
  );
}
