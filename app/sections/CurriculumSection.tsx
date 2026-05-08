import { syllabusWeeks } from "@/app/data/landing-page";

export function CurriculumSection() {
  return (
    <section
      id="curriculum"
      className="relative scroll-mt-14 overflow-hidden border-t border-white/10 bg-black px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 -top-28 h-[270px] bg-[radial-gradient(circle_at_50%_0%,rgba(157,54,255,0.62),transparent_46%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto w-full max-w-[1000px]">
        <h2 className="text-[21px] font-bold leading-tight tracking-[0] text-white sm:text-2xl">
          AI infused curriculum curated by experts
        </h2>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <article className="rounded-[20px] border border-purple-400/24 bg-[#151515] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <div className="relative min-h-[330px] overflow-hidden rounded-[15px] bg-black sm:min-h-[340px]">
              <div className="absolute inset-0 bg-[url('/rectangle-869554106-1765793500.webp')] bg-cover bg-center opacity-95" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,transparent_0%,rgba(0,0,0,0.04)_35%,rgba(0,0,0,0.62)_73%,#000_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-black via-black/88 to-transparent" />
              <div className="absolute inset-x-8 bottom-20 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="absolute bottom-6 left-5 right-5 flex items-start gap-4">
                <span className="mt-1 text-3xl leading-none text-white">✦</span>
                <div>
                  <h3 className="text-[18px] font-bold leading-tight text-white">
                    Learn 20+ AI tools
                  </h3>
                  <p className="mt-3 text-base leading-6 text-zinc-400">
                    Excel, SQL, Power BI, Chat GPT and more..
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="relative h-[356px] overflow-hidden rounded-[18px] border border-purple-400/24 bg-[#161616] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.42)] sm:h-[356px] sm:p-9">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#161616] via-[#161616]/95 to-transparent" />
            <p className="text-sm font-bold uppercase leading-none tracking-[0.08em] text-zinc-500">
              Syllabus
            </p>

            <div className="relative mt-5 space-y-0">
              {syllabusWeeks.map((week) => (
                <div className="border-b border-white/[0.09] py-4 first:pt-0" key={week.week}>
                  <h3 className="text-base font-bold leading-tight text-white">{week.week}</h3>
                  <div className="mt-4 space-y-0 text-[15px] leading-6 text-zinc-500 sm:text-base">
                    {week.topics.map((topic) => (
                      <p
                        className="border-b border-white/[0.08] pb-3 last:border-b-0 last:pb-0"
                        key={topic}
                      >
                        {topic}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="w-full rounded-lg bg-zinc-100 px-6 py-3.5 text-center text-base font-bold text-black shadow-[0_14px_36px_rgba(255,255,255,0.08)] transition hover:bg-white sm:w-auto"
            href="#register"
          >
            View Data Analytics Brochure
          </a>
          <a
            className="w-full rounded-lg bg-zinc-100 px-6 py-3.5 text-center text-base font-bold text-black shadow-[0_14px_36px_rgba(255,255,255,0.08)] transition hover:bg-white sm:w-auto"
            href="#register"
          >
            View GenAI Analytics Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
