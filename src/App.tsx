import { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Bases from './components/Bases';
import Fleet from './components/Fleet';
import Safety from './components/Safety';
import UseCases from './components/UseCases';
import ContactForm from './components/ContactForm';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

export default function App() {
  // Default to English ('en') while offering premium instant translations for FR, DE, NL, ES.
  // Checks URL query parameter ?lang=... for search crawler optimization.
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang')?.toLowerCase();
      if (urlLang && ['en', 'fr', 'de', 'nl', 'es'].includes(urlLang)) {
        return urlLang as Language;
      }
    } catch (e) {
      console.warn("Failed to parse lang parameter:", e);
    }
    return 'en';
  });
  const [selectedAircraft, setSelectedAircraft] = useState<string>('');

  useEffect(() => {
    try {
      // Dynamically update page language for Google crawler
      document.documentElement.lang = currentLang;

      // Ultra-optimized localized SEO Meta definitions
      const seoMeta: Record<Language, { title: string; description: string; keywords: string }> = {
        en: {
          title: "FlyPerceval | Helicopter Ibiza, Monaco Helicopter & Jet Charter",
          description: "Direct operator of private flights since 2003. Book Helicopter Ibiza, Monaco Helicopter, Mallorca Ibiza helicopter, and Malta helicopter flights at direct-operator prices.",
          keywords: "helicopter ibiza, mallorca ibiza helicopter, monaco helicopter, malta helicopter, helicopter charter ibiza, private flight monaco, mallorca ibiza charter helicopter, helicopter rental, private jet charter ibiza"
        },
        fr: {
          title: "FlyPerceval | Hélicoptère Ibiza, Monaco Hélicoptère & Jet Privé",
          description: "Opérateur direct de vols privés depuis 2003. Réservez votre vol en hélicoptère à Ibiza, Monaco, Majorque et Malte au meilleur tarif direct exploitant.",
          keywords: "helicoptere ibiza, mallorca ibiza helicoptere, monaco helicoptere, malte helicoptere, location helicoptere ibiza, vol prive monaco, mallorca ibiza charter helicoptere, location jet prive"
        },
        de: {
          title: "FlyPerceval | Hubschrauber Ibiza, Monaco Hubschrauber & Privatjet",
          description: "Direkter Betreiber von Privatflügen seit 2003. Hubschrauber Ibiza, Monaco Hubschrauber, Mallorca Ibiza und Malta Flüge zum unschlagbaren Direktpreis.",
          keywords: "hubschrauber ibiza, mallorca ibiza hubschrauber, monaco hubschrauber, malta hubschrauber, hubschrauber charter ibiza, privatjet buchen"
        },
        nl: {
          title: "FlyPerceval | Helikopter Ibiza, Monaco Helikopter & Privéjet",
          description: "Directe operator van privé vluchten sinds 2003. Helikopter Ibiza, Monaco helikopter, Mallorca en Malta transfers tegen directe operator tarieven.",
          keywords: "helikopter ibiza, mallorca ibiza helikopter, monaco helikopter, malta helikopter, helikopter huren ibiza, prive jet huren"
        },
        es: {
          title: "FlyPerceval | Helicóptero Ibiza, Mónaco Helicóptero y Jet Privado",
          description: "Operador directo de vuelos privados desde 2003. Chárter de helicóptero en Ibiza, Mónaco, Mallorca y Malta a precios directos sin intermediarios.",
          keywords: "helicoptero ibiza, mallorca ibiza helicoptero, monaco helicoptero, malta helicoptero, alquiler helicoptero ibiza, vuelo privado monaco"
        }
      };

      const currentMeta = seoMeta[currentLang] || seoMeta.en;

      // 1. Set document title
      document.title = currentMeta.title;

      // 2. Set meta description
      let descMeta = document.querySelector('meta[name="description"]');
      if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.setAttribute('name', 'description');
        document.head.appendChild(descMeta);
      }
      descMeta.setAttribute('content', currentMeta.description);

      // 3. Set meta keywords
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', currentMeta.keywords);

      // 4. Update Open Graph titles for social / messenger snippet crawlers
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', currentMeta.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', currentMeta.description);
    } catch (error) {
      console.warn("SEO head updates deferred:", error);
    }
  }, [currentLang]);

  const t = translations[currentLang] || translations.fr;

  const handleSelectAircraft = (aircraftName: string) => {
    setSelectedAircraft(aircraftName);
    
    // Smoothly scroll to contact form section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80; // height of fixed header
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClearSelectedAircraft = () => {
    setSelectedAircraft('');
  };

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      console.warn("Failed to update lang URL parameter:", e);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 selection:bg-stone-900 selection:text-white overflow-x-hidden antialiased font-sans">
      
      {/* Structural Header Navigation */}
      <Header 
        currentLang={currentLang} 
        onLangChange={handleLangChange} 
        t={t} 
      />

      {/* Main Sections */}
      <main id="main-content">
        
        {/* Hero Banner with target SEO keywords */}
        <Hero t={t} />

        {/* Company legacy since 2003 & Direct operator pricing benefit */}
        <About t={t} />

        {/* Premium Airport Bases served (Ibiza, Mallorca, Monaco, Malta) */}
        <Bases t={t} />

        {/* Fleet listing (Helicopters & Business Jets) */}
        <Fleet 
          t={t} 
          onSelectAircraft={handleSelectAircraft} 
        />

        {/* Prohibited items & seasoned pilot standards */}
        <Safety t={t} />

        {/* Custom use cases (Business, Pleasure, Repatriation, VIP Events) */}
        <UseCases t={t} />

        {/* Dispatch Form & Direct operator email contact@flyperceval.com */}
        <ContactForm 
          t={t} 
          selectedAircraft={selectedAircraft}
          onClearSelectedAircraft={handleClearSelectedAircraft}
        />

        {/* Real life news & experiences section */}
        <Experiences t={t} currentLang={currentLang} />

      </main>

      {/* Footer with Legal mentions & Search Index lists */}
      <Footer t={t} />

    </div>
  );
}
