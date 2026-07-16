# Cinematic Web Experience Designer

A bilingual AI skill for designing and implementing cinematic, media-integrated web experiences with scroll-linked storytelling, responsive art direction, motion systems, and production-ready fallbacks.

> 中文说明：[README.zh-CN.md](./README.zh-CN.md) · 中文 Skill：[SKILL.zh-CN.md](./SKILL.zh-CN.md)

![Scroll-linked cinematic journey preview](https://github.com/wlxb625/cinematic-web-experience-designer/releases/download/v1.1.0/scroll-journey-preview.png)

## What it solves

Most AI-generated frontends jump directly from a brief to generic components. This skill adds the missing visual-direction layer:

- Visual world and primary subject definition
- Scene-based page structure instead of component stacking
- Image, video, 3D, shader, and typography integration
- Scroll timelines with trigger, pin, scrub, progress, and scene handoff
- Separate desktop and mobile art direction
- High-, standard-, and low-performance fallbacks
- Screenshot, recording, reverse-scroll, and reduced-motion validation

## Core workflow

```text
Product diagnosis
→ Three visual directions
→ Visual-world definition
→ Scene sequencing
→ Media direction
→ Scroll and interaction timeline
→ Responsive art direction
→ Technical architecture
→ Scene-by-scene implementation
→ Visual and performance validation
```

## Repository structure

```text
.
├── SKILL.md
├── SKILL.zh-CN.md
├── README.md
├── README.zh-CN.md
├── CHANGELOG.md
├── assets/
├── examples/
│   ├── scroll-scene-gsap.tsx
│   ├── scroll-scene.css
│   └── tongxing-memory-growth-space.zh-CN.md
├── prompts/
│   ├── codex-execution.en.md
│   └── codex-execution.zh-CN.md
└── templates/
    ├── visual-brief.en.md
    ├── visual-brief.zh-CN.md
    ├── scene-spec.yaml
    ├── media-plan.yaml
    ├── motion-timeline.yaml
    └── qa-checklist.md
```

## Scroll-linked experience requirements

A heavy-motion scene must define:

- Trigger, start, end, and scroll distance
- Pin and scrub behavior
- A normalized `0 → 1` progress timeline
- Visual state at 0%, 25%, 50%, 75%, and 100%
- Continuity received from the previous scene and handed to the next
- Desktop, mobile, reduced-motion, and low-performance behavior
- Fast-scroll, reverse-scroll, pause-at-midpoint, and resize validation

The included React example uses GSAP ScrollTrigger and `@gsap/react` to demonstrate a pinned scroll scene without storing frame-level progress in React state.

```bash
npm install gsap @gsap/react
```

## Included concept example

The `Tongxing / 同行` example uses a **memory-growth space** as its visual world. A memory core expands into fragments and a knowledge graph, transforms into a growth timeline, and finally becomes a calm sunrise scene.

![Product interface preview](https://github.com/wlxb625/cinematic-web-experience-designer/releases/download/v1.1.0/interface-preview.png)

## Download

Download the compact Skill package from the [v1.1.0 release](https://github.com/wlxb625/cinematic-web-experience-designer/releases/tag/v1.1.0):

`cinematic-web-experience-designer-v1.1.0.zip`

Do not use GitHub's automatically generated “Source code” archives as the Skill package.

## Version

Current package: **v1.1.0** — scroll orchestration, media scrubbing, scene continuity, mobile fallbacks, and recording-based QA.