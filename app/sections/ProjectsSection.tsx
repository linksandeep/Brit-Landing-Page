"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import { projectCards } from "@/app/data/landing-page";

const PROJECT_SPEED = 0.034;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ProjectsSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(1180);
  const [progress, setProgress] = useState(0);
  const rotatingProjectCards = useMemo(
    () => [...projectCards, ...projectCards, ...projectCards],
    [],
  );
  const cardWidth = stageWidth < 640 ? 220 : 284;
  const cardGap = stageWidth < 640 ? 22 : 32;
  const slotWidth = cardWidth + cardGap;
  const centerIndex = projectCards.length;
  const loopWidth = projectCards.length * slotWidth;
  const trackX =
    stageWidth / 2 - cardWidth / 2 - centerIndex * slotWidth - progress;

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width);
    });

    resizeObserver.observe(stage);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    let frameId = 0;
    let previousTime = performance.now();

    const animate = (time: number) => {
      const delta = time - previousTime;
      previousTime = time;
      setProgress((currentProgress) => {
        const nextProgress = currentProgress + delta * PROJECT_SPEED;
        return nextProgress >= loopWidth ? nextProgress - loopWidth : nextProgress;
      });
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [loopWidth]);

  const getCardStyle = (index: number): CSSProperties => {
    const cardCenter = index * slotWidth + cardWidth / 2 + trackX;
    const stageCenter = stageWidth / 2;
    const distance = Math.abs(cardCenter - stageCenter) / slotWidth;
    const scale = clamp(1 - distance * 0.22, 0.62, 1);
    const lift = (1 - scale) * 72;

    return {
      opacity: clamp(1 - distance * 0.18, 0.42, 1),
      transform: `translate3d(0, ${lift}px, 0) scale(${scale})`,
      width: cardWidth,
      zIndex: Math.round((1 - distance) * 10),
    };
  };

  return (
    <section
      id="curriculum"
      className="relative scroll-mt-14 overflow-hidden border-t border-white/10 bg-black px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <span id="faqs" className="absolute top-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_6%,rgba(154,49,255,0.42),transparent_30%),radial-gradient(circle_at_50%_72%,rgba(115,31,194,0.22),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/12" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <h2 className="text-center text-3xl font-semibold leading-tight tracking-[0] text-white sm:text-[34px]">
          Build with AI like never before
        </h2>

        <div
          className="projects-stage relative mx-auto mt-8 min-h-[430px] max-w-[1180px] overflow-hidden py-10 sm:mt-10 sm:min-h-[500px] sm:py-12"
          ref={stageRef}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:95px_95px] opacity-60" />
          <div className="absolute inset-x-[16%] top-0 h-full bg-[radial-gradient(circle_at_50%_34%,rgba(170,71,255,0.58),transparent_42%)] blur-[2px]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent" />

          <div
            className="projects-carousel-track relative flex w-max items-start"
            style={{
              gap: cardGap,
              transform: `translate3d(${trackX}px, 0, 0)`,
            }}
          >
            {rotatingProjectCards.map((project, index) => (
              <article
                className="project-card group shrink-0 text-center"
                key={`${project.title}-${index}`}
                style={getCardStyle(index)}
              >
                <div className="rounded-[14px] border border-white/12 bg-[#111114] p-2 shadow-[0_24px_52px_rgba(0,0,0,0.56),inset_0_0_0_6px_rgba(255,255,255,0.035)] transition duration-300 group-hover:-translate-y-1 group-hover:border-white/28">
                  <div className="relative aspect-[807/1008] overflow-hidden rounded-[8px] bg-[#17171c]">
                    <Image
                      alt={project.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 640px) 284px, 250px"
                      src={project.image}
                    />
                  </div>
                </div>
                <h3 className="mt-5 text-base font-bold leading-tight text-white">
                  {project.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[270px] text-[13px] leading-5 text-white/78">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
