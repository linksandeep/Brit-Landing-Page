const assistanceItems = [
  {
    title: "Beginner-friendly roadmap",
    description: "Know the exact tools, projects, and habits to focus on first",
  },
  {
    title: "Portfolio and profile direction",
    description: "Learn what hiring teams expect from analytics candidates",
  },
];

export function JobAssistanceSection() {
  return (
    <section className="bg-black px-5 pb-12 pt-4 sm:px-8 sm:pb-14 lg:px-10">
      <div className="mx-auto w-full max-w-[1050px]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="divide-y divide-white/16">
            {assistanceItems.map((item) => (
              <article className="py-8 first:pt-0 last:pb-0 sm:py-10" key={item.title}>
                <h3 className="text-[18px] font-bold leading-tight tracking-[0] text-white sm:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[460px] text-[17px] leading-7 text-zinc-400 sm:text-[18px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[20px] border border-white/20 bg-[#171717] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.48)]">
            <div className="overflow-hidden rounded-[14px] bg-[radial-gradient(circle_at_top,rgba(255,140,74,0.22),transparent_30%),linear-gradient(180deg,#121824_0%,#0c1220_100%)] p-5 sm:p-6">
              <div className="rounded-[18px] border border-white/12 bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.28)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                      UK Role Spotlight
                    </p>
                    <h3 className="mt-2 text-[22px] font-semibold leading-tight text-white">
                      Data Analyst
                    </h3>
                    <p className="mt-2 text-[15px] leading-6 text-zinc-300">
                      London, United Kingdom
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Hiring
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      Salary
                    </p>
                    <p className="mt-2 text-[18px] font-semibold text-white">
                      £45K - £90K
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      Format
                    </p>
                    <p className="mt-2 text-[18px] font-semibold text-white">
                      Hybrid / Remote
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      Focus
                    </p>
                    <p className="mt-2 text-[18px] font-semibold text-white">
                      SQL, Power BI
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/[0.06] px-3 py-2 text-sm font-medium text-zinc-200">
                    Stakeholder reporting
                  </span>
                  <span className="rounded-full bg-white/[0.06] px-3 py-2 text-sm font-medium text-zinc-200">
                    Dashboard delivery
                  </span>
                  <span className="rounded-full bg-white/[0.06] px-3 py-2 text-sm font-medium text-zinc-200">
                    Business insights
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center sm:mt-16">
          <a
            className="rounded-lg bg-[#ff6533] px-7 py-3.5 text-center text-base font-bold text-white shadow-[0_18px_38px_rgba(255,101,51,0.26)] transition hover:bg-[#ff7447]"
            href="#register"
          >
            Save My Webinar Seat
          </a>
        </div>
      </div>
    </section>
  );
}
