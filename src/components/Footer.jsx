export function Footer() {
  return (
    <footer className="bg-darktext py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-extrabold text-banana">Banana Locações</p>
          <p className="text-sm text-slate-300">Tudo para sua obra com agilidade e confiança</p>
        </div>
        <div className="text-sm text-slate-300">
          <p>Monte Alto - SP • Desde 2015</p>
          <p>© {new Date().getFullYear()} GABRIEL HENRIQUE DA CRUZ MACHADO WEB DEVELOPER. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
