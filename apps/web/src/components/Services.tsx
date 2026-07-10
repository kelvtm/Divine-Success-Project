import Image from "next/image";
import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "House Clearance",
    desc: "Full or part clearances for moves, downsizing, probate and end of tenancy — handled respectfully, cleared in one visit wherever possible.",
    image: "/images/furniture.avif",
    feature: true,
    badge: "Most Requested",
  },
  {
    title: "Office Clearance",
    desc: "Desks, chairs, IT and fittings cleared — out of hours if needed, with compliant WEEE disposal so your business stays covered.",
    image: "/images/electronics.png",
  },
  {
    title: "Warehouse Clearance",
    desc: "Racking, pallets, redundant stock and equipment. Big spaces, proper manpower, fast turnaround.",
    image: "/images/mixed.avif",
  },
  {
    title: "Waste Management",
    desc: "One-off or ongoing waste removal, sorted on collection for reuse, recycling and responsible disposal — with documentation.",
    image: "/images/appliances.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-copper mb-3">
            What We Do
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            From a single room to a full warehouse — we clear it, sort it, and
            make sure as little as possible ends up in landfill.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <Reveal
              key={svc.title}
              className={svc.feature ? "sm:col-span-2 lg:col-span-3" : undefined}
            >
              <div
                className={`group h-full rounded-3xl border border-line bg-white overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(43,36,32,0.14)] ${svc.feature ? "relative" : ""}`}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br from-gold-soft to-white ${svc.feature ? "h-[320px] sm:h-[380px]" : "h-52"}`}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes={
                      svc.feature
                        ? "100vw"
                        : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {svc.feature && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pt-16 pb-6">
                      {svc.badge && (
                        <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground mb-2">
                          {svc.badge}
                        </span>
                      )}
                      <h3 className="font-display font-semibold text-2xl text-white">
                        {svc.title}
                      </h3>
                      <p className="text-white/85 text-sm mt-1 max-w-2xl">
                        {svc.desc}
                      </p>
                    </div>
                  )}
                </div>
                {!svc.feature && (
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-7 py-4 text-sm font-semibold text-white hover:bg-foreground/85 transition-colors"
          >
            Get a Free Quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}
