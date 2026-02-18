import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="resultados" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-black">{isEs ? "Alianza Emprendu + PeakU" : "Emprendu + PeakU partnership"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Una pagina QR para activar vacantes de alto impacto" : "A QR landing page to launch high-impact hiring"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Este QR conecta a la comunidad de Emprendu con una ruta de publicacion exclusiva: mas alcance, mejores filtros y reportes claros para contratar mejor."
                : "This QR connects Emprendu's community with an exclusive publishing route: wider reach, stronger filtering, and clear decision-ready reports."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title={isEs ? "Alcance de candidatos" : "Candidate reach"} value={isEs ? "+200 por oferta" : "200+ per post"} />
              <Loot title={isEs ? "Evaluacion tecnica" : "Technical assessment"} value={isEs ? "Guiada por PeakU" : "Guided by PeakU"} />
              <Loot title={isEs ? "Reporte final" : "Final report"} value={isEs ? "Por cada candidato" : "Per candidate"} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[40px] bg-firo-blue/15 blur-3xl" />
            <Image
              src="/assets/hero/dashboard.png"
              alt="PeakU dashboard"
              width={1400}
              height={900}
              className="relative w-full rounded-3xl shadow-soft"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Loot({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="text-xs font-semibold text-firo-muted">{title}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
