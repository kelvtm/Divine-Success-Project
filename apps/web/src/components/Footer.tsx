import Logomark from "./Logomark";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/thedivinesucces/",
    icon: "f",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_divinesuccess",
    icon: "📷",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/divine-success/",
    icon: "in",
  },
  { label: "X", href: "https://x.com/_divinesuccess", icon: "𝕏" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl grid gap-12 sm:grid-cols-3 mb-12">
        <div>
          <div className="flex items-center gap-2.5 font-display font-semibold text-xl text-white mb-4">
            <Logomark size={28} />
            DIVINE SUCCESS
          </div>
          <p className="leading-relaxed text-sm">
            House, office and warehouse clearance across the M4 corridor — reuse
            first, landfill last. Family-run, licensed and built on integrity,
            stewardship and accountability.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold text-white hover:bg-primary transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-4">
            Explore
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#services" className="hover:text-accent transition-colors">
              Our Services
            </a>
            <a href="#how" className="hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#who" className="hover:text-accent transition-colors">
              Who We Help
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Get a Quote
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-4">
            Company
          </h4>
          <p className="text-sm leading-relaxed">
            Divine Success Ltd
            <br />
            Reg. No. 12467975
            <br />
            Waste Carrier Reg. No. CBDU647280
            <br />
            25 Shaftesbury Centre, Percy Street
            <br />
            Swindon, England, SN2 2AZ
          </p>
          <a
            href="mailto:info@divinesuccess.co.uk"
            className="inline-block mt-3 text-sm hover:text-accent transition-colors"
          >
            info@divinesuccess.co.uk
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/15 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Divine Success Ltd All rights reserved.
      </div>
    </footer>
  );
}
