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
  head: ({ loaderData }) => {
    const product = loaderData ?? products[0];

    return {
      meta: [
        { title: `${product.name} KKB` },
        { name: "description", content: `${product.name} dari KKB: ${product.short}` },
        { property: "og:title", content: `${product.name} KKB` },
        { property: "og:description", content: product.short },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  const related = products.filter((item) => item.slug !== product.slug);

  return (
    <PageFrame>
      <main className="section-container section-shell">
        <Link to="/catalog" className="btn-neo btn-neo-ghost">
          Kembali ke catalog
        </Link>
        <section className="mt-6 grid gap-6 md:mt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="grid gap-3 sm:gap-4">
            <div className={`neo-card neo-card-${product.accent} p-3`}>
              <img
                src={product.image}
                alt={`${product.name} KKB`}
                width={1280}
                height={960}
                className="aspect-[4/3] w-full rounded-lg border object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
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
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-2xl font-extrabold sm:text-3xl">{product.price}</p>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
              {product.short}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="neo-card p-5">
                <h2 className="text-xl font-extrabold sm:text-2xl">Spesifikasi</h2>
                <ul className="mt-4 grid gap-2 font-medium text-muted-foreground">
                  {product.specs.map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="neo-card neo-card-yellow p-5">
                <h2 className="text-xl font-extrabold sm:text-2xl">Material</h2>
                <ul className="mt-4 grid gap-2 font-medium text-muted-foreground">
                  {product.materials.map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              className="btn-neo btn-neo-accent mt-6"
              href={makeWhatsappLink(product.name)}
              target="_blank"
              rel="noreferrer"
            >
              Order via WhatsApp
            </a>
          </div>
        </section>
        <section className="mt-12 md:mt-16">
          <div className="section-header">
            <div>
              <p className="eyebrow">Produk terkait</p>
              <h2 className="section-title">Lihat juga model lainnya</h2>
            </div>
          </div>
          <div className="section-grid section-grid-2">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
