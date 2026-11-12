# DESIGN.md — AUFA ROISUL CHAKIM Portfolio

> Visual and interaction design specification  
> Version: 1.0  
> Direction: Dark Luxury × Minimal Editorial × Interactive Identity

## 1. Design intent

Create a refined personal portfolio that feels like a carefully art-directed digital identity, not a prebuilt developer template.

The visual language should be:
- Dark, elegant, quiet, and confident.
- Editorial rather than dashboard-like.
- Minimal but not empty.
- Technical without using stereotypical neon/cyberpunk visuals.
- Interactive only where the interaction adds meaning.

The hanging lanyard ID card is the signature visual motif. It should feel like a real object in a carefully composed editorial space.

## 2. Brand identity

**Name:** AUFA ROISUL CHAKIM  
**Role:** WEB DEVELOPER  
**Primary tagline:** Building digital experiences with purpose, precision, and simplicity.  
**Indonesian tagline:** Membangun pengalaman digital dengan tujuan, presisi, dan kesederhanaan.

Brand attributes:
- Refined
- Technical
- Minimal
- Confident
- Thoughtful
- Reliable

Avoid:
- Fake agency positioning.
- Unsupported claims such as “award-winning” or “expert”.
- Overused terminal/code-rain backgrounds.
- Excessive neon, glow, gradients, glassmorphism, and floating blobs.
- Decorative UI that looks like a SaaS dashboard.

## 3. Color system

### Dark theme — default

| Token | Hex | Usage |
|---|---|---|
| `background` | `#0B0B0C` | Main page background |
| `surface` | `#151517` | Cards and panels |
| `surface-raised` | `#1C1C1F` | Hover and raised surfaces |
| `foreground` | `#F2F0E9` | Primary text |
| `muted` | `#858585` | Secondary text |
| `line` | `#303033` | Dividers and borders |
| `accent` | `#B9B9B9` | Silver details |

### Light theme

| Token | Hex | Usage |
|---|---|---|
| `background` | `#F3F1EC` | Main page background |
| `surface` | `#FFFFFF` | Cards and panels |
| `surface-raised` | `#E9E7E1` | Raised surfaces |
| `foreground` | `#171717` | Primary text |
| `muted` | `#77736D` | Secondary text |
| `line` | `#D9D6CF` | Dividers and borders |
| `accent` | `#626262` | Neutral accent |

Rules:
- Dark is the default.
- Silver is a restrained accent, not a large decorative color field.
- Use contrast to establish hierarchy, not many accent colors.
- Do not use pure white for every surface in light mode; preserve warmth.
- Verify text contrast for all actual combinations.

## 4. Typography

Suggested font roles:
- Display: Space Grotesk or Satoshi.
- Body: Inter.
- Technical labels/metadata: JetBrains Mono.

Use locally hosted or optimized font loading when possible. Confirm font licenses and use a sensible system fallback.

### Type scale

| Role | Suggested desktop size | Notes |
|---|---:|---|
| Hero display | `clamp(3.3rem, 9vw, 8.5rem)` | Tight line-height, negative tracking |
| Section heading | `clamp(2.2rem, 5vw, 5rem)` | Editorial, concise |
| Card heading | `1.1–1.5rem` | Medium/semibold |
| Body | `0.95–1.05rem` | Comfortable line-height |
| Eyebrow | `0.68–0.75rem` | Uppercase, tracked |
| Metadata | `0.68–0.75rem` | Monospace |

Typography rules:
- Use uppercase selectively for section labels and metadata.
- Large display text should have a tight but readable line-height.
- Body text should not be too wide; target roughly 55–75 characters per line.
- Avoid using too many font weights.
- Do not set all text in uppercase.

## 5. Layout and spacing

- Maximum content width: approximately `1180px`.
- Main horizontal gutter: `24px` on small screens, scaling to `40–64px` on larger screens.
- Use a 12-column editorial grid on desktop where useful.
- Use 1-column or 2-column layouts on mobile depending on content.
- Large vertical section spacing: approximately `96–160px` desktop and `72–112px` mobile.
- Thin dividers should separate major content groups.
- Keep whitespace generous but ensure content density remains useful.

Suggested breakpoints:
- Mobile: below `640px`.
- Tablet: `640px–1023px`.
- Desktop: `1024px` and above.
- Large desktop: `1280px` and above.

Do not treat these breakpoints as rigid if content requires a different transition.

## 6. Global navigation

### Desktop
- Minimal header.
- Wordmark `AUFA.` on the left.
- Section navigation on the right.
- Theme and language controls as compact utilities.
- Header may be sticky if it remains visually quiet and does not obscure content.

### Mobile
- Wordmark on the left.
- Compact menu trigger on the right.
- Theme/language controls accessible in the menu or a compact utility area.
- Menu opens with a restrained fade/slide.
- Lock body scroll only while the menu is open; restore it on close.
- Escape key closes the menu.

### Navigation behavior
- Anchor links scroll to sections with sticky-header offset.
- Focus state must be visible.
- Hover treatment can use a subtle underline or opacity change.
- Do not use oversized pill buttons for every navigation item.

## 7. Hero composition

### Desktop wireframe

```text
┌────────────────────────────────────────────────────────────────┐
│ AUFA.              ABOUT  WORK  SKILLS  EXPERIENCE  EDUCATION  │
│                                                   CONTACT  EN ◐ │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  INDONESIA / PERSONAL PORTFOLIO             [LANYARD ANCHOR]    │
│                                                                │
│  HELLO, I'M                                  │                  │
│  AUFA                                        │     STRAP        │
│  ROISUL                                      │       │          │
│  CHAKIM.                                     │    [SILVER]      │
│                                              │    [ ID CARD ]   │
│  WEB DEVELOPER.                              │    [PORTRAIT]    │
│                                              │    [AUFA NAME]   │
│  Short professional statement.              │                  │
│                                              │                  │
│  [EXPLORE MY WORK]  GET IN TOUCH             │                  │
│                                                                │
│  SCROLL TO EXPLORE                         PERSONAL IDENTITY    │
└────────────────────────────────────────────────────────────────┘
```

### Mobile wireframe

```text
┌─────────────────────────────┐
│ AUFA.                 MENU  │
├─────────────────────────────┤
│ INDONESIA / PORTFOLIO       │
│                             │
│ HELLO, I'M                  │
│ AUFA                        │
│ ROISUL                      │
│ CHAKIM.                     │
│                             │
│ WEB DEVELOPER.              │
│ Short introduction copy.    │
│                             │
│ [EXPLORE MY WORK]           │
│ GET IN TOUCH                │
│                             │
│       LANYARD               │
│          │                  │
│       [ID CARD]             │
│                             │
│ SCROLL TO EXPLORE           │
└─────────────────────────────┘
```

Hero rules:
- The name and role must be readable without interacting with the card.
- On desktop, text and card sit side by side.
- On mobile, avoid placing the card over the name or CTA.
- The card can overlap the hero's visual area but must not obscure content.
- Use the owner's real portrait only after it is supplied.
- Avoid a fabricated portrait or a generic AI portrait presented as the owner.

## 8. Signature object — lanyard and ID card

### Physical design

- Strap: matte black woven lanyard.
- Hardware: restrained brushed silver clip.
- Card: vertical, dark charcoal, subtle edge, realistic but understated.
- Portrait: owner's professional photo, cropped consistently.
- Name: AUFA ROISUL CHAKIM.
- Role: WEB DEVELOPER.
- Location: INDONESIA.
- Optional small metadata: PERSONAL ID / PORTFOLIO.
- No fake employee number, QR code, company logo, or institutional affiliation.

### Object hierarchy

1. Top anchor point.
2. Black strap.
3. Silver connector/clip.
4. ID card body.
5. Portrait.
6. Name and role typography.
7. Small metadata.

### Interaction states

**Rest**
- Card hangs vertically.
- Strap follows a natural curve.
- Small ambient movement is optional; prefer stillness by default.

**Hover**
- Very subtle shadow or highlight change.
- Cursor indicates draggable behavior only when appropriate.

**Dragging**
- Card follows pointer/touch with a small amount of smoothing.
- Rotation responds to horizontal velocity and displacement.
- Strap endpoint follows the card.
- Limit maximum drag distance and rotation.
- The drag handle should be predictable.

**Release**
- Calculate release velocity.
- Apply a damped spring.
- Allow a few natural swings.
- Settle at the rest position without endless oscillation.

**Reduced motion**
- Use a static hanging card or very restrained direct movement.
- Do not force a large swinging animation.

### Implementation guidance

- Prefer SVG for the strap path because it can be redrawn from anchor to card attachment.
- Use Motion values/spring for card position and rotation, or a small custom physics controller.
- Avoid running a full physics engine for one card.
- Use Pointer Events to unify mouse, pen, and touch.
- Consider `touch-action` carefully. Do not disable all touch gestures across the whole hero.
- Make the drag surface explicit.
- Ensure the object has a non-interactive visual fallback.
- Do not use GSAP and Motion to control the same transform simultaneously.

Suggested tuning ranges (starting points, not fixed requirements):
- Spring stiffness: medium.
- Damping: enough to settle in a few swings.
- Rotation limit: approximately ±12–18 degrees.
- Drag distance: constrained to hero bounds.
- Shadow blur/offset: subtle, responsive to displacement.

## 9. Section design

### 9.1 About

Desktop:
- Small numbered eyebrow in a narrow left column.
- Large editorial heading and concise biography on the right.
- Optional compact facts row beneath.

Content:
- Professional introduction.
- Approach to development.
- Interests or working principles only when supplied by owner.

Motion:
- Heading uses masked reveal.
- Paragraph uses a subtle fade/vertical reveal.
- Fact items use a short stagger.

### 9.2 Selected Works

Desktop:
- Large section title.
- Project cards arranged in an editorial grid, not identical dashboard tiles.
- Alternate image proportions where content permits.
- Project metadata below image, not overlaid by default.

Project card content:
- Project name.
- One-sentence summary.
- Role or contribution when known.
- Stack tags.
- Repository and live demo actions.
- Year only when verified.

Interaction:
- Image scale is subtle on hover.
- Arrow or underline moves slightly.
- Card remains keyboard accessible.
- Project detail opens as a dedicated route for shareability.

Empty state:
- Do not show invented sample projects.
- In development, show a clear TODO.
- In production, omit empty cards and do not pretend the portfolio contains work that has not been supplied.

### 9.3 Skills

- Use grouped typography or compact bordered panels.
- Avoid percentage bars and arbitrary skill ratings.
- Group by Frontend, Backend, Database, Tools & Workflow only where relevant.
- Skill list must be supported by repository evidence or owner confirmation.

Motion:
- Category heading enters first.
- Skill items stagger with small offsets.
- Avoid spring overshoot on every tag.

### 9.4 Experience

- Use a clean vertical timeline or editorial list.
- Include role, organization/project, dates, type, and contribution.
- Keep descriptions concise.
- Support employment, freelance, organization, team project, and personal project.
- Never imply formal employment where the entry is actually a personal project.

Motion:
- Timeline rule may draw as the section enters.
- Entries reveal in sequence.
- Ensure all content is visible when motion is disabled.

### 9.5 Education

- Minimal single or multi-entry list.
- Institution is currently known: Universitas Kristen Satya Wacana.
- Program, degree, faculty, and dates remain unconfirmed.
- Do not infer graduation status.

### 9.6 Contact

- Large editorial invitation.
- Email action when a real address is available.
- Social links presented as restrained text links.
- Hide unavailable platforms.
- Footer includes name, copyright year, and optional back-to-top action.

## 10. Motion design system

### Motion principles
- Motion should direct attention, reveal hierarchy, and provide feedback.
- Avoid continuous animation that competes with reading.
- Prefer opacity and transform.
- Avoid animating height/width/top/left continuously.
- Use consistent easing and duration families.
- Respect reduced motion globally.

### Suggested reveal patterns

| Element | Pattern | Notes |
|---|---|---|
| Hero display | Clip/mask reveal | One-time entrance |
| Hero portrait/card | Gentle fade + scale | Do not obscure content |
| About heading | Masked reveal | Editorial |
| About paragraph | Fade + short y movement | Readable |
| Project images | Clip-path reveal | Keep image ratio stable |
| Project metadata | Staggered fade-up | Short delay |
| Skill groups | Staggered entrance | No excessive bounce |
| Experience timeline | Line draw + item reveal | Progressive |
| Education | Fade-up | Quiet |
| Contact heading | Mask reveal | Strong closing moment |

### Suggested timing ranges
- Micro hover: `140–220ms`.
- UI transition: `180–300ms`.
- Section reveal: `500–850ms`.
- Stagger gap: `60–120ms`.
- Lanyard spring: tuned by feel and device performance.

These are starting values. Validate on actual devices.

### Library ownership
- Motion: hover, button states, language/theme transitions, lanyard drag/spring.
- GSAP + ScrollTrigger: selected editorial section timelines and image reveals.
- CSS: simple color transitions, focus states, and basic hover treatments.

Do not attach multiple animation systems to the same DOM transform.

## 11. Theme and language controls

### Theme
- Dark is default.
- Light uses warm off-white, not pure white everywhere.
- System follows OS preference.
- Explicit preference persists locally.
- Prevent flash of incorrect theme on initial render.

### Language
- English and Indonesian.
- Provide compact EN / ID control.
- Translate every visible UI string, including metadata labels and accessibility names.
- Project summaries should have both language variants where possible.
- Preserve selected theme when language changes.

## 12. Responsive behavior

### Desktop
- Editorial two-column hero.
- Generous whitespace.
- Project grid can use asymmetric composition.
- Lanyard has sufficient room to move without overlapping navigation.

### Tablet
- Reduce hero title size and gutters.
- Keep card interaction within safe area.
- Use two-column project layout only when cards remain readable.

### Mobile
- Single-column content.
- Compact navigation.
- ID card below or beside hero copy, never covering the CTA.
- Reduce drag range and swing amplitude.
- Do not pin scroll sections.
- Make project links and social links easy to tap.
- Avoid horizontal overflow.

## 13. Accessibility and reduced motion

- Use semantic header, nav, main, section, and footer.
- Provide meaningful section headings.
- Icon-only controls require accessible labels.
- Interactive controls must be keyboard reachable.
- Visible focus indicators in both themes.
- Maintain sufficient contrast.
- Respect `prefers-reduced-motion`.
- Reduced-motion users must still receive all content and controls.
- The lanyard must not be the only way to discover the owner's identity.
- Do not make text appear only on hover.

## 14. Image and asset direction

### Portrait
- Use the real professional photo provided by Aufa.
- Preferred: clear face, simple background, good lighting, portrait crop.
- Keep natural facial appearance; do not replace the person with a generated face.
- Prepare a high-resolution source and optimized web rendition.
- Provide meaningful alt text.

### Project imagery
- Prefer real screenshots, browser captures, or approved project mockups.
- Do not use unrelated stock images as if they were project screenshots.
- If a project has no screenshot, use a restrained typographic project panel rather than a misleading image.

### Lanyard
- Use CSS/SVG geometry where practical.
- Keep hardware detail subtle.
- Do not use a large 3D model unless later evidence shows it is necessary.

## 15. Design QA checklist

- [ ] Dark theme matches palette and has adequate contrast.
- [ ] Light theme is intentionally designed, not merely inverted.
- [ ] Hero hierarchy is clear at first glance.
- [ ] Card does not obscure important text.
- [ ] Lanyard looks plausible in rest, drag, and release states.
- [ ] Motion is restrained and consistent.
- [ ] Reduced-motion mode is usable.
- [ ] Mobile layout has no horizontal overflow.
- [ ] Navigation is accessible by keyboard and touch.
- [ ] Project cards show only verified project information.
- [ ] No fake metrics, badges, testimonials, or credentials.
- [ ] Empty social/contact fields are hidden.
- [ ] EN/ID content is complete.
