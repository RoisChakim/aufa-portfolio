"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * GSAP + ScrollTrigger own the section-level editorial reveals only
 * (PLAN.md §9 ownership: Motion keeps component interactions such as the
 * lanyard drag/spring; hover/focus stays CSS).
 *
 * Fail-visible contract: every element renders fully visible from static
 * HTML/CSS. Hidden initial states are applied by GSAP fromTo() only after
 * GSAP and ScrollTrigger have both loaded and registered, so a failed or
 * blocked script can never leave a section blank. Reduced-motion users skip
 * this controller entirely and get the static page.
 */
export function ScrollReveal() {
  useIsoLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Single editorial elements (headings, headers): gentle fade + rise.
      gsap.utils.toArray<HTMLElement>("[data-reveal='fade-up']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: Number(el.dataset.revealY ?? 28) },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      // Groups (project cards, skill panels, timeline entries, facts):
      // same easing family with a small stagger.
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
        if (items.length === 0) return;
        gsap.fromTo(
          items,
          { opacity: 0, y: Number(group.dataset.revealY ?? 24) },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: Number(group.dataset.revealStagger ?? 0.09),
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          }
        );
      });

      // Experience timeline rule draws in while the section scrolls through.
      const line = document.querySelector<HTMLElement>("[data-reveal-line]");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: line,
              start: "top 88%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
      }
    });

    // Keep trigger positions honest after late layout shifts (fonts, locale switch).
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const scheduleRefresh = () => {
      if (refreshTimer) clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };
    const resizeObserver = new ResizeObserver(scheduleRefresh);
    resizeObserver.observe(document.body);
    document.fonts?.ready.then(scheduleRefresh).catch(() => {});

    return () => {
      resizeObserver.disconnect();
      if (refreshTimer) clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return null;
}
