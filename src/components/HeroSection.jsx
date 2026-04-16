const HERO_STATS = [
  { value: '+10', label: 'Tipos de equipamentos' },
  { value: 'Rápido', label: 'Atendimento regional' },
  { value: '2015', label: 'Ano de fundação' }
];

export function HeroSection({ revealRef }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24">
      <picture className="absolute inset-0">
        <source media="(max-width: 639px)" srcSet="/image/banner-principal-mobile.jpg" />
        <img src="/image/banner-principal.jpg" alt="Banner principal Banana Locacoes" className="h-full w-full object-cover object-center" />
      </picture>
      <div className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto grid min-h-[68vh] max-w-7xl items-center gap-8 px-4 py-10 sm:min-h-[88vh] sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
        <div ref={revealRef} className="reveal max-w-2xl text-white">
          <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-banana sm:mb-4">
            Desde 2015 em Monte Alto - SP
          </span>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Tudo para sua obra com <span className="text-banana">agilidade e confiança</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-200 sm:mt-5 sm:text-lg">
            Locação de máquinas e equipamentos para construção civil. Atendemos Monte Alto e toda
            a região com rapidez, suporte e uma frota pronta para o trabalho.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href="#equipamentos"
              className="rounded-full bg-banana px-6 py-3 text-center text-sm font-extrabold text-darktext transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Ver Equipamentos
            </a>
            <a
              href="https://wa.me/5516997091919"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 p-3 backdrop-blur sm:p-4">
                <p className="text-xl font-black text-banana sm:text-2xl">{stat.value}</p>
                <p className="text-xs text-slate-100 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={revealRef} className="reveal lg:justify-self-end">
          <div className="glass rounded-3xl border border-white/40 p-5 shadow-strong">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-banana/30 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-construcao"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6m3 6V7m3 10v-4M5 21h14" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Atendimento prático</p>
                  <h3 className="text-lg font-extrabold text-darktext">Peça seu orçamento em minutos</h3>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-banana" />Locação para obras
                  pequenas, médias e grandes
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-banana" />Equipamentos
                  revisados e prontos para uso
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-banana" />Atendimento em Monte
                  Alto e toda a região
                </li>
              </ul>
              <a
                href="#contato"
                className="mt-5 inline-flex rounded-full bg-construcao px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
              >
                Solicitar contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
