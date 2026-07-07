const ITEMS = [
  { title: "Since 2020", sub: "Trusted online seller" },
  { title: "Ships Worldwide", sub: "Order online, anywhere" },
  { title: "Every Item Checked", sub: "Honest condition reports" },
  { title: "Bulk Export Available", sub: "Container & pallet orders" },
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
