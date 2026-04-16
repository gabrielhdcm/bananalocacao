export function EquipmentCard({ equipment, onOpenModal, revealRef }) {
  return (
    <article
      ref={revealRef}
      className="reveal group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-48 items-center justify-center bg-white p-5 sm:h-56 sm:p-6">
        <img
          src={equipment.image}
          alt={`Imagem do equipamento ${equipment.name}`}
          className="max-h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <div className="mb-3 flex flex-col items-start gap-2 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
          <h3 className="text-2xl font-extrabold leading-tight text-darktext min-[420px]:text-lg sm:text-xl">
            {equipment.name}
          </h3>
          <span className="shrink-0 rounded-full bg-banana/20 px-3 py-1 text-xs font-bold uppercase text-construcao">
            {equipment.category}
          </span>
        </div>
        <p className="line-clamp-3 text-sm text-slate-600 sm:line-clamp-2">{equipment.description}</p>
        <div className="mt-auto flex flex-col items-start gap-3 pt-4 min-[420px]:flex-row min-[420px]:items-end min-[420px]:justify-between sm:items-center">
          <div>
            <p className="text-xs text-slate-500">Valor fictício por dia</p>
            <p className="text-2xl font-black text-construcao sm:text-2xl">{equipment.price}</p>
          </div>
          <button
            onClick={() => onOpenModal(equipment)}
            className="w-full rounded-full bg-construcao px-4 py-3 text-sm font-bold text-white transition hover:bg-green-800 min-[420px]:w-auto sm:px-4"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </article>
  );
}
