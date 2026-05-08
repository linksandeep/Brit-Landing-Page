"use client";

import { useEffect, useState } from "react";

import { sectionTabs } from "@/app/data/landing-page";

export function SectionTabsNav() {
  const [activeHref, setActiveHref] = useState(sectionTabs[0]?.href ?? "");

  useEffect(() => {
    let frame = 0;

    const updateActiveTab = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const probeY = 72;
        let currentHref = sectionTabs[0]?.href ?? "";
        let nearestSectionTop = Number.NEGATIVE_INFINITY;

        for (const tab of sectionTabs) {
          const section = document.getElementById(tab.href.slice(1));

          if (!section) {
            continue;
          }

          const { bottom, top } = section.getBoundingClientRect();

          if (top <= probeY && bottom > probeY) {
            currentHref = tab.href;
            break;
          }

          if (top <= probeY && top > nearestSectionTop) {
            currentHref = tab.href;
            nearestSectionTop = top;
          }
        }

        setActiveHref(currentHref);
      });
    };

    updateActiveTab();
    window.addEventListener("scroll", updateActiveTab, { passive: true });
    window.addEventListener("resize", updateActiveTab);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveTab);
      window.removeEventListener("resize", updateActiveTab);
    };
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-0 z-50 border-y border-white/10 bg-black/92 px-5 backdrop-blur sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex h-12 max-w-[760px] items-center gap-8 overflow-x-auto text-sm font-semibold text-zinc-500 sm:justify-center sm:text-base">
        {sectionTabs.map((tab) => {
          const isActive = activeHref === tab.href;

          return (
            <a
              aria-current={isActive ? "true" : undefined}
              className={`relative flex h-full shrink-0 items-center transition hover:text-white ${
                isActive
                  ? "text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-white after:shadow-[0_0_18px_rgba(255,255,255,0.82)]"
                  : ""
              }`}
              href={tab.href}
              key={tab.label}
              onClick={() => setActiveHref(tab.href)}
            >
              {tab.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
