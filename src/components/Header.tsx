import { useState, useEffect } from 'react';
import { Language, TranslationContent } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
  t: TranslationContent;
}

export default function Header({ currentLang, onLangChange, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth >= 768 ? 150 : 270; // adjust scroll offset based on desktop/mobile header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const langNames: Record<Language, string> = {
    en: 'English',
    de: 'Deutsch',
    nl: 'Nederlands',
    es: 'Español',
    fr: 'Français'
  };

  const languages: { code: Language }[] = [
    { code: 'en' },
    { code: 'fr' },
    { code: 'de' },
    { code: 'nl' },
    { code: 'es' }
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled
          ? 'border-b border-stone-800/60'
          : 'border-b border-stone-800/30'
      }`}
      style={{ padding: '0px', backgroundColor: '#000000' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden md:flex items-center justify-between h-[110px]">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center cursor-pointer h-[110px]"
            id="logo-container"
          >
            <span 
              className="font-serif text-2xl sm:text-3xl font-light tracking-[0.18em] text-white whitespace-nowrap"
            >
              FLY PERCEVAL
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8" id="desktop-nav">
            <button
              onClick={() => scrollToSection('bases')}
              className="font-sans cursor-pointer hover:opacity-80 transition-opacity font-medium"
              style={{ color: '#fff', fontSize: '20px', letterSpacing: '0px' }}
            >
              {t.navBases}
            </button>
            <button
              onClick={() => scrollToSection('fleet')}
              className="font-sans cursor-pointer hover:opacity-80 transition-opacity font-medium"
              style={{ color: '#fff', fontSize: '20px', letterSpacing: '0px' }}
            >
              {t.navFleet}
            </button>
            <button
              onClick={() => scrollToSection('usecases')}
              className="font-sans cursor-pointer hover:opacity-80 transition-opacity font-medium"
              style={{ color: '#fff', fontSize: '20px', letterSpacing: '0px' }}
            >
              {t.navUseCases}
            </button>
            
            {/* Buttons close together */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollToSection('contact')}
                className="font-sans transition-all active:scale-95 cursor-pointer flex items-center justify-center whitespace-nowrap"
                style={{ 
                  fontSize: '18px', 
                  padding: '12px 16px', 
                  fontWeight: 500, 
                  letterSpacing: '0px', 
                  borderRadius: '13px', 
                  border: '1px solid #ffffff',
                  background: '#ffffff', 
                  color: '#000000' 
                }}
              >
                {t.navContact}
              </button>

              <div className="relative">
                <select
                  value={currentLang}
                  onChange={(e) => onLangChange(e.target.value as Language)}
                  className="font-sans transition-all active:scale-95 cursor-pointer appearance-none text-center font-medium block border-none outline-none"
                  style={{ 
                    fontSize: '18px', 
                    padding: '12px 16px', 
                    fontWeight: 500, 
                    letterSpacing: '0px', 
                    borderRadius: '13px', 
                    border: '1px solid #ffffff24',
                    background: 'rgba(255, 255, 255, 0.11)', 
                    color: 'rgb(255 255 255)',
                    textAlignLast: 'center',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                  }}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} style={{ background: '#000', color: '#fff' }}>
                      {langNames[lang.code]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Layout (hidden on desktop) */}
        <div className="flex md:hidden flex-col items-center py-4 gap-4">
          {/* Centered Logo Row */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="cursor-pointer flex justify-center items-center w-full"
            id="logo-container-mobile"
          >
            <span 
              className="font-serif text-2xl font-light tracking-[0.18em] text-white py-2"
            >
              FLY PERCEVAL
            </span>
          </div>

          {/* Bottom row: Inquire Now & Lang dropdown, side-by-side, full-width (50%/50%) */}
          <div className="flex items-center gap-2.5 w-full px-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="font-sans transition-all active:scale-95 cursor-pointer flex items-center justify-center whitespace-nowrap"
              style={{ 
                fontSize: '18px', 
                padding: '12px 16px', 
                fontWeight: 500, 
                letterSpacing: '0px', 
                borderRadius: '13px', 
                border: '1px solid #ffffff',
                background: '#ffffff', 
                color: '#000000',
                width: '50%',
                flex: '1 1 50%'
              }}
            >
              {t.navContact}
            </button>

            <div className="relative" style={{ width: '50%', flex: '1 1 50%' }}>
              <select
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value as Language)}
                className="font-sans transition-all active:scale-95 cursor-pointer appearance-none text-center font-medium block border-none outline-none"
                style={{ 
                  fontSize: '18px', 
                  padding: '12px 16px', 
                  fontWeight: 500, 
                  letterSpacing: '0px', 
                  borderRadius: '13px', 
                  border: '1px solid #ffffff24',
                  background: 'rgba(255, 255, 255, 0.11)', 
                  color: 'rgb(255 255 255)',
                  textAlignLast: 'center',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  width: '100%'
                }}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} style={{ background: '#000', color: '#fff' }}>
                    {langNames[lang.code]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
