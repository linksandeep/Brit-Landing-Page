import Image from "next/image";

const companyLogos = [
  {
    name: "Databricks",
    src: "/companies/DataBricks%20logo-dark-bg.webp",
  },
  {
    name: "HSBC",
    src: "/companies/HSBC%20logo-dark-bg.webp",
  },
  {
    name: "J.P. Morgan",
    src: "/companies/JP%20morragn%20logo-dark-bg.webp",
  },
  {
    name: "PolyAI",
    src: "/companies/Poly%20ai%20logo-dark-bg.webp",
  },
  {
    name: "Sky",
    src: "/companies/Sky%20logo-Photoroom.webp",
  },
  {
    name: "Bumble",
    src: "/companies/bumble%20logo-Photoroom.webp",
  },
  {
    name: "Cloudflare",
    src: "/companies/cloudfare%20logo-dark-bg.webp",
  },
  {
    name: "Goldman Sachs",
    src: "/companies/goldman%20logo-dark-bg.webp",
  },
  {
    name: "NatWest",
    src: "/companies/natwest-dark-bg.webp",
  },
  {
    name: "Nvidia",
    src: "/companies/nvidia-dark-bg.webp",
  },
];

export function PlacementAssistanceSection() {
  return (
    <section
      id="placements"
      className="scroll-mt-14 bg-black px-5 pb-12 pt-2 sm:px-8 sm:pb-14 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1050px]">
        <h2 className="max-w-[690px] text-[30px] font-bold leading-[1.28] tracking-[0] text-white sm:text-[36px]">
          World class placement assistance that helped 30,000+ students
        </h2>

        <div className="mt-20 grid grid-cols-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-5">
          {companyLogos.map((company, index) => {
            const isDesktopRowEnd = index === 4 || index === 9;
            const isSecondDesktopRow = index >= 5;

            return (
              <div
                className={`flex h-[78px] items-center justify-center px-5 ${
                  isDesktopRowEnd ? "" : "lg:border-r lg:border-white/20"
                } ${isSecondDesktopRow ? "lg:border-t lg:border-white/20" : ""}`}
                key={company.name}
              >
                <Image
                  alt={`${company.name} logo`}
                  className="max-h-10 w-auto object-contain"
                  height={48}
                  src={company.src}
                  width={150}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
