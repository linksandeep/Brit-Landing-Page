import { aiJobStats } from "@/app/data/landing-page";

export function AiJobsSection() {
  return (
    <section
      id="ai-jobs"
      className="bg-black px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1064px]">
        <h2 className="text-3xl font-semibold leading-tight tracking-[0] text-white sm:text-[34px]">
          AI is redefining the future of jobs
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.92fr_1fr] lg:gap-12">
          <div className="space-y-0">
            {aiJobStats.map((stat) => (
              <div
                className="grid grid-cols-[42px_1fr] gap-5 border-white/12 py-6 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b"
                key={stat.value}
              >
                <span className="mt-2 size-2 rounded-full bg-[#34a7ff] shadow-[0_0_14px_5px_rgba(52,167,255,0.6),0_0_34px_14px_rgba(46,144,255,0.24)]" />
                <div>
                  <p className="text-[25px] font-bold leading-tight tracking-[0] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[17px] leading-6 text-zinc-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[19px] bg-[#171717] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.34)] sm:p-8">
            <p className="text-xs font-medium uppercase leading-none tracking-[0.08em] text-zinc-500">
              AI skills demand in job market
            </p>
            <p className="mt-3 text-[22px] font-semibold leading-none tracking-[0] text-white">
              80% increase in 3 years
            </p>

            <div className="relative mt-10 aspect-[464/198] overflow-hidden border-b border-white/15">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 464 198"
              >
                <defs>
                  <linearGradient id="ai-jobs-area" x1="128" x2="338" y1="134" y2="62" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#5a5a5a" stopOpacity="0.24" />
                    <stop offset="0.44" stopColor="#6b3a22" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#ff5b16" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="ai-jobs-bar-muted" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#b7b7c2" stopOpacity="0.88" />
                    <stop offset="1" stopColor="#6b6b72" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="ai-jobs-bar-accent" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#ff4818" />
                    <stop offset="0.62" stopColor="#e94315" stopOpacity="0.72" />
                    <stop offset="1" stopColor="#e94315" stopOpacity="0" />
                  </linearGradient>
                  <filter id="ai-jobs-soft-glow" x="-80%" y="-30%" width="260%" height="180%">
                    <feGaussianBlur stdDeviation="12" />
                  </filter>
                </defs>

                <path
                  d="M86 170 C126 169 143 157 166 138 C190 118 216 85 254 62 C291 40 325 25 370 24 L370 198 L86 198 Z"
                  fill="url(#ai-jobs-area)"
                />
                <rect
                  fill="#ff4818"
                  height="174"
                  opacity="0.16"
                  rx="2"
                  filter="url(#ai-jobs-soft-glow)"
                  width="32"
                  x="356"
                  y="24"
                />
                <rect fill="url(#ai-jobs-bar-muted)" height="72" rx="2" width="32" x="44" y="126" />
                <rect fill="url(#ai-jobs-bar-muted)" height="122" rx="2" width="32" x="206" y="76" />
                <rect fill="url(#ai-jobs-bar-accent)" height="174" rx="2" width="32" x="356" y="24" />
                <rect fill="url(#ai-jobs-bar-muted)" height="50" opacity="0.18" width="464" x="0" y="148" />
              </svg>
            </div>

            <div className="grid grid-cols-3 px-[10%] pt-2 text-[11px] leading-none text-zinc-500">
              <span>2023</span>
              <span className="text-center">2024</span>
              <span className="text-right">2025</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            className="rounded-lg bg-zinc-100 px-7 py-4 text-base font-bold text-black shadow-[0_16px_42px_rgba(255,255,255,0.08)] transition hover:bg-white"
            href="#register"
          >
            Reserve free webinar seat
          </a>
        </div>
      </div>
    </section>
  );
}
