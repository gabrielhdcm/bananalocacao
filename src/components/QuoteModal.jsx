import { useEffect } from 'react';

export function QuoteModal({ equipment, isOpen, onClose, onSubmitQuickQuote }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !equipment) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    onSubmitQuickQuote();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 p-4"
    >
      <div className="max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-strong">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-construcao">
              Detalhes do equipamento
            </p>
            <h3 className="text-xl font-black text-darktext">{equipment.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700"
          >
            Fechar
          </button>
        </div>

        <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-2">
          <div>
            <img
              src={equipment.image}
              alt={`Imagem do equipamento ${equipment.name}`}
              className="h-[280px] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="mt-4 rounded-2xl bg-softbg p-4">
              <p className="text-sm text-slate-600">{equipment.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white p-3">
                  <span className="font-semibold text-slate-500">Diária</span>
                  <p className="mt-1 text-lg font-black text-construcao">{equipment.price}</p>
                </div>
                <div className="rounded-xl bg-white p-3">
                  <span className="font-semibold text-slate-500">Categoria</span>
                  <p className="mt-1 text-lg font-black text-darktext">{equipment.category}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {equipment.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-banana" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-extrabold">Solicitar orçamento rápido</h4>
            <p className="mt-2 text-sm text-slate-600">
              Preencha abaixo e use como demonstração de captação de leads.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input
                type="text"
                readOnly
                value={equipment.name}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
              />
              <input
                type="text"
                required
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-construcao"
              />
              <input
                type="tel"
                required
                placeholder="Seu WhatsApp"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-construcao"
              />
              <textarea
                rows="4"
                placeholder="Período da locação e detalhes"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-construcao"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-banana px-6 py-3 text-sm font-extrabold text-darktext transition hover:brightness-95"
              >
                Enviar interesse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
