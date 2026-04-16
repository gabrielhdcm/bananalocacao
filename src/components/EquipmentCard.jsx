export function EquipmentCard({ equipment, onOpenModal, revealRef }) {
  return (
    <article
      ref={revealRef}
      className="reveal group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-32 items-center justify-center bg-white p-3 sm:h-56 sm:p-6">
        <img
          src={equipment.image}
          alt={`Imagem do equipamento ${equipment.name}`}
          className="max-h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-5">
        <div className="mb-2 min-w-0">
          <h3 className="line-clamp-2 text-base font-extrabold leading-tight text-darktext sm:text-xl">
            {equipment.name}
          </h3>
          <span className="mt-2 inline-flex max-w-full rounded-full bg-banana/20 px-2.5 py-1 text-[10px] font-bold uppercase leading-none tracking-wide text-construcao sm:px-3 sm:text-[11px]">
            {equipment.category}
          </span>
        </div>
        <p className="line-clamp-3 text-xs leading-5 text-slate-600 sm:line-clamp-2 sm:text-sm sm:leading-6">
          {equipment.description}
        </p>
        <div className="mt-auto flex flex-col gap-3 pt-3 sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:pt-4">
          <div className="min-w-0">
            <p className="text-xs text-slate-500">Valor fictício por dia</p>
            <p className="mt-1 text-xl font-black leading-none text-construcao sm:text-2xl">
              {equipment.price}
            </p>
          </div>
          <button
            onClick={() => onOpenModal(equipment)}
            className="w-full rounded-full bg-construcao px-3 py-2.5 text-xs font-bold leading-tight text-white transition hover:bg-green-800 sm:w-auto sm:px-4 sm:py-3 sm:text-sm"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </article>
  );
}
