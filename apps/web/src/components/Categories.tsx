import Image from "next/image";
import Reveal from "./Reveal";
import { EBAY_STORE_URL } from "@/lib/links";

const CATEGORIES = [
  {
    title: "Used Cars & Vehicles",
    desc: "Quality UK used cars, inspected and export-ready. Our biggest and most trusted category.",
    image: "/images/cars.avif",
    feature: true,
    badge: "Our Speciality",
  },
  {
    title: "Laptops & Electronics",
    desc: "Tested laptops, phones and gadgets at a fraction of the new price.",
    image: "/images/electronics.png",
  },
  {
    title: "Home Appliances",
    desc: "Microwaves, ovens, coffee machines and more — cleaned, tested, ready.",
    image: "/images/appliances.png",
  },
  {
    title: "Clothing & Textiles",
    desc: "Graded UK clothing in bales — quality sorted for resale.",
    image: "/images/sales.avif",
  },
  {
    title: "Furniture & Home",
    desc: "Quality used furniture and household items in mixed lots.",
    image: "/images/furniture.avif",
  },
  {
    title: "Mixed & Special Orders",
    desc: "Looking for something specific? Tell us — we will find it for you.",
    image: "/images/mixed.avif",
    emoji: "📦",
  },
];

export default function Categories() {
  return (
    <section id="shop" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-copper mb-3">
            Shop &amp; Export
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            What We Sell
          </h2>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            Every item is quality-checked, fairly priced, and ready to go — buy
            a single item online or order by the container.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Reveal
              key={cat.title}
              className={
                cat.feature
                  ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                  : undefined
              }
            >
              <div
                className={`group h-full rounded-3xl border border-line bg-white overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(43,36,32,0.14)] ${cat.feature ? "relative" : ""}`}
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br from-gold-soft to-white ${cat.feature ? "h-full min-h-[320px] lg:min-h-[480px]" : "h-52"}`}
                >
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes={
                        cat.feature
                          ? "(min-width: 1024px) 66vw, 100vw"
                          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-6xl">
                      {cat.emoji}
                    </div>
                  )}
                  {cat.feature && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pt-16 pb-6">
                      {cat.badge && (
                        <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground mb-2">
                          {cat.badge}
                        </span>
                      )}
                      <h3 className="font-display font-semibold text-2xl text-white">
                        {cat.title}
                      </h3>
                      <p className="text-white/85 text-sm mt-1">{cat.desc}</p>
                    </div>
                  )}
                </div>
                {!cat.feature && (
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={EBAY_STORE_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-7 py-4 text-sm font-semibold text-white hover:bg-foreground/85 transition-colors"
          >
            View Live Listings on eBay
            <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
