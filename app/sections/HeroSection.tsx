import Image from "next/image";

import { audienceOptions, toolBadges } from "@/app/data/landing-page";

const countryDialCodes = [
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+971", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
];

export function HeroSection() {
  return (
    <section className="hero-noise relative px-5 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
      <div className="mx-auto grid w-full max-w-[1064px] items-stretch gap-5 lg:grid-cols-[1.15fr_0.84fr]">
        <section className="rounded-[22px] border border-white/12 bg-[linear-gradient(140deg,rgba(38,15,68,0.92),rgba(15,24,83,0.92)_58%,rgba(33,63,129,0.78))] p-7 shadow-[0_25px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:min-h-[560px] lg:p-9">
          <h1 className="max-w-[560px] text-4xl font-semibold leading-[1.24] tracking-[0] text-white sm:text-[38px]">
            Data Analytics with GenAI Program by Brit Institute Job
            Bootcamp
          </h1>

          <div className="mt-10 space-y-6 text-base leading-6 text-white/92">
            <div className="grid grid-cols-[34px_1fr] gap-5">
              <span className="mt-1 size-2 rounded-full bg-cyan-100 shadow-[0_0_9px_4px_rgba(191,219,254,0.95),0_0_28px_15px_rgba(147,197,253,0.28)]" />
              <p>Designed for professionals to stand out in the data job market</p>
            </div>
            <div className="grid grid-cols-[34px_1fr] gap-5">
              <span className="mt-1 size-2 rounded-full bg-cyan-100 shadow-[0_0_9px_4px_rgba(191,219,254,0.95),0_0_28px_15px_rgba(147,197,253,0.28)]" />
              <p>
                AI infused curriculum that helps you master analytics tools and
                GenAI workflows
              </p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-base font-bold text-white">Master 20+ analytics tools</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {toolBadges.map((tool) => (
                <span
                  className="flex h-10 min-w-[126px] items-center justify-center gap-2 rounded-full bg-black px-4 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
                  key={tool.name}
                >
                  <Image
                    alt={tool.logoAlt}
                    className="size-5 object-contain"
                    height={24}
                    src={tool.logo}
                    width={24}
                  />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          id="register"
          className="relative rounded-[22px] border border-white/25 bg-[linear-gradient(150deg,rgba(63,91,130,0.84),rgba(44,74,116,0.86)_54%,rgba(36,57,87,0.88))] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.30)] backdrop-blur md:p-7 lg:min-h-[560px]"
        >
          <h2 className="text-[22px] font-semibold tracking-[0] text-white">
            Book a <span className="text-[#ff6a35]">free live webinar</span>{" "}
            <span className="text-base font-normal text-white/90">to know more</span>
          </h2>

          <form className="mt-5 space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-xs text-white/85">
                Name <span className="text-[#ff6a35]">*</span>
              </span>
              <input
                className="hero-input"
                name="name"
                placeholder="Enter name"
                type="text"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs text-white/85">
                Email <span className="text-[#ff6a35]">*</span>
              </span>
              <input className="hero-input" name="email" placeholder="Email" type="email" />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs text-white/85">
                Phone Number <span className="text-[#ff6a35]">*</span>
              </span>
              <div className="hero-input flex items-center gap-3 border-[#ff6940] px-3">
                <select
                  aria-label="Country code"
                  className="h-7 w-[92px] rounded border border-white/20 bg-[#111] px-2 text-sm text-white outline-none transition focus:border-[#ff7b50]"
                  defaultValue="+44"
                  name="countryCode"
                >
                  {countryDialCodes.map((country) => (
                    <option
                      key={`${country.name}-${country.code}`}
                      value={country.code}
                    >
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/86"
                  name="phone"
                  placeholder="Phone number"
                  type="tel"
                />
              </div>
              <p className="mt-0.5 text-xs leading-4 text-[#ff6a35]">
                Phone number is required
                <br />
                Experience <span className="text-[#ff6a35]">*</span>
              </p>
            </label>

            <fieldset className="space-y-2.5 pt-0.5">
              <legend className="sr-only">Experience</legend>
              {audienceOptions.map((option, index) => (
                <label
                  className="flex cursor-pointer items-center gap-3 text-sm text-white/92"
                  key={option}
                >
                  <input
                    className="size-4 accent-[#6ea8ff]"
                    defaultChecked={index === 1}
                    name="experience"
                    type="radio"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>

            <button
              className="mt-4 h-11 w-full rounded-lg bg-[#ff6838] text-base font-bold text-white shadow-[0_16px_32px_rgba(255,104,56,0.18)] transition hover:bg-[#ff7b50]"
              type="submit"
            >
              Register for <span className="line-through">£9</span> FREE
            </button>

            <p className="text-[11px] leading-[1.35] text-white/60">
              I authorise Brit Institute to contact me with course updates & offers via
              Email/SMS/Whatsapp/Call. I have read and agree to{" "}
              <a className="underline underline-offset-2" href="#">
                Privacy Policy
              </a>{" "}
              &{" "}
              <a className="underline underline-offset-2" href="#">
                Terms of use
              </a>
            </p>
          </form>
        </section>
      </div>
    </section>
  );
}
