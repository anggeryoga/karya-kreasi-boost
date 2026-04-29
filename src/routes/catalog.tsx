import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageFrame } from "../components/kkb/site-shell";
import { ProductCard } from "../components/kkb/product-card";
import type { Product } from "../data/products";
import { makeWhatsappLink, products } from "../data/products";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog Gerobak KKB" },
      { name: "description", content: "Lihat katalog gerobak usaha KKB untuk minuman, makanan, dan retail lengkap dengan harga awal dan spesifikasi singkat." },
      { property: "og:title", content: "Catalog Gerobak KKB" },
      { property: "og:description", content: "Katalog gerobak usaha modern siap pakai dari Karya Kreasi Bersama." },
    ],
  }),
  component: CatalogPage,
});

const filters = ["Semua", "Minuman", "Makanan", "Retail"] as const;

type Filter = (typeof filters)[number];

function CatalogPage() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const [selected, setSelected] = useState<Product | null>(null);
  const filtered = useMemo(() => filter === "Semua" ? products : products.filter((product) => product.category === filter), [filter]);

  return (
    <PageFrame>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="badge-neo">Catalog</p>
            <h1 className="mt-5 text-5xl font-black leading-none">Pilih gerobak sesuai konsep usaha</h1>
            <p className="mt-4 max-w-2xl font-bold text-muted-foreground">Filter model, lihat spesifikasi cepat, lalu lanjut konsultasi untuk ukuran dan finishing custom.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button key={item} type="button" onClick={() => setFilter(item)} className={`btn-neo ${filter === item ? "btn-neo-primary" : "btn-neo-ghost"}`}>{item}</button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {filtered.map((product) => <ProductCard key={product.slug} product={product} onQuickView={setSelected} />)}
        </div>
      </main>
      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4" role="dialog" aria-modal="true" aria-label={`Quick view ${selected.name}`}>
          <div className="neo-card max-h-[90vh] w-full max-w-3xl overflow-auto bg-card p-5">
            <div className="grid gap-5 md:grid-cols-2">
              <img src={selected.image} alt={`${selected.name} KKB`} width={1280} height={960} className="aspect-[4/3] w-full rounded-lg border object-cover" />
              <div>
                <p className="badge-neo">{selected.category}</p>
                <h2 className="mt-4 text-3xl font-black">{selected.name}</h2>
                <p className="mt-2 text-2xl font-black">{selected.price}</p>
                <p className="mt-4 font-bold text-muted-foreground">{selected.short}</p>
                <ul className="mt-5 grid gap-2 font-bold">
                  {selected.specs.map((spec) => <li key={spec} className="rounded-md border bg-muted px-3 py-2">{spec}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a className="btn-neo btn-neo-primary" href={makeWhatsappLink(selected.name)} target="_blank" rel="noreferrer">Pesan via WhatsApp</a>
                  <button className="btn-neo btn-neo-ghost" type="button" onClick={() => setSelected(null)}>Tutup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageFrame>
  );
}
