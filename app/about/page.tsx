"use client";

import FadeInSection from "@/app/components/FadeInSection";

export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('/bg-testimonials.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          {/* HEADER */}
          <FadeInSection>
            <h1 className="text-center text-4xl font-bold text-orange-500 md:text-5xl">
              About Demigod's Cricket Club
            </h1>
            <p className="mt-2 text-center text-gray-200">
              Where Legends Rise. Building champions on and off the field.
            </p>
          </FadeInSection>

          {/* OUR STORY */}
          <FadeInSection delay={0.1}>
            <div className="mt-12 rounded-lg bg-black/60 backdrop-blur-md p-6">
              <h2 className="text-2xl font-bold text-orange-400">📖 Our Story</h2>
              <p className="mt-2 text-gray-200 leading-relaxed">
                Founded in 2020, Demigod's Cricket Club started with a group of 20
                passionate cricketers. Today, we are a thriving community of{" "}
                <strong className="text-white">325+ active players</strong> with{" "}
                <strong className="text-white">550+ matches</strong> played and a{" "}
                <strong className="text-orange-400">70% win rate</strong>.
              </p>
            </div>
          </FadeInSection>

          {/* COACHING STAFF */}
          <FadeInSection delay={0.2}>
            <div className="mt-8 rounded-lg bg-black/60 backdrop-blur-md p-6">
              <h2 className="text-2xl font-bold text-orange-400">👨‍🏫 Our Coaching Team</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-black/50 p-4">
                  <h3 className="font-bold text-white">Rahul Sharma</h3>
                  <p className="text-sm text-orange-400">Head Coach</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4">
                  <h3 className="font-bold text-white">Priya Patel</h3>
                  <p className="text-sm text-orange-400">Batting Coach</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4">
                  <h3 className="font-bold text-white">Vikram Reddy</h3>
                  <p className="text-sm text-orange-400">Bowling Coach</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4">
                  <h3 className="font-bold text-white">Ananya Singh</h3>
                  <p className="text-sm text-orange-400">Fitness & Conditioning</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* CORE VALUES */}
          <FadeInSection delay={0.3}>
            <div className="mt-8 rounded-lg bg-black/60 backdrop-blur-md p-6">
              <h2 className="text-2xl font-bold text-orange-400">⭐ Our Core Values</h2>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-black/50 p-4">
                  <p className="text-3xl">🤝</p>
                  <p className="mt-1 font-bold text-white">Community</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4">
                  <p className="text-3xl">🏆</p>
                  <p className="mt-1 font-bold text-white">Excellence</p>
                </div>
                <div className="rounded-lg bg-black/50 p-4">
                  <p className="text-3xl">💪</p>
                  <p className="mt-1 font-bold text-white">Sportsmanship</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* CTA */}
          <FadeInSection delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/919876543210?text=Hi%20Demigod's%20Cricket%20Club!%20I%20want%20to%20join!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-orange-600 px-8 py-3 font-bold text-white transition hover:bg-orange-700 hover:scale-105"
              >
                🏏 Join Free Trial
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </main>
  );
}