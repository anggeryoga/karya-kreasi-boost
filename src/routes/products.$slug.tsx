import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageFrame } from "../components/kkb/site-shell";
import { ProductCard } from "../components/kkb/product-card";
import { makeWhatsappLink, products } from "../data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.name} KKB` },
      { name: "description", content: `${loaderData.name} dari KKB: ${loaderData.short}` },
      { property: "og:title", content: `${loaderData.name} KKB` },
      { property: "og:description", content: loaderData.short },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const related = products.filter((item) => item.slug !== product.slug);

  return (
    <PageFrame>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/catalog" className="btn-neo btn-neo-ghost">
          Kembali ke catalog
        </Link>
        <section className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            <div className={`neo-card neo-card-${product.accent} p-3`}>
              <img
                src={product.image}
                alt={`${product.name} KKB`}
                width={1280}
                height={960}
                className="aspect-[4/3] w-full rounded-lg border object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[product.image, ...related.map((item) => item.image)]
                .slice(0, 3)
                .map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Galeri gerobak KKB ${index + 1}`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] rounded-lg border object-cover shadow-neo-sm"
                  />
                ))}
            </div>
          </div>
          <div>
            <p className="badge-neo">{product.category}</p>
            <h1 className="mt-5 text-5xl font-black leading-none">{product.name}</h1>
            <p className="mt-4 text-3xl font-black">{product.price}</p>
            <p className="mt-5 text-lg font-bold text-muted-foreground">{product.short}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="neo-card p-5">
                <h2 className="text-2xl font-black">Spesifikasi</h2>
                <ul className="mt-4 grid gap-2 font-bold text-muted-foreground">
                  {product.specs.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="neo-card neo-card-yellow p-5">
                <h2 className="text-2xl font-black">Material</h2>
                <ul className="mt-4 grid gap-2 font-bold text-muted-foreground">
                  {product.materials.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              className="btn-neo btn-neo-accent mt-8"
              href={makeWhatsappLink(product.name)}
              target="_blank"
              rel="noreferrer"
            >
              Order via WhatsApp
            </a>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-4xl font-black">Produk terkait</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
