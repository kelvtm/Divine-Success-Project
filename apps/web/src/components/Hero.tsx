import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-copper/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-8rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-copper mb-6">
            <span className="h-px w-8 bg-copper" />
            Clearance &amp; Waste Management
          </div>
          <h1 className="font-display font-bold text-[2.75rem] sm:text-6xl lg:text-[3.75rem] leading-[1.05] tracking-tight text-foreground mb-6">
            Cleared with care.
            <br />
            <span className="text-copper">Nothing good goes to waste.</span>
          </h1>
          <p className="text-lg leading-relaxed text-ink-soft max-w-xl mb-10">
            House, office and warehouse clearance across the M4 corridor —
            London to Bristol. Usable items are donated or rehomed in the
            community, the rest responsibly recycled — and anything with resale
            value can bring your quote down.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-copper px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(181,101,29,0.35)] hover:bg-copper-light transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-xl border-2 border-foreground/15 px-7 py-4 text-sm font-semibold text-foreground hover:border-copper hover:text-copper transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>

        <Reveal className="relative">
          <div className="rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(43,36,32,0.18)] rotate-1">
            <Image
              src="/images/furniture.avif"
              alt="Property being cleared with furniture sorted for reuse"
              width={640}
              height={520}
              priority
              className="w-full h-[420px] sm:h-[480px] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-line bg-white/80 backdrop-blur-md px-5 py-4 shadow-[0_10px_30px_rgba(43,36,32,0.12)]">
            <span className="h-2.5 w-2.5 rounded-full bg-gold" />
            <span className="text-sm font-semibold text-foreground">
              Licensed Waste Carrier
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
