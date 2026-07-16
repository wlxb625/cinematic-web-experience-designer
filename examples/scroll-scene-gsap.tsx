"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./scroll-scene.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Reference implementation for one pinned cinematic scene.
 * Dependencies: gsap, @gsap/react
 * Keep business state outside this component.
 */
export function MemoryGrowthScrollScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const scene = sceneRef.current;
      if (!scene) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set("[data-motion]", { clearProps: "all", opacity: 1 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: scene,
          start: "top top",
          end: "+=240%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            scene.style.setProperty("--scene-progress", self.progress.toFixed(4));
            if (progressRef.current) {
              progressRef.current.textContent = self.progress.toFixed(3);
            }
          },
        },
      });

      timeline
        .fromTo(
          "[data-hero-copy]",
          { opacity: 1, xPercent: 0 },
          { opacity: 0.35, xPercent: -8, duration: 0.18 },
          0.08,
        )
        .fromTo(
          "[data-core]",
          { scale: 0.72, filter: "blur(12px)", opacity: 0.45 },
          { scale: 1.05, filter: "blur(0px)", opacity: 1, duration: 0.3 },
          0.08,
        )
        .fromTo(
          "[data-node]",
          { xPercent: 0, yPercent: 0, opacity: 0, scale: 0.7 },
          {
            xPercent: (index) => [-170, 150, -125, 165][index] ?? 0,
            yPercent: (index) => [-95, -75, 105, 95][index] ?? 0,
            opacity: 1,
            scale: 1,
            stagger: 0.035,
            duration: 0.24,
          },
          0.28,
        )
        .fromTo(
          "[data-memory-card]",
          { opacity: 0, yPercent: 30, rotateZ: -2 },
          { opacity: 1, yPercent: 0, rotateZ: 0, stagger: 0.035, duration: 0.22 },
          0.5,
        )
        .to(
          "[data-core]",
          { scale: 0.42, xPercent: 118, yPercent: -72, duration: 0.2 },
          0.78,
        )
        .to(
          "[data-node]",
          { xPercent: 0, yPercent: 0, scale: 0.5, opacity: 0.55, duration: 0.18 },
          0.79,
        )
        .fromTo(
          "[data-next-title]",
          { opacity: 0, yPercent: 18 },
          { opacity: 1, yPercent: 0, duration: 0.16 },
          0.84,
        );

      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh).catch(() => undefined);
    },
    { scope: sceneRef },
  );

  return (
    <section ref={sceneRef} className="memory-scroll-scene" data-scene="memory-growth">
      <div className="memory-scroll-scene__ambient" aria-hidden="true" />

      <div className="memory-scroll-scene__copy" data-hero-copy data-motion>
        <p className="memory-scroll-scene__eyebrow">同行 · 共同记忆空间</p>
        <h1>我记得你的热爱，也看见你的成长。</h1>
        <p>下滑时，聊天、记忆与目标会从同一个核心中逐渐形成。</p>
      </div>

      <div className="memory-scroll-scene__stage" aria-label="记忆成长可视化">
        <div className="memory-scroll-scene__core" data-core data-motion>
          <span />
        </div>

        {["记忆", "目标", "洞察", "成长"].map((label) => (
          <div key={label} className="memory-scroll-scene__node" data-node data-motion>
            {label}
          </div>
        ))}

        <div className="memory-scroll-scene__cards">
          {["第一次认真谈论未来", "建立长期学习目标", "看见反复出现的情绪"].map(
            (text) => (
              <article key={text} data-memory-card data-motion>
                <small>共同记忆</small>
                <p>{text}</p>
              </article>
            ),
          )}
        </div>
      </div>

      <div className="memory-scroll-scene__next" data-next-title data-motion>
        <p>记忆不再只是片段</p>
        <h2>它们正在形成你的成长路径。</h2>
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="memory-scroll-scene__debug" aria-hidden="true">
          progress: <span ref={progressRef}>0.000</span>
        </div>
      )}
    </section>
  );
}
