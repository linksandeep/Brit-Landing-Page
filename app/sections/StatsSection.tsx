import { programStats } from "@/app/data/landing-page";

export function StatsSection() {
  return (
    <section
      id="program-stats"
      className="border-y border-white/10 bg-[linear-gradient(100deg,#02070b_0%,#060817_34%,#03251f_68%,#020303_100%)] px-5 py-9 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1064px] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {programStats.map((stat, index) => (
          <div
            className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
            key={stat.value}
          >
            {index > 0 ? (
              <span className="absolute left-0 top-1 hidden h-9 w-px bg-[#813521]/80 lg:block" />
            ) : null}
            <div className="lg:pl-[86px]">
              <p className="text-2xl font-bold leading-none tracking-[0] text-white">
                {stat.value}
              </p>
              <p className="mt-2.5 text-xs leading-4 text-white/78">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
