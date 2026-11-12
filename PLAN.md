# PLAN.md — AUFA ROISUL CHAKIM Portfolio

> Project execution plan for a personal portfolio website.  
> Owner: Aufa Roisul Chakim  
> Role: Web Developer  
> Product direction: Dark luxury · Minimal · Editorial · Interactive  
> Status: Planning baseline v1.0

## 1. Project vision

Build a polished, responsive personal portfolio that presents Aufa Roisul Chakim as a professional Web Developer. The website must communicate credibility through real projects, clear information architecture, refined typography, and purposeful interaction.

The signature interaction is a physical-feeling black lanyard with a silver metal clip and a personal ID card containing Aufa's professional portrait. Visitors can drag the card; it follows the pointer or touch, swings when released, and settles naturally through spring physics.

The experience should feel premium and memorable without looking like a generic developer template or an over-animated experiment.

## 2. Goals

1. Establish a recognizable personal digital identity.
2. Showcase real projects sourced from Aufa's GitHub repositories.
3. Explain skills and experience accurately, without fabricated proficiency scores or achievements.
4. Make it easy for clients, recruiters, and companies to understand the developer's capabilities and make contact.
5. Deliver a polished experience on desktop, tablet, and mobile.
6. Support English and Indonesian.
7. Support Dark, Light, and System theme preferences.
8. Deploy on a personally managed VPS under a `.my.id` domain.

## 3. Non-goals for the first release

- No admin dashboard or CMS.
- No database unless a concrete requirement emerges.
- No fabricated project content, testimonials, client logos, employment history, metrics, or skill ratings.
- No unnecessary 3D scene or heavy WebGL dependency.
- No complex page transitions that interfere with navigation or accessibility.
- No authentication or user accounts for visitors.
- No contact form backend until a reliable delivery method is selected. An email link is acceptable initially.

## 4. Audiences

### Primary
- Potential freelance clients.
- Companies and hiring teams.
- Recruiters evaluating web development capability.

### Secondary
- Other developers.
- Technical collaborators.
- Professional network.

### Main visitor questions
- Who is Aufa?
- What does Aufa build?
- Which projects demonstrate those abilities?
- Which technologies has Aufa actually used?
- What is Aufa's educational and professional background?
- How can someone contact Aufa?

## 5. Product principles

- **Evidence over claims:** use repository-backed projects and verified experience.
- **Clarity over decoration:** every visual element must help identity, hierarchy, or usability.
- **Motion with purpose:** animation guides attention and gives feedback; it must not delay access to content.
- **Progressive enhancement:** core content remains usable if animation is disabled or JavaScript features fail.
- **Mobile is first-class:** the lanyard must not obscure content or make scrolling difficult.
- **Maintainability:** content should be editable from structured data files.

## 6. Scope and milestones

### Milestone 0 — Discovery and assets
- [ ] Obtain GitHub profile URL.
- [ ] Review repositories and identify projects suitable for public display.
- [ ] Obtain professional portrait.
- [ ] Obtain professional email and social profile URLs.
- [ ] Confirm education details, degree/program, and dates if they should be public.
- [ ] Collect experience details with role, organization/project, dates, and contributions.
- [ ] Verify actual technical skills against repositories and user confirmation.
- [ ] Confirm final `.my.id` domain.

**Exit criteria:** content facts and required assets are available, or missing fields are explicitly left unpublished.

### Milestone 1 — Foundation and design system
- [ ] Create Next.js App Router application with TypeScript.
- [ ] Configure Tailwind CSS.
- [ ] Define design tokens for colors, typography, spacing, borders, and breakpoints.
- [ ] Create responsive page shell and navigation.
- [ ] Implement theme preference: Dark, Light, System.
- [ ] Implement EN/ID content dictionaries.
- [ ] Create typed data models for projects, skills, experience, education, and social links.
- [ ] Add metadata and semantic page structure.

**Exit criteria:** all sections render responsively with real or clearly marked unpublished content; theme and language controls work.

### Milestone 2 — Signature lanyard interaction
- [ ] Create lanyard assembly: top anchor, strap, connector, silver clip, ID card.
- [ ] Use SVG path or an equivalent lightweight rendering approach for the strap.
- [ ] Support pointer and touch dragging.
- [ ] Track drag position and card rotation.
- [ ] Add spring-based release and damped swing.
- [ ] Add subtle shadow response.
- [ ] Constrain drag distance and rotation to keep the card on-screen.
- [ ] Prevent drag from blocking normal page scrolling on mobile.
- [ ] Provide a reduced-motion/static fallback.
- [ ] Test mouse, touch, keyboard accessibility where practical, and narrow viewports.

**Exit criteria:** interaction feels controlled and physical, remains performant, and does not block access to hero content.

### Milestone 3 — Scroll and micro-interactions
- [ ] Add GSAP ScrollTrigger for editorial section reveals.
- [ ] Use Motion for component-level interactions and state transitions.
- [ ] Define distinct but consistent reveal patterns by section.
- [ ] Add hover/focus states to navigation, project cards, and CTAs.
- [ ] Add active section indication if it improves navigation.
- [ ] Respect `prefers-reduced-motion`.
- [ ] Avoid pinning sections unless usability testing proves it beneficial.

**Exit criteria:** motion is consistent, purposeful, and does not cause layout shifts or scroll jank.

### Milestone 4 — Content integration
- [ ] Curate featured projects from real GitHub repositories.
- [ ] Write concise project summaries and case studies.
- [ ] Add verified stack tags, repository links, and live demos where available.
- [ ] Add skills based on demonstrated use and user confirmation.
- [ ] Add experience and education entries.
- [ ] Add real contact and social links.
- [ ] Complete English and Indonesian copy.
- [ ] Add project detail routes where enough content exists.

**Exit criteria:** all published claims and links are verified; no placeholder content remains in production.

### Milestone 5 — Quality assurance and deployment
- [ ] Test latest stable Chrome, Safari, Firefox, and mobile browsers.
- [ ] Test responsive widths and touch interactions.
- [ ] Test keyboard navigation and visible focus.
- [ ] Test reduced motion and both themes.
- [ ] Check contrast, semantic headings, image alt text, and link labels.
- [ ] Optimize images and fonts.
- [ ] Verify metadata, Open Graph image, canonical URL, sitemap, and robots.
- [ ] Configure VPS runtime, process/container management, reverse proxy, and HTTPS.
- [ ] Configure DNS for the chosen `.my.id` domain.
- [ ] Add backup and update procedure.
- [ ] Run production build and smoke tests.

**Exit criteria:** production site is accessible over HTTPS, core flows work, and no critical accessibility or runtime issues remain.

## 7. Proposed information architecture

Single-page landing experience with optional project detail routes.

- `/` — Home and all primary sections.
- `/projects/[slug]` — Individual project case study, only for curated projects.
- Optional `/not-found` — branded 404 state.

Primary sections:
1. Hero
2. About
3. Selected Works
4. Skills & Expertise
5. Experience
6. Education
7. Contact
8. Footer

## 8. Suggested component architecture

```text
app/
  layout.tsx
  page.tsx
  projects/[slug]/page.tsx
  globals.css

components/
  navigation/
    Header.tsx
    MobileMenu.tsx
  hero/
    Hero.tsx
    Lanyard.tsx
    IDCard.tsx
  sections/
    AboutSection.tsx
    WorksSection.tsx
    SkillsSection.tsx
    ExperienceSection.tsx
    EducationSection.tsx
    ContactSection.tsx
  projects/
    ProjectCard.tsx
    ProjectCaseStudy.tsx
  motion/
    Reveal.tsx
    StaggerGroup.tsx
  theme/
    ThemeProvider.tsx
    ThemeToggle.tsx
  language/
    LanguageProvider.tsx
    LanguageToggle.tsx
  ui/
    Button.tsx
    SectionHeading.tsx

data/
  profile.ts
  projects.ts
  skills.ts
  experience.ts
  education.ts
  social.ts

i18n/
  en.ts
  id.ts

public/
  images/
  icons/
```

Keep components small and purposeful. Do not create abstractions for one-off elements unless they improve clarity or reuse.

## 9. Technical direction

- Next.js App Router.
- TypeScript with strict mode.
- Tailwind CSS.
- Motion for component interactions.
- GSAP + ScrollTrigger for selected scroll choreography.
- SVG/CSS for the lanyard strap and ID card assembly.
- Static TypeScript/JSON content for the first release.
- `next-themes` or an equivalent robust theme implementation.
- No database in v1.
- Docker deployment on a VPS is preferred, but keep the app deployable with a standard Node.js process.

Avoid animating the same element with GSAP and Motion simultaneously. Assign clear ownership: GSAP for section-level scroll timelines; Motion for component state, hover, and drag/spring interactions.

## 10. Performance and accessibility requirements

- Prefer transform and opacity animation.
- Avoid animating layout properties continuously.
- Lazy-load below-the-fold imagery.
- Use responsive image sizes and modern image formats.
- Reserve image dimensions to avoid layout shift.
- Keep the hero usable before nonessential animation code loads.
- Respect `prefers-reduced-motion`.
- Provide visible keyboard focus.
- Use semantic landmarks and heading order.
- Ensure interactive elements have accessible names.
- Maintain sufficient contrast in both themes.
- Do not rely on color alone to convey state.
- Avoid autoplay audio/video.

## 11. Definition of done

The first public release is complete when:
- All requested sections exist and contain verified content.
- English and Indonesian work across all visible content.
- Dark, Light, and System themes work and persist.
- Lanyard can be dragged and released naturally on desktop and touch devices.
- Scroll reveals are distinct, restrained, and accessible.
- Project links and social links work.
- No fake projects, metrics, testimonials, or credentials appear.
- Mobile navigation and layout are usable.
- Production build succeeds.
- Site is deployed on the selected VPS and domain with HTTPS.
- Metadata and social sharing preview are configured.

## 12. Current known content gaps

- GitHub URL: not provided.
- Professional email: not provided.
- LinkedIn URL: not provided.
- Instagram URL: not provided.
- Other social URLs: not provided.
- Portrait: to be uploaded.
- Education: Universitas Kristen Satya Wacana (program, degree, and dates not yet supplied).
- Experience: described as a mix of experiences; individual entries and dates not yet supplied.
- Skills: to be verified from GitHub and confirmed by Aufa.
- Domain: `.my.id` desired; exact hostname not yet selected.

Do not invent missing values. Keep them out of public production content until confirmed.
