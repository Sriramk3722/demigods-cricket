"use client";

import { useState } from "react";
import FadeInSection from "@/app/components/FadeInSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // ⚠️ IMPORTANT: Replace "YOUR_FORM_ID" with your actual Formspree ID
  // Sign up for free at https://formspree.io to get your ID
  const FORMSPREE_ID = "mdenebyg";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-black px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <FadeInSection>
          <h1 className="text-center text-4xl font-bold text-orange-500 md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-2 text-center text-gray-400">
            Have questions or ready to join? We'd love to hear from you!
          </p>
        </FadeInSection>

        {/* Joining Steps - Like KAvach */}
        <FadeInSection delay={0.1}>
          <div className="mt-12 rounded-lg bg-zinc-900 p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-orange-400">
              How to Join Demigod's Cricket Club
            </h2>
            <p className="mt-2 text-gray-400">
              Joining Demigod's Cricket Club in Bangalore is simple and open to
              all working professionals who want to play leather ball cricket.
              Just follow these easy steps:
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 font-bold">
                  1
                </span>
                <p className="text-gray-300">
                  Fill up the registration form (link given above).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 font-bold">
                  2
                </span>
                <p className="text-gray-300">
                  Our team will get in touch with you within 2–3 days.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 font-bold">
                  3
                </span>
                <p className="text-gray-300">
                  Visit us for a trial session or practice match at our ground
                  near Sarjapur Road.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 font-bold">
                  4
                </span>
                <p className="text-gray-300">
                  Based on your cricket level, we will assign you to the right
                  team—beginner, intermediate, or advanced.
                </p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 font-bold">
                  5
                </span>
                <p className="text-gray-300">
                  Once confirmed, you will be added to the club group, and we
                  will help arrange your official Demigod's jersey. We welcome
                  everyone—from those returning to cricket after a long break to
                  beginners trying leather ball cricket for the first time.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Form + Contact Info Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* LEFT: Contact Form */}
          <FadeInSection delay={0.2}>
            <div className="rounded-lg bg-zinc-900 p-6 border border-gray-800">
              <h2 className="text-xl font-bold text-orange-400">Send us a Message</h2>
              <p className="mt-1 text-sm text-gray-400">
                Fill in the details and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <div className="text-5xl">✅</div>
                  <h3 className="mt-4 text-xl font-bold text-orange-400">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 rounded-lg bg-orange-600 px-6 py-2 font-bold hover:bg-orange-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700 hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isLoading ? "Sending..." : "Send Message 🏏"}
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>

          {/* RIGHT: Contact Details */}
          <FadeInSection delay={0.3}>
            <div className="space-y-4">
              <div className="rounded-lg bg-zinc-900 p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-orange-400">📍 Address</h3>
                <p className="mt-2 text-gray-400">
                  Play Arena, Sarjapur Road
                  <br />
                  Bangalore, Karnataka 560035
                  <br />
                  India
                </p>
              </div>

              <div className="rounded-lg bg-zinc-900 p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-orange-400">📞 Contact</h3>
                <p className="mt-2 text-gray-400">
                  <strong className="text-white">Phone / WhatsApp:</strong> +91
                  98765 43210
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">Email:</strong>{" "}
                  contact@demigodscricket.com
                </p>
              </div>

              <div className="rounded-lg bg-zinc-900 p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-orange-400">🕐 Practice Hours</h3>
                <p className="mt-2 text-gray-400">
                  <strong className="text-white">Saturday:</strong> 7:00 AM –
                  10:00 AM
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">Sunday:</strong> 7:00 AM – 12:00
                  PM
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">Weekdays:</strong> By
                  appointment
                </p>
              </div>

              <a
                href="https://wa.me/919876543210?text=Hi%20Demigod's%20Cricket%20Club!"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-green-600 p-4 text-center font-bold text-white transition hover:bg-green-700 hover:scale-[1.02]"
              >
                💬 Chat with us on WhatsApp
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </main>
  );
}