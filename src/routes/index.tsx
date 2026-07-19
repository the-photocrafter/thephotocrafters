import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import logoAsset from "@/assets/logo.png";
import p1 from "@/assets/gallery/p1.jpg";
import p2 from "@/assets/gallery/p2.jpg";
import p3 from "@/assets/gallery/p3.jpg";
import p4 from "@/assets/gallery/p4.jpg";
import p5 from "@/assets/gallery/p5.jpg";

const PHOTOS = [p1, p2, p3, p4, p5];

export const Route = createFileRoute("/")({
  component: Landing,
});


/* ---------- Pricing config (hidden from UI) ---------- */
const PRICES = {
  travel: 6000,
  profitPerSide: 10000,
  core8: { photo: 8000, video: 8000, candidPhoto: 9000, candidVideo: 9000 },
  pre4: { photo: 5000, video: 6000, candidPhoto: 5000, candidVideo: 6000 },
  deliv: { album: 14000, highlights: 6000, engFull: 2500, wedFull: 2500, reels: 1000, usb: 1500 },
  addon: { prePhoto: 5000, preVideo: 6000 },
};

type Side = "single" | "both";
type Counter = { count: number; brideOn: boolean; groomOn: boolean };
const initial = (): Counter => ({ count: 0, brideOn: true, groomOn: true });

function useCounters<K extends string>(keys: readonly K[]) {
  const [state, setState] = useState<Record<K, Counter>>(
    () => Object.fromEntries(keys.map((k) => [k, initial()])) as Record<K, Counter>,
  );
  const set = (k: K, patch: Partial<Counter>) =>
    setState((s) => ({ ...s, [k]: { ...s[k], ...patch } }));
  return { state, set };
}

/* ---------- Nav ---------- */
const NAV = [
  { href: "#home", label: "Home" },
  { href: "#packages", label: "Packages" },
  { href: "#builder", label: "Custom Quote" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#services", label: "Other Services" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoAsset} alt="The Photocrafters" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-semibold tracking-wide text-[color:var(--olive)]">
            the photocrafters
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-[color:var(--olive)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#builder"
          className="rounded-2xl bg-[color:var(--olive)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02] lg:hidden"
        >
          Quote
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[color:var(--olive-tint)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[color:var(--olive-tint)] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-20 pb-28 lg:grid-cols-12 lg:pt-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--olive)]/20 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--olive)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--olive)]" />
            Est. 2020 · 100+ Weddings
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold text-foreground sm:text-6xl lg:text-7xl">
            Capturing <span className="italic text-[color:var(--olive)]">timeless dreams</span>
            <br /> across South India.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Since 2020, The Photocrafters has fulfilled 100+ clients' dreams. From intimate
            weddings to corporate shoots, we freeze your best moments in time.
          </p>
          <p className="mt-4 max-w-xl text-sm text-foreground/60">
            Proudly capturing memories across all of Kerala, Tamil Nadu (Chennai), Bangalore,
            Hyderabad, and Mumbai.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#builder"
              className="rounded-2xl bg-[color:var(--olive)] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[color:var(--olive)]/20 transition-transform hover:scale-[1.02]"
            >
              Build Your Custom Package →
            </a>
            <a
              href="#packages"
              className="rounded-2xl border border-[color:var(--olive)]/25 bg-white px-7 py-4 text-sm font-semibold text-[color:var(--olive)] transition-colors hover:bg-[color:var(--olive-tint)]"
            >
              View Standard Packages
            </a>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <img src={PHOTOS[0]} alt="Wedding moment" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
            <img src={PHOTOS[1]} alt="Wedding moment" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
            <img src={PHOTOS[2]} alt="Wedding moment" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
            <img src={PHOTOS[3]} alt="Wedding moment" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-lg" />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Packages ---------- */
const PACKAGES = [
  {
    name: "Both Sides — Premium",
    price: "₹1,70,000",
    split: "Split: ₹85,000 each side",
    featured: true,
    coverage: [
      "Engagement — Photo, Video, Candid Photo, Candid Video, Helicam",
      "Wedding Eve — 1 Photo",
      "Wedding Day — Photo, Video, Candid Photo, Candid Video, Helicam",
    ],
    deliverables: [
      "2× 80-page Premium Albums",
      "3–5 min Highlights",
      "Full Length Videos",
      "3 Reels",
      "20–30 next-day edits",
      "Digital Gallery + USB",
    ],
    comp: ["4 Frames", "2 Calendars", "2 Mini Albums", "Pre/Post Wedding Shoot"],
  },
  {
    name: "Both Sides — Standard",
    price: "₹1,54,000",
    split: "Split: ₹77,000 each side",
    coverage: [
      "Engagement — Photo, Video, Candid Photo, Candid Video",
      "Wedding Eve — 1 Photo",
      "Wedding Day — Photo, Video, Candid Photo, Candid Video",
    ],
    deliverables: [
      "2× 80-page Premium Albums",
      "3–5 min Highlights",
      "Full Length Videos",
      "3 Reels",
      "20–30 next-day edits",
      "Digital Gallery + USB",
    ],
    comp: ["4 Frames", "2 Calendars", "2 Mini Albums", "Pre/Post Wedding Shoot"],
  },
  {
    name: "Single Side — Premium",
    price: "₹94,000",
    coverage: [
      "Engagement — Photo, Video, Helicam",
      "Wedding Eve — 1 Photo",
      "Wedding Day — Photo, Video, Helicam",
    ],
    deliverables: [
      "1× 80-page Premium Album",
      "Highlights",
      "2 Reels",
      "Next-day edits",
      "Digital Gallery + USB",
    ],
    comp: ["2 Frames", "1 Calendar", "1 Mini Album", "Pre/Post Shoot"],
  },
  {
    name: "Single Side — Standard",
    price: "₹82,000",
    coverage: [
      "Engagement — Photo, Video",
      "Wedding Eve — 1 Photo",
      "Wedding Day — Photo, Video",
    ],
    deliverables: [
      "1× 80-page Premium Album",
      "Highlights",
      "2 Reels",
      "Next-day edits",
      "Digital Gallery + USB",
    ],
    comp: ["2 Frames", "1 Calendar", "1 Mini Album", "Pre/Post Shoot"],
  },
];

function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--olive)]">
          Curated collections
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
          Standard wedding packages
        </h2>
        <p className="mt-4 text-foreground/60">
          Four thoughtfully crafted collections. Or design your own below.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PACKAGES.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl ${
              p.featured
                ? "border-[color:var(--olive)] bg-[color:var(--olive)] text-white shadow-lg shadow-[color:var(--olive)]/20"
                : "border-[color:var(--olive)]/12 bg-white"
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--olive)]">
                Most Loved
              </span>
            )}
            <h3 className={`font-display text-xl font-semibold ${p.featured ? "text-white" : ""}`}>
              {p.name}
            </h3>
            <div className="mt-5">
              <div className={`font-display text-3xl font-semibold ${p.featured ? "text-white" : "text-[color:var(--olive)]"}`}>
                {p.price}
              </div>
              {p.split && (
                <div className={`mt-1 text-xs ${p.featured ? "text-white/70" : "text-foreground/50"}`}>
                  {p.split}
                </div>
              )}
            </div>
            <div className={`my-6 h-px w-full ${p.featured ? "bg-white/20" : "bg-[color:var(--olive)]/10"}`} />
            <Block label="Coverage" items={p.coverage} inverted={p.featured} />
            <Block label="Deliverables" items={p.deliverables} inverted={p.featured} />
            <Block label="Complimentary" items={p.comp} inverted={p.featured} />
            <a
              href="#contact"
              className={`mt-6 w-full rounded-2xl px-5 py-3 text-center text-sm font-semibold transition-colors ${
                p.featured
                  ? "bg-white text-[color:var(--olive)] hover:bg-white/90"
                  : "border border-[color:var(--olive)]/25 text-[color:var(--olive)] hover:bg-[color:var(--olive-tint)]"
              }`}
            >
              Enquire →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Block({ label, items, inverted }: { label: string; items: string[]; inverted?: boolean }) {
  return (
    <div className="mt-4">
      <div className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${inverted ? "text-white/60" : "text-foreground/40"}`}>
        {label}
      </div>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i} className={`flex gap-2 text-xs leading-relaxed ${inverted ? "text-white/90" : "text-foreground/75"}`}>
            <span className={inverted ? "text-white" : "text-[color:var(--olive)]"}>◆</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Builder ---------- */
const CORE_KEYS = ["photo", "video", "candidPhoto", "candidVideo"] as const;
const PRE_KEYS = ["photo", "video", "candidPhoto", "candidVideo"] as const;
const DELIV_KEYS = ["album", "highlights", "engFull", "wedFull", "reels", "usb"] as const;
const ADDON_KEYS = ["prePhoto", "preVideo"] as const;

const CORE_LABELS: Record<(typeof CORE_KEYS)[number], string> = {
  photo: "Photography (8hr)",
  video: "Videography (8hr)",
  candidPhoto: "Candid Photo (8hr)",
  candidVideo: "Candid Video (8hr)",
};
const PRE_LABELS: Record<(typeof PRE_KEYS)[number], string> = {
  photo: "Pre-event Photo (4hr)",
  video: "Pre-event Video (4hr)",
  candidPhoto: "Pre-event Candid Photo",
  candidVideo: "Pre-event Candid Video",
};
const DELIV_LABELS: Record<(typeof DELIV_KEYS)[number], string> = {
  album: "80-page Premium Album",
  highlights: "Highlights Video",
  engFull: "Engagement Full Video",
  wedFull: "Wedding Full Video",
  reels: "Social Reels",
  usb: "USB Drive",
};
const ADDON_LABELS: Record<(typeof ADDON_KEYS)[number], string> = {
  prePhoto: "Pre/Post Photo Shoot",
  preVideo: "Pre/Post Video Shoot",
};

function Builder() {
  const [side, setSide] = useState<Side>("both");
  const core = useCounters(CORE_KEYS);
  const pre = useCounters(PRE_KEYS);
  const deliv = useCounters(DELIV_KEYS);
  const addon = useCounters(ADDON_KEYS);

  const sideMult = (c: Counter) => {
    if (side === "single") return c.count > 0 ? 1 : 0;
    // both — brideOn/groomOn govern per-side inclusion
    const active = (c.brideOn ? 1 : 0) + (c.groomOn ? 1 : 0);
    return c.count > 0 ? active : 0;
  };

  const { total, hasCore } = useMemo(() => {
    let t = 0;
    let coreCount = 0;
    (Object.keys(core.state) as (typeof CORE_KEYS)[number][]).forEach((k) => {
      const mult = sideMult(core.state[k]);
      coreCount += mult;
      t += PRICES.core8[k] * mult;
    });
    (Object.keys(pre.state) as (typeof PRE_KEYS)[number][]).forEach((k) => {
      const c = pre.state[k];
      if (c.count > 0) t += PRICES.pre4[k] * c.count;
    });
    (Object.keys(deliv.state) as (typeof DELIV_KEYS)[number][]).forEach((k) => {
      const c = deliv.state[k];
      if (c.count > 0) t += PRICES.deliv[k] * c.count;
    });
    (Object.keys(addon.state) as (typeof ADDON_KEYS)[number][]).forEach((k) => {
      const c = addon.state[k];
      if (c.count > 0) t += PRICES.addon[k] * c.count;
    });
    if (coreCount > 0) {
      t += PRICES.travel;
      t += side === "both" ? PRICES.profitPerSide * 2 : PRICES.profitPerSide;
    }
    return { total: t, hasCore: coreCount > 0 };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [core.state, pre.state, deliv.state, addon.state, side]);

  const handleSendQuote = () => {
    if (!hasCore) return;

    const selectedItems: string[] = [];

    // Core
    (Object.keys(core.state) as (typeof CORE_KEYS)[number][]).forEach((k) => {
      const c = core.state[k];
      const mult = sideMult(c);
      if (mult > 0) {
        let sideText = "";
        if (side === "both") {
          const parts: string[] = [];
          if (c.brideOn) parts.push("Bride");
          if (c.groomOn) parts.push("Groom");
          if (parts.length > 0) {
            sideText = ` (${parts.join(" + ")})`;
          }
        }
        selectedItems.push(`${CORE_LABELS[k]}${sideText}: ${c.count}`);
      }
    });

    // Pre
    (Object.keys(pre.state) as (typeof PRE_KEYS)[number][]).forEach((k) => {
      const c = pre.state[k];
      if (c.count > 0) {
        selectedItems.push(`${PRE_LABELS[k]}: ${c.count}`);
      }
    });

    // Deliverables
    (Object.keys(deliv.state) as (typeof DELIV_KEYS)[number][]).forEach((k) => {
      const c = deliv.state[k];
      if (c.count > 0) {
        selectedItems.push(`${DELIV_LABELS[k]}: ${c.count}`);
      }
    });

    // Addons
    (Object.keys(addon.state) as (typeof ADDON_KEYS)[number][]).forEach((k) => {
      const c = addon.state[k];
      if (c.count > 0) {
        selectedItems.push(`${ADDON_LABELS[k]}: ${c.count}`);
      }
    });

    const itemsText = selectedItems.map((item) => `- ${item}`).join("\n");
    const formattedTotal = `₹${total.toLocaleString("en-IN")}`;

    const message = `Hello! I would like to get a quote for the following wedding package:\n${itemsText}\nEstimated Total: ${formattedTotal}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/message/MMC5NYNZJ6FQN1?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section id="builder" className="bg-[color:var(--olive-tint)]/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--olive)]">
            Design your day
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Build your custom package
          </h2>
          <p className="mt-4 text-foreground/60">
            Toggle exactly what you need. Your estimate updates instantly.
          </p>
        </div>

        {/* Step 1 */}
        <div className="mt-14 rounded-3xl border border-[color:var(--olive)]/12 bg-white p-8">
          <StepLabel n={1} title="Which side are we covering?" />
          <div className="mt-6 flex flex-wrap gap-3">
            {(["single", "both"] as Side[]).map((s) => (
              <button
                key={s}
                onClick={() => setSide(s)}
                className={`rounded-2xl px-6 py-3 text-sm font-semibold transition-all ${
                  side === s
                    ? "bg-[color:var(--olive)] text-white shadow-md"
                    : "border border-[color:var(--olive)]/20 text-foreground/70 hover:border-[color:var(--olive)]/50"
                }`}
              >
                {s === "single" ? "Single Side" : "Both Sides (Bride + Groom)"}
              </button>
            ))}
          </div>
        </div>

        <Group
          n={2}
          title="Core services (8hr — wedding day / engagement)"
          keys={CORE_KEYS as unknown as string[]}
          labels={CORE_LABELS as Record<string, string>}
          state={core.state as Record<string, Counter>}
          set={core.set as (k: string, p: Partial<Counter>) => void}
          side={side}
          advanced
        />
        <Group
          n={3}
          title="Pre-events (4hr — Eve / Haldi / Mehendi)"
          keys={PRE_KEYS as unknown as string[]}
          labels={PRE_LABELS as Record<string, string>}
          state={pre.state as Record<string, Counter>}
          set={pre.set as (k: string, p: Partial<Counter>) => void}
          side={side}
        />
        <Group
          n={4}
          title="Deliverables"
          keys={DELIV_KEYS as unknown as string[]}
          labels={DELIV_LABELS as Record<string, string>}
          state={deliv.state as Record<string, Counter>}
          set={deliv.set as (k: string, p: Partial<Counter>) => void}
          side={side}
          note="Frames, calendars & mini albums are complimentary when the main Album is included."
        />
        <Group
          n={5}
          title="Add-ons"
          keys={ADDON_KEYS as unknown as string[]}
          labels={ADDON_LABELS as Record<string, string>}
          state={addon.state as Record<string, Counter>}
          set={addon.set as (k: string, p: Partial<Counter>) => void}
          side={side}
        />

        {/* Sticky total */}
        <div className="sticky bottom-4 z-30 mt-10">
          <div className="mx-auto flex flex-col items-center justify-between gap-4 rounded-3xl border border-[color:var(--olive)]/15 bg-white/90 p-6 shadow-2xl shadow-[color:var(--olive)]/10 backdrop-blur-md sm:flex-row sm:p-7">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
                Estimated custom investment
              </div>
              <div className="mt-1 font-display text-3xl font-semibold text-[color:var(--olive)] sm:text-4xl">
                {hasCore ? `₹${total.toLocaleString("en-IN")}` : "Select at least one core service"}
              </div>
            </div>
            <button
              onClick={handleSendQuote}
              disabled={!hasCore}
              className={`rounded-2xl px-7 py-4 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                hasCore
                  ? "bg-[color:var(--olive)] text-white shadow-md cursor-pointer"
                  : "cursor-not-allowed border border-foreground/10 text-foreground/40"
              }`}
            >
              Send my quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepLabel({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--olive)] font-display text-sm font-semibold text-white">
        {n}
      </span>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
    </div>
  );
}

function Group({
  n, title, keys, labels, state, set, side, advanced, note,
}: {
  n: number;
  title: string;
  keys: string[];
  labels: Record<string, string>;
  state: Record<string, Counter>;
  set: (k: string, p: Partial<Counter>) => void;
  side: Side;
  advanced?: boolean;
  note?: string;
}) {
  return (
    <div className="mt-6 rounded-3xl border border-[color:var(--olive)]/12 bg-white p-8">
      <StepLabel n={n} title={title} />
      {note && <p className="mt-3 text-xs text-foreground/50">{note}</p>}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {keys.map((k) => (
          <Item
            key={k}
            label={labels[k]}
            c={state[k]}
            onCount={(count) => set(k, { count: Math.max(0, count) })}
            onSide={(patch) => set(k, patch)}
            side={side}
            advanced={advanced}
          />
        ))}
      </div>
    </div>
  );
}

function Item({
  label, c, onCount, onSide, side, advanced,
}: {
  label: string;
  c: Counter;
  onCount: (n: number) => void;
  onSide: (p: Partial<Counter>) => void;
  side: Side;
  advanced?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const active = c.count > 0;
  return (
    <div
      className={`rounded-2xl border p-4 transition-all ${
        active
          ? "border-[color:var(--olive)]/40 bg-[color:var(--olive-tint)]/60"
          : "border-[color:var(--olive)]/10 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{label}</div>
          {active && side === "both" && (
            <div className="mt-0.5 text-[11px] text-foreground/50">
              {c.brideOn && c.groomOn ? "Both sides" : c.brideOn ? "Bride only" : c.groomOn ? "Groom only" : "None"}
            </div>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-full border border-[color:var(--olive)]/20 bg-white p-1">
          <button
            aria-label="decrement"
            onClick={() => onCount(c.count - 1)}
            className="grid h-7 w-7 place-items-center rounded-full text-[color:var(--olive)] transition-colors hover:bg-[color:var(--olive-tint)]"
          >
            −
          </button>
          <span className="w-5 text-center text-sm font-semibold">{c.count}</span>
          <button
            aria-label="increment"
            onClick={() => onCount(c.count + 1)}
            className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--olive)] text-white transition-transform hover:scale-105"
          >
            +
          </button>
        </div>
      </div>
      {advanced && active && side === "both" && (
        <div className="mt-3">
          <button
            onClick={() => setOpen((o) => !o)}
            className="text-[11px] font-medium text-[color:var(--olive)] underline-offset-2 hover:underline"
          >
            {open ? "Hide" : "Advanced customize"}
          </button>
          {open && (
            <div className="mt-2 flex flex-wrap gap-2">
              <label className="flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--olive)]/20 bg-white px-3 py-1.5 text-xs">
                <input
                  type="checkbox"
                  checked={c.brideOn}
                  onChange={(e) => onSide({ brideOn: e.target.checked })}
                  className="accent-[color:var(--olive)]"
                />
                Bride side
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--olive)]/20 bg-white px-3 py-1.5 text-xs">
                <input
                  type="checkbox"
                  checked={c.groomOn}
                  onChange={(e) => onSide({ groomOn: e.target.checked })}
                  className="accent-[color:var(--olive)]"
                />
                Groom side
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------- Gallery + Lightbox ---------- */
const GALLERY_IMAGES = [
  PHOTOS[0], PHOTOS[1], PHOTOS[2], PHOTOS[3], PHOTOS[4],
  PHOTOS[1], PHOTOS[3], PHOTOS[0], PHOTOS[2],
];
const HEIGHTS = ["h-72", "h-96", "h-80", "h-96", "h-64", "h-80", "h-72", "h-96", "h-80"];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--olive)]">
          Selected work
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Moments, remembered.</h2>
      </div>
      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {GALLERY_IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`mb-5 block w-full ${HEIGHTS[i]} break-inside-avoid overflow-hidden rounded-3xl transition-transform hover:scale-[1.01]`}
            aria-label={`Open photo ${i + 1}`}
          >
            <img src={src} alt={`Photocrafters gallery ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
        >
          <div className="relative max-h-[85vh] w-full max-w-4xl">
            <img src={GALLERY_IMAGES[open]} alt="Enlarged" className="max-h-[85vh] w-full rounded-3xl object-contain" />
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(null); }}
              className="absolute -top-4 -right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-lg text-[color:var(--olive)] shadow-lg"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


/* ---------- Reviews Marquee ---------- */
const REVIEWS = [
  { name: "Ann Maria", text: "Absolutely magical! The candid shots captured emotions we didn't even realise we felt." },
  { name: "Rohit K.", text: "Professional, punctual and incredibly talented. Our album is a family heirloom." },
  { name: "Neha & Arjun", text: "The reels went viral in our circle. Best decision of the wedding." },
  { name: "Priya S.", text: "Helicam shots were cinematic. Worth every rupee." },
  { name: "Sneha Thomas", text: "They made shy me feel like a model. Loved the whole team!" },
  { name: "Vishnu R.", text: "Delivered next-day edits before our reception. Speechless." },
  { name: "Anjali M.", text: "Ten out of ten. Would book them again for every milestone." },
  { name: "Karthik V.", text: "Beautiful storytelling. Not just photos — memories." },
];

function Reviews() {
  const stream = [...REVIEWS, ...REVIEWS];
  return (
    <section id="reviews" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--olive)]">
          Loved by couples
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
          Reviewed on Google
        </h2>
        <p className="mt-4 text-foreground/60">Tap any card to read all reviews.</p>
      </div>
      <a
        href="https://share.google/WRD6kn4RPchsxun1L"
        target="_blank"
        rel="noreferrer"
        className="mt-14 block"
      >
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
            {stream.map((r, i) => (
              <article
                key={i}
                className="w-[340px] shrink-0 rounded-3xl border border-[color:var(--olive)]/12 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--olive-tint)] font-display text-sm font-semibold text-[color:var(--olive)]">
                    {r.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{r.name}</div>
                    <div className="flex gap-0.5 text-[#f4b400]" aria-label="5 stars">
                      {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">"{r.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </a>
    </section>
  );
}

/* ---------- Other Services ---------- */
const SERVICES = [
  { icon: "◐", label: "Corporate Shoots" },
  { icon: "◑", label: "Documentary Shoots" },
  { icon: "✦", label: "Birthday & Pre-Birthday" },
  { icon: "❋", label: "Maternity" },
  { icon: "❍", label: "Newborn" },
  { icon: "◊", label: "Family Portraits" },
];

function OtherServices() {
  return (
    <section id="services" className="bg-[color:var(--olive)] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
            Beyond weddings
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Not looking for a wedding shoot? We do more.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.label}
              className="group flex items-center gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-2xl text-[color:var(--olive)]">
                {s.icon}
              </div>
              <div className="font-display text-lg font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-block rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-[color:var(--olive)] transition-transform hover:scale-[1.02]"
          >
            Contact Us for Custom Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer / Contact ---------- */
function Footer() {
  return (
    <footer id="contact" className="border-t border-[color:var(--olive)]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="The Photocrafters" className="h-12 w-12 object-contain" />
              <span className="font-display text-2xl font-semibold text-[color:var(--olive)]">
                the photocrafters
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/60">
              Weddings & events across Kerala, Chennai, Bangalore, Hyderabad and Mumbai. Let's create
              something you'll treasure forever.
            </p>
          </div>
          <div className="grid gap-3">
            <ContactLink
              href="https://www.instagram.com/the.photocrafters?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              title="Instagram"
              handle="@the.photocrafters"
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
              }
            />
            <ContactLink
              href="https://wa.me/message/MMC5NYNZJ6FQN1"
              title="WhatsApp"
              handle="Chat with us instantly"
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><path d="M4 20l1.6-4.2A8 8 0 1 1 8.2 18.4L4 20z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 10c.5 2 2 3.5 4 4l1.2-1.2 2.3 1.1c-.3 1.5-1.8 2.4-3.5 2.1-2.8-.5-5.3-3-5.8-5.8-.3-1.7.6-3.2 2.1-3.5l1.1 2.3L9 10z" fill="currentColor"/></svg>
              }
            />
            <ContactLink
              href="mailto:philipjameskarikkathra@gmail.com"
              title="Email"
              handle="philipjameskarikkathra@gmail.com"
              icon={
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 6.5l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.8"/></svg>
              }
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--olive)]/10 pt-8 text-xs text-foreground/50 sm:flex-row">
          <div>© {new Date().getFullYear()} The Photocrafters. All rights reserved.</div>
          <div>Crafted with care in South India.</div>
        </div>
      </div>
    </footer>
  );
}

function ContactLink({
  href, title, handle, icon,
}: { href: string; title: string; handle: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-[color:var(--olive)]/12 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--olive)]/40 hover:shadow-md"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--olive-tint)] text-[color:var(--olive)]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold">{title}</div>
        <div className="truncate text-xs text-foreground/55">{handle}</div>
      </div>
      <div className="ml-auto text-[color:var(--olive)] opacity-0 transition-opacity group-hover:opacity-100">→</div>
    </a>
  );
}

/* ---------- Page ---------- */
function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Packages />
        <Builder />
        <Gallery />
        <Reviews />
        <OtherServices />
      </main>
      <Footer />
    </div>
  );
}
