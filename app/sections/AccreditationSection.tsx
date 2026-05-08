import Image from "next/image";

function NsdcBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[#1b4f86]">
      <span
        aria-hidden="true"
        className="relative h-10 w-8 shrink-0"
      >
        <span className="absolute left-3 top-1 h-8 w-1 rotate-[18deg] rounded-full bg-[#1269b0]" />
        <span className="absolute left-1 top-2 h-5 w-1 -rotate-[48deg] rounded-full bg-[#65ad31]" />
        <span className="absolute right-0 top-2 h-5 w-1 rotate-[48deg] rounded-full bg-[#f26b2e]" />
        <span className="absolute left-[13px] top-0 size-2 rounded-full bg-[#1269b0]" />
        <span className="absolute left-0 top-1 size-2 rounded-full bg-[#65ad31]" />
        <span className="absolute right-0 top-1 size-2 rounded-full bg-[#f26b2e]" />
      </span>
      <span className="leading-none">
        <span className="block text-[13px] font-black tracking-[0.22em] text-zinc-800">
          N S D C
        </span>
        <span className="mt-1 block text-[9px] font-semibold leading-[1.1]">
          National
          <br />
          Skill Development
          <br />
          Corporation
        </span>
      </span>
    </div>
  );
}

export function AccreditationSection() {
  return (
    <section className="bg-black px-5 pb-12 pt-4 sm:px-8 sm:pb-14 sm:pt-6 lg:px-10">
      <div className="mx-auto w-full max-w-[980px]">
        <h2 className="text-[29px] font-bold leading-tight tracking-[0] text-white sm:text-[34px]">
          We are recognised, trusted, accredited!
        </h2>

        <div className="mt-12 rounded-[20px] border border-white/20 bg-[#191919] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="grid items-center gap-8 rounded-[14px] border border-white/8 bg-black px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-9">
            <div className="relative mx-auto aspect-[1652/1170] w-full max-w-[430px] overflow-hidden rounded-[4px]">
              <Image
                alt="NSDC certificate of partnership"
                className="object-contain"
                fill
                sizes="(max-width: 1024px) 82vw, 430px"
                src="/nsdc_certificate-1772081941.webp"
              />
            </div>

            <div className="lg:pl-1">
              <h3 className="text-[23px] font-bold leading-tight tracking-[0] text-white sm:text-[25px]">
                NSDC approved training partners
              </h3>
              <p className="mt-5 max-w-[440px] text-[19px] leading-7 text-zinc-300 sm:text-[20px]">
                Assurance of quality &amp; industry relevance of our teaching
                material from a national institute
              </p>
              <div className="mt-4">
                <NsdcBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
