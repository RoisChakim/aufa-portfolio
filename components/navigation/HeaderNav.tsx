"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", href: "/#about", labelKey: "about" },
  { id: "work", href: "/#work", labelKey: "work" },
  { id: "skills", href: "/#skills", labelKey: "skills" },
  { id: "experience", href: "/#experience", labelKey: "experience" },
  { id: "education", href: "/#education", labelKey: "education" },
  { id: "contact", href: "/#contact", labelKey: "contact" },
];

type NavProps = {
  dict: any;
  locale: "en" | "id";
  onNavigate?: () => void;
};

export function HeaderNav({ dict, locale, onNavigate }: NavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Simple scrollspy: whichever section crosses a narrow band in the upper
  // part of the viewport is the active one. Pure IntersectionObserver, so it
  // stays independent from the GSAP scroll reveals.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }
        const current = sections.find((section) => visible.get(section.id));
        setActiveId(current ? current.id : null);
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8"
    >
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "relative w-fit text-sm transition-colors",
              "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-foreground/70 after:transition-transform after:duration-200 hover:after:scale-x-100",
              "hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground",
              isActive ? "text-foreground after:scale-x-100" : "text-muted"
            )}
          >
            {dict.nav[item.labelKey as keyof typeof dict.nav]}
          </Link>
        );
      })}
    </nav>
  );
}
