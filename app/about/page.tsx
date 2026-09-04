"use client";

import FadeInSection from "@/app/components/FadeInSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black px-4 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        
        {/* ========== 1. HEADER ========== */}
        <FadeInSection>
          <h1 className="text-4xl font-bold text-orange-500 md:text-5xl">
            About Demigod's Cricket Club
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            Where Legends Rise. Building champions on and off the field.
          </p>
        </FadeInSection>

        {/* ========== 2. OUR STORY ========== */}
        <FadeInSection delay={0.1}>
          <div className="mt-12 rounded-lg bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold text-orange-400">📖 Our Story</h2>
            <p className="mt-2 text-gray-400 leading-relaxed">
              Founded in 2020, Demigod's Cricket Club started with a group of 20 
              passionate cricketers who wanted to create a space where talent meets 
              opportunity. What began as weekend friendly matches has now grown 
              into a thriving community of <strong className="text-white">325+ active players</strong>.
            </p>
            <p className="mt-2 text-gray-400 leading-relaxed">
              Today, we are one of the most active cricket clubs in the region, 
              with <strong className="text-white">550+ matches</strong> played and a 
              <strong className="text-orange-400"> 70% win rate</strong>. We believe in 
              nurturing talent, building friendships, and creating memories that last a lifetime.
            </p>
          </div>
        </FadeInSection>

        {/* ========== 3. COACHING STAFF ========== */}
        <FadeInSection delay={0.2}>
          <div className="mt-8 rounded-lg bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold text-orange-400">👨‍🏫 Our Coaching Team</h2>
            <p className="mt-1 text-sm text-gray-500">
              Learn from the best. Our coaches bring years of experience to the nets.
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-black p-4">
                <h3 className="font-bold text-white">Rahul Sharma</h3>
                <p className="text-sm text-orange-400">Head Coach</p>
                <p className="mt-1 text-sm text-gray-500">15+ years of coaching experience</p>
              </div>
              <div className="rounded-lg bg-black p-4">
                <h3 className="font-bold text-white">Priya Patel</h3>
                <p className="text-sm text-orange-400">Batting Coach</p>
                <p className="mt-1 text-sm text-gray-500">Former State-level player</p>
              </div>
              <div className="rounded-lg bg-black p-4">
                <h3 className="font-bold text-white">Vikram Reddy</h3>
                <p className="text-sm text-orange-400">Bowling Coach</p>
                <p className="mt-1 text-sm text-gray-500">Specialist in fast bowling techniques</p>
              </div>
              <div className="rounded-lg bg-black p-4">
                <h3 className="font-bold text-white">Ananya Singh</h3>
                <p className="text-sm text-orange-400">Fitness & Conditioning</p>
                <p className="mt-1 text-sm text-gray-500">Certified sports physiotherapist</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* ========== 4. FACILITIES ========== */}
        <FadeInSection delay={0.3}>
          <div className="mt-8 rounded-lg bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold text-orange-400">🏟️ Our Facilities</h2>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>🏏 <strong className="text-white">Play Arena, Sarjapur Road</strong> — Our home ground with turf pitches</li>
              <li>💡 <strong className="text-white">Floodlit Nets</strong> — Practice anytime, even after sunset</li>
              <li>🏋️ <strong className="text-white">Gym & Fitness Center</strong> — Strength and conditioning facilities</li>
              <li>📊 <strong className="text-white">Video Analysis Room</strong> — Review and improve your technique</li>
              <li>🛡️ <strong className="text-white">High-Quality Equipment</strong> — Bats, pads, helmets, and more available</li>
            </ul>
          </div>
        </FadeInSection>

        {/* ========== 5. CORE VALUES ========== */}
        <FadeInSection delay={0.4}>
          <div className="mt-8 rounded-lg bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold text-orange-400">⭐ Our Core Values</h2>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-black p-4">
                <p className="text-3xl">🤝</p>
                <p className="mt-1 font-bold text-white">Community</p>
                <p className="text-sm text-gray-500">Together we grow</p>
              </div>
              <div className="rounded-lg bg-black p-4">
                <p className="text-3xl">🏆</p>
                <p className="mt-1 font-bold text-white">Excellence</p>
                <p className="text-sm text-gray-500">Push your limits</p>
              </div>
              <div className="rounded-lg bg-black p-4">
                <p className="text-3xl">💪</p>
                <p className="mt-1 font-bold text-white">Sportsmanship</p>
                <p className="text-sm text-gray-500">Play with integrity</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* ========== 6. FINAL CTA ========== */}
        <FadeInSection delay={0.5}>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white">
              Ready to become a Demigod?
            </h2>
            <p className="mt-2 text-gray-400">
              Join the club and start your journey today.
            </p>
            <a
              href="https://wa.me/916281529800?text=Hi%20Demigod's%20Cricket%20Club!%20I%20want%20to%20join!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-orange-600 px-8 py-3 font-bold text-white transition hover:bg-orange-700 hover:scale-105"
            >
              🏏 Join Free Trial
            </a>
          </div>
        </FadeInSection>

      </div>
    </main>
  );
}