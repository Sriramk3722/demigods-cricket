"use client";

import FadeInSection from "@/app/components/FadeInSection";

export default function ProgramsPage() {
  return (
    <main className="bg-black text-white">
      {/* PAGE HEADER WITH BACKGROUND */}
      <section
        className="relative flex h-64 items-center justify-center px-4"
        style={{
          backgroundImage: "url('/bg-programs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-orange-500 md:text-5xl">
            Our Programs
          </h1>
          <p className="mt-2 text-gray-200">
            From beginners to advanced players — find the right program for you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FadeInSection delay={0.1}>
              <div className="rounded-lg bg-zinc-900 p-6 text-center border border-orange-800/30 hover:border-orange-500 transition">
                <div className="text-4xl">🏆</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Demigod's Pro</h3>
                <p className="mt-2 text-sm text-gray-400">
                  For advanced players. Competitive matches, intense training.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="rounded-lg bg-zinc-900 p-6 text-center border border-orange-800/30 hover:border-orange-500 transition">
                <div className="text-4xl">🎯</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Demigod's Drona</h3>
                <p className="mt-2 text-sm text-gray-400">
                  For intermediate players looking to sharpen their skills.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="rounded-lg bg-zinc-900 p-6 text-center border border-orange-800/30 hover:border-orange-500 transition">
                <div className="text-4xl">🌱</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Demigod's Eklavya</h3>
                <p className="mt-2 text-sm text-gray-400">
                  For beginners. Learn the basics in a fun environment.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="rounded-lg bg-zinc-900 p-6 text-center border border-orange-800/30 hover:border-orange-500 transition">
                <div className="text-4xl">🏏</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Free Trial</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Join a free trial session. No commitment required.
                </p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.5}>
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/919876543210?text=Hi%20Demigod's%20Cricket%20Club!%20I%20want%20to%20join!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-orange-600 px-8 py-3 font-bold text-white transition hover:bg-orange-700 hover:scale-105"
              >
                🏏 Start Free Trial
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}