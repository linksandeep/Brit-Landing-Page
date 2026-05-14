"use client";

import { type FormEvent, useState } from "react";
import Image from "next/image";

import { whatsappCommunityUrl } from "@/app/data/community";
import { audienceOptions, toolBadges } from "@/app/data/landing-page";
import { submitLeadForm } from "@/app/lib/lead-form";

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
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      await submitLeadForm(form);
      form.reset();
      setSubmitState("success");
      setSubmitMessage("Registration submitted successfully. Opening WhatsApp community...");
      window.setTimeout(() => {
        window.location.href = whatsappCommunityUrl;
      }, 500);
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error && error.message
          ? error.message
          : "Submission failed. Please try again.",
      );
    }
  }

  return (
    <section className="hero-noise relative px-5 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
      <div className="mx-auto grid w-full max-w-[1064px] items-stretch gap-5 lg:grid-cols-[1.15fr_0.84fr]">
        <section className="rounded-[22px] border border-white/12 bg-[linear-gradient(140deg,rgba(38,15,68,0.92),rgba(15,24,83,0.92)_58%,rgba(33,63,129,0.78))] p-7 shadow-[0_25px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:min-h-[560px] lg:p-9">
          <h1 className="max-w-[560px] text-4xl font-semibold leading-[1.24] tracking-[0] text-white sm:text-[38px]">
            Free 2-hour Data Analytics with GenAI Webinar
          </h1>

          <div className="mt-10 max-w-[520px] space-y-5 text-base leading-6 text-white/92">
            <div className="flex items-start gap-4">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-100 shadow-[0_0_9px_4px_rgba(191,219,254,0.95),0_0_28px_15px_rgba(147,197,253,0.28)]" />
              <p className="m-0">
                Live on Saturday, 16 May 2026 for working professionals and students
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-100 shadow-[0_0_9px_4px_rgba(191,219,254,0.95),0_0_28px_15px_rgba(147,197,253,0.28)]" />
              <p className="m-0">
                In just 2 hours, learn the analytics career roadmap, essential
                tools, and practical GenAI workflows.
              </p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-base font-bold text-white">See 20+ analytics tools in action</p>
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
          <h2 className="text-[22px] font-semibold leading-[1.28] tracking-[0] text-white">
            Reserve Your Free Webinar Seat for{" "}
            <span className="inline-flex items-baseline gap-1.5 text-[#ff6a35]">
              <span className="text-[34px] font-extrabold leading-none sm:text-[38px]">
                16
              </span>
              <span className="text-[18px] font-semibold text-white">May 2026</span>
            </span>
          </h2>

          <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1.5 block text-xs text-white/85">
                Name <span className="text-[#ff6a35]">*</span>
              </span>
              <input
                className="hero-input"
                name="name"
                placeholder="Enter name"
                required
                type="text"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs text-white/85">
                Email <span className="text-[#ff6a35]">*</span>
              </span>
              <input
                className="hero-input"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
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
                  required
                  type="tel"
                />
              </div>
            </label>

            <fieldset className="space-y-2.5 pt-0.5">
              <legend className="mb-1.5 text-xs text-white/85">
                Experience <span className="text-[#ff6a35]">*</span>
              </legend>
              {audienceOptions.map((option, index) => (
                <label
                  className="flex cursor-pointer items-center gap-3 text-sm text-white/92"
                  key={option}
                >
                  <input
                    className="size-4 accent-[#6ea8ff]"
                    defaultChecked={index === 1}
                    name="experience"
                    value={option}
                    type="radio"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>

            <button
              className="mt-4 h-11 w-full rounded-lg bg-[#ff6838] text-base font-bold text-white shadow-[0_16px_32px_rgba(255,104,56,0.18)] transition hover:bg-[#ff7b50] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={submitState === "submitting"}
              type="submit"
            >
              {submitState === "submitting" ? (
                "Registering..."
              ) : (
                <>
                  Register for <span className="line-through">£9</span> FREE
                </>
              )}
            </button>

            {submitState === "success" ? (
              <p aria-live="polite" className="text-xs font-medium text-emerald-200">
                {submitMessage || "Registration submitted successfully. We'll be in touch soon."}
              </p>
            ) : null}

            {submitState === "error" ? (
              <p aria-live="polite" className="text-xs font-medium text-[#ffb199]">
                {submitMessage || "Submission failed. Please try again."}
              </p>
            ) : null}

            <p className="text-[11px] leading-[1.35] text-white/60">
              I authorise Brit Institute to contact me with webinar updates and offers
              via email, SMS, WhatsApp, and phone. I have read and agree to the{" "}
              <a className="underline underline-offset-2" href="#">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a className="underline underline-offset-2" href="#">
                Terms of Use
              </a>
            </p>
          </form>
        </section>
      </div>
    </section>
  );
}
