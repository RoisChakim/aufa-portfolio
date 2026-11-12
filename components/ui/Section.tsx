"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[96px] md:py-[120px]",
        className
      )}
    >
      <div className="mx-auto max-w-[1180px] px-6">{children}</div>
    </section>
  );
}
