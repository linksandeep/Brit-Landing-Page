import Image from "next/image";

const assistanceItems = [
  {
    title: "Curated Job boards",
    description: "400+ live jobs & new jobs added everyday",
  },
  {
    title: "Resume, LinkedIn and Github profile building",
    description: "Get tailored feedback on improving all your profile",
  },
];

export function JobAssistanceSection() {
  return (
    <section className="bg-black px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:px-10">
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
            <Image
              alt="AI job board cards for front end developer roles"
              className="h-auto w-full rounded-[14px] object-cover"
              height={340}
              src="/frame-2087324679-1765627667.webp"
              width={520}
            />
          </div>
        </div>

        <div className="mt-14 flex justify-center sm:mt-16">
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
