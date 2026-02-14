import Image from "next/image";

type NavProps = {
  locale?: "en" | "es";
};

export default function Nav({ locale = "en" }: NavProps) {
  const isEs = locale === "es";

  return (
    <>
      <a
        href="#top"
        className="fixed left-5 top-4 z-[60] hidden md:block md:left-8 md:top-5"
        aria-label="Go to top"
      >
        <Image
          src="/assets/brand/firo-logo.png"
          alt="FIRO"
          width={180}
          height={54}
          priority
          className="h-9 w-auto md:h-11"
        />
      </a>

      <div className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 w-[min(980px,calc(100%-2.5rem))] rounded-2xl border border-white/10 bg-firo-navy/70 px-4 py-3 text-white backdrop-blur">
          <div className="flex items-center justify-between">
            <a href="#top" className="md:hidden" aria-label="Go to top">
              <Image
                src="/assets/brand/firo-logo.png"
                alt="FIRO"
                width={120}
                height={36}
                priority
                className="h-7 w-auto"
              />
            </a>
            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a href="#thesis" className="hover:text-white">{isEs ? "Tesis" : "Thesis"}</a>
              <a href="#roi" className="hover:text-white">ROI</a>
              <a href="#quote" className="hover:text-white">{isEs ? "Contacto" : "Contact"}</a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={isEs ? "/" : "/es"}
                className="rounded-lg px-2 py-1 text-xs text-white/70 hover:text-white"
              >
                {isEs ? "EN" : "ES"}
              </a>
              <a
                href="#quote"
                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
              >
                {isEs ? "Cotizar" : "Get a quote"}
              </a>
              <a
                href="#quote"
                className="rounded-xl bg-firo-blue px-4 py-2 text-sm font-semibold hover:opacity-95"
              >
                {isEs ? "Hablar con FIRO" : "Talk to FIRO"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
