import { useMemo, useState } from "react";
import { makeWhatsappLink, whatsappNumber } from "../../data/products";

const productTypes = [
  { id: "kopi", label: "Gerobak Kopi / Minuman", base: 7800000, unit: "unit" },
  { id: "makanan", label: "Gerobak Makanan", base: 9500000, unit: "unit" },
  { id: "retail", label: "Booth Mini Retail", base: 6200000, unit: "unit" },
  { id: "kanopi", label: "Kanopi Rumah", base: 650000, unit: "m²" },
  { id: "pagar", label: "Pagar Rumah", base: 850000, unit: "m²" },
  { id: "furniture", label: "Furniture Custom", base: 2500000, unit: "unit" },
] as const;

const sizeOptions = [
  { id: "S", label: "Kecil / Standar", mult: 1 },
  { id: "M", label: "Sedang", mult: 1.25 },
  { id: "L", label: "Besar / Premium", mult: 1.6 },
] as const;

const finishingOptions = [
  { id: "basic", label: "Standar", mult: 1 },
  { id: "branded", label: "+ Branding panel", mult: 1.12 },
  { id: "premium", label: "+ Finishing premium", mult: 1.25 },
] as const;

const serviceOptions = [
  { id: "ready", label: "Ready stock", note: "Model siap, waktu produksi singkat" },
  { id: "custom", label: "Custom desain", note: "Desain & ukuran menyesuaikan brief" },
] as const;

const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export function PriceEstimator() {
  const [typeId, setTypeId] = useState<(typeof productTypes)[number]["id"]>("kopi");
  const [sizeId, setSizeId] = useState<(typeof sizeOptions)[number]["id"]>("S");
  const [finishId, setFinishId] = useState<(typeof finishingOptions)[number]["id"]>("basic");
  const [qty, setQty] = useState(1);
  const [serviceId, setServiceId] = useState<(typeof serviceOptions)[number]["id"]>("ready");
  const [city, setCity] = useState("");

  const { type, service, low, high } = useMemo(() => {
    const t = productTypes.find((p) => p.id === typeId)!;
    const s = sizeOptions.find((o) => o.id === sizeId)!;
    const f = finishingOptions.find((o) => o.id === finishId)!;
    const sv = serviceOptions.find((o) => o.id === serviceId)!;
    const safeQty = Math.min(Math.max(Number.isFinite(qty) ? qty : 1, 1), 50);
    const customMult = sv.id === "custom" ? 1.15 : 1;
    const base = t.base * s.mult * f.mult * safeQty * customMult;
    return {
      type: t,
      service: sv,
      low: Math.round(base / 100000) * 100000,
      high: Math.round((base * 1.18) / 100000) * 100000,
    };
  }, [typeId, sizeId, finishId, qty, serviceId]);

  const trimmedCity = city.trim();
  const cityLine = trimmedCity ? ` Lokasi pemasangan: ${trimmedCity}.` : "";
  const waText = `Halo KKB, saya tertarik estimasi: ${type.label} (${sizeId}, finishing ${finishId}, qty ${qty}, layanan ${service.label}).${cityLine} Estimasi ${formatRupiah(low)} – ${formatRupiah(high)}. Mohon info ongkir & instalasi lebih lanjut.`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="neo-card grid gap-6 bg-card p-5 md:grid-cols-[1.2fr_1fr] md:p-8">
      <div className="grid gap-4">
        <div>
          <label className="eyebrow">Jenis produk</label>
          <select
            value={typeId}
            onChange={(e) => setTypeId(e.target.value as typeof typeId)}
            className="mt-2 w-full rounded-md border-[1.3px] border-border bg-background px-3 py-2.5 text-sm font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
          >
            {productTypes.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="eyebrow">Ukuran</label>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {sizeOptions.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSizeId(o.id)}
                  className={`rounded-md border-[1.3px] border-border px-2 py-2 text-sm font-bold ${
                    sizeId === o.id ? "bg-brand-yellow shadow-neo-sm" : "bg-card"
                  }`}
                >
                  {o.id}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="eyebrow">Jumlah ({type.unit})</label>
            <input
              type="number"
              min={1}
              max={50}
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value || "1", 10))}
              className="mt-2 w-full rounded-md border-[1.3px] border-border bg-background px-3 py-2.5 text-sm font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
            />
          </div>
        </div>
        <div>
          <label className="eyebrow">Finishing</label>
          <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
            {finishingOptions.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setFinishId(o.id)}
                className={`rounded-md border-[1.3px] border-border px-3 py-2 text-xs font-bold ${
                  finishId === o.id ? "bg-brand-blue text-accent-foreground shadow-neo-sm" : "bg-card"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="eyebrow">Jenis layanan</label>
          <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {serviceOptions.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setServiceId(o.id)}
                className={`rounded-md border-[1.3px] border-border px-3 py-2 text-left ${
                  serviceId === o.id ? "bg-brand-yellow shadow-neo-sm" : "bg-card"
                }`}
              >
                <span className="block text-xs font-bold">{o.label}</span>
                <span className="block text-[0.7rem] font-medium text-muted-foreground">
                  {o.note}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="eyebrow" htmlFor="estimator-city">
            Kota / lokasi pemasangan
          </label>
          <input
            id="estimator-city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Contoh: Bekasi, Bandung, Surabaya"
            className="mt-2 w-full rounded-md border-[1.3px] border-border bg-background px-3 py-2.5 text-sm font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
          />
          <p className="mt-1 text-[0.7rem] font-medium text-muted-foreground">
            Membantu kami menghitung estimasi ongkir & jadwal instalasi.
          </p>
        </div>
      </div>
      <aside className="neo-card neo-card-yellow flex flex-col justify-between gap-4 p-5">
        <div>
          <p className="eyebrow">Estimasi kasar</p>
          <p className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
            {formatRupiah(low)}
            <span className="block text-base font-semibold text-muted-foreground">
              s/d {formatRupiah(high)}
            </span>
          </p>
          <p className="mt-3 text-xs font-medium leading-relaxed text-muted-foreground">
            Estimasi belum termasuk ongkos kirim & instalasi on-site. Harga final menyesuaikan
            desain, material, dan lokasi pemasangan.
          </p>
        </div>
        <a
          className="btn-neo btn-neo-primary w-full"
          href={waLink}
          target="_blank"
          rel="noreferrer"
        >
          Lanjut ke WhatsApp
        </a>
      </aside>
    </div>
  );
}
