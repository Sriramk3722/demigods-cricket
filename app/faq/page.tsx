"use client";

import FadeInSection from "@/app/components/FadeInSection";

export default function FAQPage() {
  return (
    <main className="bg-black text-white">
      {/* PAGE HEADER WITH BACKGROUND */}
      <section
        className="relative flex h-64 items-center justify-center px-4"
        style={{
          backgroundImage: "url('/bg-faq.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-orange-500 md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-gray-200">
            Everything you need to know before joining.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-4">
          <FadeInSection delay={0.1}>
            <details className="rounded-lg bg-zinc-900 p-4">
              <summary className="cursor-pointer font-bold text-orange-400">
                Who can join Demigod's Cricket Club?
              </summary>
              <p className="mt-2 text-gray-400">
                Anyone passionate about cricket! We welcome players of all skill levels.
              </p>
            </details>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <details className="rounded-lg bg-zinc-900 p-4">
              <summary className="cursor-pointer font-bold text-orange-400">
                How much does it cost to join?
              </summary>
              <p className="mt-2 text-gray-400">
                Flexible plans starting at ₹2,500/month. Free trial available.
              </p>
            </details>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <details className="rounded-lg bg-zinc-900 p-4">
              <summary className="cursor-pointer font-bold text-orange-400">
                When and where are the practice sessions?
              </summary>
              <p className="mt-2 text-gray-400">
                Every weekend at Play Arena, Sarjapur Road. Sat: 7-10 AM, Sun: 7-12 PM.
              </p>
            </details>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <details className="rounded-lg bg-zinc-900 p-4">
              <summary className="cursor-pointer font-bold text-orange-400">
                Do I need to bring my own equipment?
              </summary>
              <p className="mt-2 text-gray-400">
                We recommend bringing your own bat and pads. Spare equipment available for beginners.
              </p>
            </details>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/919876543210?text=Hi%20Demigod's%20Cricket%20Club!%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700 hover:scale-105"
              >
                💬 Chat with us on WhatsApp
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}