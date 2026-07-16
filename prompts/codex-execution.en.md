# Codex Cinematic Frontend Execution Prompt

You are implementing a cinematic web experience from an approved visual-direction specification. Do not redesign the concept and do not rewrite the full project in one pass.

## Execution principles

1. Inspect the existing repository, routes, components, styling system, media, and dependencies first.
2. Do not modify unauthorized business logic, database behavior, APIs, or data contracts.
3. Follow `SKILL.md`, the scene specification, media plan, and motion timeline.
4. Implement one system layer or one scene at a time.
5. Use the least complex technology that achieves the intended result.
6. Do not introduce overlapping motion libraries without a documented reason.
7. Do not add generic purple gradients, glassmorphism, excessive rounded cards, or decorative glows.
8. Every heavy visual must include normal-device, low-performance, and reduced-motion behavior.

## Step 1: audit only

Report:

- Current stack and versions.
- Page and component architecture.
- Reusable components.
- Repeated styles and hard-coded visual values.
- Existing media and dimensions.
- Current animation and scroll implementation.
- Mobile issues.
- Performance risks.
- Proposed file-change list.

Stop after the audit.

## Step 2: build the experience foundation

Without changing business logic, establish:

- ExperienceShell
- SceneController
- Scene state model
- Device capability mode
- prefers-reduced-motion mode
- Media loading state
- Global scene CSS variables

Generate 1440×1000 and 390×844 screenshots, then stop.

## Step 3: implement scene by scene

For each scene:

- Build composition from the approved scene specification.
- Integrate media according to the media plan.
- Implement the percentage-based motion timeline.
- Implement the dedicated mobile direction.
- Implement reduced-motion and low-performance versions.
- Do not add decorative motion outside the specification.

After each scene, report:

1. Modified files.
2. Implemented behavior.
3. Deviations from specification.
4. Performance handling.
5. Desktop and mobile screenshots.
6. Remaining issues.

Stop before the next scene.

## Step 4: final validation

Run:

- Desktop, laptop, tablet, and mobile screenshots.
- Short recording of the core scroll experience.
- Reduced-motion validation.
- Low-performance fallback validation.
- Keyboard navigation validation.
- Route transition and unmount cleanup checks.
- Offscreen video pause checks.
- WebGL disposal checks.

Finish by completing `templates/qa-checklist.md`.


## Mandatory scroll-experience implementation protocol

When a scene uses `pinned-transform`, `video-scrub`, `image-sequence`, `camera-journey`, or `state-reorganization`, do not deliver a static page with entry animations. Build a **working scroll-motion prototype** first.

### A. Prototype motion before final media

Use placeholders and debug labels to verify trigger ranges, pin stability, continuous 0–1 progress, fast and reverse scrolling, scene handoff, and the shortened mobile timeline. Do not load heavy video, hundreds of frames, or WebGL before this prototype passes.

### B. Build a shared scroll controller

Provide a scene container, normalized progress source, one master timeline per scene, reduced-motion and capability branches, media preloading and offscreen pause, route cleanup, and a development-only progress overlay.

### C. Timeline requirements

- Use `useGSAP` or `gsap.context` for scope and cleanup.
- Use ScrollTrigger for pin, scrub, start, end, and refresh.
- Keep coordinated elements inside one scene timeline.
- Never call React `setState` on every scroll update.
- Consume high-frequency values through refs, CSS variables, QuickSetter, or the render loop.
- Refresh after fonts and media metadata are ready.
- Kill timelines, triggers, RAF loops, and listeners on route exit.
- Preserve native scrolling and avoid forced snap unless explicitly specified and validated.

### D. Scroll-scrubbed video

Verify metadata, duration mapping, RAF-merged seeking, seekable encoding, poster and error fallback, Safari/iOS alternatives, and offscreen pause.

### E. Evidence required for each heavy scene

Deliver screenshots at 0%, 25%, 50%, 75%, and 100%, a complete desktop recording, a 390×844 mobile recording, fast/reverse-scroll results, reduced-motion evidence, proof that natural scrolling resumes, modified files, media size, and known performance risks.

Never claim that motion is complete without recordings and progress-state evidence.
