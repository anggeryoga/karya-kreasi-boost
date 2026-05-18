import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "../components/kkb/site-shell";
import { ProductCard } from "../components/kkb/product-card";
import { makeWhatsappLink, products } from "../data/products";
import { PriceEstimator } from "../components/kkb/price-estimator";
import portfolio1 from "../assets/kkb-portfolio-1.jpg";
import portfolio2 from "../assets/kkb-portfolio-2.jpg";
import portfolio3 from "../assets/kkb-portfolio-3.jpg";
import portfolio4 from "../assets/kkb-portfolio-4.jpg";

const portfolioItems = [
  { src: portfolio1, title: "Coffee Cart — Bandung", tag: "Gerobak Kopi" },
  { src: portfolio2, title: "Bakerdis Booth — Jakarta", tag: "Booth Makanan" },
  { src: portfolio3, title: "Kanopi Carport — Bekasi", tag: "Kanopi Rumah" },
  { src: portfolio4, title: "Kitchen Set — Tangerang", tag: "Furniture Custom" },
] as const;

const testimonials = [
  {
    name: "Rizky Pratama",
    business: "Kopi Lokal Bandung",
    city: "Bandung",
    quote:
      "Gerobak datang sesuai desain, finishing rapi, dan langsung bisa dipakai jualan hari pertama. Tim KKB komunikatif banget.",
    initial: "R",
  },
  {
    name: "Sinta Maharani",
    business: "Bakerdis Pastry",
    city: "Jakarta Selatan",
    quote:
      "Booth-nya bikin brand kami terlihat profesional di pop-up market. Customer banyak yang nanyain di mana bikinnya.",
    initial: "S",
  },
  {
    name: "Pak Yusuf",
    business: "Rumah Tinggal Pribadi",
    city: "Bekasi",
    quote:
      "Pasang kanopi & pagar sekaligus. Pengerjaan cepat, hasilnya kokoh dan rapi. Recommended buat warga komplek.",
    initial: "Y",
  },
  {
    name: "Mbak Dinda",
    business: "Renovasi Rumah",
    city: "Tangerang",
    quote:
      "Kitchen set custom hasilnya sesuai 3D yang dikirim. Pengukuran on-site bikin tidak ada yang meleset.",
    initial: "D",
  },
];

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
      { property: "og:url", content: "https://karya-kreasi-boost.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://karya-kreasi-boost.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Karya Kreasi Bersama",
          url: "https://karya-kreasi-boost.lovable.app",
          description:
            "Workshop kreatif pembuat gerobak usaha modern, kanopi, pagar, dan furniture custom.",
          email: "hello@karyakreasibersama.id",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Workshop Kreatif No. 18",
            addressCountry: "ID",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Karya Kreasi Bersama",
          url: "https://karya-kreasi-boost.lovable.app",
        }),
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
          <div className="section-container section-shell grid items-center gap-8 md:grid-cols-[1fr_0.85fr] md:gap-10 lg:gap-12">
            <div className="relative z-10">
              <p className="badge-neo">KKB • Karya Kreasi Bersama</p>
              <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl">
                Partner Produksi Gerobak Usaha Modern
              </h1>
              <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                KKB membantu brand kuliner, minuman, dan retail membangun gerobak yang rapi,
                fungsional, dan siap dipakai untuk operasional harian.
              </p>
              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
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
              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["3+", "Kategori produk"],
                  ["Custom", "Ukuran & finishing"],
                  ["Siap", "Untuk operasional"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border bg-background px-3 py-3 sm:px-4">
                    <p className="text-lg font-extrabold leading-none sm:text-2xl">{value}</p>
                    <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                      {label}
                    </p>
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

        <section className="section-shell">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Katalog utama</p>
                <h2 className="section-title">Model gerobak siap produksi</h2>
                <p className="section-lead">
                  Pilihan awal untuk kebutuhan booth minuman, makanan, dan retail dengan opsi
                  custom.
                </p>
              </div>
              <Link to="/catalog" className="btn-neo btn-neo-ghost">
                Semua produk
              </Link>
            </div>
            <div className="section-grid section-grid-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-y bg-card">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Portofolio</p>
                <h2 className="section-title">Hasil karya nyata yang sudah terkirim</h2>
                <p className="section-lead">
                  Foto unit yang sudah diproduksi dan dipasang di lokasi klien — bukan render,
                  bukan stok foto.
                </p>
              </div>
              <Link to="/catalog" className="btn-neo btn-neo-ghost">
                Lihat semua proyek
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {portfolioItems.map((item) => (
                <figure key={item.title} className="neo-card overflow-hidden bg-card">
                  <img
                    src={item.src}
                    alt={`Portofolio KKB - ${item.title}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="border-t p-3 sm:p-4">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs">
                      {item.tag}
                    </p>
                    <p className="mt-1 text-sm font-extrabold leading-tight sm:text-base">
                      {item.title}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Estimator harga</p>
                <h2 className="section-title">Hitung estimasi sebelum chat WhatsApp</h2>
                <p className="section-lead">
                  Pilih jenis, ukuran, dan finishing untuk mendapatkan rentang harga kasar.
                  Estimasi otomatis dikirim ke WhatsApp saat kamu lanjut konsultasi.
                </p>
              </div>
            </div>
            <PriceEstimator />
          </div>
        </section>

        <section className="section-shell border-y bg-muted">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Testimoni klien</p>
                <h2 className="section-title">Cerita dari pemilik usaha & rumah</h2>
                <p className="section-lead">
                  Klien KKB tersebar di Jabodetabek, Bandung, dan kota-kota lain. Berikut beberapa
                  ulasan setelah unit diterima.
                </p>
              </div>
            </div>
            <div className="section-grid section-grid-3">
              {testimonials.slice(0, 3).map((t) => (
                <article key={t.name} className="neo-card flex h-full flex-col gap-4 bg-card p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full border bg-brand-yellow text-lg font-extrabold shadow-neo-sm">
                      {t.initial}
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-extrabold">{t.name}</p>
                      <p className="text-xs font-medium text-muted-foreground">
                        {t.business} · {t.city}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-foreground/80">
                    “{t.quote}”
                  </p>
                  <div className="mt-auto flex gap-0.5 text-brand-blue" aria-label="Rating 5 dari 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} aria-hidden="true">★</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-y bg-muted">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Keunggulan</p>
                <h2 className="section-title">Produksi lebih terarah dan rapi</h2>
                <p className="section-lead">
                  Setiap proyek disusun dari kebutuhan operasional, tampilan brand, sampai kesiapan
                  pemakaian di lapangan.
                </p>
              </div>
            </div>
            <div className="section-grid section-grid-3">
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

        <section className="section-shell">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Alur kerja</p>
                <h2 className="section-title">Proses jelas dari brief sampai serah terima</h2>
                <p className="section-lead">
                  Tiga tahap utama untuk memastikan setiap unit siap operasional.
                </p>
              </div>
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

        <section className="section-shell pt-0">
          <div className="section-container">
            <div className="neo-card bg-brand-yellow p-8 md:p-12">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h2 className="section-title">Siap punya gerobak yang langsung jualan?</h2>
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
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
