import Image from "next/image";

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
        title: "Certification with IIT - Data Analytics",
        links: [
          {
            label:
              "Professional Certification in Data Analytics with GenAI by Vishlesan i-hub, IIT Patna",
            href: "https://www.codingninjas.com/programs/data-analytics-iitp-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
          {
            label:
              "PG Certification in Data Analytics with GenAI by E&ICT Academy, IIT Guwahati",
            href: "https://www.codingninjas.com/programs/data-analytics-iitg-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
          {
            label:
              "Professional Certification in Data Analytics with GenAI by IIT Mandi - TIH (Technology & Innovation Hub)",
            href: "https://www.codingninjas.com/programs/data-analytics-iit-mandi-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
          {
            label:
              "Professional Certification in Data Analytics with GenAI by IITM Pravartak, TIH IIT Madras",
            href: "https://www.codingninjas.com/programs/data-analytics-iitm-pravartak-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Job bootcamp - Data Analytics",
        links: [
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp by Brit Institute",
            href: "https://www.codingninjas.com/programs/job-bootcamp-data-analytics?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp by IBM and Microsoft PL-300 Certification",
            href: "https://www.codingninjas.com/programs/job-bootcamp-data-analytics-ibm?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Certification - Generative AI",
        links: [
          {
            label:
              "Advanced Certification in GenAI & Multi Agent Systems by IBM Certification",
            href: "https://www.codingninjas.com/programs/genai-ibm-advanced-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
          {
            label:
              "Advanced Certification in GenAI and Multi-Agent Systems Program by Brit Institute",
            href: "http://codingninjas.com/programs/gen-ai-advanced-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Certification with IIT - Generative AI",
        links: [
          {
            label:
              "Professional Certification in GenAI and Multi-Agent Systems by IIT Mandi - TIH (Technology & Innovation Hub)",
            href: "https://www.codingninjas.com/programs/gen-ai-pg-iit-mandi-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
          {
            label:
              "Advanced Certification in GenAI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras",
            href: "https://www.codingninjas.com/programs/generative-ai-for-non-tech-professionals-iitm-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Job bootcamp - Data Analytics",
        links: [
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp by Brit Institute",
            href: "https://www.codingninjas.com/programs/job-bootcamp-web-development?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Job bootcamp - Data Analytics",
        links: [
          {
            label:
              "Data Analytics with GenAI Program by Brit Institute Job Bootcamp by Brit Institute",
            href: "https://www.codingninjas.com/programs/job-bootcamp-data-science?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
    ],
  },
  {
    title: "For College Students",
    groups: [
      {
        title: "Certification with IIT - Data Analytics",
        links: [
          {
            label:
              "Training and Internship Certification in Data Analytics with GenAI by Vishlesan i-hub, IIT Patna",
            href: "https://www.codingninjas.com/programs/data-analytics-students-iitp-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
          {
            label:
              "Advanced Certification in Data Analytics with GenAI by IIT Mandi - TIH (Technology & Innovation Hub)",
            href: "https://www.codingninjas.com/programs/data-analytics-iit-mandi-students-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Certification with IIT - Generative AI",
        links: [
          {
            label:
              "Advanced Certification in GenAI and Multi-Agent Systems by IIT Mandi - TIH (Technology & Innovation Hub)",
            href: "https://www.codingninjas.com/programs/gen-ai-students-iit-mandi-advanced-certification?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Certification with IIT - Data Analytics",
        links: [
          {
            label:
              "Advanced Certification in Data Analytics with GenAI by IITM Pravartak, TIH IIT Madras",
            href: "https://www.codingninjas.com/careercamp/iitm-student-training-and-internship-certification-fswd/?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
      {
        title: "Certification with IIT - Data Analytics",
        links: [
          {
            label:
              "Advanced Certification in Data Analytics and GenAI by IITM Pravartak, TIH IIT Madras",
            href: "https://www.codingninjas.com/careercamp/iitm-student-training-and-internship-certification-dsa/?utm_source=internal&utm_medium=internal&utm_campaign=important_links",
          },
        ],
      },
    ],
  },
];

const paymentBadges = [
  {
    alt: "Visa",
    src: "https://files.codingninjas.com/frame-1000003729-32279.webp",
    width: 56,
  },
  {
    alt: "Paypal",
    src: "https://files.codingninjas.com/frame-1000003730-32280.webp",
    width: 56,
  },
  {
    alt: "UPI Icon",
    src: "https://files.codingninjas.com/upi-32277.webp",
    width: 56,
  },
  {
    alt: "No Cost EMI",
    src: "https://files.codingninjas.com/no-cost-emi-32275.webp",
    width: 96,
  },
  {
    alt: "Secure Payment",
    src: "https://files.codingninjas.com/100-32278.webp",
    width: 208,
  },
  {
    alt: "Razorpay",
    src: "https://files.codingninjas.com/razorpay-32276.webp",
    width: 68,
  },
];

function LinksRow({ links }: { links: ImportantLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      {links.map((link, index) => (
        <a
          className="inline-flex items-center text-[12px] font-bold leading-5 text-zinc-300 underline decoration-zinc-500 underline-offset-2 transition hover:text-white hover:decoration-white sm:text-[13px]"
          href={link.href}
          key={link.href}
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
        {audience.groups.map((group) => (
          <div
            className="space-y-2"
            key={group.title}
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
    <section className="bg-black px-5 pb-10 pt-20 sm:px-8 sm:pb-14 sm:pt-24 lg:px-10">
      <div className="mx-auto w-full max-w-[980px]">
        <h2 className="text-[25px] font-bold leading-tight tracking-[0] text-white sm:text-[28px]">
          Important Links
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
                <Image
                  alt={badge.alt}
                  className="h-6 rounded-[4px] bg-white object-contain"
                  height={24}
                  key={badge.alt}
                  src={badge.src}
                  width={badge.width}
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {paymentBadges.slice(4).map((badge) => (
                <Image
                  alt={badge.alt}
                  className="h-6 rounded-[4px] bg-white object-contain"
                  height={24}
                  key={badge.alt}
                  src={badge.src}
                  width={badge.width}
                />
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
