import { profileData } from "@/data/profile";

/**
 * Presentational ID card for the lanyard assembly.
 * Data comes only from data/profile.ts — no duplicated or invented content.
 * Fixed dimensions are shared with Lanyard.tsx geometry (176 × 256, half width 88).
 */
export function IDCard() {
  return (
    <div className="flex h-[256px] w-[176px] flex-col rounded-xl border border-line bg-surface p-3">
      {/* Lanyard slot punched through the top of the card */}
      <div className="mx-auto mt-0.5 h-[5px] w-[34px] rounded-full bg-background shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]" />

      <div className="mt-2.5 overflow-hidden rounded-md border border-line bg-surface-raised">
        <img
          src={profileData.portrait}
          alt={`Portrait of ${profileData.name}`}
          className="h-[108px] w-full object-cover"
          loading="eager"
          width={152}
          height={108}
          draggable={false}
        />
      </div>

      <div className="mt-2.5 text-center">
        <p className="text-[0.78rem] font-semibold leading-snug tracking-[0.02em] text-foreground">
          {profileData.name}
        </p>
        <p className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] text-muted">
          {profileData.role}
        </p>
      </div>

      <div className="mt-auto border-t border-line pt-2">
        <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.18em] text-muted">
          <span>Personal ID</span>
          <span>{profileData.location}</span>
        </div>
      </div>
    </div>
  );
}
