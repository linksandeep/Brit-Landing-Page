import Image from "next/image";

import { successStory } from "@/app/data/landing-page";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-black px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[944px]">
        <article className="grid overflow-hidden rounded-[24px] border border-white/20 bg-[#151515] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.48)] md:grid-cols-[minmax(0,498px)_1fr] md:gap-9 lg:p-5">
          <a
            aria-label={`Watch ${successStory.name}'s transition story video`}
            className="group relative aspect-[498/350] overflow-hidden rounded-[16px] bg-zinc-900 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
            href="#register"
          >
            <Image
              alt={`${successStory.name} from ${successStory.company}`}
              className="object-cover"
              fill
              sizes="(min-width: 768px) 498px, calc(100vw - 72px)"
              src={successStory.image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.24)_0%,transparent_42%,rgba(0,0,0,0.26)_100%)]" />

            <div className="absolute left-4 top-4 flex items-center gap-3 text-[19px] font-bold text-white sm:text-xl">
              <span className="grid size-6 place-items-center rounded-full bg-white/35 text-white transition group-hover:bg-white/50">
                <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-white" />
              </span>
              Watch video
            </div>

            <div className="absolute bottom-5 left-4">
              <p className="text-base font-bold leading-none text-white sm:text-lg">
                {successStory.name}
              </p>
              <p className="mt-1 text-[34px] font-black leading-none tracking-[0] text-[#ff6533] sm:text-[40px]">
                {successStory.company}
              </p>
            </div>
          </a>

          <div className="flex items-center px-2 py-8 sm:px-4 md:px-0 md:py-6">
            <p className="max-w-[350px] text-[27px] font-semibold leading-[1.18] tracking-[0] text-zinc-100 sm:text-[30px] md:text-[29px] lg:text-[32px]">
              {successStory.headline}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
