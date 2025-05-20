import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StarknetProvider } from "@/components/StarknetProvider";
import { SidebarProvider } from "@/components/DashboardSidebar";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inkfinity",
  description: "NFT Marketplace for Tattoo Artists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StarknetProvider>
            <SidebarProvider>
              <div className="relative min-h-screen">
                <Header />
                {children}
              </div>
            </SidebarProvider>
          </StarknetProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
