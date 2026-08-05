"use client";

import FadeInSection from "./FadeInSection";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
      <FadeInSection delay={0.1}>
        <h1 className="text-5xl font-bold text-orange-500 md:text-7xl">
          ⚡ Demigod's Cricket Club ⚡
        </h1>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <p className="mt-4 text-lg text-gray-400 md:text-2xl">
          Your Passport to Revisit Cricket Stats
        </p>
        <p className="mt-2 text-sm text-gray-500">
          70% Win Rate • 346 Victories
        </p>
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <button className="mt-8 rounded-lg bg-orange-600 px-8 py-4 text-lg font-bold transition hover:bg-orange-700 hover:scale-105">
          Join Free Trial
        </button>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <div className="mt-12 flex gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-orange-400">325+</p>
            <p className="text-sm text-gray-500">Active Players</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-400">550+</p>
            <p className="text-sm text-gray-500">Matches Played</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-400">70%</p>
            <p className="text-sm text-gray-500">Win Rate</p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}