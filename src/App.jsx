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
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-construcao px-4 py-3 text-sm font-extrabold text-white shadow-strong transition hover:-translate-y-1"
      >
        <span>WhatsApp</span>
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
