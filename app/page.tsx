import { AiJobsSection } from "@/app/sections/AiJobsSection";
import { AccreditationSection } from "@/app/sections/AccreditationSection";
import { CareerCounselorSection } from "@/app/sections/CareerCounselorSection";
import { CertificationLoveSection } from "@/app/sections/CertificationLoveSection";
import { CurriculumSection } from "@/app/sections/CurriculumSection";
import { FaqSection } from "@/app/sections/FaqSection";
import { FacultySection } from "@/app/sections/FacultySection";
import { FooterSection } from "@/app/sections/FooterSection";
import { Header } from "@/app/sections/Header";
import { HeroSection } from "@/app/sections/HeroSection";
import { ImportantLinksSection } from "@/app/sections/ImportantLinksSection";
import { JobAssistanceSection } from "@/app/sections/JobAssistanceSection";
import { NextGenerationSection } from "@/app/sections/NextGenerationSection";
import { PlacementAssistanceSection } from "@/app/sections/PlacementAssistanceSection";
import { PlansSection } from "@/app/sections/PlansSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection";
import { SectionTabsNav } from "@/app/sections/SectionTabsNav";
import { StatsSection } from "@/app/sections/StatsSection";
import { StudentVideoTestimonialsSection } from "@/app/sections/StudentVideoTestimonialsSection";
import { SupportCtaSection } from "@/app/sections/SupportCtaSection";
import { TenXClubSection } from "@/app/sections/TenXClubSection";
import { TestimonialsSection } from "@/app/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AiJobsSection />
      <SectionTabsNav />
      <ProjectsSection />
      <CurriculumSection />
      <TestimonialsSection />
      <NextGenerationSection />
      <SupportCtaSection />
      <PlacementAssistanceSection />
      <JobAssistanceSection />
      <TenXClubSection />
      <FacultySection />
      <CertificationLoveSection />
      <StudentVideoTestimonialsSection />
      <PlansSection />
      <CareerCounselorSection />
      <FaqSection />
      <AccreditationSection />
      <ImportantLinksSection />
      <FooterSection />
    </main>
  );
}
