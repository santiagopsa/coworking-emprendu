import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-firo-bg py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-sm font-semibold text-black">{isEs ? "Publica tu vacante" : "Post your role"}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Acceso exclusivo para empresas de Emprendu"
                  : "Exclusive access for Emprendu companies"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Completa este formulario y nuestro equipo te contacta para activar tu publicacion, pruebas de filtrado y reportes por candidato."
                  : "Complete this form and our team will help you activate your post, assessments, and candidate reports."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <form
                action="https://formsubmit.co/santiagopsa@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Emprendu - solicitud para publicar vacante" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="company">
                    {isEs ? "Empresa" : "Company"}
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Nombre de tu empresa" : "Your company name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="email">
                    {isEs ? "Correo electronico" : "Email"}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "tu@email.com" : "you@email.com"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="vacancy">
                    {isEs ? "Cargo a publicar" : "Role to publish"}
                  </label>
                  <input
                    id="vacancy"
                    name="vacancy"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Ej: Desarrollador Full Stack" : "Ex: Full Stack Developer"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#FDE774] px-5 py-3 text-sm font-semibold text-black hover:opacity-95"
                >
                  {isEs ? "Publicar oferta en PeakU" : "Post a role on PeakU"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Te contactamos para validar tu perfil de empresa y activar la ruta exclusiva de publicacion en PeakU."
              : "We will contact you to validate your company profile and activate the exclusive posting flow."}
          </div>
        </div>
      </Container>
    </section>
  );
}
