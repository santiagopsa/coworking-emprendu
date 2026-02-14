import Image from "next/image";

export default function Nav() {
  return (
    <>
      <a
        href="#top"
        className="fixed left-5 top-4 z-[60] md:left-8 md:top-5"
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
          <div className="flex items-center justify-end md:justify-between">
            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a href="#thesis" className="hover:text-white">Thesis</a>
              <a href="#roi" className="hover:text-white">ROI</a>
              <a href="#quote" className="hover:text-white">Contact</a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#quote"
                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
              >
                Get a quote
              </a>
              <a
                href="#quote"
                className="rounded-xl bg-firo-blue px-4 py-2 text-sm font-semibold hover:opacity-95"
              >
                Talk to FIRO
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
