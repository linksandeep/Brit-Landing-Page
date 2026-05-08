import Image from "next/image";

export function CertificationLoveSection() {
  return (
    <section className="bg-black px-5 pb-20 pt-12 sm:px-8 sm:pb-24 lg:px-10">
      <div className="mx-auto w-full max-w-[990px]">
        <h2 className="text-[28px] font-bold leading-tight tracking-[0] text-white sm:text-[34px]">
          Our students loved an AI first certification
        </h2>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="relative mx-auto h-[360px] w-full max-w-[430px] overflow-hidden sm:h-[430px] md:mx-0">
            <Image
              alt="Shubham Soni"
              className="object-contain object-bottom"
              fill
              sizes="(max-width: 768px) 88vw, 430px"
              src="/photo-2025-12-24-12-24-55-1-1-1767703280.webp"
            />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/72 to-transparent" />
          </div>

          <article className="max-w-[440px] md:pt-10">
            <p className="text-[24px] font-normal leading-[1.28] tracking-[0] text-zinc-300 sm:text-[27px]">
              Coding Ninjas Software Development course is very learner-friendly
              and practical. The step-by-step approach and hands-on projects made
              it easy to understand front-end and back-end concepts and build
              real-world web applications.
            </p>

            <div className="mt-9">
              <p className="text-[17px] font-bold leading-none text-white">
                Shubham Soni
              </p>
              <p className="mt-3 text-[14px] leading-none text-white">
                Full Stack Developer at HashedIn
              </p>
              <p className="mt-4 text-[24px] font-black leading-none tracking-[0] text-white">
                Hashed<span className="text-[#f36b2a]">in</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
