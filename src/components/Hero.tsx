import { ArrowRight, Plane, Shield, Instagram } from 'lucide-react';
import { TranslationContent } from '../types';
import { motion } from 'motion/react';

interface HeroProps {
  t: TranslationContent;
}

export default function Hero({ t }: HeroProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafaf9] pt-24 sm:pt-20"
    >
      {/* Background Image with Elegant Light Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://civilprom.s3.eu-north-1.amazonaws.com/h135-airbus-helicopters.jpg"
          alt="FlyPerceval Private Aviation - Helicopter Ibiza, Mallorca Ibiza, Monaco & Malta Flights"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105 filter brightness-[1.08] contrast-[0.95] saturate-[0.70]"
          referrerPolicy="no-referrer"
          id="hero-background-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9] via-[#fafaf9]/90 to-[#fafaf9]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf9] via-transparent to-[#fafaf9]/30" />
      </div>

      {/* Decorative Elegant Soft Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:py-20 text-left w-full">
        <div className="max-w-3xl">
          {/* Tagline / SEO Hook */}
          {/* Title - Luxurious Serif Styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tight leading-[1.1]"
            id="hero-heading"
          >
            {t.heroTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed font-sans font-light max-w-2xl"
            id="hero-paragraph"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Instagram handle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <a 
              href="https://www.instagram.com/flyperceval" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm sm:text-base font-sans font-medium text-stone-800 hover:text-black transition-colors bg-white/80 hover:bg-white border border-stone-200/80 px-4.5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              id="hero-instagram-badge"
            >
              <Instagram className="h-5 w-5 text-stone-600" />
              <span>@flyperceval</span>
            </a>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row gap-4"
            id="hero-cta-buttons"
          >
            <button
              onClick={scrollToContact}
              className="font-sans font-medium transition-all flex items-center justify-center cursor-pointer hover:opacity-90"
              style={{
                fontSize: '18px',
                padding: '12px 24px',
                fontWeight: 500,
                borderRadius: '13px',
                border: '1px solid #ffffff',
                background: '#000000',
                color: '#ffffff',
              }}
            >
              <span>{t.heroCta}</span>
            </button>
            <a
              href="#fleet"
              onClick={(e) => {
                e.preventDefault();
                const fleetSec = document.getElementById('fleet');
                if (fleetSec) {
                  const offset = 80;
                  const elementPosition = fleetSec.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="font-sans font-medium transition-all text-center block cursor-pointer hover:opacity-80"
              style={{
                fontSize: '18px',
                padding: '12px 24px',
                fontWeight: 500,
                borderRadius: '13px',
                border: '1px solid #ffffff24',
                background: 'rgba(255, 255, 255, 0.11)',
                color: 'rgb(255 255 255)',
              }}
            >
              {t.navFleet}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
