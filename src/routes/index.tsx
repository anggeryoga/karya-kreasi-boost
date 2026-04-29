import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "../components/kkb/site-shell";
import { ProductCard } from "../components/kkb/product-card";
import { makeWhatsappLink, products } from "../data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KKB Gerobak Usaha Modern" },
      {
        name: "description",
        content:
          "KKB membuat gerobak usaha modern siap pakai untuk kuliner, minuman, dan retail dengan desain custom profesional.",
      },
      { property: "og:title", content: "KKB Gerobak Usaha Modern" },
      {
        property: "og:description",
        content: "Solusi gerobak usaha modern dan siap pakai dari Karya Kreasi Bersama.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageFrame>
      <main>
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 dot-grid opacity-[0.08]" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="relative z-10">
              <p className="badge-neo">KKB • Karya Kreasi Bersama</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
                Solusi Gerobak Usaha Modern & Siap Pakai
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground">
                Bangun booth jualan yang rapi, kuat, dan langsung siap tampil—mulai dari gerobak
                kopi, makanan, sampai pop-up retail.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/catalog" className="btn-neo btn-neo-primary">
                  Lihat Catalog
                </Link>
                <a
                  className="btn-neo btn-neo-accent"
                  href={makeWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Konsultasi WhatsApp
                </a>
              </div>
            </div>
            <div className="neo-card neo-card-yellow p-3">
              <img
                src={products[0].image}
                alt="Gerobak kopi modular KKB"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full rounded-lg border object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden border-t bg-brand-blue py-3 text-primary-foreground">
            <div className="marquee-strip flex w-[200%] gap-8 text-lg font-extrabold uppercase">
              {Array.from({ length: 10 }).map((_, index) => (
                <span key={index}>Custom design • Rangka kuat • Siap jualan • Branding rapi</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="badge-neo">Featured products</p>
              <h2 className="mt-4 text-4xl font-extrabold">Model favorit UMKM</h2>
            </div>
            <Link to="/catalog" className="btn-neo btn-neo-ghost">
              Semua produk
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="border-y bg-brand-purple py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold">Kenapa pilih KKB?</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                [
                  "01",
                  "Layout efisien",
                  "Setiap gerobak dirancang mengikuti alur kerja jualan agar servis lebih cepat.",
                ],
                [
                  "02",
                  "Material tahan pakai",
                  "Rangka, panel, dan top table dipilih untuk aktivitas harian yang padat.",
                ],
                [
                  "03",
                  "Visual brand kuat",
                  "Warna, panel, dan finishing dibuat agar produk kamu mudah dikenali.",
                ],
              ].map(([num, title, body]) => (
                <article key={num} className="neo-card bg-card p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-md border bg-brand-yellow text-xl font-extrabold shadow-neo-sm">
                    {num}
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold">{title}</h3>
                  <p className="mt-2 font-medium leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            "Gerobaknya kokoh, warna brand kami keluar banget. Pembukaan booth jadi terlihat profesional.",
            "Tim KKB bantu susun kebutuhan dari awal sampai produksi. Hasilnya siap dipakai tanpa ribet.",
          ].map((quote, index) => (
            <blockquote
              key={quote}
              className={`neo-card p-7 ${index === 0 ? "neo-card-blue" : "neo-card-yellow"}`}
            >
              <p className="text-2xl font-semibold leading-tight">“{quote}”</p>
              <footer className="mt-5 font-semibold text-muted-foreground">
                Owner UMKM #{index + 1}
              </footer>
            </blockquote>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="neo-card bg-brand-yellow p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-4xl font-extrabold">Siap punya gerobak yang langsung jualan?</h2>
                <p className="mt-3 max-w-2xl font-medium leading-relaxed text-muted-foreground">
                  Kirim konsep usaha kamu, kami bantu rekomendasikan ukuran, material, dan layout
                  terbaik.
                </p>
              </div>
              <a
                className="btn-neo btn-neo-accent"
                href={makeWhatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                Mulai konsultasi
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
