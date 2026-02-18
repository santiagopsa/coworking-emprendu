"use client";

import { useMemo, useState } from "react";
import Container from "../ui/Container";

type RoiCalcProps = {
  locale?: "en" | "es";
};

export default function RoiCalc({ locale = "en" }: RoiCalcProps) {
  const isEs = locale === "es";
  const contractMonths = 24;
  const hardCommitMonths = 12;
  const reserveMonths = 2;
  const [days, setDays] = useState(10);
  const [rate, setRate] = useState(650);
  const [operatorDay, setOperatorDay] = useState(220);
  const [otherOps, setOtherOps] = useState(0.12);
  const [leaseMonthly, setLeaseMonthly] = useState(1500);
  const investorShare = 0.7;

  const result = useMemo(() => {
    const gross = days * rate;
    const operator = days * operatorDay;
    const other = gross * otherOps;
    const operatingNet = gross - operator - other;
    const distributable = operatingNet - leaseMonthly;
    const investor = Math.max(0, distributable * investorShare);
    const firoFee = Math.max(0, distributable - investor);
    const leaseCoverage = leaseMonthly > 0 ? operatingNet / leaseMonthly : 0;
    const reserveRequired = leaseMonthly * reserveMonths;
    const investorTermTotal = investor * contractMonths;
    return { gross, operator, other, operatingNet, distributable, investor, firoFee, leaseCoverage, reserveRequired, investorTermTotal };
  }, [days, rate, operatorDay, otherOps, leaseMonthly]);

  const scenarios = useMemo(
    () => [
      { name: isEs ? "Conservador" : "Conservative", days: 8, rate: 500, operatorDay: 220, otherOps: 0.12, leaseMonthly: 1500 },
      { name: isEs ? "Base" : "Base", days: 10, rate: 650, operatorDay: 220, otherOps: 0.12, leaseMonthly: 1500 },
      { name: isEs ? "Optimista" : "Upside", days: 12, rate: 800, operatorDay: 240, otherOps: 0.1, leaseMonthly: 2500 },
    ],
    [isEs]
  );

  return (
    <section id="roi" className="bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-black">{isEs ? "Cierre" : "Final step"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs
                ? "Cuando cambia la forma de presentar candidatos, cambia la conversacion."
                : "When candidate presentation changes, the conversation changes."}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Usa este esquema para convertir una recomendacion en una conversacion con contexto, evidencia y criterios compartidos."
                : "Use this structure to turn a recommendation into a conversation with context, evidence, and shared criteria."}
            </p>

            <div className="mt-8 space-y-6 rounded-2xl border border-firo-line bg-firo-bg p-6">
              <Slider label={isEs ? "Evidencias clave por candidato" : "Key evidence points per candidate"} value={days} min={4} max={24} onChange={setDays} />
              <Slider label={isEs ? "Claridad del reporte (0-1500)" : "Report clarity score (0-1500)"} value={rate} min={300} max={1500} onChange={setRate} />
              <Slider
                label={isEs ? "Nivel de objeciones internas" : "Internal objection load"}
                value={operatorDay}
                min={120}
                max={400}
                onChange={setOperatorDay}
              />
              <Slider
                label={isEs ? "Fraccion subjetiva de la decision" : "Subjective share in decision"}
                value={Math.round(otherOps * 100)}
                min={5}
                max={30}
                onChange={(v) => setOtherOps(v / 100)}
                suffix="%"
              />
              <Slider
                label={isEs ? "Alineacion con el lider contratante" : "Hiring leader alignment"}
                value={leaseMonthly}
                min={600}
                max={4000}
                onChange={setLeaseMonthly}
              />
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {scenarios.map((s) => {
                const gross = s.days * s.rate;
                const operator = s.days * s.operatorDay;
                const other = gross * s.otherOps;
                const operatingNet = gross - operator - other;
                const distributable = operatingNet - s.leaseMonthly;
                const investor = Math.max(0, distributable * investorShare);
                return (
                  <div key={s.name} className="rounded-2xl border border-firo-line bg-white p-4">
                    <div className="text-xs font-semibold text-firo-muted">{s.name}</div>
                    <div className="mt-1 text-lg font-semibold">${Math.round(investor).toLocaleString()}</div>
                    <div className="mt-1 text-xs text-firo-muted">
                      {isEs
                        ? `Escenario de respaldo con ${s.days} evidencias y claridad ${s.rate}`
                        : `Support scenario at ${s.days} evidence points and clarity ${s.rate}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-firo-line bg-white p-8 text-firo-text shadow-soft">
            <div className="text-sm text-firo-muted">{isEs ? "Indicador estimado de respaldo interno" : "Estimated internal support indicator"}</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight">
              ${Math.round(result.investor).toLocaleString()}
            </div>
            <div className="mt-2 text-firo-muted">
              {isEs
                ? `Base: $${Math.round(result.gross).toLocaleString()} • Objeciones: $${Math.round(result.operator).toLocaleString()} • Subjetividad: $${Math.round(result.other).toLocaleString()} • Solidez: $${Math.round(result.operatingNet).toLocaleString()}`
                : `Base: $${Math.round(result.gross).toLocaleString()} • Objections: $${Math.round(result.operator).toLocaleString()} • Subjectivity: $${Math.round(result.other).toLocaleString()} • Strength: $${Math.round(result.operatingNet).toLocaleString()}`}
            </div>
            <div className="mt-1 text-firo-muted">
              {isEs
                ? `Alineacion: $${Math.round(leaseMonthly).toLocaleString()} • Diferencial: $${Math.round(result.distributable).toLocaleString()}`
                : `Alignment: $${Math.round(leaseMonthly).toLocaleString()} • Delta: $${Math.round(result.distributable).toLocaleString()}`}
            </div>
            <div className="mt-1 text-firo-muted">
              {isEs
                ? `Peso de evidencia: $${Math.round(result.investor).toLocaleString()} • Ruido interno: $${Math.round(result.firoFee).toLocaleString()}`
                : `Evidence weight: $${Math.round(result.investor).toLocaleString()} • Internal noise: $${Math.round(result.firoFee).toLocaleString()}`}
            </div>
            <div className="mt-1 text-firo-muted">
              {isEs
                ? `Cobertura del argumento: ${result.leaseCoverage.toFixed(2)}x`
                : `Argument coverage: ${result.leaseCoverage.toFixed(2)}x`}
            </div>
            <div className="mt-1 text-firo-muted">
              {isEs
                ? `Horizonte de adopcion: ${contractMonths} semanas • Ajuste inicial: ${hardCommitMonths} semanas`
                : `Adoption horizon: ${contractMonths} weeks • Initial adjustment: ${hardCommitMonths} weeks`}
            </div>
            <div className="mt-1 text-firo-muted">
              {isEs
                ? `Reserva de contexto (${reserveMonths} iteraciones): $${Math.round(result.reserveRequired).toLocaleString()}`
                : `Context reserve (${reserveMonths} iterations): $${Math.round(result.reserveRequired).toLocaleString()}`}
            </div>
            <div className="mt-1 text-firo-muted">
              {isEs
                ? `Impacto acumulado en ${contractMonths} semanas: $${Math.round(result.investorTermTotal).toLocaleString()}`
                : `Accumulated impact over ${contractMonths} weeks: $${Math.round(result.investorTermTotal).toLocaleString()}`}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Info
                title={isEs ? "Evidencia compartida" : "Shared evidence"}
                desc={isEs ? "Competencias, contexto y razones comparables para cada perfil." : "Comparable competencies, context, and rationale for each profile."}
              />
              <Info
                title={isEs ? "Reportes claros" : "Clear reports"}
                desc={isEs ? "Resumen ejecutable para lideres que necesitan decidir rapido." : "Actionable summaries for leaders who need to decide quickly."}
              />
              <Info
                title={isEs ? "Trazabilidad" : "Traceability"}
                desc={isEs ? "Cada decision queda respaldada por criterios visibles." : "Each decision is backed by visible criteria."}
              />
              <Info
                title={isEs ? "Confianza interna" : "Internal trust"}
                desc={isEs ? "Menos friccion entre recruiting y equipos contratantes." : "Less friction between recruiting and hiring teams."}
              />
            </div>

            <a
              id="quote"
              href="#join"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold hover:opacity-95"
            >
              {isEs ? "Quiero la guia" : "I want the guide"}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-firo-muted">
          {value}{suffix ?? ""}
        </span>
      </div>
      <input
        className="mt-2 w-full"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Info({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-firo-bg p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-firo-muted">{desc}</div>
    </div>
  );
}
