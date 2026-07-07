CLAUDE.md — Divine Success Platform
This file loads into every Claude Code session. Keep it under ~200 lines and every instruction verifiable. It is the source of truth for how we build. If something here is wrong or stale, fix THIS file first.
How to work with me (the founder)

* I lead. You do not rush to code. For any new feature or screen: discovery questions first → written plan/wireframe → my approval → THEN build. Never skip to implementation.
* Show design direction in words first: palette as hex tokens, type pairing, layout as ASCII wireframe, one signature element. Iterate on the plan before pixels.
* Do NOT produce generic/templated UI. If a section feels like a Bootstrap default, stop and rethink.
* Ask clarifying questions when requirements are ambiguous. One question at a time is fine.
* I am a full-stack + DevOps engineer. Talk to me at that level. No hand-holding, no over-explaining basics.
What we're building
Divine Success Ltd — a UK company (Reg. No. 12467975) selling quality UK used goods, sold online worldwide and exported to Nigeria / West Africa. Founded 2020. Faith-led, brotherhood-run by 3 director-owners.
Current phase: replace the old static HTML site + migrate off eBay onto our own platform, building the buyer database from day one.
Business model / priority order:

1. Individual buyers (PRIMARY) — order single items online, delivered worldwide.
2. Bulk buyers / wholesalers (SECONDARY) — container/pallet export, deposit + balance terms, commercial invoice + packing list included.

* Biggest product category = used cars/vehicles. Also: laptops/electronics, home appliances, clothing/textiles, furniture, mixed lots.
* Primary export market: Nigeria / West Africa. Plan for French (francophone W. Africa) in i18n later.
Tech stack (DECIDED — do not re-litigate without asking)

* Next.js (App Router) — front + backend (route handlers / server actions). Hosted on Vercel.
* TypeScript, strict mode, no `any`.
* PostgreSQL + Prisma ORM — type-safe, migrations as source of truth.
* Redis (Upstash) — sessions, caching product listings, rate limiting.
* Zod for all runtime input validation (API + forms).
* Payments: Stripe (UK/global cards) + Flutterwave (Nigeria/W. Africa, multi-currency). Abstract behind a payment-provider interface so we can swap without touching business logic.
* Search: Typesense (self-hostable) when catalogue grows.
* Images: Cloudinary + Next/Image.
* WhatsApp Business Cloud API — order confirmations + shipping updates (Africa lives on WhatsApp).
* PDF generation: React PDF / Puppeteer — auto-generate commercial invoice + packing list on confirmed orders.
* Monitoring: Sentry (errors) + PostHog (product analytics).
* Monorepo: Turborepo + pnpm workspaces. Shared `types`, `ui`, `utils` packages.
Suggested repo shape (confirm before scaffolding)

```
divine-success/
├── apps/
│   ├── web/     # Next.js — buyer-facing storefront
│   ├── admin/   # Next.js — internal dashboard (BUILD THIS FIRST)
│   └── api/     # if we split the API out; else co-locate in web route handlers
├── packages/
│   ├── ui/      # shared components + design tokens
│   ├── types/   # shared TS types
│   └── db/      # Prisma schema + client

```

Build order (strategy — do not reorder without asking)

1. Admin dashboard first. We must manage products/orders/inventory/docs internally before exposing buyers to anything.
2. Storefront (individual buyers) second.
3. Enquiry + order capture with DB persistence — start collecting the buyer database ASAP.
4. Bulk/wholesale flow (deposit + balance, export docs) third.
5. Full trading platform (accounts, payments, shipment tracking) after real orders validate the model.
Data model — key entities to plan (Prisma)
`User` (buyer), `Product` (category, condition, quantity, MOQ), `ProductImage`, `Category`, `Country`, `Order`, `OrderItem`, `Payment` (provider, ref, status), `Shipment`, `ShipmentUpdate`, `Document` (invoice/packing list), `Enquiry` (pre-order capture), `AdminUser`, `AuditLog` (log every financial action — needed for HMRC).
Design direction — STATUS: NOT YET AGREED

* ❌ Old site used deep navy — REJECTED, too dark/hard to read.
* Keep orange + gold accents; find a better, easy-to-read base (warm neutral, not deep navy).
* Still owe the founder: 2-3 palette directions as hex tokens to choose from, type pairing, wireframes.
* Do NOT ship UI until palette + direction are approved by the founder.
* Open founder questions still to answer: overall feeling (premium/warm/bold/utilitarian), where to start (design vs project scaffold vs data model), colour approach.
Content / brand facts (use these exactly)

* Company: Divine Success Ltd, Reg. No. 12467975.
* Registered address: 25 Shaftesbury Centre, Percy Street, Swindon, England, SN2 2AZ (address is registered office only — brand is "UK-based", do NOT centre the brand on Swindon).
* Email: info@divine-success.com · Website: divine-success.com
* WhatsApp: +44 7575 342732 (floating button, sticky).
* LinkedIn: https://www.linkedin.com/company/divine-success/ · Facebook: /thedivinesucces/ · IG: /_divinesuccess · X: /_divinesuccess
* Positioning: affordability + genuine quality, value for money, honest pricing, integrity/stewardship/accountability. Founded 2020, delivering affordable quality since.
* We are an exporter + online seller (NOT an importer yet — importing is a future plan). Do not say "sourcing" to buyers; frame as selling quality used goods.
* SIC codes: 46190, 47910, 45112, 49420.
Conventions

* Server components by default; client components only when interactive.
* Zod-validate every API input; verify Stripe/Flutterwave webhook signatures.
* JWT + refresh-token rotation for auth; 2FA on admin.
* Rate-limit payment/order endpoints. Helmet-equivalent security headers. CORS locked to our domains.
* Commits: imperative mood, ≤72 chars.
* Run typecheck + lint before every commit.
Commands (fill in once scaffolded)

* `pnpm dev` — start dev
* `pnpm build` — production build
* `pnpm lint` — lint
* `pnpm typecheck` — TS check
* `pnpm db:migrate` — Prisma migrate
