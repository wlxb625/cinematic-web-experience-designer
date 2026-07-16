---
name: cinematic-web-experience-designer
description: Design and implement cinematic, media-integrated web experiences with coherent visual direction, responsive art direction, motion systems, performance fallbacks, and production-ready execution plans. Use for premium landing pages, AI product experiences, brand sites, interactive storytelling, immersive onboarding, annual reviews, portfolio sites, and high-impact product moments.
---

# Cinematic Web Experience Designer

## Purpose

Create premium web experiences in which layout, typography, image, video, 3D, motion, interaction, and responsive behavior feel like one designed system.

Do not jump directly from a product brief to React components. First define the visual world, the main subject, the scene sequence, media roles, motion logic, responsive direction, and performance strategy. Code is the final stage, not the first stage.

## Use this skill when

Use this skill for:

- Premium landing pages and brand websites.
- AI-native product experiences.
- Immersive onboarding or product reveal moments.
- Interactive portfolio and studio websites.
- Product launches, annual reviews, memory timelines, and narrative reports.
- Interfaces combining video, imagery, shader effects, WebGL, 3D, or scroll-linked animation.
- Requests containing words such as cinematic, immersive, premium, shocking, visually advanced, smooth, interactive, spatial, storytelling, or Awwwards-like.

Do not use the full cinematic workflow for routine admin dashboards, dense enterprise tables, settings pages, or high-frequency operational screens. For those, use a restrained product UI and reserve cinematic effects for key moments.

## Core principle

A premium experience is not a collection of impressive effects. It is a coherent visual world governed by one concept and one interaction logic.

Every visual decision must support at least one of these goals:

1. Direct attention.
2. Express hierarchy or depth.
3. Explain a state change.
4. Connect two scenes.
5. Reveal information.
6. Reinforce the product's meaning.
7. Confirm user input.

Delete effects that exist only to look expensive.

## Mandatory anti-template rules

Never default to the common AI-SaaS formula:

- Purple-blue gradients.
- Generic glassmorphism.
- Large rounded cards everywhere.
- Decorative gradient blobs.
- Three feature cards under a centered hero.
- Random glowing borders.
- Icons with no narrative function.
- Independent fade-up animation on every element.
- One desktop composition merely stacked on mobile.
- Stock imagery inserted after layout is complete.

The interface must not look like a component library demo.

## Experience classification

Before designing, classify the requested surface:

### A. Brand experience

High visual impact is appropriate. Examples: marketing site, launch page, portfolio, campaign, product reveal.

### B. Product moment

Use cinematic expression selectively. Examples: onboarding, first AI creation, goal completion, annual recap, knowledge graph reveal.

### C. Daily product interface

Prioritize readability, speed, and calmness. Use ambient motion and meaningful transitions only. Do not keep the interface in a constant state of spectacle.

## Workflow

Complete the following phases in order. Do not start implementation until Phases 1–6 are defined.

### Phase 1 — Product and emotion diagnosis

Determine:

- Product and user goal.
- Primary audience.
- Desired first emotion.
- Desired lasting emotion.
- Emotions to avoid.
- Primary conversion or action.
- Whether the experience is A, B, or C.
- Target devices and performance assumptions.
- Accessibility and reduced-motion requirements.

Output a concise diagnosis.

### Phase 2 — Visual world definition

Define one coherent visual world:

- Core metaphor.
- Main visual subject.
- Materials or visual substances.
- Spatial layers.
- Lighting behavior.
- Motion verbs.
- Interaction meaning.
- Color logic.
- Typography character.
- Media character.

Examples of motion verbs: gather, split, breathe, crystallize, dissolve, orbit, stretch, reveal, compress, reconnect.

Avoid vague language such as “modern,” “high-end,” or “futuristic” unless translated into visible behavior.

### Phase 3 — Direction proposals

Generate three materially different directions before selecting one:

1. Cinematic live-action or rendered media.
2. Abstract spatial or generative environment.
3. Editorial typography and image-led direction.

For each direction, compare:

- Emotional effect.
- Visual impact.
- Development complexity.
- Media production cost.
- Performance risk.
- Mobile viability.
- Long-term usability.

Select one direction with a clear rationale.

### Phase 4 — Scene architecture

Design the page as scenes, not sections.

Each scene must define:

- Purpose.
- Emotion.
- Main visual subject.
- Supporting content.
- Spatial composition.
- Media asset.
- Entering motion.
- Holding motion.
- User interaction.
- Exit transition.
- Approximate scroll or time duration.
- Pin behavior, trigger range, scrub strength, and scroll distance.
- Input state from the previous scene and output state for the next scene.
- Mobile reinterpretation.
- Reduced-motion fallback.

A typical sequence is:

1. Arrival.
2. Recognition.
3. Interaction.
4. Understanding.
5. Climax.
6. Resolution or action.

Do not force this sequence when the product needs a different rhythm.

### Phase 5 — Media direction

Every image, video, 3D object, texture, or shader must have a narrative role.

For every media asset define:

- Type.
- Narrative role.
- Aspect ratio.
- Focal point.
- Safe text area.
- Desktop crop.
- Mobile crop or alternative asset.
- Color grade.
- Loop behavior.
- Loading strategy.
- Poster or placeholder.
- Performance fallback.
- Reduced-motion fallback.

Never write “place a nice image here.”

Media must influence composition. Layout must be generated around subject location, gaze direction, empty space, and crop behavior.

### Phase 6 — Motion and interaction system

Define one master state model or timeline. Do not animate elements independently without a shared cause.

Possible scene state:

```ts
type ExperienceState =
  | "arrival"
  | "exploration"
  | "focus"
  | "reflection"
  | "conflict"
  | "resolution";
```

The state may control:

- Background or shader parameters.
- Video progress.
- Camera position.
- Typography contrast.
- Navigation appearance.
- Cursor feedback.
- Particle density.
- Sound state, when explicitly requested.
- Foreground content visibility.

For scroll-driven scenes, specify a percentage timeline such as:

- 0–15%: establish environment.
- 15–35%: reveal subject.
- 35–55%: allow interaction.
- 55–75%: expand information.
- 75–90%: visual climax.
- 90–100%: transition to next scene.

Use motion to express cause and consequence. Avoid continuous movement without meaning.

#### Scroll choreography is a primary interaction, not decoration

When the request emphasizes visual change while scrolling, cinematic page progression, or a dramatic yet fluid downward journey, treat scroll as the **master timeline driver**. Do not add isolated reveal animations to an otherwise ordinary page.

Every heavy scroll scene must define:

- `trigger`: the scene container that owns the timeline.
- `start` / `end`: the active range, such as `top top` to `+=220%`.
- `desktop_scroll_vh` / `mobile_scroll_vh`: total scroll distance.
- `pin`: whether the viewport is pinned; never pin every section by default.
- `scrub`: how tightly scroll progress controls the animation.
- `progress`: one normalized `0–1` source of truth.
- `input_state`: the visual state received from the previous scene.
- `output_state`: the state handed to the next scene.
- `media_sync`: how progress maps to video, image sequence, 3D camera, or shader parameters.
- `touch_behavior`: the mobile reinterpretation.
- `reduced_motion`: how narrative causality remains understandable without heavy movement.

Recommended pinned-scene rhythm:

```text
Scroll container: 180vh–320vh
Pinned viewport: 100svh
Normalized progress p: 0 → 1

p 0.00–0.10  prewarm media and receive the previous scene
p 0.10–0.28  establish environment and primary subject
p 0.28–0.52  perform the core transformation
p 0.52–0.72  reveal meaning through that transformation
p 0.72–0.90  reach a visual or conceptual result
p 0.90–1.00  resolve and hand visual state to the next scene
```

The percentages are adjustable, but every scene needs arrival, development, result, and handoff.

#### Scene continuity

Adjacent scenes must not feel like unrelated pages. Define a continuity object, for example:

- A memory core shrinks into the center node of the next knowledge graph.
- Background light expands and becomes the path of a timeline.
- An image scales to fill the viewport and becomes the first frame of the next video.
- Keywords preserve their screen position and regroup into the next title.

Every scene specification must include:

```yaml
continuity:
  receives_from_previous: ""
  preserves: ""
  transforms: ""
  hands_to_next: ""
```

Do not hide missing transition design with black flashes, arbitrary fades, or abrupt background swaps.

#### Scroll storytelling patterns

Select only what the content needs:

1. **Progressive reveal** for layered concepts and relationships.
2. **Pinned transformation** for a core product or object reveal.
3. **Camera journey** for spatial storytelling.
4. **Video scrubbing** to drive pre-rendered film or complex 3D with scroll progress.
5. **Image-sequence scrubbing** for precise product disassembly or transformation.
6. **Horizontal journey** for timelines; usually reinterpret vertically on mobile.
7. **State reorganization** for memory, knowledge, opinions, and connected nodes.

A page normally needs only one to three heavy scroll scenes. Let the remaining content use natural scrolling.

#### Implementation rules

Prefer CSS `position: sticky`, transforms, opacity, masks, and CSS variables for simple scenes. Use GSAP ScrollTrigger for coordinated pinned timelines.

```ts
useGSAP(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: sceneRef.current,
      start: "top top",
      end: "+=220%",
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  timeline
    .fromTo("[data-subject]", { scale: 0.82, opacity: 0 }, { scale: 1, opacity: 1 })
    .to("[data-fragment]", { xPercent: 0, yPercent: 0, opacity: 1 }, "<35%")
    .to("[data-subject]", { scale: 0.56, xPercent: -24 }, ">")
    .fromTo("[data-next-title]", { opacity: 0 }, { opacity: 1 }, "<40%");
}, { scope: sceneRef });
```

Requirements:

- Use `gsap.context` or `useGSAP` and clean up timelines and ScrollTriggers on unmount.
- Never call React `setState` on every scroll frame.
- Use refs, GSAP QuickSetter, CSS variables, or render-loop reads for high-frequency values.
- Organize around one master timeline per scene instead of one trigger per element.
- Apply `will-change` only while a scene is active.
- Refresh layout after fonts and media metadata are ready to prevent pin jumps.
- Do not reverse wheel direction, block native scrolling, or trap users in scroll-jacked sections.

#### Video and image-sequence synchronization

When scroll drives video, wait for metadata and map normalized progress to duration:

```ts
const targetTime = progress * Math.max(0, video.duration - 0.05);
video.currentTime = targetTime;
```

Production requirements:

- Encode for seekability with a reasonable keyframe interval.
- Use a poster and preload metadata or the asset shortly before the trigger range.
- Merge frequent `currentTime` updates through requestAnimationFrame.
- Provide pre-rendered clips, image sequences, or static fallback for Safari/iOS constraints.
- Pause offscreen video and release image-sequence caches when no longer needed.

Image sequences must define frame count, preload window, canvas size, DPR cap, and missing-frame behavior. Never block initial rendering by loading hundreds of uncompressed frames.

#### Smooth-scroll boundary

Use native scrolling by default. Introduce Lenis or a similar layer only when trackpad, wheel, and WebGL timelines genuinely need one synchronized clock.

When introduced:

- Synchronize its RAF and refresh behavior with ScrollTrigger.
- Disable it under `prefers-reduced-motion`.
- Preserve keyboard scrolling, anchor links, browser find, and history restoration.
- Avoid excessive damping that makes the page feel detached from user input.

#### Scroll-experience validation

Static screenshots cannot prove that a scroll experience works. Every heavy scroll scene must provide:

1. Screenshots at 0%, 25%, 50%, 75%, and 100% progress.
2. A complete desktop scroll recording.
3. A mobile touch-scroll recording or equivalent sequence.
4. Fast scroll, reverse scroll, and mid-progress pause checks.
5. Reduced-motion and low-performance evidence.
6. Proof that normal page scrolling resumes after the scene.

Validate that:

- Scroll causes meaningful visual consequences rather than generic fading.
- The composition remains valid at arbitrary progress values.
- Fast scrolling does not flicker, jump, drop critical information, or desynchronize media.
- Reverse scrolling restores the scene naturally.
- Scene entry and exit preserve visual continuity.
- Users perceive progress without being trapped by the animation.

### Phase 7 — Responsive art direction

Mobile is a separate composition, not a smaller desktop.

Define independently:

- Mobile focal point.
- Mobile asset or crop.
- Vertical rhythm.
- Touch behavior.
- Navigation behavior.
- Typography scale.
- Pinned-scene length.
- Motion simplification.
- Loading priority.
- Fallback strategy.

Replace hover-dependent interactions with touch, scroll, tap, or automatic ambient behavior.

When desktop uses real-time WebGL, consider mobile alternatives such as pre-rendered video, image sequence, static poster, or simplified canvas.

### Phase 8 — Technology selection

Choose the least complex technology that can achieve the intended experience.

#### CSS and browser APIs

Use for:

- Simple transforms.
- Opacity and blur.
- Sticky layouts.
- Masks and gradients.
- Basic scroll-linked effects.
- Reduced-motion behavior.

#### Motion for React

Use for:

- Component transitions.
- Shared layout transitions.
- Hover, tap, focus, and modal interaction.
- Product-interface motion.

#### GSAP and ScrollTrigger

Use for:

- Complex scroll timelines.
- Pinned scenes.
- Scrubbed sequences.
- Coordinated text, media, and camera transitions.

#### HTML video

Use for:

- Filmic footage.
- AI-generated video.
- Pre-rendered 3D.
- Complex motion that does not need direct manipulation.

#### Canvas, WebGL, or shaders

Use for:

- Continuous generative environments.
- Particle fields.
- Distortion.
- Custom compositing.
- Effects that require per-frame rendering.

#### React Three Fiber or Three.js

Use only when the main subject requires genuine 3D interaction, spatial camera movement, material changes, product configuration, or object manipulation.

Do not install all motion libraries by default.

### Phase 9 — Implementation architecture

Prefer this structure:

```text
experience/
  ExperienceShell
  SceneController
  scenes/
  media/
  motion/
  state/
  fallbacks/
ui/
  typography/
  controls/
  overlays/
```

Separate:

- Visual scene state.
- Business state.
- Media loading state.
- Reduced-motion mode.
- Device capability mode.

Avoid React state updates on every scroll frame. Use refs, animation libraries, requestAnimationFrame, CSS variables, or external stores when appropriate.

### Phase 10 — Performance strategy

Every complex visual must have three levels:

- Level A: full experience for capable devices.
- Level B: simplified animation or pre-rendered media.
- Level C: static or reduced-motion fallback.

Define:

- Initial media budget.
- Deferred assets.
- Video codecs and posters.
- Image formats and dimensions.
- Lazy-loading thresholds.
- WebGL capability detection.
- Device-pixel-ratio cap.
- Offscreen pause behavior.
- Route transition cleanup.
- Memory disposal for textures and scenes.

Do not autoplay multiple heavy videos simultaneously.

### Phase 11 — Accessibility

Always provide:

- `prefers-reduced-motion` behavior.
- Keyboard navigation.
- Visible focus styles.
- Sufficient text contrast.
- Alternative text or equivalent content.
- Controls for audio.
- Non-motion access to essential information.
- No critical interaction that depends only on cursor position.

Visual spectacle must never hide content or block task completion.

### Phase 12 — Visual validation

Validate at minimum:

- 1440×1000 desktop.
- 1280×800 laptop.
- 768×1024 tablet when relevant.
- 390×844 mobile.
- 375×812 mobile.

Capture screenshots and, for motion-heavy work, short screen recordings.

Check:

- Is there one clear visual subject?
- Does media feel structurally integrated?
- Are typography and visual subject competing?
- Does every animation have a reason?
- Is the page overstimulating for too long?
- Does mobile feel intentionally redesigned?
- Are fallbacks functional?
- Is text readable over changing media?
- Does the experience remain coherent during route and scene transitions?
- Is the first meaningful content visible before heavy media finishes loading?

## Output modes

Choose one mode based on user intent.

### Concept mode

Produce visual diagnosis, three directions, selected world, and scene outline. No code.

### Specification mode

Produce complete scene, media, motion, responsive, technology, and validation specifications. No implementation unless requested.

### Implementation mode

Produce architecture and code only after a specification exists. When no specification exists, create it first.

### Audit mode

Review an existing site or codebase and identify:

- Template-like patterns.
- Competing visual subjects.
- Media pasted into layout.
- Inconsistent motion logic.
- Weak mobile art direction.
- Performance risks.
- Accessibility failures.

Prioritize fixes by visual impact and implementation cost.

## Codex execution protocol

When handing work to Codex or another coding agent:

1. Ask it to inspect the current codebase and list constraints.
2. Freeze business logic and data contracts unless changes are requested.
3. Implement one scene or system layer at a time.
4. Generate visual snapshots after each stage.
5. Compare implementation against the scene specification.
6. Remove effects that do not improve hierarchy or meaning.
7. Confirm mobile and reduced-motion modes before proceeding.
8. Report modified files, tradeoffs, remaining risks, and next verification step.

Do not ask the coding agent to “make the whole site premium” in one pass.

## Definition of done

The result is complete only when:

- The experience has a named visual concept.
- One primary visual subject is clear in every scene.
- Media has documented narrative roles.
- Motion is governed by a scene state or master timeline.
- Desktop and mobile compositions are both intentional.
- Reduced-motion and low-performance fallbacks exist.
- The implementation has been visually validated at target viewports.
- Business tasks remain usable without cinematic effects.
- The page no longer resembles a generic AI-generated template.
