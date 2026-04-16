export function ContactSection({ revealRef, onSubmitContact }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    onSubmitContact();
  };

  return (
    <section id="contato" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-5 sm:gap-8 lg:grid-cols-2">
        <div ref={revealRef} className="reveal rounded-3xl bg-white p-4 shadow-soft sm:p-8">
          <span className="inline-block rounded-full bg-banana/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-construcao">
            Contato
          </span>
          <h2 className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">Solicite seu orçamento</h2>
          <p className="mt-3 text-slate-600">
            Preencha os dados abaixo para simular um contato comercial.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Seu nome"
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-construcao"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp"
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-construcao"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Seu e-mail"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-construcao"
            />
            <textarea
              required
              rows="5"
              placeholder="Conte o que você precisa para sua obra"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-construcao"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-construcao px-6 py-3 text-sm font-extrabold text-white transition hover:bg-green-800"
            >
              Enviar solicitação
            </button>
          </form>
        </div>

        <div ref={revealRef} className="reveal space-y-4 sm:space-y-6">
          <div className="rounded-3xl bg-white p-4 shadow-soft sm:p-8">
            <h3 className="text-xl font-extrabold">Informacoes da empresa</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <p>
                <strong className="text-darktext">Nome:</strong> Banana Locações
              </p>
              <p>
                <strong className="text-darktext">Descrição:</strong> Locação de máquinas e
                equipamentos para construção civil. Atendemos Monte Alto e toda a região.
              </p>
              <p>
                <strong className="text-darktext">Endereco:</strong> Av. Moyses Bahdur, 241 -
                Jardim Bela Vista, Monte Alto - SP, CEP 15910-000
              </p>
              <p>
                <strong className="text-darktext">Telefone/WhatsApp:</strong>{' '}
                <a
                  className="font-semibold text-construcao"
                  href="https://wa.me/5516997091919"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (16) 99709-1919
                </a>
              </p>
              <p>
                <strong className="text-darktext">E-mail:</strong>{' '}
                <a className="font-semibold text-construcao" href="mailto:bananalocacoes@gmail.com">
                  bananalocacoes@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-darktext">Instagram:</strong>{' '}
                <a
                  className="font-semibold text-construcao"
                  href="https://instagram.com/bananalocacoes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @bananalocacoes
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <iframe
              title="Mapa da Banana Locações"
              src="https://www.google.com/maps?q=Av.%20Moyses%20Bahdur,%20241%20-%20Jardim%20Bela%20Vista,%20Monte%20Alto%20-%20SP,%2015910-000&output=embed"
              className="h-[220px] w-full border-0 sm:h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
