import { Link } from "@tanstack/react-router";
import type { Product } from "../../data/products";
import { makeWhatsappLink } from "../../data/products";

export function ProductCard({
  product,
  onQuickView,
  compact = false,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
  compact?: boolean;
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
      <div
        className={`flex flex-1 flex-col ${compact ? "gap-2 p-3 sm:gap-4 sm:p-5" : "gap-4 p-5"}`}
      >
        <div>
          <p className="badge-neo">{product.category}</p>
          <h2
            className={`mt-2 font-extrabold leading-tight ${
              compact ? "text-base sm:text-2xl" : "mt-3 text-2xl"
            }`}
          >
            {product.name}
          </h2>
          <p
            className={`mt-1 font-medium leading-relaxed text-muted-foreground ${
              compact ? "line-clamp-2 text-xs sm:text-sm" : "mt-2 text-sm"
            }`}
          >
            {product.short}
          </p>
        </div>
        <div
          className={`mt-auto flex ${
            compact
              ? "flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between"
              : "flex-wrap items-center justify-between gap-3"
          }`}
        >
          <p className={`font-extrabold ${compact ? "text-sm sm:text-xl" : "text-xl"}`}>
            {product.price}
          </p>
          <div className={`flex gap-2 ${compact ? "flex-wrap" : ""}`}>
            {onQuickView && (
              <button
                className={`btn-neo btn-neo-ghost ${compact ? "hidden sm:inline-flex" : ""}`}
                type="button"
                onClick={() => onQuickView(product)}
              >
                Quick view
              </button>
            )}
            <a
              className={`btn-neo btn-neo-primary ${compact ? "flex-1 px-3 py-2 text-sm sm:flex-none" : ""}`}
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
