import Image from "next/image";

const tenXClubPerks = [
  {
    title: "Learn with a serious community",
    description: "Meet people exploring the same data analytics and AI career path",
    glow: "from-purple-600/24",
  },
  {
    title: "Webinars, workshops and more",
    description:
      "Get a chance to keep learning after the live session",
    glow: "from-amber-500/18",
  },
];

function CubeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-7 text-white"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        d="M16 3.5 27 9.7v12.6l-11 6.2-11-6.2V9.7l11-6.2Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path
        d="m5.7 10 10.3 6 10.3-6M16 16v12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path
        d="M11.3 7.4 22 13.5M20.7 7.4 10 13.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function TenXClubSection() {
  return (
    <section
      id="ten-x-club"
      className="relative scroll-mt-14 overflow-hidden bg-black px-5 pb-10 pt-4 sm:px-8 sm:pb-12 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_54%,rgba(154,89,38,0.34),transparent_28%),radial-gradient(circle_at_54%_58%,rgba(87,49,131,0.14),transparent_31%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />

      <div className="relative mx-auto w-full max-w-[980px]">
        <h2 className="max-w-[560px] text-[30px] font-bold leading-tight tracking-[0] text-white sm:text-[34px]">
          Access Brit Institute&apos;s learning community after the webinar
        </h2>

        <div className="mt-8 overflow-hidden rounded-[20px] border border-white/20 bg-[#141414] p-2 shadow-[0_30px_86px_rgba(0,0,0,0.62),0_0_110px_rgba(154,89,38,0.16)] sm:mt-9">
          <Image
            alt="Students in the 10X Club community"
            className="h-auto w-full rounded-[14px] object-cover"
            height={1170}
            src="/frame-2087324689-1767955329.webp"
            width={1920}
          />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {tenXClubPerks.map((perk) => (
            <article
              className="rounded-[20px] border border-white/18 bg-[#171717] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.46)]"
              key={perk.title}
            >
              <div
                className={`h-full rounded-[14px] border border-white/10 bg-[radial-gradient(circle_at_36%_0%,var(--tw-gradient-from),transparent_38%),#050505] px-5 py-5 sm:px-6 sm:py-6 ${perk.glow}`}
              >
                <CubeIcon />
                <h3 className="mt-5 text-[18px] font-bold leading-tight tracking-[0] text-white">
                  {perk.title}
                </h3>
                <p className="mt-4 max-w-[420px] text-[16px] leading-6 text-zinc-400">
                  {perk.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-9">
          <a
            className="rounded-lg bg-[#ff6533] px-7 py-3.5 text-center text-base font-bold text-white shadow-[0_18px_38px_rgba(255,101,51,0.26)] transition hover:bg-[#ff7447]"
            href="#register"
          >
            Join the Webinar
          </a>
        </div>
      </div>
    </section>
  );
}
