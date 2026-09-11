"use client";

import FadeInSection from "./FadeInSection";

export default function TestimonialsSection() {
  return (
    <section
      className="relative flex min-h-screen items-center px-4 py-20"
      style={{
        backgroundImage: "url('/bg-testimonials.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeInSection>
          <h2 className="mb-12 text-center text-4xl font-bold text-orange-500">
            What Our Players Say
          </h2>
        </FadeInSection>
        <div className="grid gap-6 md:grid-cols-2">
          <FadeInSection delay={0.1}>
            <div className="rounded-lg bg-black/70 backdrop-blur-sm border border-gray-700 p-6">
              <p className="text-gray-200">
                "Joining Demigod's was the best decision I made. The coaching is
                top-notch and the community is incredible."
              </p>
              <p className="mt-4 font-bold text-orange-400">— Partha Lodha</p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="rounded-lg bg-black/70 backdrop-blur-sm border border-gray-700 p-6">
              <p className="text-gray-200">
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