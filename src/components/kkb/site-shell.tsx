import { Link } from "@tanstack/react-router";
import kkbLogo from "../../assets/kkb-logo.png";
import { makeWhatsappLink } from "../../data/products";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/catalog", label: "Katalog" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Kontak" },
] as const;

const mobileNavItems = navItems.filter((item) => item.to !== "/");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border bg-card p-1.5 transition-transform group-hover:-translate-y-0.5 sm:h-14 sm:w-14">
            <img src={kkbLogo} alt="Logo Karya Kreasi Bersama" className="h-full w-full object-contain" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold sm:text-base">Karya Kreasi Bersama</span>
            <span className="block truncate text-xs font-medium text-muted-foreground">
              Gerobak modern siap pakai
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md border bg-card px-4 py-2 text-sm font-semibold shadow-neo-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-brand-blue text-accent-foreground" }}
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
      <nav className="grid grid-cols-3 gap-2 px-4 pb-3 md:hidden" aria-label="Navigasi mobile">
        {mobileNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-md border bg-card px-2 py-2 text-center text-xs font-semibold shadow-neo-sm"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-brand-blue text-accent-foreground" }}
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
    <footer className="border-t bg-card text-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="rounded-lg border bg-brand-yellow p-6 text-foreground shadow-neo">
          <div className="flex items-center gap-3">
            <img src={kkbLogo} alt="Logo KKB" className="h-12 w-12 rounded-md border bg-card object-contain p-1" />
            <p className="text-xl font-extrabold">KKB</p>
          </div>
          <p className="mt-3 max-w-md font-medium leading-relaxed">
            Solusi Gerobak Usaha Modern & Siap Pakai untuk brand kuliner, minuman, dan retail.
          </p>
        </div>
        <div>
          <p className="font-extrabold">Kontak</p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
            Jl. Workshop Kreatif No. 18, Indonesia
          </p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">hello@karyakreasibersama.id</p>
        </div>
        <div>
          <p className="font-extrabold">Mulai proyek</p>
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
