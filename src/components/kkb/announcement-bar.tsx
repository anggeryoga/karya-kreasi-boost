import { makeWhatsappLink } from "../../data/products";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-background">
      <div className="section-container flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-xs font-semibold sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand-yellow" />
          Promo Mei 2026 — Diskon 5% untuk pemesanan gerobak unit pertama
        </span>
        <a
          href={makeWhatsappLink("Promo Mei 2026")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-background/40 px-3 py-0.5 text-xs font-bold text-brand-yellow underline-offset-2 hover:underline"
        >
          Klaim sekarang →
        </a>
      </div>
    </div>
  );
}
