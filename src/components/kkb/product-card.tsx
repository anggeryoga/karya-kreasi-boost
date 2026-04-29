import { Link } from "@tanstack/react-router";
import type { Product } from "../../data/products";
import { makeWhatsappLink } from "../../data/products";

export function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
}) {
  return (
    <article
      className={`neo-card neo-card-${product.accent} group flex h-full flex-col overflow-hidden`}
    >
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
      >
        <img
          src={product.image}
          alt={`${product.name} buatan KKB`}
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-md border object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="badge-neo">{product.category}</p>
          <h2 className="mt-3 text-2xl font-black leading-tight">{product.name}</h2>
          <p className="mt-2 text-sm font-bold text-muted-foreground">{product.short}</p>
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <p className="text-xl font-black">{product.price}</p>
          <div className="flex gap-2">
            {onQuickView && (
              <button
                className="btn-neo btn-neo-ghost"
                type="button"
                onClick={() => onQuickView(product)}
              >
                Quick view
              </button>
            )}
            <a
              className="btn-neo btn-neo-primary"
              href={makeWhatsappLink(product.name)}
              target="_blank"
              rel="noreferrer"
            >
              Pesan
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
