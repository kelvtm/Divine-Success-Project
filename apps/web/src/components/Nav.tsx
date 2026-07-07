"use client";

import { useState } from "react";

const LINKS = [
  { href: "#shop", label: "Shop" },
  { href: "#how", label: "How It Works" },
  { href: "#buyers", label: "Bulk Orders" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div
        className="mx-auto max-w-6xl rounded-2xl border border-white/60 bg-white/55 backdrop-blur-xl shadow-[0_8px_32px_rgba(43,36,32,0.08)] supports-[backdrop-filter]:bg-white/40"
      >
        <div className="flex items-center justify-between px-5 py-3.5">
          <a
            href="#home"
            className="font-display font-semibold text-xl tracking-tight text-foreground"
          >
            DIVINE <span className="text-copper">SUCCESS</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-ink-soft hover:text-copper transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-copper-light transition-colors"
          >
            Get In Touch
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground"
          >
            <span className="sr-only">Menu</span>
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/60 px-5 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-soft hover:text-copper"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white"
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
