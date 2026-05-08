import Image from "next/image";

export function AccreditationSection() {
  return (
    <section className="bg-black px-5 pb-12 pt-4 sm:px-8 sm:pb-14 sm:pt-6 lg:px-10">
      <div className="mx-auto w-full max-w-[980px]">
        <h2 className="text-[29px] font-bold leading-tight tracking-[0] text-white sm:text-[34px]">
          Learn with a trusted career-focused institute
        </h2>

        <div className="mt-12 rounded-[20px] border border-white/20 bg-[#191919] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="grid items-center gap-8 rounded-[14px] border border-white/8 bg-black px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-9">
            <div className="relative mx-auto aspect-[1280/914] w-full max-w-[430px] overflow-hidden rounded-[4px]">
              <Image
                alt="Brit Institute certificate"
                className="object-contain"
                fill
                sizes="(max-width: 1024px) 82vw, 430px"
                src="/brit-certificate.jpeg"
              />
            </div>

            <div className="lg:pl-1">
              <h3 className="text-[23px] font-bold leading-tight tracking-[0] text-white sm:text-[25px]">
                Brit Institute certificate of completion
              </h3>
              <p className="mt-5 max-w-[440px] text-[19px] leading-7 text-zinc-300 sm:text-[20px]">
                Complete eligible Brit Institute programs and receive a
                certificate that reflects your learning, project practice, and
                commitment to building job-ready analytics skills.
              </p>
              <p className="mt-4 max-w-[440px] text-[14px] leading-6 text-zinc-400">
                Designed for learners preparing for UK data analytics and
                business intelligence career pathways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
