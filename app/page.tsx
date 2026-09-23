import HeroSection from "@/app/components/HeroSection";
import ProgramsSection from "@/app/components/ProgramsSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import FAQSection from "@/app/components/FAQSection";

export default function Home() {
  return (
    <main className="relative">
      <div
        className="fixed inset-0 z-0 bg-mobile-fix"
        style={{
          backgroundImage: "url('/bg-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ProgramsSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </main>
  );
}