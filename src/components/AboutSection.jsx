export function AboutSection({ revealRef }) {
  return (
    <section id="sobre" className="bg-white py-12 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div ref={revealRef} className="reveal">
          <span className="inline-block rounded-full bg-construcao/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-construcao">
            Sobre nós
          </span>
          <h2 className="mt-2 text-2xl font-black sm:mt-3 sm:text-4xl">Banana Locações</h2>
          <p className="mt-4 text-slate-600">
            Somos especialistas em locação de máquinas e equipamentos para construção civil.
            Atendemos Monte Alto e toda a região com foco em rapidez, segurança e confiança em
            cada entrega.
          </p>
          <p className="mt-4 text-slate-600">
            Desde 2015, ajudamos clientes, construtores e profissionais da obra a manter a
            produtividade com equipamentos revisados, atendimento próximo e soluções sob medida
            para cada necessidade.
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-softbg p-5">
              <p className="text-sm text-slate-500">Sede</p>
              <p className="mt-1 font-bold">
                Av. Moyses Bahdur, 241 - Jardim Bela Vista, Monte Alto - SP, CEP 15910-000
              </p>
            </div>
            <div className="rounded-2xl bg-softbg p-5">
              <p className="text-sm text-slate-500">Contato rápido</p>
              <p className="mt-1 font-bold">(16) 99709-1919</p>
              <p className="text-sm text-slate-600">bananalocacoes@gmail.com</p>
            </div>
          </div>
        </div>

        <div ref={revealRef} className="reveal">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
            alt="Placeholder visual da sede ou equipe da Banana Locações em ambiente de construção"
            className="h-full min-h-[220px] w-full rounded-3xl object-cover shadow-soft sm:min-h-[340px]"
          />
        </div>
      </div>
    </section>
  );
}
