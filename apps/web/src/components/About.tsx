import Reveal from "./Reveal";

const FACTS = [
  {
    icon: "✅",
    title: "Checked Before It Ships",
    desc: "Every item is inspected and honestly described before it reaches you.",
  },
  {
    icon: "💎",
    title: "Value For Money",
    desc: "Affordability and quality are not opposites. We check every item so you get the best of both.",
  },
  {
    icon: "🌍",
    title: "Shipped Worldwide",
    desc: "Order online from anywhere. Bulk export available for wholesalers and resellers.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-copper mb-3">
            About Us
          </div>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-foreground">
            Who We Are
          </h2>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              <strong className="text-foreground">Founded in 2020</strong>,
              Divine Success has been delivering quality products to people
              who value <strong className="text-foreground">real affordability</strong> —
              proving that a fair price and genuine quality can go together.
            </p>
            <p>
              We are a <strong className="text-foreground">UK-based company</strong> serving
              customers online, worldwide. Our focus is simple: valuable
              products, honestly described, at prices that respect your
              money. Every item we sell — from a single laptop to a
              container of vehicles — carries the same promise of quality
              and value.
            </p>
            <p>
              We are built on{" "}
              <strong className="text-foreground">
                integrity, stewardship and accountability
              </strong>{" "}
              — doing what is right, operating honestly, and building trade
              relationships that last.
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
