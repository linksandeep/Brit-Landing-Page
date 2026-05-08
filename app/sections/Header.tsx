export function Header() {
  return (
    <header className="relative z-10 flex h-[68px] items-center justify-between px-5 sm:px-8 lg:px-[24vw]">
      <a
        className="flex items-center gap-2"
        href="#"
        aria-label="Brit Institute job bootcamp"
      >
        <span className="grid size-7 place-items-center rounded-full bg-white shadow-sm">
          <span className="rounded-[4px] bg-[#ff6a35] px-1.5 py-0.5 text-[12px] font-black leading-none text-white">
            C
          </span>
        </span>
        <span className="leading-none">
          <span className="block text-[20px] font-semibold tracking-[0]">
            coding<span className="font-light">ninjas</span>
          </span>
          <span className="block text-center text-[11px] font-bold tracking-[0.05em] text-zinc-300">
            /job-bootcamp
          </span>
        </span>
      </a>

      <a
        href="#register"
        className="rounded-lg bg-[#ff6838] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(255,104,56,0.22)] transition hover:bg-[#ff7b50] sm:px-7"
      >
        Request callback
      </a>
    </header>
  );
}
