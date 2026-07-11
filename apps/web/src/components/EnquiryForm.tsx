"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Enquiry payload ready for API:", data);
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Get Your Free Quote
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal>
            <h3 className="font-display font-semibold text-2xl text-foreground mb-4">
              Tell us what needs clearing
            </h3>
            <p className="text-ink-soft leading-relaxed mb-6">
              Send us the details — or photos on WhatsApp for the fastest
              quote — and we&apos;ll come back with a fixed, no-obligation
              price.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@divinesuccess.co.uk"
                className="flex items-center gap-3 text-ink-soft hover:text-primary transition-colors"
              >
                📧 info@divinesuccess.co.uk
              </a>
              <a
                href="https://wa.me/447575342732"
                className="flex items-center gap-3 text-ink-soft hover:text-primary transition-colors"
              >
                💬 WhatsApp: +44 7575 342732
              </a>
              <div className="flex items-center gap-3 text-ink-soft">
                📍 Covering the M4 corridor — London to Bristol
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-line bg-white p-8 shadow-[0_10px_40px_rgba(18,43,32,0.08)]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name *">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="field-input"
                  />
                </Field>
                <Field label="Email *">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="field-input"
                  />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 mt-5">
                <Field label="Phone / WhatsApp">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+44..."
                    className="field-input"
                  />
                </Field>
                <Field label="Postcode / Town *">
                  <input
                    name="location"
                    type="text"
                    required
                    placeholder="e.g. SN2 or Swindon"
                    className="field-input"
                  />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 mt-5">
                <Field label="Service Needed *">
                  <select name="service" required className="field-input">
                    <option value="">Select one…</option>
                    <option value="house">House Clearance</option>
                    <option value="office">Office Clearance</option>
                    <option value="warehouse">Warehouse Clearance</option>
                    <option value="waste">Waste Management</option>
                    <option value="other">Something else</option>
                  </select>
                </Field>
                <Field label="Preferred Date">
                  <input name="date" type="date" className="field-input" />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="What needs clearing? *">
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us the property or space, roughly how much there is, and any access details…"
                    className="field-input"
                  />
                </Field>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-primary py-4 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Get My Free Quote
              </button>
              <p className="mt-4 text-xs text-ink-soft leading-relaxed">
                By sending, you agree we may contact you about your enquiry.
                We never share your details.
              </p>
              {submitted && (
                <div className="mt-4 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
                  ✅ Thank you! Your enquiry has been received — we will get
                  back to you shortly with your quote.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
