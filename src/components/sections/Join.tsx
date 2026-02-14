import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-white py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold text-firo-blue">{isEs ? "Accion para inversionistas" : "Investor action"}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs ? "Invierte en la economia robotica." : "Invest in the robotics economy."}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Unete a la lista de inversionistas para recibir supuestos, escenarios de pagos y detalles de onboarding."
                  : "Join the investor waitlist to receive scenario assumptions, payout modeling, and onboarding details."}
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:hello@firo.ai?subject=FIRO%20Owner%20Waitlist"
                className="rounded-2xl bg-white p-6 shadow-soft hover:opacity-95"
              >
                <div className="text-lg font-semibold">
                  {isEs ? "Unirme a la lista de inversionistas" : "Join the Investor Waitlist"}
                </div>
                <div className="mt-1 text-firo-muted">
                  {isEs
                    ? "Quiero documentos para inversionistas, escenarios esperados de pagos y siguientes pasos."
                    : "I want investor documents, expected payout scenarios, and next-step onboarding."}
                </div>
              </a>

              <a
                href="mailto:hello@firo.ai?subject=FIRO%20Event%20Quote"
                className="rounded-2xl bg-firo-navy p-6 text-white shadow-soft hover:opacity-95"
              >
                <div className="text-lg font-semibold">
                  {isEs ? "Soy un socio de despliegue" : "I’m a deployment partner"}
                </div>
                <div className="mt-1 text-white/70">
                  {isEs
                    ? "Puedo colocar robots y quiero hablar de demanda, contratos y programacion."
                    : "I can place robots and want to discuss demand, contracts, and scheduling."}
                </div>
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Para inversionistas calificados. Las proyecciones se basan en escenarios y no son garantias."
              : "For qualified investors. Projections shown are scenario-based and not guarantees."}
          </div>
        </div>
      </Container>
    </section>
  );
}
