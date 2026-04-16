const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' }
];

export function Navbar({ isMobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img src="/image/logo.png" alt="Logo Banana Locacoes" className="h-11 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-construcao"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5516997091919"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-construcao px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-800"
          >
            WhatsApp
          </a>
        </nav>

        <button
          onClick={onToggleMobileMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 md:hidden"
          aria-label="Abrir menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-slate-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white px-4 py-4 md:hidden`}>
        <div className="flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onCloseMobileMenu}
              className="text-sm font-semibold text-slate-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5516997091919"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-construcao px-4 py-3 text-center text-sm font-bold text-white"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
