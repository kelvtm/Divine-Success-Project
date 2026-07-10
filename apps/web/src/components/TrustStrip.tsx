const ITEMS = [
  { title: "Since 2020", sub: "UK family-run firm" },
  { title: "Licensed Waste Carrier", sub: "Reg. No. [PENDING]" },
  { title: "Reuse First", sub: "Donate & recycle — landfill last" },
  { title: "Free Quotes", sub: "Fixed price, no surprises" },
];

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {ITEMS.map((item) => (
          <div key={item.title}>
            <div className="font-display font-semibold text-foreground">
              {item.title}
            </div>
            <div className="text-sm text-ink-soft mt-0.5">{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
