import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Browse & Choose",
    desc: "Explore our products online or message us on WhatsApp with what you're looking for. We respond fast with photos, condition details and honest prices.",
  },
  {
    num: "02",
    title: "Order & Pay Securely",
    desc: "Place your order online or through our team. Individual items ship on payment; bulk orders confirm with a deposit and balance before shipping.",
  },
  {
    num: "03",
    title: "We Deliver",
    desc: "Single items are posted to you worldwide. Bulk and vehicle orders are professionally packed, documented and shipped to your destination.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-copper mb-3">
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
                <div className="font-display font-semibold text-4xl text-gold mb-4">
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
