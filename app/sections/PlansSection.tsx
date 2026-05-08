"use client";

import { useState } from "react";

import { planComparisonRows } from "@/app/data/landing-page";

function PlanStatus({ included }: { included: boolean }) {
  if (included) {
    return (
      <span
        aria-label="Included"
        className="mx-auto block h-3 w-2 rotate-45 border-b-2 border-r-2 border-[#5b86ff]"
        role="img"
      />
    );
  }

  return (
    <span
      aria-label="Not included"
      className="relative mx-auto block size-4"
      role="img"
    >
      <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-[#ff553f]" />
      <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-[#ff553f]" />
    </span>
  );
}

const plans = [
  {
    key: "bootcamp",
    title: "Job Bootcamp",
    subtitle: "to help you with a faster career transition to data analytics",
    price: "£59",
  },
  {
    key: "microsoft",
    title: "Job Bootcamp + Microsoft",
    subtitle: "Added Microsoft certification content",
    price: "£69",
  },
] as const;

const planTracks = ["Data Analytics", "GenAI Analytics"] as const;

export function PlansSection() {
  const [activeTrack, setActiveTrack] = useState<(typeof planTracks)[number]>("Data Analytics");

  return (
    <section
      id="plans"
      className="scroll-mt-16 bg-black px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1110px]">
        <div
          aria-label="Choose plan curriculum"
          className="mx-auto flex h-[58px] max-w-[480px] items-center rounded-full bg-[#202020] p-3"
          role="tablist"
        >
          {planTracks.map((track) => {
            const isActive = activeTrack === track;

            return (
              <button
                aria-selected={isActive}
                className={`h-full flex-1 rounded-full text-sm font-bold transition sm:text-base ${
                  isActive
                    ? "bg-[#464646] text-zinc-100"
                    : "text-zinc-200 hover:bg-white/5"
                }`}
                key={track}
                onClick={() => setActiveTrack(track)}
                role="tab"
                type="button"
              >
                {track}
              </button>
            );
          })}
        </div>

        <div className="mt-9 overflow-hidden rounded-[10px] border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
          <div className="hidden md:block">
            <div className="grid grid-cols-3 bg-[#1b1b1b]">
              <div className="px-6 py-5">
                <h2 className="text-[21px] font-bold leading-tight tracking-[0] text-white">
                  Perks
                </h2>
              </div>

              {plans.map((plan) => (
                <div
                  className="px-6 py-5 text-center"
                  key={plan.key}
                >
                  <h3 className="text-[21px] font-bold leading-tight tracking-[0] text-white">
                    {plan.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[260px] text-[15px] leading-6 text-zinc-300">
                    {plan.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div>
              {planComparisonRows.map((row, index) => (
                <div
                  className={`grid min-h-[52px] grid-cols-3 items-center ${
                    index % 2 === 1 ? "bg-[#1b1b1b]" : "bg-black"
                  }`}
                  key={row.perk}
                >
                  <div className="border-r border-white/22 px-6 py-3 text-[15px] font-medium leading-6 text-white">
                    {row.perk}
                  </div>
                  <div className="px-6 py-3 text-center">
                    <PlanStatus included={row.bootcamp} />
                  </div>
                  <div className="px-6 py-3 text-center">
                    <PlanStatus included={row.microsoft} />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3">
              <div className="border-r border-white/22" />
              {plans.map((plan) => (
                <div
                  className="flex flex-col items-center px-8 pb-9 pt-5 text-center"
                  key={plan.key}
                >
                  <p className="text-sm font-medium text-white">Price as low as</p>
                  <p className="mt-3 text-xl font-black tracking-[0] text-white">
                    {plan.price} / month
                  </p>
                  <a
                    className="mt-5 flex h-10 w-full max-w-[230px] items-center justify-center rounded-lg bg-[#ff6533] text-sm font-bold text-white transition hover:bg-[#ff7447]"
                    href="#register"
                  >
                    Apply now
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <div className="bg-[#1b1b1b] px-5 py-5">
              <h2 className="text-xl font-bold tracking-[0] text-white">Perks</h2>
            </div>

            <div className="divide-y divide-white/10">
              {planComparisonRows.map((row, index) => (
                <div
                  className={`px-5 py-4 ${index % 2 === 1 ? "bg-[#1b1b1b]" : "bg-black"}`}
                  key={row.perk}
                >
                  <p className="text-[15px] font-medium leading-6 text-white">
                    {row.perk}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    {plans.map((plan) => (
                      <div
                        className="rounded-[8px] border border-white/10 bg-black/35 px-3 py-3"
                        key={plan.key}
                      >
                        <p className="mb-3 text-xs font-bold text-zinc-400">
                          {plan.title}
                        </p>
                        <PlanStatus included={row[plan.key]} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 bg-black px-5 py-5">
              {plans.map((plan) => (
                <article
                  className="rounded-[10px] border border-white/12 bg-[#171717] p-5"
                  key={plan.key}
                >
                  <h3 className="text-lg font-bold tracking-[0] text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{plan.subtitle}</p>
                  <p className="mt-5 text-sm font-medium text-white">Price as low as</p>
                  <p className="mt-2 text-xl font-black tracking-[0] text-white">
                    {plan.price} / month
                  </p>
                  <a
                    className="mt-5 flex h-11 items-center justify-center rounded-lg bg-[#ff6533] text-sm font-bold text-white transition hover:bg-[#ff7447]"
                    href="#register"
                  >
                    Apply now
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
