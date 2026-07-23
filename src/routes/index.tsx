import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import logoAsset from "@/assets/logo.png";
import g1 from "@/assets/gallery/1.jpg";
import g2 from "@/assets/gallery/2 (1).jpg";
import g3 from "@/assets/gallery/2 (3).jpg";
import g4 from "@/assets/gallery/2 (4).jpg";
import g5 from "@/assets/gallery/2 (5).jpg";
import g6 from "@/assets/gallery/2 (6).jpg";
import g7 from "@/assets/gallery/2 (7).jpg";
import g8 from "@/assets/gallery/2 (8).jpg";
import g9 from "@/assets/gallery/3 (2).jpg";
import g10 from "@/assets/gallery/3 (3).jpg";
import g11 from "@/assets/gallery/3 (4).jpg";
import g12 from "@/assets/gallery/3.JPG";
import g13 from "@/assets/gallery/4 (1).jpg";
import g14 from "@/assets/gallery/4 (2).jpg";
import g15 from "@/assets/gallery/4 (3).jpg";
import g16 from "@/assets/gallery/4 (4).jpg";
import g17 from "@/assets/gallery/4 (5).jpg";
import g18 from "@/assets/gallery/DSC_0483.jpg";
import g19 from "@/assets/gallery/DSC_0938.jpg";
import g20 from "@/assets/gallery/DSC_1023.jpg";
import g21 from "@/assets/gallery/DSC_1215.jpg";
import g22 from "@/assets/gallery/DSC_1847.JPG.jpg";
import g23 from "@/assets/gallery/DSC_4168.jpg";
import g24 from "@/assets/gallery/DSC_4739.jpg";
import g25 from "@/assets/gallery/DSC05972.jpg";
import g26 from "@/assets/gallery/DSC07623.jpg";
import g27 from "@/assets/gallery/PJS04268.jpg";
import g28 from "@/assets/gallery/PJS09896.jpg";
import g29 from "@/assets/gallery/post (7).jpg";
import g30 from "@/assets/gallery/SPM04509.jpg";
import g31 from "@/assets/gallery/DSC_5871.jpg";
import g32 from "@/assets/gallery/DSC09066.JPG";
import g33 from "@/assets/gallery/PJS00554.JPG";
import g34 from "@/assets/gallery/DSC04771.JPG";

const PHOTOS = [g1, g31, g14, g29];

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
              href={`https://wa.me/916282075839?text=${encodeURIComponent(`Hello! I am interested in the ${p.name} package priced at ${p.price}. Can we discuss this further?`)}`}
              target="_blank"
              rel="noopener noreferrer"
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

  const { total, hasService } = useMemo(() => {
    let t = 0;
    let coreCount = 0;
    let preCount = 0;
    (Object.keys(core.state) as (typeof CORE_KEYS)[number][]).forEach((k) => {
      const mult = sideMult(core.state[k]);
      coreCount += mult;
      t += PRICES.core8[k] * mult;
    });
    (Object.keys(pre.state) as (typeof PRE_KEYS)[number][]).forEach((k) => {
      const c = pre.state[k];
      if (c.count > 0) {
        preCount += c.count;
        t += PRICES.pre4[k] * c.count;
      }
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
    return { total: t, hasService: coreCount > 0 || preCount > 0 };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [core.state, pre.state, deliv.state, addon.state, side]);

  const handleSendQuote = () => {
    if (!hasService) return;

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
    const url = `https://wa.me/916282075839?text=${encodedMessage}`;
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
                {hasService ? `₹${total.toLocaleString("en-IN")}` : "Select at least one service"}
              </div>
            </div>
            <button
              onClick={handleSendQuote}
              disabled={!hasService}
              className={`rounded-2xl px-7 py-4 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                hasService
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

const GALLERY_IMAGES = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
  g31, g32, g33, g34
];
function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const galleryRef = useRef<HTMLElement>(null);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
  };

  const handleViewLess = () => {
    setIsExpanded(false);
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (currentIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCurrentIndex(null);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex]);

  return (
    <section ref={galleryRef} id="gallery" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--olive)]">
          Selected work
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Moments, remembered.</h2>
      </div>

      <div className={isExpanded ? "h-auto" : "max-h-[800px] sm:max-h-[1000px] overflow-hidden relative"}>
        <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-5">
          {GALLERY_IMAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="mb-5 block w-full h-auto break-inside-avoid overflow-hidden rounded-3xl transition-transform hover:scale-[1.01]"
              aria-label={`Open photo ${i + 1}`}
            >
              <img src={src} alt={`Open photo ${i + 1}`} className="h-auto w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        {!isExpanded && (
          <div
            className="absolute w-[100vw] left-1/2 -translate-x-1/2 bottom-0 h-80 flex flex-col items-center justify-end pb-12 bg-gradient-to-t from-background via-background/60 to-transparent backdrop-blur-2xl z-10 [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_50%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%)]"
          >
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-full bg-[color:var(--olive)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--olive)]/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              View More Gallery
            </button>
          </div>
        )}

        {isExpanded && (
          <div className="mt-8 flex justify-center pb-4">
            <button
              onClick={handleViewLess}
              className="rounded-full bg-[color:var(--olive)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--olive)]/20 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              View Less ↑
            </button>
          </div>
        )}
      </div>

      {currentIndex !== null && (
        <div
          onClick={() => setCurrentIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(null);
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-lg border border-white/10 cursor-pointer"
            aria-label="Close lightbox"
          >
            <span className="text-xl">✕</span>
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-6 z-[110] flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-lg border border-white/10 cursor-pointer"
            aria-label="Previous photo"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-4xl flex items-center justify-center"
          >
            <img
              src={GALLERY_IMAGES[currentIndex]}
              alt={`Open photo ${currentIndex + 1}`}
              className="max-h-[85vh] w-full rounded-3xl object-contain select-none shadow-2xl"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-6 z-[110] flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-lg border border-white/10 cursor-pointer"
            aria-label="Next photo"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}


/* ---------- Reviews Marquee ---------- */
const REVIEWS = [
  {
    name: "ROSE anu",
    text: "I have been connecting with photocrafters since the beginning. I would strongly recommend “The Photocrafters” for all kinds of events may it be Wedding, Betrothal, Save the date, Mom to be, New born, Noolukettu, Baptism, Holy Communion, Wedding anniversaries, Birthdays etc. because of their cost friendliness and easily approachable nature. I am 100 percent satisfied with the work and dedication of people. Premium quality pictures in such short span of time and budget friendliness is what makes them different."
  },
  {
    name: "Jobin Philip",
    text: "We had an incredible experience with The Photocrafters Wedding & Events! The team is young, energetic, and absolutely brimming with creativity. They captured every special moment of our wedding beautifully, ensuring no detail was missed. The lead photographer’s skills and passion truly stand out – you can see it in the stunning photos and videos they deliver. Their ability to make everyone feel comfortable and bring out natural smiles is unmatched. Highly recommended for anyone looking to create timeless memories for their wedding or event."
  },
  {
    name: "Melbin Paul",
    text: "The frames are beautiful and the capturing is excellent - outstanding work! The crew members are very sincere and supportive. I'm completely satisfied with the work. Thank you. #photocrafters"
  },
  {
    name: "Leon Peter Varghese",
    text: "A young and professional approach to creative photography at our everyday functions 👌 Reliable for all events. ..."
  },
  {
    name: "Melwin George",
    text: "These people really know what they're doing. I have had so many experinces with the team and they never disappoint."
  },
  {
    name: "ANGEL DOMINIC",
    text: "Good work by Philip and team.... Thank you"
  }
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
      <div className="mt-14 block">
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
            {stream.map((r, i) => (
              <a
                key={i}
                href="https://www.google.com/search?sca_esv=641454aca0393425&hl=en-IN&sxsrf=APpeQnvSdgLEuL-KA75xl4NQmK7NPJAgAw:1784228635286&kgmid=/g/11wbjsq3xn&q=The+Photocrafters+weddings+%26+Events&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/3&kgs=70ce021c9d4deefa&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/3#mpd=~11439739493251826943/customers/reviews&lrd=0x3b08839be9ec0819:0x1308efa187c4a0c7,1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[340px] shrink-0 rounded-3xl border border-[color:var(--olive)]/12 bg-white p-6 shadow-sm cursor-pointer block hover:shadow-md transition-shadow text-left no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--olive-tint)] font-display text-sm font-semibold text-[color:var(--olive)]">
                    {r.name[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-foreground">{r.name}</div>
                    <div className="flex gap-0.5 text-[#f4b400]" aria-label="5 stars">
                      {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">"{r.text}"</p>
              </a>
            ))}
          </div>
        </div>
      </div>
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
            <a
              key={s.label}
              href={`https://wa.me/916282075839?text=${encodeURIComponent(`Hello! I am interested in your ${s.label} services. Can we discuss the details and pricing?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 text-left text-white decoration-none cursor-pointer"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-2xl text-[color:var(--olive)] shrink-0">
                {s.icon}
              </div>
              <div className="font-display text-lg font-medium">{s.label}</div>
            </a>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href={`https://wa.me/916282075839?text=${encodeURIComponent("Hello! I would like to discuss a custom photography project with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
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
