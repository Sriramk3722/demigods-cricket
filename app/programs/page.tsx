"use client";

import FadeInSection from "@/app/components/FadeInSection";

export default function ProgramsPage() {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('/bg-programs.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          {/* HEADER */}
          <FadeInSection>
            <h1 className="text-center text-4xl font-bold text-orange-500 md:text-5xl">
              Our Programs
            </h1>
            <p className="mt-2 text-center text-gray-200">
              From beginners to advanced players — find the right program for you.
            </p>
          </FadeInSection>

          {/* PROGRAM CARDS */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FadeInSection delay={0.1}>
              <div className="rounded-lg bg-black/60 backdrop-blur-md p-6 text-center border border-orange-500/40 hover:border-orange-500 transition">
                <div className="text-4xl">🏆</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Demigod's Pro</h3>
                <p className="mt-2 text-sm text-gray-200">
                  For advanced players. Competitive matches, intense training.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="rounded-lg bg-black/60 backdrop-blur-md p-6 text-center border border-orange-500/40 hover:border-orange-500 transition">
                <div className="text-4xl">🎯</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Demigod's Drona</h3>
                <p className="mt-2 text-sm text-gray-200">
                  For intermediate players looking to sharpen their skills.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="rounded-lg bg-black/60 backdrop-blur-md p-6 text-center border border-orange-500/40 hover:border-orange-500 transition">
                <div className="text-4xl">🌱</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Demigod's Eklavya</h3>
                <p className="mt-2 text-sm text-gray-200">
                  For beginners. Learn the basics in a fun environment.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="rounded-lg bg-black/60 backdrop-blur-md p-6 text-center border border-orange-500/40 hover:border-orange-500 transition">
                <div className="text-4xl">🏏</div>
                <h3 className="mt-4 text-xl font-bold text-orange-400">Free Trial</h3>
                <p className="mt-2 text-sm text-gray-200">
                  Join a free trial session. No commitment required.
                </p>
              </div>
            </FadeInSection>
          </div>

          {/* HOW TO JOIN */}
          <FadeInSection delay={0.5}>
            <div className="mt-16 rounded-lg bg-black/60 backdrop-blur-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-orange-400 text-center">
                How to Join Demigod's Cricket Club
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-black/50 p-4 text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 font-bold">
                    1
                  </span>
                  <h4 className="mt-2 font-bold text-white">Fill the Form</h4>
                  <p className="text-sm text-gray-300">Contact us via WhatsApp or the contact form.</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4 text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 font-bold">
                    2
                  </span>
                  <h4 className="mt-2 font-bold text-white">Trial Session</h4>
                  <p className="text-sm text-gray-300">Visit us for a free trial session.</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4 text-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 font-bold">
                    3
                  </span>
                  <h4 className="mt-2 font-bold text-white">Join the Club</h4>
                  <p className="text-sm text-gray-300">We'll assign you to the right team.</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* CTA */}
          <FadeInSection delay={0.6}>
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
      </div>
    </main>
  );
}