"use client";

import FadeInSection from "./FadeInSection";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center"
      style={{
        backgroundImage: "url('/bg-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10">
        <FadeInSection delay={0.1}>
          <h1 className="text-5xl font-bold text-orange-500 md:text-7xl">
            ⚡ Demigod's Cricket Club ⚡
          </h1>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <p className="mt-4 text-lg text-gray-200 md:text-2xl">
            Your Passport to Revisit Cricket Stats
          </p>
          <p className="mt-2 text-sm text-gray-400">
            70% Win Rate • 346 Victories
          </p>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <a
            href="https://wa.me/919876543210?text=Hi%20Demigod's%20Cricket%20Club!%20I%20want%20to%20join!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-orange-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-700 hover:scale-105"
          >
            Join Free Trial
          </a>
        </FadeInSection>
        <FadeInSection delay={0.4}>
          <div className="mt-12 flex gap-12 text-center">
            <div>
              <p className="text-3xl font-bold text-orange-400">325+</p>
              <p className="text-sm text-gray-300">Active Players</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">550+</p>
              <p className="text-sm text-gray-300">Matches Played</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">70%</p>
              <p className="text-sm text-gray-300">Win Rate</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}