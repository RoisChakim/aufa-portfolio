"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { dictionaries } from "@/i18n/translations";
import type { Dictionary } from "@/i18n/translations";

type Locale = "en" | "id";

const options: { value: Locale; label: string; code: string }[] = [
  { value: "en", label: "English", code: "EN" },
  { value: "id", label: "Indonesia", code: "ID" },
];

export function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Locale | null;
    if (stored === "en" || stored === "id") {
      setLocale(stored);
    }
    setMounted(true);
  }, []);

  const handleChange = (value: Locale) => {
    setLocale(value);
    localStorage.setItem("lang", value);
  };

  if (!mounted) {
    return (
      <div className="h-9 w-28 rounded-full border border-line bg-surface" />
    );
  }

  const dict = dictionaries[locale];

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1"
      role="radiogroup"
      aria-label="Language"
    >
      <span className="sr-only">Language</span>
      <Globe className="ml-2 h-4 w-4 text-muted" aria-hidden="true" />
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => handleChange(option.value)}
          aria-checked={locale === option.value}
          className={cn(
            "rounded-full px-2.5 py-1.5 text-xs transition-colors",
            locale === option.value
              ? "bg-surface-raised text-foreground"
              : "text-muted hover:text-foreground"
          )}
        >
          {dict.lang[option.value]}
        </button>
      ))}
    </div>
  );
}
