const footerColumns = [
  {
    title: "Coding Ninjas",
    links: [
      "Careers",
      "Privacy policy",
      "Terms & conditions",
      "Pricing & refund policy",
      "Bug bounty",
      "Review",
      "Press release",
    ],
  },
  {
    title: "Products",
    links: [
      "Job Bootcamp",
      "Code 360",
      "Professional Certifications",
      "Student Certifications",
    ],
  },
  {
    title: "Community",
    links: ["10X Club", "Student Chapters", "Hire from us"],
  },
];

function CodingNinjasMark() {
  return (
    <span className="grid size-7 place-items-center rounded-full bg-white">
      <span className="rounded-[4px] bg-[#ff6a35] px-1.5 py-0.5 text-[12px] font-black leading-none text-white">
        C
      </span>
    </span>
  );
}

function CodingNinjasLogo({ bootcamp = false }: { bootcamp?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CodingNinjasMark />
      <span className="leading-none">
        <span className="block text-[21px] font-semibold tracking-[0] text-white">
          coding<span className="font-light text-zinc-300">ninjas</span>
        </span>
        {bootcamp ? (
          <span className="block text-right text-[12px] font-bold tracking-[0.03em] text-white">
            /job-bootcamp
          </span>
        ) : null}
      </span>
    </span>
  );
}

function Code360Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <CodingNinjasMark />
      <span className="leading-none">
        <span className="block text-[24px] font-black tracking-[0] text-white">
          <span className="text-[#ff6a35]">code</span>360
        </span>
        <span className="block text-[11px] font-medium text-zinc-300">
          by codingninjas
        </span>
      </span>
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6 shrink-0 text-zinc-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.6 2.7c.8-.3 1.7.1 2 .9l1.2 2.9c.3.7.1 1.5-.5 2L8 9.6c1 2 2.5 3.5 4.5 4.5l1.1-1.3c.5-.6 1.3-.8 2-.5l2.9 1.2c.8.3 1.2 1.2.9 2l-.7 2.3c-.3.9-1.1 1.5-2 1.5C9.9 19.3 4.7 14.1 4.7 7.3c0-.9.6-1.7 1.5-2l.4-.1Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6 shrink-0 text-zinc-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.5 5.5h15c.9 0 1.5.7 1.5 1.5v10c0 .9-.6 1.5-1.5 1.5h-15c-.8 0-1.5-.6-1.5-1.5V7c0-.8.7-1.5 1.5-1.5Zm.7 2.2 6.8 5 6.8-5H5.2Zm13.8 2.1-6.1 4.5c-.5.4-1.2.4-1.8 0L5 9.8v6.7h14V9.8Z" />
    </svg>
  );
}

function SocialLink({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      aria-label={label}
      className="grid size-7 place-items-center text-zinc-400 transition hover:text-white"
      href="#"
    >
      {children}
    </a>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <SocialLink label="Instagram">
        <svg
          aria-hidden="true"
          className="size-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.4 2.5h9.2c2.7 0 4.9 2.2 4.9 4.9v9.2c0 2.7-2.2 4.9-4.9 4.9H7.4c-2.7 0-4.9-2.2-4.9-4.9V7.4c0-2.7 2.2-4.9 4.9-4.9Zm0 2.2c-1.5 0-2.7 1.2-2.7 2.7v9.2c0 1.5 1.2 2.7 2.7 2.7h9.2c1.5 0 2.7-1.2 2.7-2.7V7.4c0-1.5-1.2-2.7-2.7-2.7H7.4Zm4.6 3.2a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 2.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm4.5-2.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
        </svg>
      </SocialLink>
      <SocialLink label="Facebook">
        <span className="text-[30px] font-black leading-none">f</span>
      </SocialLink>
      <SocialLink label="LinkedIn">
        <span className="rounded-[3px] bg-current px-1.5 py-0.5 text-[19px] font-black leading-none text-black">
          in
        </span>
      </SocialLink>
      <SocialLink label="Twitter">
        <svg
          aria-hidden="true"
          className="size-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.8 6.1c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.8-2.4.9a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.5 5c-.3.5-.5 1.2-.5 1.9 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.5 2.6A7.7 7.7 0 0 1 3 17.5a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.9-.5 1.6-1.1 2.2-1.8Z" />
        </svg>
      </SocialLink>
      <SocialLink label="YouTube">
        <svg
          aria-hidden="true"
          className="h-7 w-8"
          fill="currentColor"
          viewBox="0 0 32 24"
        >
          <path d="M30.9 5.1c-.3-1.3-1.3-2.3-2.6-2.6C26 2 16 2 16 2S6 2 3.7 2.5C2.4 2.8 1.4 3.8 1.1 5.1.6 7.4.6 12 .6 12s0 4.6.5 6.9c.3 1.3 1.3 2.3 2.6 2.6C6 22 16 22 16 22s10 0 12.3-.5c1.3-.3 2.3-1.3 2.6-2.6.5-2.3.5-6.9.5-6.9s0-4.6-.5-6.9ZM13 16.2V7.8l7.3 4.2-7.3 4.2Z" />
        </svg>
      </SocialLink>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-black px-5 pb-24 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.8fr_0.95fr_0.8fr] md:gap-10">
          <div>
            <a
              aria-label="Coding Ninjas"
              href="#"
            >
              <CodingNinjasLogo />
            </a>

            <div className="mt-9">
              <h2 className="text-[15px] font-bold leading-none text-white">
                Contact us
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-none text-zinc-300">
                <a
                  className="flex items-center gap-5 transition hover:text-white"
                  href="tel:18001233598"
                >
                  <PhoneIcon />
                  <span>1800-123-3598</span>
                </a>
                <a
                  className="flex items-center gap-5 transition hover:text-white"
                  href="mailto:contact@codingninjas.com"
                >
                  <MailIcon />
                  <span>contact@codingninjas.com</span>
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-[15px] font-bold leading-none text-white">
                Our offerings
              </h2>
              <div className="mt-6 space-y-7">
                <a
                  aria-label="Coding Ninjas Job Bootcamp"
                  className="inline-flex"
                  href="#"
                >
                  <CodingNinjasLogo bootcamp />
                </a>
                <a
                  aria-label="Code 360 by Coding Ninjas"
                  className="inline-flex"
                  href="#"
                >
                  <Code360Logo />
                </a>
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav
              aria-label={column.title}
              key={column.title}
            >
              <h2 className="text-[15px] font-bold leading-none text-white">
                {column.title}
              </h2>
              <ul className="mt-7 space-y-5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      className="text-[13px] font-medium leading-none text-zinc-300 transition hover:text-white"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 h-px bg-white/20" />

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] font-medium text-zinc-300">
            Copyright © Sunrise Mentors Pvt. Ltd.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
