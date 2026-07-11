import Reveal from "./Reveal";

const FACTS = [
  {
    icon: "🤝",
    title: "Community First",
    desc: "Usable items are donated or rehomed locally before recycling is even considered.",
  },
  {
    icon: "♻️",
    title: "Licensed & Documented",
    desc: "Registered waste carrier — you get proof of responsible disposal with every job.",
  },
  {
    icon: "💷",
    title: "Honest Fixed Quotes",
    desc: "The price we quote is the price you pay — and resale value works in your favour.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            About Us
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Who We Are
          </h2>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              <strong className="text-foreground">Founded in 2020</strong>,
              Divine Success is a UK family-run firm built on a simple belief:{" "}
              <strong className="text-foreground">
                nothing good should go to waste
              </strong>
              .
            </p>
            <p>
              We clear houses, offices and warehouses across the{" "}
              <strong className="text-foreground">
                M4 corridor — London to Bristol
              </strong>
              . What we clear doesn&apos;t head straight for landfill: usable
              items are donated or rehomed in the community, materials are
              recycled, and anything with resale value brings your quote down.
            </p>
            <p>
              We are built on{" "}
              <strong className="text-foreground">
                integrity, stewardship and accountability
              </strong>{" "}
              — clearance with a conscience.
            </p>
          </Reveal>

          <Reveal className="grid gap-4">
            {FACTS.map((fact) => (
              <div
                key={fact.title}
                className="flex gap-4 rounded-2xl border border-line bg-surface p-6"
              >
                <div className="text-2xl leading-none">{fact.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {fact.title}
                  </h4>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {fact.desc}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
