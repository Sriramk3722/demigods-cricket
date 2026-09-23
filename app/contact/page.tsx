"use client";

import { useState } from "react";
import FadeInSection from "@/app/components/FadeInSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
    <main className="relative text-white">
      <div
        className="fixed inset-0 z-0 bg-mobile-fix"
        style={{
          backgroundImage: "url('/bg-contact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <FadeInSection>
            <h1 className="text-center text-4xl font-bold text-orange-500 md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-2 text-center text-gray-200">
              Have questions or ready to join? We'd love to hear from you!
            </p>
          </FadeInSection>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <FadeInSection delay={0.2}>
              <div className="rounded-lg bg-black/70 backdrop-blur-md p-6 border border-orange-500/30">
                <h2 className="text-xl font-bold text-orange-400">Send us a Message</h2>
                <p className="mt-1 text-sm text-gray-300">
                  Fill in the details and we'll get back within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="text-5xl">✅</div>
                    <h3 className="mt-4 text-xl font-bold text-orange-400">Message Sent!</h3>
                    <p className="mt-2 text-gray-200">Thank you! We'll get back soon.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 rounded-lg bg-orange-600 px-6 py-2 font-bold hover:bg-orange-700"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="mt-1 w-full rounded-lg bg-black/60 border border-gray-600 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="mt-1 w-full rounded-lg bg-black/60 border border-gray-600 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                        placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="mt-1 w-full rounded-lg bg-black/60 border border-gray-600 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                        placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Subject *</label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                        className="mt-1 w-full rounded-lg bg-black/60 border border-gray-600 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                        placeholder="Joining inquiry" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200">Message *</label>
                      <textarea name="message" rows={4} value={formData.message} onChange={handleChange} required
                        className="mt-1 w-full rounded-lg bg-black/60 border border-gray-600 px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                        placeholder="Tell us how we can help..." />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <button type="submit" disabled={isLoading}
                      className="w-full rounded-lg bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700 hover:scale-[1.02] disabled:opacity-50">
                      {isLoading ? "Sending..." : "Send Message 🏏"}
                    </button>
                  </form>
                )}
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="space-y-4">
                <div className="rounded-lg bg-black/70 backdrop-blur-md p-6 border border-orange-500/30">
                  <h3 className="text-xl font-bold text-orange-400">📍 Address</h3>
                  <p className="mt-2 text-gray-200">
                    Play Arena, Sarjapur Road<br />
                    Bangalore, Karnataka 560035<br />
                    India
                  </p>
                </div>
                <div className="rounded-lg bg-black/70 backdrop-blur-md p-6 border border-orange-500/30">
                  <h3 className="text-xl font-bold text-orange-400">📞 Contact</h3>
                  <p className="mt-2 text-gray-200"><strong className="text-white">Phone:</strong> +91 98765 43210</p>
                  <p className="text-gray-200"><strong className="text-white">Email:</strong> contact@demigodscricket.com</p>
                </div>
                <div className="rounded-lg bg-black/70 backdrop-blur-md p-6 border border-orange-500/30">
                  <h3 className="text-xl font-bold text-orange-400">🕐 Practice Hours</h3>
                  <p className="mt-2 text-gray-200"><strong className="text-white">Sat:</strong> 7:00 AM – 10:00 AM</p>
                  <p className="text-gray-200"><strong className="text-white">Sun:</strong> 7:00 AM – 12:00 PM</p>
                  <p className="text-gray-200"><strong className="text-white">Weekdays:</strong> By appointment</p>
                </div>
                <a href="https://wa.me/919876543210?text=Hi%20Demigod's%20Cricket%20Club!"
                  target="_blank" rel="noopener noreferrer"
                  className="block rounded-lg bg-green-600 p-4 text-center font-bold text-white transition hover:bg-green-700 hover:scale-[1.02]">
                  💬 Chat with us on WhatsApp
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </main>
  );
}