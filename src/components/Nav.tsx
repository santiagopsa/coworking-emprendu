"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

type NavProps = {
  locale?: "en" | "es";
};

export default function Nav({ locale = "en" }: NavProps) {
  const pathname = usePathname();
  const pathIsEs = pathname === "/es" || pathname.startsWith("/es/");
  const isEs = locale === "es" || pathIsEs;
  const isHomePath = pathname === "/" || pathname === "/es";

  const switchHref = pathIsEs
    ? pathname.replace(/^\/es/, "") || "/"
    : pathname === "/"
      ? "/es"
      : `/es${pathname}`;
  const homePath = isEs ? "/es" : "/";
  const homeHref = isHomePath ? "#top" : homePath;
  const anchorHref = (id: "thesis" | "roi" | "quote") =>
    isHomePath ? `#${id}` : `${homePath}#${id}`;
  const investorsHref = isEs ? "/es/investors" : "/investors";
  const aboutHref = isEs ? "/es/about" : "/about";

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-firo-navy/70 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href={homeHref} className="inline-flex items-center" aria-label="Go to main page">
          <Image
            src="/assets/brand/firo-logo.png"
            alt="FIRO"
            width={150}
            height={45}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a href={investorsHref} className="hover:text-white">{isEs ? "Inversionistas" : "Investors"}</a>
          <a href={aboutHref} className="hover:text-white">{isEs ? "Nosotros" : "About"}</a>
          <a href={anchorHref("thesis")} className="hover:text-white">{isEs ? "Tesis" : "Thesis"}</a>
          <a href={anchorHref("roi")} className="hover:text-white">ROI</a>
          <a href={anchorHref("quote")} className="hover:text-white">{isEs ? "Contacto" : "Contact"}</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            className="rounded-lg px-2 py-1 text-xs text-white/70 hover:text-white"
          >
            {isEs ? "EN" : "ES"}
          </a>
          <a
            href={anchorHref("quote")}
            className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 md:px-4"
          >
            {isEs ? "Cotizar" : "Get a quote"}
          </a>
          <a
            href={anchorHref("quote")}
            className="rounded-xl bg-firo-blue px-3 py-2 text-sm font-semibold hover:opacity-95 md:px-4"
          >
            {isEs ? "Hablar con FIRO" : "Talk to FIRO"}
          </a>
        </div>
      </div>
    </div>
  );
}
