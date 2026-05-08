import Image from "next/image";

const videoTestimonials = [
  {
    name: "Shivani",
    company: "Google",
    image: "/student1.webp",
  },
  {
    name: "Simran",
    company: "Microsoft",
    image: "/student2.webp",
  },
];

function GoogleLogo() {
  return (
    <span className="text-[15px] font-bold leading-none tracking-[0]">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

function MicrosoftLogo() {
  return (
    <span className="flex items-center gap-1.5 text-[15px] font-semibold leading-none text-zinc-400">
      <span className="grid size-5 grid-cols-2 gap-0.5" aria-hidden="true">
        <span className="bg-[#f25022]" />
        <span className="bg-[#7fba00]" />
        <span className="bg-[#00a4ef]" />
        <span className="bg-[#ffb900]" />
      </span>
      Microsoft
    </span>
  );
}

export function StudentVideoTestimonialsSection() {
  return (
    <section className="bg-black px-5 pb-24 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1064px]">
        <div className="grid gap-8 lg:grid-cols-2">
          {videoTestimonials.map((student) => (
            <article
              className="rounded-[22px] border border-white/18 bg-[#191919] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.48)]"
              key={student.name}
            >
              <a
                aria-label={`Watch ${student.name}'s testimonial video`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[16px] bg-[#111]"
                href="#register"
              >
                <Image
                  alt={`${student.name} testimonial`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 92vw, 500px"
                  src={student.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.82)_100%)]" />
                <div className="absolute left-4 top-4 flex items-center gap-3 text-[21px] font-semibold leading-none text-white sm:left-5 sm:top-5">
                  <span className="grid size-7 place-items-center rounded-full bg-zinc-300/70 text-black/70 transition group-hover:bg-white/85">
                    <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-current" />
                  </span>
                  Watch video
                </div>

                <div className="absolute inset-x-0 bottom-0 px-4 pb-7 sm:px-5 sm:pb-8">
                  <p className="text-[17px] font-semibold leading-none text-white">
                    {student.name}
                  </p>
                  <div className="mt-4">
                    {student.company === "Google" ? (
                      <GoogleLogo />
                    ) : (
                      <MicrosoftLogo />
                    )}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            className="flex h-12 min-w-[230px] items-center justify-center rounded-lg bg-zinc-100 px-8 text-[15px] font-bold text-black transition hover:bg-white"
            href="#testimonials"
          >
            View more testimonials
          </a>
        </div>
      </div>
    </section>
  );
}
