const TESTIMONIALS = [
  {
    content: 'Atendimento excelente e entrega muito rápida. Salvou o cronograma da obra.',
    name: 'Carlos Mendes',
    role: 'Construtor em Monte Alto'
  },
  {
    content: 'Equipamentos em ótimo estado e preço justo. Voltarei a alugar com certeza.',
    name: 'Juliana Rocha',
    role: 'Engenheira civil'
  },
  {
    content: 'Equipe prestativa, respondeu rápido e ajudou a escolher a máquina certa.',
    name: 'Rafael Souza',
    role: 'Empreiteiro'
  },
  {
    content: 'Muito profissional. Deixou nossa reforma mais prática e eficiente.',
    name: 'Patricia Lima',
    role: 'Cliente residencial'
  }
];

export function TestimonialsSection({ revealRef }) {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={revealRef} className="reveal mb-7 text-center sm:mb-10">
          <span className="inline-block rounded-full bg-construcao/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-construcao">
            Depoimentos
          </span>
          <h2 className="mt-2 text-2xl font-black sm:mt-3 sm:text-4xl">Quem aluga, recomenda</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              ref={revealRef}
              className="reveal rounded-3xl border border-slate-100 bg-softbg p-4 shadow-soft sm:p-6"
            >
              <p className="text-sm text-slate-600">&ldquo;{item.content}&rdquo;</p>
              <p className="mt-4 font-bold">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
