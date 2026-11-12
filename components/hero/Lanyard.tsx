"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
  useVelocity,
} from "motion/react";
import { IDCard } from "./IDCard";
import { profileData } from "@/data/profile";

/**
 * Signature lanyard: top anchor → strap (SVG path) → silver clip → ID card.
 * Motion owns the drag/spring interaction (GSAP is reserved for scroll work).
 *
 * Geometry notes: the card is 176×256 (half width 88). It hangs from a fixed
 * anchor; the strap is redrawn from the anchor to the card's attach point on
 * every motion-value change, so the whole assembly stays physically coherent.
 */

type Geometry = {
  width: number;
  anchorX: number;
  anchorY: number;
  cardX: number;
  cardY: number;
};

const INITIAL_GEOMETRY: Geometry = {
  width: 320,
  anchorX: 160,
  anchorY: 14,
  cardX: 160,
  cardY: 200,
};

const ROTATE_LIMIT = 16;
const SCREEN_MARGIN = 8;
const STRAP_CLEARANCE = 24; // keep the card top below the anchor so the strap never inverts

const RELEASE_SPRING_X = { type: "spring", stiffness: 160, damping: 10, mass: 1 } as const;
const RELEASE_SPRING_Y = { type: "spring", stiffness: 300, damping: 30 } as const;
const NUDGE_SPRING = { type: "spring", stiffness: 220, damping: 16 } as const;
const LIFT_SPRING = { type: "spring", stiffness: 320, damping: 28 } as const;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function buildStrapD(geometry: Geometry, x: number, y: number): string {
  const endX = geometry.cardX + x;
  const endY = geometry.cardY + y;
  const drop = endY - geometry.anchorY;
  const sag = 10 + Math.abs(x) * 0.06;
  const c1x = geometry.anchorX + x * 0.2;
  const c1y = geometry.anchorY + drop * 0.4;
  const c2x = geometry.anchorX + x * 0.65;
  const c2y = geometry.anchorY + drop * 0.8 + sag;
  return `M ${geometry.anchorX} ${geometry.anchorY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${endX} ${endY}`;
}

export function Lanyard() {
  const reduceMotion = useReducedMotion() ?? false;
  const columnRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const strapRef = useRef<SVGPathElement>(null);
  const strapHighlightRef = useRef<SVGPathElement>(null);
  const draggingRef = useRef(false);
  const pointerStartRef = useRef({ px: 0, py: 0, x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [geometry, setGeometry] = useState<Geometry>(INITIAL_GEOMETRY);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const velocityX = useVelocity(x);

  // Tilt follows displacement plus a velocity term, clamped so the card never
  // over-rotates. Rotation derives from position, so release swings decay with it.
  const rotate = useTransform([x, velocityX], ([position, velocity]: number[]) => {
    const displacementTilt = clamp(position * 0.08, -12, 12);
    const velocityTilt = clamp(velocity * 0.008, -6, 6);
    return clamp(displacementTilt + velocityTilt, -ROTATE_LIMIT, ROTATE_LIMIT);
  });

  // Shadow deepens slightly as the card is pulled away from its rest point.
  const lift = useTransform([x, y], ([positionX, positionY]: number[]) =>
    Math.min(1, Math.hypot(positionX, positionY) / 150)
  );
  const shadowY = useTransform(lift, [0, 1], [16, 30]);
  const shadowBlur = useTransform(lift, [0, 1], [36, 60]);
  const shadowAlpha = useTransform(lift, [0, 1], [0.32, 0.48]);
  const boxShadow = useMotionTemplate`0px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowAlpha})`;

  // Measure the column and the card's rest position so the strap and the drag
  // bounds always match the real layout (responsive sizes included).
  useIsoLayoutEffect(() => {
    const measure = () => {
      const column = columnRef.current;
      const card = cardRef.current;
      if (!column || !card) return;
      const width = column.clientWidth;
      const anchorX = width / 2;
      const cardX = card.offsetLeft + card.offsetWidth / 2;
      const cardY = card.offsetTop;
      setGeometry((previous) =>
        previous.width === width && previous.cardX === cardX && previous.cardY === cardY
          ? previous
          : { width, anchorX, anchorY: INITIAL_GEOMETRY.anchorY, cardX, cardY }
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (columnRef.current) observer.observe(columnRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Redraw the strap whenever the card moves or the layout is re-measured.
  useEffect(() => {
    const update = () => {
      const d = buildStrapD(geometry, x.get(), y.get());
      strapRef.current?.setAttribute("d", d);
      strapHighlightRef.current?.setAttribute("d", d);
    };

    update();
    const unsubscribeX = x.on("change", update);
    const unsubscribeY = y.on("change", update);
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [geometry, x, y]);

  // Drag bounds keep the whole card inside the viewport (and below the anchor).
  const computeBounds = () => {
    const card = cardRef.current;
    if (!card || typeof window === "undefined") {
      return { minX: -160, maxX: 160, minY: -120, maxY: 160 };
    }
    const rect = card.getBoundingClientRect();
    const baseLeft = rect.left - x.get();
    const baseTop = rect.top - y.get();
    const minYByStrap = geometry.anchorY + STRAP_CLEARANCE - geometry.cardY;
    return {
      minX: SCREEN_MARGIN - baseLeft,
      maxX: window.innerWidth - SCREEN_MARGIN - rect.width - baseLeft,
      minY: Math.max(SCREEN_MARGIN - baseTop, minYByStrap),
      maxY: window.innerHeight - SCREEN_MARGIN - rect.height - baseTop,
    };
  };

  const releaseCard = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    if (reduceMotion) {
      x.set(0);
      y.set(0);
      return;
    }
    // Underdamped spring on x gives a few natural swings; y settles directly.
    animate(x, 0, RELEASE_SPRING_X);
    animate(y, 0, RELEASE_SPRING_Y);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const card = cardRef.current;
    if (!card) return;
    event.preventDefault();
    try {
      card.setPointerCapture(event.pointerId);
    } catch {
      // Pointer may already be released; dragging still works while held.
    }
    x.stop();
    y.stop();
    draggingRef.current = true;
    setDragging(true);
    // On small screens the card may hang below the fold at scroll 0. Lift it
    // smoothly into view as the drag starts instead of letting the clamp yank it.
    const bounds = computeBounds();
    if (bounds.maxY < 0) {
      animate(y, bounds.maxY, LIFT_SPRING);
      pointerStartRef.current = { px: event.clientX, py: event.clientY, x: x.get(), y: bounds.maxY };
    } else {
      pointerStartRef.current = { px: event.clientX, py: event.clientY, x: x.get(), y: y.get() };
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const start = pointerStartRef.current;
    const bounds = computeBounds();
    x.set(clamp(start.x + (event.clientX - start.px), bounds.minX, bounds.maxX));
    y.set(clamp(start.y + (event.clientY - start.py), bounds.minY, bounds.maxY));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = computeBounds();
    const step = event.shiftKey ? 56 : 28;
    let handled = true;
    switch (event.key) {
      case "ArrowLeft":
        animate(x, clamp(x.get() - step, bounds.minX, bounds.maxX), NUDGE_SPRING);
        break;
      case "ArrowRight":
        animate(x, clamp(x.get() + step, bounds.minX, bounds.maxX), NUDGE_SPRING);
        break;
      case "ArrowUp":
        animate(y, clamp(y.get() - step * 0.75, bounds.minY, bounds.maxY), NUDGE_SPRING);
        break;
      case "ArrowDown":
        animate(y, clamp(y.get() + step * 0.75, bounds.minY, bounds.maxY), NUDGE_SPRING);
        break;
      case "Escape":
      case "Home":
        animate(x, 0, RELEASE_SPRING_X);
        animate(y, 0, RELEASE_SPRING_Y);
        break;
      default:
        handled = false;
    }
    if (handled) event.preventDefault();
  };

  const initialD = buildStrapD(geometry, 0, 0);
  const cardLabel = `Personal ID card of ${profileData.name}, ${profileData.role}. Drag with a pointer or touch, or move with arrow keys; press Escape to return it to rest.`;

  return (
    <div
      ref={columnRef}
      className="relative h-[420px] w-full max-w-[300px] select-none sm:h-[480px] sm:max-w-[340px]"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {/* Ceiling mount and anchor ring */}
        <rect x={geometry.anchorX - 12} y={2} width={24} height={4} rx={2} fill="#2f2f33" />
        <circle
          cx={geometry.anchorX}
          cy={12}
          r={4.5}
          fill="none"
          stroke="#9a9da3"
          strokeWidth={2}
        />
        {/* Matte black strap with a subtle woven highlight */}
        <path
          ref={strapRef}
          d={initialD}
          fill="none"
          stroke="#141417"
          strokeWidth={7}
          strokeLinecap="round"
        />
        <path
          ref={strapHighlightRef}
          d={initialD}
          fill="none"
          stroke="rgba(185, 185, 185, 0.28)"
          strokeWidth={1.25}
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
      </svg>

      <motion.div
        ref={cardRef}
        role="group"
        aria-label={cardLabel}
        tabIndex={0}
        className={`absolute left-[calc(50%_-_88px)] top-[168px] sm:top-[200px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
          reduceMotion ? "" : dragging ? "cursor-grabbing touch-none" : "cursor-grab touch-none"
        }`}
        style={{
          x,
          y,
          rotate,
          boxShadow,
          transformOrigin: "50% 0%",
          willChange: "transform",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={releaseCard}
        onPointerCancel={releaseCard}
        onLostPointerCapture={releaseCard}
        onKeyDown={handleKeyDown}
      >
        <div className="origin-top scale-90 sm:scale-100">
          {/* Brushed silver clip */}
          <div className="absolute -top-[16px] left-1/2 z-10 h-[30px] w-[22px] -translate-x-1/2 rounded-[5px] bg-[linear-gradient(165deg,#eceef1_0%,#b7bac0_38%,#87898f_62%,#d7d9dd_100%)] shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            <div className="absolute left-1/2 top-[5px] h-[3px] w-[12px] -translate-x-1/2 rounded-full bg-black/55" />
            <div className="absolute bottom-[6px] left-1/2 h-[10px] w-[8px] -translate-x-1/2 rounded-[2px] bg-black/25" />
          </div>
          <IDCard />
        </div>
      </motion.div>
    </div>
  );
}
