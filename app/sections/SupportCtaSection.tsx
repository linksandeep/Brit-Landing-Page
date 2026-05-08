const supportItems = [
  {
    title: "Get instant Doubt Support",
    description: "24/7 support with our Teaching assistants & Ninja AI",
  },
  {
    title: "Interview prep like a pro with AI",
    description:
      "Practice interviews, refine your resume, and improve with AI-powered feedback.",
  },
];

function CubeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-8 text-white"
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

export function SupportCtaSection() {
  return (
    <section className="relative bg-black px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:px-10">
      <div className="mx-auto w-full max-w-[1050px]">
        <div className="grid gap-8 md:grid-cols-2">
          {supportItems.map((item) => (
            <article
              className="rounded-[22px] border border-white/20 bg-[#171717] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
              key={item.title}
            >
              <div className="h-full rounded-[14px] border border-white/10 bg-[radial-gradient(circle_at_32%_0%,rgba(255,93,36,0.22),transparent_36%),radial-gradient(circle_at_74%_13%,rgba(255,124,29,0.15),transparent_32%),#050505] px-5 py-5 sm:px-7 sm:py-6">
                <CubeIcon />
                <h3 className="mt-4 text-[18px] font-bold leading-tight tracking-[0] text-white sm:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[460px] text-[16px] leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <a
            className="rounded-lg bg-[#ff6533] px-7 py-3.5 text-center text-base font-bold text-white shadow-[0_18px_38px_rgba(255,101,51,0.26)] transition hover:bg-[#ff7447]"
            href="#register"
          >
            Book a free webinar
          </a>
        </div>
      </div>
    </section>
  );
}
