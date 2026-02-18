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
  const anchorHref = (id: "beneficios" | "proceso" | "join") =>
    isHomePath ? `#${id}` : `${homePath}#${id}`;
  const benefitsHref = anchorHref("beneficios");
  const processHref = anchorHref("proceso");
  const joinHref = anchorHref("join");

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-firo-line bg-white/85 text-firo-text backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href={homeHref} className="inline-flex items-center" aria-label="Go to main page">
          <Image
            src="/assets/brand/firo-logo.png"
            alt="PeakU"
            width={150}
            height={45}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-firo-muted md:flex">
          <a href={benefitsHref} className="hover:text-firo-text">{isEs ? "Beneficios" : "Benefits"}</a>
          <a href={processHref} className="hover:text-firo-text">{isEs ? "Proceso" : "Process"}</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            className="rounded-lg px-2 py-1 text-xs text-firo-muted hover:text-firo-text"
          >
            {isEs ? "EN" : "ES"}
          </a>
          <a
            href={joinHref}
            className="rounded-xl bg-[#FDE774] px-3 py-2 text-sm font-semibold text-black hover:opacity-95 md:px-4"
          >
            {isEs ? "Publicar oferta en PeakU" : "Post a job on PeakU"}
          </a>
        </div>
      </div>
    </div>
  );
}
