import Reveal from "./Reveal";

const AREAS = [
  "West London",
  "Slough",
  "Windsor",
  "Reading",
  "Newbury",
  "Oxford",
  "Swindon",
  "Chippenham",
  "Bath",
  "Bristol",
];

export default function AreasWeCover() {
  return (
    <section id="areas" className="py-20 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">
            Coverage
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Areas We Cover
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto mb-9">
            The M4 corridor — London to Bristol. Close by but not on the list?
            Ask us — we can usually help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
