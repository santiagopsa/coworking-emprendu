import Image from "next/image";
import Container from "../ui/Container";

export default function Rewards() {
  return (
    <section id="rewards" className="bg-firo-navy py-24 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold text-firo-blue">Rewards</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Track the run. Claim the payout.
            </h2>
            <p className="mt-4 text-white/70">
              Base case targets around $2,000 net monthly on entry units priced from about $30k.
              Every deployment logs utilization and uptime so payouts are measurable and auditable.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title="Utilization" value="52%" />
              <Loot title="Uptime" value="99.2%" />
              <Loot title="Net payout (base)" value="$2,000" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[40px] bg-firo-blue/15 blur-3xl" />
            <Image
              src="/assets/hero/dashboard.png"
              alt="FIRO dashboard"
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
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-semibold text-white/60">{title}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
