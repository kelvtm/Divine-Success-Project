CLAUDE.md — Divine Success Platform
This file loads into every Claude Code session. Keep it under ~200 lines and every instruction verifiable. It is the source of truth for how we build. If something here is wrong or stale, fix THIS file first.
How to work with me (the founder)

* I lead. You do not rush to code. For any new feature or screen: discovery questions first → written plan/wireframe → my approval → THEN build. Never skip to implementation.
* Show design direction in words first: palette as hex tokens, type pairing, layout as ASCII wireframe, one signature element. Iterate on the plan before pixels.
* Do NOT produce generic/templated UI. If a section feels like a Bootstrap default, stop and rethink.
* Ask clarifying questions when requirements are ambiguous. One question at a time is fine.
* I am a full-stack + DevOps engineer. Talk to me at that level. No hand-holding, no over-explaining basics.
What we're building
Divine Success Ltd — a UK company (Reg. No. 12467975) providing clearance & waste management services: house clearance, office clearance, warehouse clearance, and waste management. Founded 2020. Faith-led, family-run by 3 director-owners.
PIVOT (July 2026): the business moved from used-goods resale/export to clearance services. All export/eBay/worldwide-selling story is REMOVED — do not reintroduce it anywhere.
Coverage: the M4 corridor — London to Bristol.
Positioning: community-impact-led with a value-offset element — usable items are donated/rehomed in the community, recycling before landfill, and resale value can reduce the customer's quote. "Nothing good goes to waste."
Business model / priority order:

1. Domestic clearances (PRIMARY) — house, flat, probate, end-of-tenancy. Lead capture via enquiry form + WhatsApp photos → fixed free quote.
2. Commercial clearances (SECONDARY) — office & warehouse, out-of-hours, WEEE-compliant, waste transfer documentation.
3. Ongoing waste contracts (GROWTH) — recurring commercial waste management.
Tech stack (DECIDED — do not re-litigate without asking)

* Next.js (App Router) — front + backend (route handlers / server actions). Hosted on Vercel.
* TypeScript, strict mode, no `any`.
* PostgreSQL + Prisma ORM — type-safe, migrations as source of truth.
* Redis (Upstash) — sessions, caching, rate limiting.
* Zod for all runtime input validation (API + forms).
* Payments: Stripe (deposits, invoices). Keep the payment-provider abstraction so we can add providers without touching business logic. (Flutterwave dropped with the export pivot.)
* Images: Cloudinary + Next/Image.
* WhatsApp Business Cloud API — quote requests, booking confirmations, job updates.
* PDF generation: React PDF / Puppeteer — quotes, invoices, waste transfer notes.
* Monitoring: Sentry (errors) + PostHog (product analytics).
* Monorepo: Turborepo + pnpm workspaces. Shared `types`, `ui`, `utils` packages.
Suggested repo shape (confirm before scaffolding)

```
divine-success/
├── apps/
│   ├── web/     # Next.js — public marketing site + enquiry capture (LIVE, one-pager)
│   ├── admin/   # Next.js — internal dashboard (enquiries → quotes → jobs)
│   └── api/     # if we split the API out; else co-locate in web route handlers
├── packages/
│   ├── ui/      # shared components + design tokens
│   ├── types/   # shared TS types
│   └── db/      # Prisma schema + client

```

Build order (updated for the clearance pivot — do not reorder without asking)

1. Marketing one-pager with enquiry form — DONE (apps/web).
2. Enquiry persistence — route handler + DB so no lead is ever lost (form currently only console.logs). HIGHEST PRIORITY.
3. Admin dashboard — manage enquiries → quotes → booked jobs → completion, with docs.
4. Payments — Stripe deposits/invoices on confirmed jobs.
5. SEO expansion — dedicated pages per service + per major town on the corridor; JSON-LD LocalBusiness schema.
Data model — key entities to plan (Prisma)
`Customer`, `Enquiry` (service type, location, photos, source), `Quote` (fixed price, offset amount, status), `Job` (scheduled clearance, crew notes), `JobPhoto` (before/after), `WasteTransferNote`, `Document` (quote/invoice PDF), `Payment` (provider, ref, status), `AdminUser`, `AuditLog` (log every financial action — needed for HMRC).
Design direction — STATUS: APPROVED "Evergreen & Lime" (July 2026)

* Founder chose a green sustainability palette, then asked for a brighter "actual green" primary. Tokens (globals.css, semantic names): background #F7FAF7, foreground #122B20, ink-soft #4E6558, surface #EFF4EE, line #DDE6DC, primary #15803D (vivid green, AA with white text), primary-light #16A34A (hover), accent #9BC53D (lime), accent-soft #EAF4D3.
* Rules: lime accent is never a text-on-white colour and never carries white text — pair it with foreground ink. Primary carries white text.
* Type pairing (Bricolage Grotesque + Inter), layout and components stay as-is. Logomark + icon.svg use primary/accent hexes directly — keep in sync with token changes.
* Earlier copper/gold system is retired; token names are semantic (primary/accent) so future palette changes are a globals.css + Logomark/icon.svg edit.
Content / brand facts (use these exactly)

* Company: Divine Success Ltd, Reg. No. 12467975.
* Waste Carrier Reg. No.: CBDU647280 (show in trust strip + footer).
* Registered address: 25 Shaftesbury Centre, Percy Street, Swindon, England, SN2 2AZ (registered office only — brand is "UK-based, covering the M4 corridor", do NOT centre the brand on Swindon).
* Email: info@divinesuccess.co.uk · Website: divinesuccess.co.uk
* Phone (virtual landline, primary public number): 01793 380797 — use for "call" contact points and LocalBusiness schema.
* WhatsApp: +44 7575 342732 (floating button, sticky; wa.me links keep this number — landline is not WhatsApp-registered unless founder confirms).
* LinkedIn: https://www.linkedin.com/company/divine-success/ · Facebook: /thedivinesucces/ · IG: /_divinesuccess · X: /_divinesuccess
* Positioning: community first, nothing wasted, honest fixed prices, integrity/stewardship/accountability. Founded 2020.
* SIC codes on file (46190, 47910, 45112, 49420) predate the pivot — waste-sector codes (e.g. 38110/38320) may need adding at Companies House; founder to confirm before we state them publicly.
Conventions

* Server components by default; client components only when interactive.
* Zod-validate every API input; verify Stripe webhook signatures.
* JWT + refresh-token rotation for auth; 2FA on admin.
* Rate-limit payment/enquiry endpoints. Helmet-equivalent security headers. CORS locked to our domains.
* Commits: imperative mood, ≤72 chars.
* Run typecheck + lint before every commit.
Commands (apps/web; root scripts once monorepo is scaffolded)

* `pnpm dev` — start dev
* `pnpm build` — production build
* `pnpm lint` — lint
* `pnpm typecheck` — TS check
* `pnpm db:migrate` — Prisma migrate (once db package exists)
