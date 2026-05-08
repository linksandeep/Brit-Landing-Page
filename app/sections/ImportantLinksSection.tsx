type ImportantLink = {
  label: string;
  href: string;
};

type LinkGroup = {
  title: string;
  links: ImportantLink[];
};

type LinkAudience = {
  title: string;
  groups: LinkGroup[];
};

const importantLinks: LinkAudience[] = [
  {
    title: "For working professionals",
    groups: [
      {
        title: "University Approved Certification - Data Analytics",
        links: [
          {
            label:
              "Professional Certification in Data Analytics with GenAI by a university-approved partner",
            href: "#university-approved-data-analytics-professional",
          },
          {
            label:
              "PG Certification in Data Analytics with GenAI by a university-approved partner",
            href: "#university-approved-data-analytics-pg",
          },
          {
            label:
              "Professional Certification in Data Analytics with GenAI by a university-approved innovation hub",
            href: "#university-approved-data-analytics-innovation",
          },
          {
            label:
              "Professional Certification in Data Analytics with GenAI by a university-approved technology hub",
            href: "#university-approved-data-analytics-technology",
          },
        ],
      },
      {
        title: "Job bootcamp - Data Analytics",
        links: [
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp by Brit Institute",
            href: "#plans",
          },
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp with Microsoft Certification",
            href: "#plans",
          },
        ],
      },
      {
        title: "Certification - Generative AI",
        links: [
          {
            label:
              "Advanced Certification in GenAI & Multi Agent Systems with Microsoft Certification",
            href: "#plans",
          },
          {
            label:
              "Advanced Certification in GenAI and Multi-Agent Systems Program by Brit Institute",
            href: "#plans",
          },
        ],
      },
      {
        title: "University Approved Certification - Generative AI",
        links: [
          {
            label:
              "Professional Certification in GenAI and Multi-Agent Systems by a university-approved innovation hub",
            href: "#university-approved-genai-innovation",
          },
          {
            label:
              "Advanced Certification in GenAI for Non-Tech Professionals by a university-approved technology hub",
            href: "#university-approved-genai-technology",
          },
        ],
      },
      {
        title: "Job bootcamp - Data Analytics",
        links: [
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp by Brit Institute",
            href: "#plans",
          },
        ],
      },
      {
        title: "Job bootcamp - Data Analytics",
        links: [
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp by Brit Institute",
            href: "#plans",
          },
        ],
      },
    ],
  },
  {
    title: "For College Students",
    groups: [
      {
        title: "University Approved Certification - Data Analytics",
        links: [
          {
            label:
              "Training and Internship Certification in Data Analytics with GenAI by a university-approved partner",
            href: "#student-university-approved-data-analytics-training",
          },
          {
            label:
              "Advanced Certification in Data Analytics with GenAI by a university-approved innovation hub",
            href: "#student-university-approved-data-analytics-innovation",
          },
        ],
      },
      {
        title: "University Approved Certification - Generative AI",
        links: [
          {
            label:
              "Advanced Certification in GenAI and Multi-Agent Systems by a university-approved innovation hub",
            href: "#student-university-approved-genai-innovation",
          },
        ],
      },
      {
        title: "University Approved Certification - Data Analytics",
        links: [
          {
            label:
              "Advanced Certification in Data Analytics with GenAI by a university-approved technology hub",
            href: "#student-university-approved-data-analytics-technology",
          },
        ],
      },
      {
        title: "University Approved Certification - Data Analytics",
        links: [
          {
            label:
              "Advanced Certification in Data Analytics and GenAI by a university-approved technology hub",
            href: "#student-university-approved-data-analytics-genai",
          },
        ],
      },
    ],
  },
];

const paymentBadges = [
  "Visa",
  "Paypal",
  "UPI",
  "No Cost EMI",
  "100% Secure",
  "Razorpay",
];

function LinksRow({ links }: { links: ImportantLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      {links.map((link, index) => (
        <a
          className="inline-flex items-center text-[12px] font-bold leading-5 text-zinc-300 underline decoration-zinc-500 underline-offset-2 transition hover:text-white hover:decoration-white sm:text-[13px]"
          href={link.href}
          key={`${link.href}-${link.label}`}
        >
          {link.label}
          {index < links.length - 1 ? (
            <span
              aria-hidden="true"
              className="ml-3 hidden text-zinc-300 sm:inline"
            >
              |
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
}

function AudienceLinks({ audience }: { audience: LinkAudience }) {
  return (
    <div className="grid gap-5 md:grid-cols-[140px_1fr] lg:grid-cols-[152px_1fr]">
      <h3 className="m-0 text-[13px] font-bold leading-5 text-white">
        {audience.title}
      </h3>

      <div className="space-y-4">
        {audience.groups.map((group, index) => (
          <div
            className="space-y-2"
            key={`${group.title}-${index}`}
          >
            <p className="m-0 text-[13px] font-bold leading-5 text-white">
              {group.title}
            </p>
            <LinksRow links={group.links} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImportantLinksSection() {
  return (
    <section className="bg-black px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:px-10">
      <div className="mx-auto w-full max-w-[980px]">
        <h2 className="text-[25px] font-bold leading-tight tracking-[0] text-white sm:text-[28px]">
          Important
        </h2>

        <div className="mt-6 space-y-9">
          {importantLinks.map((audience, index) => (
            <div key={audience.title}>
              {index > 0 ? <div className="mb-9 h-px bg-white/20" /> : null}
              <AudienceLinks audience={audience} />
            </div>
          ))}
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-[152px_1fr] md:items-center">
          <p className="m-0 max-w-[200px] text-[13px] font-bold leading-5 text-white">
            We accept payments using:
          </p>

          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
            <div className="flex flex-wrap items-center gap-3">
              {paymentBadges.slice(0, 4).map((badge) => (
                <span
                  className="inline-flex h-6 items-center rounded-[4px] bg-white px-3 text-[11px] font-bold leading-none text-zinc-950"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {paymentBadges.slice(4).map((badge) => (
                <span
                  className="inline-flex h-6 items-center rounded-[4px] bg-white px-3 text-[11px] font-bold leading-none text-zinc-950"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-[42px] font-black leading-none tracking-[0] sm:text-[72px] lg:text-[96px]">
          <span className="brit-institute-shimmer">Brit Institute</span>
        </div>
      </div>
    </section>
  );
}
