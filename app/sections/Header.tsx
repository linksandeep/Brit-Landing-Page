import Image from "next/image";

export function Header() {
  return (
    <header className="relative z-10 flex h-[68px] items-center justify-between px-5 sm:px-8 lg:px-[24vw]">
      <a
        className="flex items-center gap-3"
        href="#"
        aria-label="Brit Institute webinar"
      >
        <Image
          alt="Brit Institute logo"
          className="h-11 w-auto rounded-xl bg-white p-1 object-contain shadow-[0_10px_24px_rgba(255,255,255,0.14)]"
          height={40}
          priority
          src="/brit-institute-official-logo-clean.png"
          width={40}
        />
        <span className="leading-none">
          <span className="block text-[20px] font-semibold tracking-[0]">
            Brit <span className="font-light">Institute</span>
          </span>
          <span className="block text-center text-[11px] font-bold tracking-[0.05em] text-zinc-300">
            /webinar
          </span>
        </span>
      </a>

      <a
        href="#register"
        className="rounded-lg bg-[#ff6838] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(255,104,56,0.22)] transition hover:bg-[#ff7b50] sm:px-7"
      >
        Register free
      </a>
    </header>
  );
}
