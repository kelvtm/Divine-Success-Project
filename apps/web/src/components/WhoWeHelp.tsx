import Reveal from "./Reveal";

export default function WhoWeHelp() {
  return (
    <section id="who" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Who We Help
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Homes &amp; Businesses
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="h-full rounded-3xl border-2 border-primary bg-white p-10 shadow-[0_10px_40px_rgba(18,43,32,0.08)]">
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white mb-5">
                Homes &amp; Families
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl text-foreground mb-4">
                House clearances, handled with care
              </h3>
              <p className="text-ink-soft leading-relaxed mb-6">
                From a single room to a whole property — moves, downsizing, end
                of tenancy and probate clearances handled sensitively, at a
                pace that suits you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free fixed quotes from photos — no visit needed",
                  "Probate and bereavement clearances handled discreetly",
                  "Usable items donated or rehomed, not dumped",
                  "Real support on WhatsApp — talk to a person, not a bot",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-ink-soft">
                    <span className="text-primary font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-3xl bg-foreground p-10 text-white">
              <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground mb-5">
                Businesses
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-4">
                Offices &amp; warehouses, cleared without downtime
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Offices, warehouses and retail units cleared around your
                schedule — evenings and weekends included — with the paperwork
                your business needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Out-of-hours clearances to avoid disruption",
                  "Compliant WEEE disposal for IT and electricals",
                  "Waste transfer documentation provided",
                  "One-off jobs or ongoing waste contracts",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-white/85">
                    <span className="text-accent font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-foreground hover:brightness-95 transition"
              >
                Talk To Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
