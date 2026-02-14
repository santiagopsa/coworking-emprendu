"use client";

import { useMemo, useState } from "react";
import Container from "../ui/Container";

export default function RoiCalc() {
  const [days, setDays] = useState(12);
  const [rate, setRate] = useState(450);
  const [ops, setOps] = useState(0.22);

  const result = useMemo(() => {
    const gross = days * rate;
    const net = gross * (1 - ops);
    return { gross, net };
  }, [days, rate, ops]);

  return (
    <section id="roi" className="bg-white py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-firo-blue">ROI simulator</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Model your return with visible assumptions.
            </h2>
            <p className="mt-4 text-firo-muted">
              This is an estimate range — final numbers depend on utilization, event mix,
              and operational requirements.
            </p>

            <div className="mt-8 space-y-6 rounded-2xl border border-firo-line bg-firo-bg p-6">
              <Slider label="Days per month in use" value={days} min={4} max={22} onChange={setDays} />
              <Slider label="Avg. rate per day (USD)" value={rate} min={200} max={900} onChange={setRate} />
              <Slider
                label="Ops cost (fraction)"
                value={Math.round(ops * 100)}
                min={10}
                max={40}
                onChange={(v) => setOps(v / 100)}
                suffix="%"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-firo-navy p-8 text-white shadow-soft">
            <div className="text-sm text-white/60">Estimated monthly</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight">
              ${Math.round(result.net).toLocaleString()}
            </div>
            <div className="mt-2 text-white/60">
              Gross: ${Math.round(result.gross).toLocaleString()} • Ops: {Math.round(ops * 100)}%
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Info title="Utilization driver" desc="Events, brand activations, venue contracts." />
              <Info title="Operations included" desc="Scheduling, remote ops, maintenance workflows." />
              <Info title="Risk controls" desc="Geofencing, supervised ops, privacy policy." />
              <Info title="Payout visibility" desc="Owner dashboard with logs + monthly statements." />
            </div>

            <a
              id="quote"
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold hover:opacity-95"
            >
              Talk to FIRO
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
    <div className="rounded-2xl bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/65">{desc}</div>
    </div>
  );
}
