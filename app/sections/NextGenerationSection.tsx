import Image from "next/image";

export function NextGenerationSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_47%,rgba(174,91,12,0.44),transparent_28%),radial-gradient(circle_at_50%_40%,rgba(255,112,30,0.12),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto w-full max-w-[1050px]">
        <h2 className="text-[30px] font-bold leading-tight tracking-[0] text-white sm:text-[36px]">
          Step into the next generation of learning
        </h2>

        <div className="mt-12 overflow-hidden rounded-[18px] border border-white/20 bg-[#141414] shadow-[0_34px_90px_rgba(0,0,0,0.64),0_0_120px_rgba(174,91,12,0.18)]">
          <Image
            alt="Coding practice interface with Ninja AI assistant"
            className="h-auto w-full"
            height={1503}
            priority={false}
            src="/potd-easy-code-1767694775.webp"
            width={2931}
          />
        </div>
      </div>
    </section>
  );
}
