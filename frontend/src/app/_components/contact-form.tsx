'use client';

import { useState, type ChangeEvent, type FormEvent } from "react";

type Props = {
  apiBase: string;
};

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function ContactForm({ apiBase }: Props) {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange =
    (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });
    try {
      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">

      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid gap-2">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-200">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              required
              value={form.name}
              onChange={handleChange("name")}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              placeholder="Jane Doe"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-200">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              required
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              placeholder="jane@example.com"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5">
              <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subject */}
      <div className="grid gap-2">
        <label className="text-sm font-bold text-gray-700 dark:text-gray-200">
          Subject <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <input
          value={form.subject}
          onChange={handleChange("subject")}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Project Inquiry: New E-commerce Site"
        />
      </div>

      {/* Message */}
      <div className="grid gap-2">
        <label className="text-sm font-bold text-gray-700 dark:text-gray-200">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={handleChange("message")}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 resize-none"
          placeholder="Hi, I'm interested in discussing a potential project..."
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6366f1] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#6366f1]/30 transition hover:bg-[#5558e6] hover:-translate-y-0.5 disabled:opacity-70 mt-2"
      >
        {status.type === "loading" ? "Sending..." : "Send Message"}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </button>

      <p className="text-xs text-center text-gray-400 mt-2">
        By sending this message, you agree to the privacy policy.
      </p>

      {status.type === "success" && (
        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300 text-center">{status.message}</p>
      )}
      {status.type === "error" && (
        <p className="text-sm font-semibold text-rose-600 dark:text-rose-300 text-center">{status.message}</p>
      )}
    </form>
  );
}
