import { EquipmentCard } from './EquipmentCard';

const CATEGORY_OPTIONS = [
  { value: 'todos', label: 'Todas as categorias' },
  { value: 'terraplanagem', label: 'Terraplanagem' },
  { value: 'concreto', label: 'Concreto' },
  { value: 'compactacao', label: 'Compactação' },
  { value: 'acesso', label: 'Acesso' },
  { value: 'demolicao', label: 'Demolição' }
];

export function EquipmentSection({
  revealRef,
  searchValue,
  categoryValue,
  onSearchChange,
  onCategoryChange,
  filteredEquipments,
  onOpenModal
}) {
  return (
    <section id="equipamentos" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div
        ref={revealRef}
        className="reveal mb-7 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <span className="inline-block rounded-full bg-banana/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-construcao">
            Equipamentos
          </span>
          <h2 className="mt-2 text-2xl font-black text-darktext sm:mt-3 sm:text-4xl">
            Máquinas para acelerar sua obra
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Busque rapidamente o equipamento ideal e simule um orçamento com poucos cliques.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar equipamento..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-construcao"
          />
          <select
            value={categoryValue}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-construcao"
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {filteredEquipments.length ? (
          filteredEquipments.map((equipment) => (
            <EquipmentCard
              key={equipment.name}
              equipment={equipment}
              onOpenModal={onOpenModal}
              revealRef={revealRef}
            />
          ))
        ) : (
          <div className="col-span-full rounded-3xl bg-white p-8 text-center shadow-soft">
            <p className="text-lg font-bold text-darktext">Nenhum equipamento encontrado.</p>
            <p className="mt-2 text-sm text-slate-600">Tente ajustar a busca ou a categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
