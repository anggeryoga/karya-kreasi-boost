import { Link } from "@tanstack/react-router";
import { makeWhatsappLink } from "../../data/products";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/catalog", label: "Catalog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <span className="grid h-11 w-11 place-items-center rounded-lg border bg-brand-yellow font-black shadow-neo transition-transform group-hover:-translate-y-0.5">
            KKB
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black">Karya Kreasi Bersama</span>
            <span className="block text-xs font-bold text-muted-foreground">
              Gerobak modern siap pakai
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md border bg-card px-4 py-2 text-sm font-black shadow-neo-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
              activeProps={{ className: "bg-brand-purple" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="btn-neo btn-neo-primary hidden sm:inline-flex"
          href={makeWhatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
      <nav className="grid grid-cols-4 gap-2 px-4 pb-3 md:hidden" aria-label="Navigasi mobile">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-md border bg-card px-2 py-2 text-center text-xs font-black shadow-neo-sm"
            activeProps={{ className: "bg-brand-purple" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="rounded-lg border border-primary-foreground bg-brand-yellow p-6 text-foreground shadow-neo">
          <p className="text-2xl font-black">KKB</p>
          <p className="mt-2 max-w-md font-bold">
            Solusi Gerobak Usaha Modern & Siap Pakai untuk brand kuliner, minuman, dan retail.
          </p>
        </div>
        <div>
          <p className="font-black">Kontak</p>
          <p className="mt-3 text-sm font-bold opacity-80">
            Jl. Workshop Kreatif No. 18, Indonesia
          </p>
          <p className="mt-1 text-sm font-bold opacity-80">hello@karyakreasibersama.id</p>
        </div>
        <div>
          <p className="font-black">Mulai proyek</p>
          <a
            className="btn-neo btn-neo-secondary mt-3"
            href={makeWhatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi sekarang
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
