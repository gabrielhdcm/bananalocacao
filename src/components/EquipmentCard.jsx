export function EquipmentCard({ equipment, onOpenModal, revealRef }) {
  return (
    <article
      ref={revealRef}
      className="reveal group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={equipment.image}
        alt={`Placeholder visual do equipamento ${equipment.name}`}
        className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
      />
      <div className="p-3 sm:p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-base font-extrabold text-darktext sm:text-xl">{equipment.name}</h3>
          <span className="rounded-full bg-banana/20 px-3 py-1 text-xs font-bold uppercase text-construcao">
            {equipment.category}
          </span>
        </div>
        <p className="line-clamp-2 text-xs text-slate-600 sm:text-sm">{equipment.description}</p>
        <div className="mt-3 flex items-end justify-between gap-2 sm:mt-4 sm:items-center">
          <div>
            <p className="text-xs text-slate-500">Valor fictício por dia</p>
            <p className="text-lg font-black text-construcao sm:text-2xl">{equipment.price}</p>
          </div>
          <button
            onClick={() => onOpenModal(equipment)}
            className="rounded-full bg-construcao px-3 py-2 text-xs font-bold text-white transition hover:bg-green-800 sm:px-4 sm:text-sm"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </article>
  );
}
