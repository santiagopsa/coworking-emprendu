import Container from "../ui/Container";

export default function Join() {
  return (
    <section id="join" className="bg-white py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm font-semibold text-firo-blue">Join the guild</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Choose your role.
              </h2>
              <p className="mt-3 text-firo-muted">
                Owners earn yield. Events & venues get a premium experience. Same platform.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:hello@firo.ai?subject=FIRO%20Owner%20Waitlist"
                className="rounded-2xl bg-white p-6 shadow-soft hover:opacity-95"
              >
                <div className="text-lg font-semibold">I’m an Owner</div>
                <div className="mt-1 text-firo-muted">
                  I want to own/finance a robot and earn payouts.
                </div>
              </a>

              <a
                href="mailto:hello@firo.ai?subject=FIRO%20Event%20Quote"
                className="rounded-2xl bg-firo-navy p-6 text-white shadow-soft hover:opacity-95"
              >
                <div className="text-lg font-semibold">I need a robot for an event</div>
                <div className="mt-1 text-white/70">
                  I want availability and a quote for a date + location.
                </div>
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            MVP note: swap mailto for a Tally form once you want tracking + routing.
          </div>
        </div>
      </Container>
    </section>
  );
}
