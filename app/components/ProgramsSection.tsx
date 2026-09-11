"use client";

import FadeInSection from "./FadeInSection";

export default function ProgramsSection() {
  return (
    <section
      className="relative flex min-h-screen items-center px-4 py-20"
      style={{
        backgroundImage: "url('/bg-programs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeInSection>
          <h2 className="mb-12 text-center text-4xl font-bold text-orange-500">
            Our Programs
          </h2>
        </FadeInSection>
        <div className="grid gap-6 md:grid-cols-3">
          <FadeInSection delay={0.1}>
            <div className="rounded-lg bg-black/70 backdrop-blur-sm p-6 text-center border border-orange-800/30 hover:border-orange-500 transition">
              <h3 className="text-xl font-bold text-orange-400">Free Trial</h3>
              <p className="mt-2 text-gray-300">
                Come for a free session and experience our training firsthand.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="rounded-lg bg-black/70 backdrop-blur-sm p-6 text-center border border-orange-800/30 hover:border-orange-500 transition">
              <h3 className="text-xl font-bold text-orange-400">Pro League</h3>
              <p className="mt-2 text-gray-300">
                Compete in our internal IPL-style league with 8 teams.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="rounded-lg bg-black/70 backdrop-blur-sm p-6 text-center border border-orange-800/30 hover:border-orange-500 transition">
              <h3 className="text-xl font-bold text-orange-400">Weekend Nets</h3>
              <p className="mt-2 text-gray-300">
                Regular practice sessions with professional coaches.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}