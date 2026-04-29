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
        <section className="relative overflow-hidden border-b bg-card">
          <div className="absolute inset-0 dot-grid opacity-[0.08]" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-16">
            <div className="relative z-10">
              <p className="badge-neo">KKB • Karya Kreasi Bersama</p>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Partner Produksi Gerobak Usaha Modern
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground">
                KKB membantu brand kuliner, minuman, dan retail membangun gerobak yang rapi,
                fungsional, dan siap dipakai untuk operasional harian.
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <Link to="/catalog" className="btn-neo btn-neo-primary">
                  Lihat katalog
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
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["3+", "Kategori produk"],
                  ["Custom", "Ukuran & finishing"],
                  ["Siap", "Untuk operasional"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border bg-background px-4 py-3">
                    <p className="text-2xl font-extrabold leading-none">{value}</p>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{label}</p>
                  </div>
                ))}
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
            <div className="marquee-strip flex w-[200%] gap-8 text-sm font-bold uppercase sm:text-base">
              {Array.from({ length: 10 }).map((_, index) => (
                <span key={index}>Custom design • Rangka kuat • Siap jualan • Branding rapi</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-4 border-b pb-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="badge-neo">Katalog utama</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Model gerobak siap produksi
              </h2>
              <p className="mt-3 max-w-2xl font-medium leading-relaxed text-muted-foreground">
                Pilihan awal untuk kebutuhan booth minuman, makanan, dan retail dengan opsi custom.
              </p>
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

        <section className="border-y bg-muted py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="badge-neo bg-card">Keunggulan</p>
                <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                  Produksi lebih terarah dan rapi
                </h2>
              </div>
              <p className="font-medium leading-relaxed text-muted-foreground">
                Setiap proyek disusun dari kebutuhan operasional, tampilan brand, sampai kesiapan
                pemakaian di lapangan.
              </p>
            </div>
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
                  <span className="grid h-11 w-11 place-items-center rounded-md border bg-brand-yellow text-lg font-extrabold shadow-neo-sm">
                    {num}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                  <p className="mt-2 font-medium leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="badge-neo">Alur kerja</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Proses jelas dari brief sampai serah terima
              </h2>
            </div>
            <div className="grid gap-4">
              {[
                [
                  "Brief kebutuhan",
                  "Kami petakan jenis usaha, ukuran area, kebutuhan storage, dan arah visual brand.",
                ],
                [
                  "Desain & produksi",
                  "Layout, material, warna, dan finishing disiapkan agar gerobak rapi serta ergonomis.",
                ],
                [
                  "Final check",
                  "Unit dicek sebelum serah terima supaya siap digunakan untuk pembukaan booth.",
                ],
              ].map(([title, body], index) => (
                <article
                  key={title}
                  className="grid gap-4 rounded-lg border bg-card p-5 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-md border bg-brand-blue text-base font-extrabold text-accent-foreground shadow-neo-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-1 font-medium leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="neo-card bg-brand-yellow p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-4xl font-extrabold">
                  Siap punya gerobak yang langsung jualan?
                </h2>
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
