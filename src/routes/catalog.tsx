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
      {
        name: "description",
        content:
          "Lihat katalog gerobak usaha KKB untuk minuman, makanan, dan retail lengkap dengan harga awal dan spesifikasi singkat.",
      },
      { property: "og:title", content: "Catalog Gerobak KKB" },
      {
        property: "og:description",
        content: "Katalog gerobak usaha modern siap pakai dari Karya Kreasi Bersama.",
      },
    ],
  }),
  component: CatalogPage,
});

const filters = [
  "Semua",
  "Minuman",
  "Makanan",
  "Retail",
  "Kanopi",
  "Pagar",
  "Furniture",
] as const;

type Filter = (typeof filters)[number];

function CatalogPage() {
  const [filter, setFilter] = useState<Filter>("Semua");
  const [selected, setSelected] = useState<Product | null>(null);
  const filtered = useMemo(
    () =>
      filter === "Semua" ? products : products.filter((product) => product.category === filter),
    [filter],
  );

  return (
    <PageFrame>
      <main>
        <section className="section-shell border-b bg-card">
          <div className="section-container">
            <div>
              <p className="eyebrow">Catalog</p>
              <h1 className="section-title">Katalog produk & layanan KKB</h1>
              <p className="section-lead">
                Gerobak usaha, kanopi rumah, pagar, hingga furniture custom — semua dikerjakan oleh
                workshop KKB.
              </p>
            </div>
          </div>
        </section>
        <div className="sticky top-[64px] z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="section-container py-3">
            <div
              className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Filter kategori"
            >
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={filter === item}
                  onClick={() => setFilter(item)}
                  className={`btn-neo shrink-0 whitespace-nowrap px-3 py-2 text-sm ${
                    filter === item ? "btn-neo-primary" : "btn-neo-ghost"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <section className="section-shell">
          <div className="section-container">
            <div className="mb-5 flex items-center justify-between gap-3 sm:mb-7">
              <div>
                <p className="eyebrow">Daftar produk</p>
                <h2 className="text-lg font-extrabold sm:text-2xl">
                  {filtered.length} item · {filter}
                </h2>
              </div>
              <a
                className="btn-neo btn-neo-accent hidden sm:inline-flex"
                href={makeWhatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                Konsultasi custom
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  onQuickView={setSelected}
                  compact
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      {selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Quick view ${selected.name}`}
        >
          <div className="neo-card max-h-[90vh] w-full max-w-3xl overflow-auto bg-card p-5">
            <div className="section-grid section-grid-2">
              <img
                src={selected.image}
                alt={`${selected.name} KKB`}
                width={1280}
                height={960}
                className="aspect-[4/3] w-full rounded-lg border object-cover"
              />
              <div>
                <p className="badge-neo">{selected.category}</p>
                <h2 className="mt-4 text-3xl font-extrabold">{selected.name}</h2>
                <p className="mt-2 text-2xl font-extrabold">{selected.price}</p>
                <p className="mt-4 font-medium leading-relaxed text-muted-foreground">
                  {selected.short}
                </p>
                <ul className="mt-5 grid gap-2 font-medium">
                  {selected.specs.map((spec) => (
                    <li key={spec} className="rounded-md border bg-muted px-3 py-2">
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    className="btn-neo btn-neo-primary"
                    href={makeWhatsappLink(selected.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pesan via WhatsApp
                  </a>
                  <button
                    className="btn-neo btn-neo-ghost"
                    type="button"
                    onClick={() => setSelected(null)}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageFrame>
  );
}
