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
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame>
      <main>
        <section className="border-b bg-brand-yellow">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="badge-neo bg-card">Brand story</p>
              <h1 className="mt-5 text-5xl font-extrabold leading-none">
                Kami bantu ide jualan jadi gerobak yang siap tampil.
              </h1>
            </div>
            <div className="neo-card bg-card p-6">
              <p className="text-xl font-medium leading-relaxed">
                Karya Kreasi Bersama lahir dari kebutuhan UMKM untuk punya booth yang bukan cuma
                kuat, tapi juga punya karakter brand. Kami menggabungkan desain, produksi, dan
                finishing agar gerobak terasa profesional sejak hari pertama jualan.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="neo-card neo-card-purple p-7">
              <h2 className="text-4xl font-extrabold">Visi</h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground">
                Menjadi partner kreatif yang membuat bisnis kecil terlihat berani, rapi, dan siap
                bersaing di ruang publik.
              </p>
            </article>
            <article className="neo-card neo-card-blue p-7">
              <h2 className="text-4xl font-extrabold">Misi</h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground">
                Mendesain gerobak yang ergonomis, memproduksi dengan material tepat, dan menjaga
                komunikasi jelas dari konsep sampai serah terima.
              </p>
            </article>
          </div>
        </section>

        <section className="border-y bg-brand-purple py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="badge-neo">Workshop showcase</p>
              <h2 className="mt-4 text-4xl font-extrabold">
                Dari rangka, panel, sampai finishing brand.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
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
