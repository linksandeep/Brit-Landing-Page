import Image from "next/image";

import { audienceOptions } from "@/app/data/landing-page";

function UKFlag() {
  return (
    <span
      aria-hidden="true"
      className="grid h-[18px] w-[25px] place-items-center overflow-hidden rounded-[1px] bg-white text-[18px] leading-none shadow-[0_0_0_1px_rgba(0,0,0,0.16)]"
    >
      🇬🇧
    </span>
  );
}

export function CareerCounselorSection() {
  return (
    <section className="bg-black px-5 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1100px] items-center gap-10 lg:grid-cols-[1fr_462px] lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <div className="relative aspect-[725/651] w-full max-w-[570px]">
            <Image
              alt="Career counselor available for free help and support"
              className="object-contain"
              fill
              priority={false}
              sizes="(max-width: 1024px) 88vw, 570px"
              src="/group-1437253642-min-1-1766484607.png"
            />
          </div>
        </div>

        <aside className="rounded-[24px] border border-white/14 bg-[#202020] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          <div className="rounded-[18px] border border-white/10 bg-[#171717] px-5 py-6 sm:px-7 sm:py-7">
            <h2 className="text-[18px] font-bold leading-tight tracking-[0] text-white sm:text-[19px]">
              Reach out to our career counsellor for free
            </h2>
            <div className="mt-6 h-px bg-white/12" />

            <form className="mt-6 space-y-5">
              <label className="block">
                <span className="mb-2.5 block text-xs font-medium text-white">
                  Name <span className="text-[#ff6533]">*</span>
                </span>
                <input
                  className="h-10 w-full rounded-[7px] border border-white/45 bg-[#1f1f1f] px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#ff7447] focus:ring-2 focus:ring-[#ff7447]/25"
                  name="name"
                  placeholder="Enter name"
                  type="text"
                />
              </label>

              <label className="block">
                <span className="mb-2.5 block text-xs font-medium text-white">
                  Email <span className="text-[#ff6533]">*</span>
                </span>
                <input
                  className="h-10 w-full rounded-[7px] border border-white/45 bg-[#1f1f1f] px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#ff7447] focus:ring-2 focus:ring-[#ff7447]/25"
                  name="email"
                  placeholder="Enter email"
                  type="email"
                />
              </label>

              <label className="block">
                <span className="mb-2.5 block text-xs font-medium text-white">
                  Phone Number <span className="text-[#ff6533]">*</span>
                </span>
                <div className="flex h-10 w-full items-center gap-4 rounded-[7px] border border-white/45 bg-[#1f1f1f] px-3 transition focus-within:border-[#ff7447] focus-within:ring-2 focus-within:ring-[#ff7447]/25">
                  <UKFlag />
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                    name="phone"
                    placeholder="Enter phone number"
                    type="tel"
                  />
                </div>
              </label>

              <fieldset className="space-y-4 pt-1">
                <legend className="mb-3 text-xs font-medium text-white">
                  Experience <span className="text-[#ff6533]">*</span>
                </legend>
                {audienceOptions.map((option) => (
                  <label
                    className="flex cursor-pointer items-center gap-3 text-[15px] leading-5 text-white"
                    key={option}
                  >
                    <input
                      className="size-4 accent-[#ff6533]"
                      name="career-experience"
                      type="radio"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </fieldset>

              <button
                className="h-12 w-full rounded-[7px] border border-white bg-transparent text-base font-bold text-white transition hover:bg-white hover:text-black"
                type="submit"
              >
                Request a callback
              </button>

              <p className="text-[9px] leading-[1.35] text-zinc-500 sm:text-[10px]">
                I authorise Brit Institute to contact me with course updates &amp; offers
                via Email/SMS/Whatsapp/Call. I have read and agree to{" "}
                <a className="underline underline-offset-2" href="#">
                  Privacy Policy
                </a>{" "}
                &amp;{" "}
                <a className="underline underline-offset-2" href="#">
                  Terms of use
                </a>
              </p>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
