# Cinematic Web QA Checklist

## Concept

- [ ] The experience has one named visual concept.
- [ ] Every scene has one primary visual subject.
- [ ] The visual language supports the product meaning.
- [ ] The result does not resemble a generic AI SaaS template.

## Composition and media

- [ ] Media affects layout and is not pasted into a finished section.
- [ ] Desktop and mobile focal points are documented.
- [ ] Text stays inside safe areas.
- [ ] Color grading unifies media and UI.
- [ ] Every asset has a narrative role.

## Scroll choreography

- [ ] Every heavy scene defines trigger, start, end, pin, scrub, and scroll distance.
- [ ] One normalized progress value controls the scene.
- [ ] Each scene defines what it receives, preserves, transforms, and hands to the next scene.
- [ ] The composition remains valid at 0%, 25%, 50%, 75%, and 100% progress.
- [ ] Fast scrolling does not skip essential information or produce flashes and jumps.
- [ ] Reverse scrolling restores visual state correctly.
- [ ] Mid-progress pause produces a stable composition.
- [ ] Normal page scrolling resumes naturally after pinned scenes.
- [ ] The page does not hijack wheel direction or trap the user.
- [ ] Heavy pinned scenes are limited and separated by calmer natural-scroll regions.

## Motion

- [ ] Motion is controlled by a master state or timeline.
- [ ] Every animation has a reason.
- [ ] The page is not constantly overstimulating.
- [ ] Scene transitions preserve continuity.
- [ ] Hover-only behavior has a mobile equivalent.
- [ ] Static screenshots are accompanied by desktop and mobile scroll recordings.

## Performance

- [ ] Full, simplified, and static/reduced-motion levels exist.
- [ ] Heavy assets are deferred where possible.
- [ ] Offscreen video and render loops pause.
- [ ] Video scrubbing uses seekable encoding and merged frame updates.
- [ ] Image sequences use a bounded preload window and DPR cap.
- [ ] WebGL resources are disposed after use.
- [ ] Device pixel ratio is capped for heavy scenes.
- [ ] The first meaningful content appears before heavy media is ready.
- [ ] React state is not updated on every scroll frame.
- [ ] ScrollTrigger/timeline cleanup works after route changes and unmounts.

## Accessibility

- [ ] `prefers-reduced-motion` is implemented.
- [ ] Reduced-motion mode preserves information and normal reading order.
- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Text contrast remains readable over media.
- [ ] Essential content has a non-motion equivalent.
- [ ] Audio, when used, has explicit controls.

## Viewports

- [ ] 1440×1000
- [ ] 1280×800
- [ ] 768×1024 when relevant
- [ ] 390×844
- [ ] 375×812

## Product integrity

- [ ] Core tasks remain usable without cinematic effects.
- [ ] Business logic and data contracts remain intact.
- [ ] Visual state is separated from business state.
- [ ] Animation cleanup works across routes and component unmounts.
