import Image from "next/image";

const facultyMembers = [
  {
    name: "Arjun Malhotra",
    role: "Co-Founder",
    image: "/faculty/arjun-malhotra.webp",
    logo: "/faculty/hcl-logo.webp",
    company: "HCL",
  },
  {
    name: "Shivram Lakshminarayanan",
    role: "Head of Analytics",
    image: "/faculty/shivram-lakshminarayanan.webp",
    logo: "/faculty/swiggy-logo.webp",
    company: "Swiggy",
  },
  {
    name: "Shalini Goyal",
    role: "Executive Director",
    image: "/faculty/shalini-goyal.webp",
    logo: "/faculty/jp-morgan-logo.webp",
    company: "J.P. Morgan",
  },
  {
    name: "Paul Hunkin",
    role: "Founder & CEO",
    image: "/faculty/paul-hunkin.webp",
    logo: "/faculty/jasonify-logo.webp",
    company: "Jasonify",
  },
  {
    name: "Shivam Chauhan",
    role: "Co-Founder & Chief Innovation Officer",
    image: "/faculty/shivam-chauhan.webp",
    logo: "/faculty/sarla-aviation-logo.webp",
    company: "Sarla Aviation",
  },
  {
    name: "Monish Salhotra",
    role: "Senior Director",
    image: "/faculty/monish-salhotra.webp",
    logo: "/faculty/monish-company-logo.webp",
    company: "Continental Digital",
  },
  {
    name: "James Maby",
    role: "Performance Analyst",
    image: "/faculty/james-maby.webp",
    logo: "/faculty/james-company-logo.webp",
    company: "James Maby company",
  },
  {
    name: "Dhiraj Naik",
    role: "Head of Analytics",
    image: "/faculty/dhiraj-naik.webp",
    logo: "/faculty/razorpay-logo.webp",
    company: "Razorpay",
  },
  {
    name: "Deepak Chandani",
    role: "Chief Data and Analytics Officer",
    image: "/faculty/deepak-chandani.webp",
    logo: "/faculty/deepak-company-logo.webp",
    company: "Deepak Chandani company",
  },
];

const carouselMembers = [...facultyMembers, ...facultyMembers];

const expertSupportPoints = [
  "Get a personal relationship manager",
  "Connect 1:1 with FAANG mentors",
  "TA's to clear your doubts & more",
];

export function FacultySection() {
  return (
    <section className="overflow-hidden bg-black px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10">
      <div className="mx-auto w-full max-w-[990px]">
        <p className="text-sm font-bold uppercase tracking-[0.04em] text-zinc-500">
          Community exclusive
        </p>
        <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[0] text-white sm:text-[34px]">
          Weekly chats with top industry talent
        </h2>
      </div>

      <div className="faculty-stage mt-12">
        <div className="faculty-marquee flex w-max gap-8 pr-8">
          {carouselMembers.map((member, index) => (
            <article
              className="w-[274px] shrink-0 rounded-[22px] border border-white/15 bg-[#202020] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.48)]"
              key={`${member.name}-${index}`}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="relative h-[268px] overflow-hidden rounded-[14px] bg-[#141414]">
                  <Image
                    alt={member.name}
                    className="object-cover object-top"
                    fill
                    sizes="274px"
                    src={member.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#202020] via-[#202020]/58 to-transparent" />
                </div>

                <div className="flex min-h-[168px] flex-col px-3 pb-4">
                  <div className="min-h-[64px]">
                    <h3 className="text-[16px] font-bold leading-snug tracking-[0] text-zinc-100">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[15px] leading-[1.35] text-zinc-400">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-5 h-px w-full bg-white/16" />

                  <div className="relative mt-5 h-7 w-[104px]">
                    <Image
                      alt={`${member.company} logo`}
                      className="object-contain object-left"
                      fill
                      sizes="104px"
                      src={member.logo}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div id="faculty" className="scroll-mt-14 mx-auto mt-20 w-full max-w-[990px]">
        <h2 className="text-[30px] font-bold leading-tight tracking-[0] text-white sm:text-[34px]">
          A Bootcamp crafted with care, taught by experts
        </h2>

        <article className="mt-14 rounded-[18px] border border-white/18 bg-[#151515] p-2 shadow-[0_24px_75px_rgba(0,0,0,0.46)]">
          <div className="grid gap-8 rounded-[14px] bg-black px-5 py-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:px-8">
            <div className="relative min-h-[260px] overflow-hidden rounded-[14px] bg-[#111] sm:min-h-[330px] lg:min-h-[326px]">
              <Image
                alt="Expert mentor leading a team discussion"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                src="/expert-1-1765950752.jpg"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/96 via-black/42 to-transparent" />
            </div>

            <div className="flex flex-col justify-center lg:py-6">
              <h3 className="max-w-[390px] text-[24px] font-bold leading-[1.28] tracking-[0] text-white">
                In house team of experts to guide you
              </h3>

              <div className="mt-12">
                {expertSupportPoints.map((point) => (
                  <div
                    className="flex items-center gap-8 border-b border-white/15 py-6 text-[17px] leading-6 text-zinc-300 last:border-b-0"
                    key={point}
                  >
                    <span className="relative grid size-4 shrink-0 place-items-center" aria-hidden="true">
                      <span className="absolute size-12 rounded-full bg-purple-600/28 blur-xl" />
                      <span className="relative size-2 rounded-full bg-purple-500 shadow-[0_0_24px_rgba(168,85,247,0.95)]" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
