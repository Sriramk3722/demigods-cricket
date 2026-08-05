"use client";

import FadeInSection from "./FadeInSection";

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeInSection>
          <h2 className="mb-12 text-center text-4xl font-bold text-orange-500">
            What Our Players Say
          </h2>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeInSection delay={0.1}>
            <div className="rounded-lg border border-gray-800 p-6">
              <p className="text-gray-300">
                "Joining Demigod's was the best decision I made. The coaching is
                top-notch and the community is incredible."
              </p>
              <p className="mt-4 font-bold text-orange-400">— Partha Lodha</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="rounded-lg border border-gray-800 p-6">
              <p className="text-gray-300">
                "The matches are competitive and well-organized. I've improved my
                game significantly since joining."
              </p>
              <p className="mt-4 font-bold text-orange-400">— Surya Patel</p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}