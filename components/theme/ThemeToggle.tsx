"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type Theme = "dark" | "light" | "system";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    {
      value: "system",
      label: "System",
      icon: <Monitor className="h-4 w-4" />,
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Moon className="h-4 w-4" />,
    },
    {
      value: "light",
      label: "Light",
      icon: <Sun className="h-4 w-4" />,
    },
  ];

  if (!mounted) {
    return (
      <div className="h-9 w-28 rounded-full border border-line bg-surface" />
    );
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1"
      role="radiogroup"
      aria-label="Theme"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setTheme(option.value)}
          aria-checked={theme === option.value}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs transition-colors",
            theme === option.value
              ? "bg-surface-raised text-foreground"
              : "text-muted hover:text-foreground"
          )}
        >
          {option.icon}
          <span className="hidden sm:inline">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
