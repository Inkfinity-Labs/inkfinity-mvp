"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SwitchTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "h-9 w-9 relative overflow-hidden transition-theme",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={cn(
            "absolute h-5 w-5 transition-all duration-300",
            resolvedTheme === "dark"
              ? "rotate-0 scale-100"
              : "rotate-90 scale-0"
          )}
        />
        <Moon
          className={cn(
            "absolute h-5 w-5 transition-all duration-300",
            resolvedTheme === "dark"
              ? "-rotate-90 scale-0"
              : "rotate-0 scale-100"
          )}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
