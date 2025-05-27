"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import ControllerConnectButton from "@/components/WalletConnectButton";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useSidebar } from "@/components/DashboardSidebar";
import { SwitchTheme } from "@/components/SwitchTheme";

// Interface para una cuenta Starknet segura
export interface StarknetAccount {
  address: string;
  // Puedes agregar más campos si lo necesitas
}

// Type guard para validar la cuenta
export function isValidAccount(account: any): account is StarknetAccount {
  return !!account && typeof account.address === "string";
}

export function Header() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isMarketplace = pathname.startsWith("/marketplace");
  const { isOpen, toggleSidebar } = useSidebar();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Inkfinity
          </Link>
          {isMarketplace && (
            <nav className="hidden md:flex gap-6">
              <Link
                href="/marketplace"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/marketplace")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Marketplace
              </Link>
              <Link
                href="/marketplace/featured"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/marketplace/featured")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Featured
              </Link>
              <Link
                href="/marketplace/artists"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/marketplace/artists")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Artists
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          <SwitchTheme />
          {isDashboard ? (
            <Link href="/marketplace">
              <Button variant="ghost">Marketplace</Button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
          )}
          <ControllerConnectButton />
          {isDashboard && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {isOpen ? (
                <PanelLeftClose className="h-5 w-5" />
              ) : (
                <PanelLeftOpen className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
