import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "../components/kkb/site-shell";
import { products } from "../data/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang KKB" },
      {
        name: "description",
        content:
          "Cerita Karya Kreasi Bersama, workshop kreatif pembuat gerobak usaha modern siap pakai untuk UMKM.",
      },
      { property: "og:title", content: "Tentang KKB" },
      {
        property: "og:description",
        content:
          "Kenali KKB, partner produksi gerobak usaha modern untuk brand kuliner dan retail.",
      },
      { property: "og:url", content: "https://karya-kreasi-boost.lovable.app/about" },
    ],
    links: [
      { rel: "canonical", href: "https://karya-kreasi-boost.lovable.app/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame>
      <main>
        <section className="section-shell border-b bg-brand-yellow">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Brand story</p>
                <h1 className="section-title">
                  Kami bantu ide jualan jadi gerobak yang siap tampil
                </h1>
                <p className="section-lead">
                  Karya Kreasi Bersama menggabungkan desain, produksi, dan finishing agar gerobak
                  terasa profesional sejak hari pertama jualan.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <p className="text-lg font-medium leading-relaxed">
                Karya Kreasi Bersama lahir dari kebutuhan UMKM untuk punya booth yang bukan cuma
                kuat, tapi juga punya karakter brand. Kami mendampingi dari konsep, layout
                operasional, sampai finishing visual brand.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Fondasi kerja</p>
                <h2 className="section-title">Arah produksi yang jelas untuk setiap proyek</h2>
                <p className="section-lead">
                  Visi dan misi yang menjaga kualitas konsisten lintas kategori usaha.
                </p>
              </div>
            </div>
            <div className="section-grid section-grid-2">
              <article className="neo-card neo-card-purple p-7">
                <h3 className="text-2xl font-extrabold">Visi</h3>
                <p className="mt-4 font-medium leading-relaxed text-muted-foreground">
                  Menjadi partner kreatif yang membuat bisnis kecil terlihat berani, rapi, dan siap
                  bersaing di ruang publik.
                </p>
              </article>
              <article className="neo-card neo-card-blue p-7">
                <h3 className="text-2xl font-extrabold">Misi</h3>
                <p className="mt-4 font-medium leading-relaxed text-muted-foreground">
                  Mendesain gerobak yang ergonomis, memproduksi dengan material tepat, dan menjaga
                  komunikasi jelas dari konsep sampai serah terima.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell border-y bg-brand-purple">
          <div className="section-container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Workshop showcase</p>
                <h2 className="section-title">Dari rangka, panel, sampai finishing brand</h2>
                <p className="section-lead">
                  Sebagian unit yang sudah kami produksi untuk berbagai kategori usaha.
                </p>
              </div>
            </div>
            <div className="section-grid section-grid-3">
              {products.map((product) => (
                <article key={product.slug} className="neo-card bg-card p-3">
                  <img
                    src={product.image}
                    alt={`Showcase produksi ${product.name}`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border object-cover"
                  />
                  <h3 className="p-4 text-xl font-extrabold">{product.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
