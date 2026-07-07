import Reveal from "./Reveal";
import { EBAY_STORE_URL } from "@/lib/links";

export default function Buyers() {
  return (
    <section id="buyers" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-copper mb-3">
            Who We Serve
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Buy Your Way
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="h-full rounded-3xl border-2 border-copper bg-white p-10 shadow-[0_10px_40px_rgba(43,36,32,0.08)]">
              <span className="inline-block rounded-full bg-copper px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white mb-5">
                Individual Buyers
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-foreground mb-4">
                Order online, delivered to you
              </h3>
              <p className="text-ink-soft leading-relaxed mb-6">
                You don&apos;t need to buy a container to get UK quality. Order
                a single laptop, appliance, or item online and we will deliver
                it to you — wherever you are in the world.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Shop individual items at honest prices",
                  "Every product checked and described truthfully",
                  "Worldwide delivery, tracked to your door",
                  "Real support on WhatsApp — talk to a person, not a bot",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-ink-soft">
                    <span className="text-copper font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={EBAY_STORE_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center rounded-xl bg-copper px-6 py-3.5 text-sm font-semibold text-white hover:bg-copper-light transition-colors"
              >
                Start Shopping
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-3xl bg-foreground p-10 text-white">
              <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground mb-5">
                Bulk Buyers &amp; Wholesalers
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-4">
                Export by the container
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Resellers and traders worldwide — we supply vehicles,
                electronics, cloths and mixed goods in bulk, professionally
                packed with full export documentation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Container and pallet quantities",
                  "Commercial invoice & packing list included",
                  "Deposit-and-balance payment terms",
                  "Long-term supply partnerships welcome",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-white/85">
                    <span className="text-gold font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-foreground hover:brightness-95 transition"
              >
                Request Bulk Quote
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
