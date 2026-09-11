"use client";

import FadeInSection from "./FadeInSection";

export default function FAQSection() {
  return (
    <section className="bg-black/60 backdrop-blur-sm px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <FadeInSection>
          <h2 className="mb-12 text-center text-4xl font-bold text-orange-500">
            Frequently Asked Questions
          </h2>
        </FadeInSection>

        <div className="space-y-4">
          <FadeInSection delay={0.1}>
            <details className="rounded-lg bg-black/70 backdrop-blur-md p-4">
              <summary className="cursor-pointer font-bold text-orange-400">
                Who can join Demigod's Cricket Club?
              </summary>
              <p className="mt-2 text-gray-200">
                Anyone passionate about cricket! We welcome players of all skill
                levels, from beginners to advanced.
              </p>
            </details>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <details className="rounded-lg bg-black/70 backdrop-blur-md p-4">
              <summary className="cursor-pointer font-bold text-orange-400">
                When and where are the practices?
              </summary>
              <p className="mt-2 text-gray-200">
                We practice every weekend at the City Cricket Ground. Specific
                timings depend on your team assignment.
              </p>
            </details>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <details className="rounded-lg bg-black/70 backdrop-blur-md p-4">
              <summary className="cursor-pointer font-bold text-orange-400">
                Do I need to bring my own equipment?
              </summary>
              <p className="mt-2 text-gray-200">
                We recommend bringing your own bat and pads. However, we have
                spare equipment for new players during trial sessions.
              </p>
            </details>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.4}>
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-orange-500 md:text-4xl">
              Ready to Join the Legends?
            </h2>
            <p className="mt-4 text-gray-200">
              Come for a free trial and see why 325+ players chose Demigod's.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20Demigod's%20Cricket%20Club!%20I%20want%20to%20join!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-orange-600 px-8 py-4 text-lg font-bold transition hover:bg-orange-700 hover:scale-105"
            >
              Start Your Free Trial
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}