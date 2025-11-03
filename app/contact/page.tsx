"use client";

import { useState } from "react";

// Contact page matching site spacing and style
export default function ContactPage() {
  // Local state to handle form fields and success state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  // Handle form submit (no backend; just demo success message)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate success and clear fields
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    // Optionally hide the success message after a delay
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Page Heading */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-emerald-700">Contact Me</h1>
        <p className="mt-3 text-gray-700">
          Have a question or want to plan a custom tour? Send a message and I’ll
          get back to you soon.
        </p>
      </header>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        noValidate
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        {/* Name Field */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can I help? Tell me about your plans or questions."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition"
          >
            Send Message
          </button>
        </div>

        {/* Success Inline Message */}
        {sent && (
          <p
            className="mt-3 text-sm text-green-600 transition-opacity duration-500"
            aria-live="polite"
          >
            ✅ Your message has been sent successfully!
          </p>
        )}
      </form>

      {/* Quick Contact Actions */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Prefer direct contact?
        </h2>
        <div className="flex flex-wrap gap-3">
          {/* WhatsApp: replace number with your real WhatsApp number */}
          <a
            href="https://wa.me/968XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-700 text-emerald-700 px-5 py-2.5 hover:bg-emerald-50 transition"
          >
            WhatsApp
          </a>

          {/* Email: replace with your email address */}
          <a
            href="mailto:info@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 text-gray-800 px-5 py-2.5 hover:bg-gray-50 transition"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
