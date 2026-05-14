"use client";

import { type FormEvent, type MouseEvent, useState } from "react";
import Image from "next/image";

import { whatsappCommunityUrl } from "@/app/data/community";
import { audienceOptions } from "@/app/data/landing-page";
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

export function CareerCounselorSection() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");

  async function submitRegistrationForm(form: HTMLFormElement) {
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitRegistrationForm(event.currentTarget);
  }

  function handleRegisterClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const form = event.currentTarget.form;

    if (!form || !form.reportValidity()) {
      return;
    }

    void submitRegistrationForm(form);
  }

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
              Reserve Your Free Webinar Seat for{" "}
              <span className="inline-flex items-baseline gap-1.5 text-[#ff6533]">
                <span className="text-[28px] font-extrabold leading-none sm:text-[30px]">
                  16
                </span>
                <span className="text-[16px] font-semibold text-white">May 2026</span>
              </span>
            </h2>
            <div className="mt-6 h-px bg-white/12" />

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-2.5 block text-xs font-medium text-white">
                  Name <span className="text-[#ff6533]">*</span>
                </span>
                <input
                  className="h-10 w-full rounded-[7px] border border-white/45 bg-[#1f1f1f] px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[#ff7447] focus:ring-2 focus:ring-[#ff7447]/25"
                  name="name"
                  placeholder="Enter name"
                  required
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
                  required
                  type="email"
                />
              </label>

              <label className="block">
                <span className="mb-2.5 block text-xs font-medium text-white">
                  Phone Number <span className="text-[#ff6533]">*</span>
                </span>
                <div className="flex h-10 w-full items-center gap-3 rounded-[7px] border border-white/45 bg-[#1f1f1f] px-3 transition focus-within:border-[#ff7447] focus-within:ring-2 focus-within:ring-[#ff7447]/25">
                  <select
                    aria-label="Country code"
                    className="h-7 w-[92px] rounded border border-white/20 bg-[#111] px-2 text-sm text-white outline-none transition focus:border-[#ff7447]"
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
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                    name="phone"
                    placeholder="Enter phone number"
                    required
                    type="tel"
                  />
                </div>
              </label>

              <fieldset className="space-y-4 pt-1">
                <legend className="mb-3 text-xs font-medium text-white">
                  Experience <span className="text-[#ff6533]">*</span>
                </legend>
                {audienceOptions.map((option, index) => (
                  <label
                    className="flex cursor-pointer items-center gap-3 text-[15px] leading-5 text-white"
                    key={option}
                  >
                    <input
                      className="size-4 accent-[#ff6533]"
                      defaultChecked={index === 1}
                      name="experience"
                      type="radio"
                      value={option}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </fieldset>

              <button
                className="h-12 w-full rounded-[7px] border border-white bg-transparent text-base font-bold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
                disabled={submitState === "submitting"}
                onClick={handleRegisterClick}
                type="button"
              >
                {submitState === "submitting"
                  ? "Registering..."
                  : "Register for the Webinar"}
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

              <p className="text-[9px] leading-[1.35] text-zinc-500 sm:text-[10px]">
                I authorise Brit Institute to contact me with webinar updates and
                offers via email, SMS, WhatsApp, and phone. I have read and agree to
                the{" "}
                <a className="underline underline-offset-2" href="#">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="underline underline-offset-2" href="#">
                  Terms of Use
                </a>
              </p>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
