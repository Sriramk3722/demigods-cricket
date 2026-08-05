import HeroSection from "@/app/components/HeroSection";
import ProgramsSection from "@/app/components/ProgramsSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import FAQSection from "@/app/components/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgramsSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}