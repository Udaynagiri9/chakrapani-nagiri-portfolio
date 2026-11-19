import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Menu, X, Newspaper } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'media';
  onNavigate?: (page: 'home' | 'media', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onNavigate }) => {
  const { language, setLanguage, isTelugu } = useLanguage();
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage === 'media') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'two-worlds', 'journey', 'music', 'performances', 'achievements', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'two-worlds', label: t.twoWorlds },
    { id: 'journey', label: t.journey },
    { id: 'music', label: t.music },
    { id: 'performances', label: t.performances },
    { id: 'achievements', label: t.achievements },
    { id: 'gallery', label: t.gallery },
    { id: 'media', label: t.media || (isTelugu ? 'మీడియా & వార్తలు' : 'Media & Press'), isSpecial: true },
    { id: 'contact', label: t.contact },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'media') {
      if (onNavigate) {
        onNavigate('media');
      }
      return;
    }

    if (currentPage === 'media') {
      if (onNavigate) {
        onNavigate('home', id);
      }
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-2 sm:top-5 inset-x-0 z-50 flex justify-center px-2.5 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`w-full max-w-7xl pointer-events-auto transition-all duration-300 border ${
          mobileMenuOpen
            ? 'rounded-3xl bg-[#0a0a0a]/95 backdrop-blur-2xl border-white/20 shadow-2xl shadow-black p-4'
            : isScrolled
            ? 'rounded-full bg-black/90 backdrop-blur-xl border-white/15 shadow-xl shadow-black/80 py-2 sm:py-2.5 px-3 sm:px-6'
            : 'rounded-full bg-black/75 backdrop-blur-lg border-white/10 shadow-lg shadow-black/40 py-2 sm:py-3 px-3 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo with uploaded photo & HELVETICA NEUE font */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-2 sm:space-x-2.5 group text-left focus:outline-none cursor-pointer"
          >
            {/* Real uploaded portrait avatar */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 overflow-hidden shrink-0 group-hover:border-accent-highlight transition-all">
              <img
                src="/images/logo_avatar.jpg"
                alt="Chakrapani Nagiri"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span
                  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
                  className="font-helvetica font-bold text-white tracking-wider text-[11px] sm:text-sm group-hover:text-accent-highlight transition-colors uppercase leading-none"
                >
                  {isTelugu ? 'చక్రపాణి నాగిరి' : 'CHAKRAPANI NAGIRI'}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[8px] sm:text-[9px] font-semibold bg-accent-red/20 text-accent-highlight border border-accent-red/30 font-helvetica">
                  BSF
                </span>
              </div>
              <p className="text-[10px] text-text-secondary tracking-widest uppercase hidden sm:flex items-center gap-1 font-helvetica mt-0.5">
                <span>BSF Soldier</span>
                <span className="text-accent-highlight">•</span>
                <span>Singer</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (Excludes Contact to prevent duplicate with CTA button) */}
          <nav className="hidden xl:flex items-center space-x-1 font-helvetica">
            {navLinks.filter((link) => link.id !== 'contact').map((link) => {
              const isActive = (currentPage === 'media' && link.id === 'media') ||
                               (currentPage === 'home' && activeSection === link.id && link.id !== 'media');

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative cursor-pointer ${
                    isActive
                      ? 'text-white bg-accent-red/40 border border-accent-highlight/50'
                      : link.isSpecial
                      ? 'text-accent-highlight hover:text-white bg-accent-red/10 hover:bg-accent-red/20 border border-accent-red/30'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-accent-highlight rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Language Toggle & Contact CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3 font-helvetica">
            
            {/* Bilingual Switcher (Telugu / English) */}
            <div className="flex items-center rounded-full bg-white/5 border border-white/10 p-0.5">
              <button
                onClick={() => setLanguage('te')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isTelugu
                    ? 'bg-accent-red text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                తెలుగు
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  !isTelugu
                    ? 'bg-accent-red text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Quick Contact CTA Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold text-white transition-all cursor-pointer ${
                currentPage === 'home' && activeSection === 'contact'
                  ? 'bg-accent-highlight ring-2 ring-white/40 border border-white'
                  : 'bg-accent-red hover:bg-accent-highlight border border-white/20'
              }`}
            >
              {t.contact}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-white/10 pb-1 font-helvetica space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = (currentPage === 'media' && link.id === 'media') ||
                                 (currentPage === 'home' && activeSection === link.id && link.id !== 'media');

                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-accent-red text-white shadow-lg'
                        : link.isSpecial
                        ? 'bg-accent-red/20 text-accent-highlight border border-accent-red/35'
                        : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};