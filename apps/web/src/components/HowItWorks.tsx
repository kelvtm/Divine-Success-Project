import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Send Photos, Get a Price",
    desc: "WhatsApp us photos and a rough description of what needs clearing. You get a fixed, free quote back fast — no hidden extras, no obligation.",
  },
  {
    num: "02",
    title: "We Clear It",
    desc: "We arrive on time, clear everything as agreed — houses, offices or warehouses — and leave the space tidy and ready for what's next.",
  },
  {
    num: "03",
    title: "Nothing Good Goes to Waste",
    desc: "Usable items are donated or rehomed in the community, the rest recycled. Resale value offsets your price, and you get proof of responsible disposal.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Simple Process
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            How It Works
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <Reveal key={step.num}>
              <div className="h-full rounded-3xl border border-line bg-surface p-9">
                <div className="font-display font-semibold text-4xl text-accent mb-4">
                  {step.num}
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
