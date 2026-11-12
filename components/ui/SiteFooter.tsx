"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { dictionaries } from "@/i18n/translations";

type SiteFooterProps = {
  dict: (typeof dictionaries)["en" | "id"];
};

export function SiteFooter({ dict }: SiteFooterProps) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-6 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">AUFA ROISUL CHAKIM</p>
          <p className="text-xs text-muted">
            © 2026 {dict.footer.rights}
          </p>
        </div>
        <Link
          href="/#hero"
          className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
        >
          <ArrowUp className="h-4 w-4" />
          {dict.footer.backToTop}
        </Link>
      </div>
    </footer>
  );
}
