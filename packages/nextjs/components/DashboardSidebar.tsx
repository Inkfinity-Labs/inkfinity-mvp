"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";
import Image from "next/image";

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

  const navigationItems = [
    { href: "/dashboard/appointments", label: "Appointments" },
    { href: "/dashboard/mint", label: "Mint NFT" },
    { href: "/dashboard/nfts", label: "My NFTs" },
    { href: "/dashboard/profile", label: "Profile Settings" },
  ].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <aside
      className={`fixed left-0 top-0 z-30 h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-30 px-6 mb-2">
        <Image
          src="/inkfinity-logo.png"
          alt="Inkfinity Logo"
          width={140}
          height={70}
          className="object-contain transition-all duration-300 dark:invert dark:brightness-200"
          priority
        />
      </div>
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-4 py-2 rounded-md transition-colors ${
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
