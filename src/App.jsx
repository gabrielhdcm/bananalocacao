import { useEffect, useMemo, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { EquipmentSection } from './components/EquipmentSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { QuoteModal } from './components/QuoteModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Toast } from './components/Toast';
import { EQUIPMENTS } from './data/equipments';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('todos');
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [toastState, setToastState] = useState({ visible: false, message: '' });

  const revealRef = useRevealOnScroll(0.12);

  const filteredEquipments = useMemo(() => {
    const search = searchValue.toLowerCase().trim();

    return EQUIPMENTS.filter((item) => {
      const matchesText =
        item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search);
      const matchesCategory = categoryValue === 'todos' || item.category === categoryValue;
      return matchesText && matchesCategory;
    });
  }, [categoryValue, searchValue]);

  const showToast = (message) => {
    setToastState({ visible: true, message });
  };

  useEffect(() => {
    if (!toastState.visible) return;

    const timerId = window.setTimeout(() => {
      setToastState((prev) => ({ ...prev, visible: false }));
    }, 2600);

    return () => window.clearTimeout(timerId);
  }, [toastState.visible]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleOpenModal = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const handleCloseModal = () => {
    setSelectedEquipment(null);
  };

  const handleContactSubmit = () => {
    showToast('Solicitação enviada com sucesso!');
  };

  const handleQuickQuoteSubmit = () => {
    handleCloseModal();
    showToast('Interesse enviado! Entraremos em contato.');
  };

  return (
    <div className="bg-softbg text-darktext">
      <Toast message={toastState.message} visible={toastState.visible} />

      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={handleToggleMobileMenu}
        onCloseMobileMenu={handleCloseMobileMenu}
      />

      <HeroSection revealRef={revealRef} />

      <EquipmentSection
        revealRef={revealRef}
        searchValue={searchValue}
        categoryValue={categoryValue}
        onSearchChange={setSearchValue}
        onCategoryChange={setCategoryValue}
        filteredEquipments={filteredEquipments}
        onOpenModal={handleOpenModal}
      />

      <AboutSection revealRef={revealRef} />
      <DifferentialsSection revealRef={revealRef} />
      <TestimonialsSection revealRef={revealRef} />
      <ContactSection revealRef={revealRef} onSubmitContact={handleContactSubmit} />
      <Footer />

      <a
        href="https://wa.me/5516997091919"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white shadow-strong transition hover:-translate-y-1 sm:bottom-5 sm:right-5 sm:h-[74px] sm:w-[74px]"
      >
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] sm:h-[58px] sm:w-[58px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M20.52 3.48A11.84 11.84 0 0 0 12.07 0C5.54 0 .23 5.3.23 11.83c0 2.09.55 4.12 1.58 5.91L0 24l6.44-1.69a11.8 11.8 0 0 0 5.63 1.43h.01c6.52 0 11.83-5.3 11.83-11.83 0-3.16-1.23-6.14-3.39-8.43Zm-8.45 18.26h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.22-3.82 1 1.02-3.72-.23-.38a9.82 9.82 0 0 1-1.5-5.2c0-5.41 4.4-9.82 9.83-9.82 2.62 0 5.08 1.02 6.93 2.88a9.77 9.77 0 0 1 2.88 6.94c0 5.41-4.41 9.81-9.82 9.81Z"
              fill="#ffffff"
            />
            <path
              d="M17.58 14.27c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.89-.79-1.49-1.76-1.66-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.21 3.05c.15.2 2.08 3.18 5.05 4.46.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.58-.08 1.77-.72 2.02-1.4.25-.69.25-1.27.18-1.4-.08-.12-.28-.2-.58-.35Z"
              fill="#ffffff"
            />
          </svg>
        </span>
      </a>

      <QuoteModal
        equipment={selectedEquipment}
        isOpen={Boolean(selectedEquipment)}
        onClose={handleCloseModal}
        onSubmitQuickQuote={handleQuickQuoteSubmit}
      />
    </div>
  );
}
