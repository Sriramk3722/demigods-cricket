import HeroSection from "@/app/components/HeroSection";
import ProgramsSection from "@/app/components/ProgramsSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import FAQSection from "@/app/components/FAQSection";

export default function Home() {
  return (
    <main className="relative">
      {/* FIXED BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/bg-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT SCROLLS OVER THE IMAGE */}
      <div className="relative z-10">
        <HeroSection />
        <ProgramsSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </main>
  );
}