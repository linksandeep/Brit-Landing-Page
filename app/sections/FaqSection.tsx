import { faqItems } from "@/app/data/landing-page";

export function FaqSection() {
  return (
    <section
      className="scroll-mt-16 bg-black px-5 pb-14 pt-4 sm:px-8 sm:pb-16 sm:pt-6 lg:px-10"
      id="faqs"
    >
      <div className="mx-auto w-full max-w-[980px]">
        <h2 className="text-[25px] font-bold leading-tight tracking-[0] text-white sm:text-[28px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 divide-y divide-white/18 sm:mt-16">
          {faqItems.map((item) => (
            <details
              className="group"
              key={item.question}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-[27px] text-[15px] font-bold leading-6 tracking-[0] text-white marker:hidden sm:gap-8 sm:text-[16px] [&::-webkit-details-marker]:hidden">
                <span className="max-w-[900px]">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 size-4 shrink-0 text-white"
                >
                  <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rounded-full bg-current" />
                  <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 rounded-full bg-current transition duration-200 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="-mt-2 max-w-[850px] pb-6 text-[15px] leading-7 text-zinc-300 sm:text-[16px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
