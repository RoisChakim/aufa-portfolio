"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LanguageToggle } from "@/components/language/LanguageToggle";
import { HeaderNav } from "@/components/navigation/HeaderNav";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { dictionaries } from "@/i18n/translations";

export function Header() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<"en" | "id">("en");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "en" | "id" | null;
    if (stored === "en" || stored === "id") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dict = dictionaries[locale];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-colors",
        scrolled ? "border-line bg-background/80 backdrop-blur-sm" : "border-transparent bg-background/0"
      )}
    >
      <div className="mx-auto max-w-[1180px] px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground"
          aria-label="Back to homepage"
        >
          AUFA<span className="text-muted">.</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          <HeaderNav dict={dict} locale={locale} />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-full border border-line p-2 text-muted transition-colors hover:text-foreground md:hidden"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-background md:hidden"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-6 flex flex-col gap-4">
            <HeaderNav dict={dict} locale={locale} onNavigate={() => setOpen(false)} />
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
