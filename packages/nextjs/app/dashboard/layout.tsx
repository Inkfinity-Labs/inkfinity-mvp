"use client";

import { DashboardSidebar } from "@/components/DashboardSidebar";
import { useSidebar } from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useSidebar();

  return (
    <div className="min-h-screen">
      <DashboardSidebar />
      <main
        className={`min-h-screen transition-all duration-300 ${
          isOpen ? "pl-64" : "pl-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
