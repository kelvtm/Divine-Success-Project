import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Quality First",
    desc: "Goods should be used, not wasted — and used should never mean unreliable. We check everything we sell.",
  },
  {
    title: "Honest Prices",
    desc: "Not every buyer can afford new. Trade should still be done right — fair prices, no surprises.",
  },
  {
    title: "People First",
    desc: "Trade should serve people, not pressure them. Talk to us — real people answer.",
  },
  {
    title: "Built To Last",
    desc: "Long-term relationships matter more than short-term margins. Most of our buyers come back.",
  },
];

export default function Values() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-copper to-copper-light">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/85 mb-3">
            Our Philosophy
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Why Divine Success
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <Reveal key={v.title}>
              <div className="h-full rounded-2xl border border-white/25 bg-white/15 backdrop-blur-md p-7 text-white">
                <h3 className="font-display font-semibold text-lg mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
