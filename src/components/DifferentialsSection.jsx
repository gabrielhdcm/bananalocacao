const DIFFERENTIALS = [
  {
    icon: '🚚',
    title: 'Entrega rápida',
    description: 'Agilidade no atendimento para Monte Alto e toda a região.'
  },
  {
    icon: '🛠️',
    title: 'Frota confiável',
    description: 'Equipamentos revisados e prontos para elevar a produtividade.'
  },
  {
    icon: '🤝',
    title: 'Atendimento próximo',
    description: 'Suporte humanizado para orientar a melhor escolha para a obra.'
  },
  {
    icon: '📍',
    title: 'Presença regional',
    description: 'Atendimento local com conhecimento da demanda da região.'
  }
];

export function DifferentialsSection({ revealRef }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div ref={revealRef} className="reveal mb-7 text-center sm:mb-10">
        <span className="inline-block rounded-full bg-banana/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-construcao">
          Por que escolher a Banana
        </span>
        <h2 className="mt-2 text-2xl font-black sm:mt-3 sm:text-4xl">Sua obra no ritmo certo</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        {DIFFERENTIALS.map((item) => (
          <div
            key={item.title}
            ref={revealRef}
            className="reveal rounded-3xl bg-white p-4 shadow-soft transition hover:-translate-y-1 sm:p-6"
          >
            <div className="mb-4 inline-flex rounded-2xl bg-banana/25 p-3 text-construcao">
              {item.icon}
            </div>
            <h3 className="text-lg font-extrabold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
