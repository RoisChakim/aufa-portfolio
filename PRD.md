# PRD.md — AUFA ROISUL CHAKIM Personal Portfolio

> Product Requirements Document  
> Version: 1.0  
> Product owner: Aufa Roisul Chakim  
> Product type: Personal portfolio website

## 1. Product summary

AUFA ROISUL CHAKIM's portfolio is a bilingual, responsive personal website presenting him as a Web Developer. It combines an editorial dark-luxury visual system with evidence-led project presentation and a signature draggable lanyard ID card.

The website's primary job is to help visitors understand the owner's identity, work, capabilities, background, and contact path within a short visit.

## 2. Problem statement

Generic developer portfolios often look interchangeable, overuse visual effects, or list skills without evidence. This product should distinguish Aufa through a memorable but restrained interaction while keeping professional credibility grounded in real projects and experience.

## 3. Objectives and success signals

### Objectives
- Make professional identity immediately clear.
- Make selected projects easy to inspect.
- Connect skill claims to actual work.
- Provide a memorable interactive moment without compromising usability.
- Support both English and Indonesian audiences.
- Provide clear contact and social pathways.

### Success signals
- Visitors can identify the owner's role and focus within the hero section.
- Visitors can reach a project repository or live demo in one or two interactions.
- All published skills and experience claims are verifiable.
- Theme and language switching work without broken or untranslated UI.
- Core experience works on mobile and with reduced motion enabled.
- No critical accessibility, performance, or navigation defects remain at release.

Do not define fabricated numerical conversion targets. Establish analytics and baselines only if the owner chooses to add privacy-conscious analytics.

## 4. Users and use cases

### Persona A — Prospective client
Wants to assess whether Aufa can build a website or web application, review examples, and initiate contact.

### Persona B — Recruiter or hiring manager
Wants a concise view of technical ability, projects, education, and experience.

### Persona C — Developer or collaborator
Wants to inspect repositories, technologies, implementation quality, and collaboration links.

### Core user journeys

**Journey 1: Evaluate work**
1. Open portfolio.
2. Understand name and role in hero.
3. Scroll to Selected Works.
4. Open project detail, GitHub repository, or live demo.
5. Return and contact the owner.

**Journey 2: Evaluate professional background**
1. Open portfolio.
2. Read About.
3. Review Skills.
4. Review Experience and Education.
5. Contact the owner.

**Journey 3: Explore the signature interaction**
1. See hanging ID card in hero.
2. Drag the card with mouse or touch.
3. Release and observe natural spring/swing.
4. Continue browsing without interaction blocking page navigation.

## 5. Scope

### In scope — v1
- Single-page portfolio with anchor navigation.
- Optional project detail pages.
- Hero with interactive lanyard ID card.
- About section.
- Selected Works section.
- Skills section.
- Experience section.
- Education section.
- Contact section and social links.
- English and Indonesian content.
- Dark, Light, and System themes.
- Responsive layout.
- Scroll reveal and micro-interactions.
- SEO metadata and social sharing metadata.
- VPS deployment readiness.

### Out of scope — v1
- Visitor accounts or authentication.
- Admin dashboard.
- Database-backed CMS.
- Blog or newsletter.
- Contact form requiring server-side email infrastructure.
- Real-time GitHub API dependency for page rendering.
- 3D/WebGL lanyard simulation.
- Analytics unless separately approved.

## 6. Functional requirements

Priority definitions:
- P0: required for initial release.
- P1: valuable, may follow core implementation.
- P2: optional enhancement.

### FR-01 — Global navigation [P0]
- Provide links to About, Work, Skills, Experience, Education, and Contact.
- Desktop navigation should remain compact and unobtrusive.
- Mobile navigation must be usable by touch and keyboard.
- Anchor navigation should account for any sticky header.
- Current section indication is optional and must not distract.

### FR-02 — Hero identity [P0]
- Display the exact name: AUFA ROISUL CHAKIM.
- Display role: WEB DEVELOPER.
- Display a short professional statement.
- Provide CTA to Selected Works and Contact.
- Display the signature lanyard ID card.
- Do not show unverified availability status, location detail beyond Indonesia, or professional claims.

### FR-03 — Interactive lanyard and ID card [P0]
- Card is draggable using pointer input on desktop and touch devices.
- Card position follows the drag with a natural, controlled response.
- Card rotation reacts to movement.
- Lanyard strap changes shape with card movement.
- On release, card swings and settles using damped spring physics.
- Card and strap remain within safe visual bounds.
- The interaction must not prevent normal page scrolling when the visitor is not actively dragging.
- Provide a static or reduced-motion alternative.
- The card must not be the only place where essential identity information is available.

### FR-04 — About [P0]
- Present a concise professional introduction.
- Support EN and ID copy.
- Avoid generic filler and unsupported claims.
- Optional personal working principles may be added when supplied by the owner.

### FR-05 — Selected Works [P0]
- Display curated, real projects.
- Each project may include title, summary, role, technologies, thumbnail, repository URL, live URL, and project detail URL.
- Repository and demo links must be validated.
- Do not render empty project cards.
- If no projects are verified yet, show a neutral unpublished state only in development; omit the section content or use an honest “projects being curated” message in public release.

### FR-06 — Project detail [P1]
- Provide a route `/projects/[slug]` for selected case studies.
- Explain context/problem, role, approach, implementation, and outcome when information is available.
- Include repository and live demo links where valid.
- Do not invent performance metrics or business results.

### FR-07 — Skills [P0]
- Group skills by relevant category, such as Frontend, Backend, Database, and Tools & Workflow.
- Include only skills supported by actual project evidence or owner confirmation.
- Do not display arbitrary proficiency percentages.
- Optional proficiency labels may be used only when the owner can substantiate them.

### FR-08 — Experience [P0]
- Support multiple experience types: employment, freelance, organization, team projects, and personal projects.
- Each entry can include role, organization/project, date range, description, and contributions.
- Do not invent dates or organizations.
- Hide the section or show only verified entries if details are not supplied.

### FR-09 — Education [P0]
- Display institution: Universitas Kristen Satya Wacana.
- Degree/program, faculty, and study dates remain pending until confirmed.
- Do not infer graduation status.

### FR-10 — Contact and social links [P0]
- Support professional email, GitHub, LinkedIn, Instagram, and additional social links.
- Hide unavailable links rather than using fake destinations.
- Use descriptive accessible labels.
- Email CTA may use `mailto:` when a real address is provided.

### FR-11 — Language [P0]
- Provide English and Indonesian.
- All navigation labels, section headings, CTAs, descriptive content, accessibility labels, and project copy must be translated.
- Language switching should not silently reset the theme.
- Persist preference locally if appropriate.
- Default language may be English; allow the owner to change this before launch.

### FR-12 — Theme [P0]
- Support Dark, Light, and System.
- Dark is the default preference.
- Persist explicit user preference.
- Ensure text, borders, controls, focus rings, and card surfaces work in both themes.
- Avoid a bright flash during initial page hydration.

### FR-13 — Scroll and micro-interactions [P0]
- Each major section uses a deliberate entrance pattern.
- Use different motion patterns without making the page feel inconsistent.
- Respect reduced-motion settings.
- Do not animate essential content in a way that makes it inaccessible to assistive technology.
- Do not use animation as a substitute for clear hierarchy.

### FR-14 — Responsive behavior [P0]
- Support mobile, tablet, laptop, and large desktop.
- On mobile, stack hero content with the ID card placed where it does not obscure the heading or CTA.
- Ensure cards and navigation fit narrow widths.
- Dragging the lanyard must not cause accidental page lock or horizontal overflow.

### FR-15 — SEO and sharing [P1]
- Provide page title and description.
- Add Open Graph and social preview metadata.
- Add canonical URL after domain is confirmed.
- Add sitemap and robots configuration.
- Use meaningful image alt text.
- Do not use the placeholder domain in production metadata.

## 7. Non-functional requirements

### Performance
- Keep the page content-first and avoid heavy runtime dependencies where possible.
- Prefer transform/opacity animations.
- Lazy-load noncritical images.
- Use optimized image formats and responsive sizing.
- Avoid layout shift by defining image dimensions/aspect ratios.
- Avoid unnecessary client components.
- Target strong Core Web Vitals; validate with real production testing rather than claiming scores in advance.

### Accessibility
- Semantic HTML landmarks.
- Logical heading hierarchy.
- Keyboard-accessible navigation and controls.
- Visible focus indicators.
- Sufficient color contrast in both themes.
- Accessible names for icon-only buttons.
- `prefers-reduced-motion` support.
- No essential content conveyed by color alone.

### Reliability and maintainability
- Strict TypeScript.
- Content stored in typed data modules for v1.
- External URLs validated before publication.
- Production build must pass.
- No secrets committed to source control.
- Document VPS deployment and update process.

### Privacy and security
- No visitor account data collected.
- Do not add analytics or third-party tracking without owner approval.
- Avoid exposing private repository links, personal phone numbers, or sensitive information.
- Use HTTPS in production.
- Keep server dependencies and OS packages updated.

## 8. Content model

### Profile
```ts
type Profile = {
  name: string;
  role: string;
  location?: string;
  tagline: { en: string; id: string };
  portrait?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
};
```

### Project
```ts
type Project = {
  slug: string;
  name: string;
  summary: { en: string; id: string };
  role?: string;
  stack: string[];
  thumbnail?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year?: string;
};
```

### Experience
```ts
type Experience = {
  role: string;
  organization: string;
  type: "employment" | "freelance" | "organization" | "team-project" | "personal-project";
  startDate?: string;
  endDate?: string;
  description: { en: string; id: string };
};
```

### Education
```ts
type Education = {
  institution: string;
  program?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
};
```

## 9. Acceptance criteria

The product is accepted for v1 when:

1. Name and role are visible immediately on page load.
2. Every primary navigation item reaches the correct section.
3. Lanyard responds to drag and returns with a damped swing.
4. The card is usable on touch screens and does not trap scrolling.
5. Reduced-motion mode remains understandable and usable.
6. Both themes work across all sections.
7. EN/ID switching translates all published interface copy.
8. Every project link points to the correct public repository or live site.
9. Skills and experience are verified and not exaggerated.
10. Education displays the confirmed institution without invented degree or dates.
11. Empty contact/social URLs are not rendered as clickable links.
12. Layout has no horizontal overflow at common mobile widths.
13. Production build and deployment smoke tests pass.
14. HTTPS and production metadata use the actual domain.

## 10. Open questions / dependencies

- What is the public GitHub profile URL?
- Which repositories may be shown publicly?
- Which projects should be featured?
- What is the professional portrait file?
- What email and social links should be published?
- What program/degree and dates apply to Universitas Kristen Satya Wacana?
- What are the actual experience entries and dates?
- Which languages/frameworks should be listed after repository review?
- What exact `.my.id` hostname will be used?
- Should English or Indonesian be the initial language?
- Should project details be separate routes or modal overlays? Recommended: separate routes for shareability and accessibility.
