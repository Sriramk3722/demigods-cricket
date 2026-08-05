"use client";

import FadeInSection from "./FadeInSection";

export default function ProgramsSection() {
  return (
    <section className="bg-zinc-900 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeInSection>
          <h2 className="mb-12 text-center text-4xl font-bold text-orange-500">
            Our Programs
          </h2>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-3">
          <FadeInSection delay={0.1}>
            <div className="rounded-lg bg-black p-6 text-center hover:bg-zinc-800">
              <h3 className="text-xl font-bold text-orange-400">Free Trial</h3>
              <p className="mt-2 text-gray-400">
                Come for a free session and experience our training firsthand.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="rounded-lg bg-black p-6 text-center hover:bg-zinc-800">
              <h3 className="text-xl font-bold text-orange-400">Pro League</h3>
              <p className="mt-2 text-gray-400">
                Compete in our internal IPL-style league with 8 teams.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="rounded-lg bg-black p-6 text-center hover:bg-zinc-800">
              <h3 className="text-xl font-bold text-orange-400">Weekend Nets</h3>
              <p className="mt-2 text-gray-400">
                Regular practice sessions with professional coaches.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}