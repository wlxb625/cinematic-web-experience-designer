---
name: cinematic-web-experience-designer
description: Research, design, and implement cinematic, premium, media-integrated web experiences with reviewed UI references, scroll choreography, responsive art direction, accessibility, performance fallbacks, and production-ready execution plans. Use for premium landing pages, AI product experiences, brand sites, interactive storytelling, immersive onboarding, portfolios, and high-impact product moments.
---

# Cinematic Web Experience Designer

## Operating order

Do not jump from a brief directly to components. Follow this order:

1. Diagnose the product, audience, task, emotional goal, and surface type.
2. Inspect the existing site, codebase, screenshots, media, and constraints when available.
3. Perform conditional reference research when browsing tools are available and the request benefits from current examples.
4. Complete `templates/reference-research.yaml` and select transferable principles.
5. Read and apply `references/core-workflow.en.md` for the full cinematic design, scroll, media, responsive, performance, accessibility, implementation, and validation workflow.
6. Build one coherent visual system and implement scene by scene.

Reference research is a design input, not permission to copy.

## Mandatory reference research

Research before defining the visual world when any of these are true:

- The user requests premium, cinematic, motion-rich, Awwwards-like, Bento, experimental, or visually distinctive UI.
- The user supplies a website, screenshot, moodboard, Pinterest board, or named reference source.
- The result depends on current component libraries, browser capabilities, motion techniques, or design patterns.
- The task includes animated heroes, scroll-linked effects, advanced backgrounds, unusual navigation, modular storytelling, or spatial composition.

Skip browsing only for narrow edits to an already approved design or when a complete current reference set has already been supplied.

Never claim to have inspected a page that was not actually opened. When browsing is unavailable or blocked, use user-provided links, screenshots, recordings, exports, and project files, and explicitly mark unverified assumptions.

## Approved source roles

Use each source for a different job. Do not blend them into an uncontrolled component collage.

### React Bits — motion-pattern reference

Use React Bits to inspect animated text, backgrounds, cursors, cards, scroll effects, and interaction components.

For every candidate, inspect:

- Live behavior and timing, not only the screenshot.
- Configuration surface and required dependencies.
- React compatibility and styling assumptions.
- Mobile and touch behavior.
- `prefers-reduced-motion` behavior or the fallback that must be added.
- Performance cost, cleanup, and the number of animated layers.

Select only one to three patterns that reinforce the scene concept. Do not stack effects because they are available.

### 21st.dev — reviewed implementation candidates

Use 21st.dev to discover React/Tailwind components, marketing blocks, heroes, grids, navigation, galleries, AI interfaces, shaders, and related UI.

Treat every item as community code requiring review. Before adoption, verify:

- Author/source and access or licensing requirements.
- Dependencies, package versions, and conflicts with the project.
- Accessibility, keyboard behavior, responsive behavior, and semantic structure.
- Styling conventions and design-token compatibility.
- Whether the component can be simplified instead of copied wholesale.

Adapt accepted code to the project's architecture and visual language. Never combine unrelated components into a visual collage.

### MotionSites — full-site composition and pacing

Use MotionSites for system-level study:

- Hero-to-content rhythm.
- Visual hierarchy and focal-subject control.
- Media integration.
- Section and scene transitions.
- Conversion flow and brand coherence.
- The balance between spectacle and calmer reading regions.

Extract principles, not exact layouts, copy, media, branding, or signature transitions.

### BentoGrids — modular hierarchy and responsive regrouping

Use BentoGrids to study tile proportion, asymmetry, visual anchors, mixed-media cards, information density, and mobile regrouping.

Use Bento only when content benefits from modular comparison or multi-signal storytelling. Do not make every page a Bento grid by default. Mobile must be recomposed by priority rather than merely stacked in desktop order.

### Pinterest — broad art direction and moodboards

Use Pinterest for typography, photography, editorial rhythm, color, materials, lighting, spatial composition, and art-direction exploration.

Use product-specific searches instead of generic phrases such as “cool website.” Pinterest may require JavaScript or login. When access is blocked, request or use user-provided boards, screenshots, or exports. Do not invent observations.

Pinterest images are mood and art-direction inputs, not implementation specifications or assets that may automatically be reused.

## Research procedure

1. Generate search terms from the product, audience, emotion, content type, visual metaphor, and target interaction.
2. Inspect two to five strong references across at least two source roles.
3. Observe animated references live or through recordings; static screenshots cannot prove timing or scroll behavior.
4. Record each inspected source in `templates/reference-research.yaml`.
5. Extract transferable principles under composition, typography, media, motion, interaction, responsive behavior, accessibility, and performance.
6. Record what must not be copied.
7. Map every accepted principle or component to a specific scene and product purpose.
8. Reject references that have no clear role or conflict with the product's long-term usability.

## Component adoption gate

A referenced component or effect may enter implementation only when all of these are satisfied:

- It supports a named product, narrative, hierarchy, or interaction purpose.
- Its source and reuse conditions have been checked.
- Dependencies and framework compatibility are documented.
- It fits the existing design tokens and architecture after adaptation.
- Keyboard, touch, mobile, reduced-motion, and low-performance behavior are defined.
- Cleanup, route transitions, and high-frequency animation updates are safe.
- A simpler CSS, native browser, or existing-project solution has been considered first.

Reject anything that is visually attractive but semantically unnecessary.

## Originality rules

Do not copy a reference site's exact layout, proportions, copy, branding, media, illustration, code structure, or signature transition. Do not reproduce a recognizable page by combining several copied sections.

For each adopted principle, transform at least three of these dimensions:

- Content hierarchy.
- Spatial composition.
- Typography system.
- Color and material language.
- Media subject and crop.
- Motion cause and timing.
- Interaction meaning.
- Responsive behavior.

The final result must be explainable from the product's own concept, not from the source website's identity.

## Scroll and motion requirement

When the user emphasizes the visual experience while scrolling, treat scroll as the master timeline rather than adding isolated fade-in animations. Follow the pinned-scene, normalized progress, scene-continuity, media-scrubbing, mobile, reduced-motion, and recording-based validation rules in `references/core-workflow.en.md`.

Do not declare motion complete without progress-state screenshots and desktop/mobile recordings.

## Required outputs before implementation

Produce:

1. Product and emotion diagnosis.
2. Completed reference-research record.
3. Three materially different visual directions.
4. Selected visual world and rationale.
5. Scene architecture and continuity chain.
6. Media plan.
7. Motion/scroll timeline.
8. Desktop and mobile art direction.
9. Technology and component-adoption decisions.
10. Performance, accessibility, and validation plan.

Code is the final stage, not the first stage.
