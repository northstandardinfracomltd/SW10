import { useState } from 'react';
import { Plane, ChevronDown, ChevronUp, ShieldAlert, Globe, Instagram } from 'lucide-react';
import { TranslationContent } from '../types';

interface FooterProps {
  t: TranslationContent;
}

export default function Footer({ t }: FooterProps) {
  const [showLegal, setShowLegal] = useState(false);

  const seoTerms = [
    "Helicopter Ibiza",
    "Mallorca Ibiza helicopter",
    "Monaco Helicopter",
    "Mallorca Ibiza charter helicopter",
    "Malta helicopter",
    "Malte helicopter"
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafaf9] text-stone-600 py-16 border-t border-stone-200 font-sans text-sm" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12" id="footer-brand-grid">
          
          {/* Brand col (Column 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.18em] text-black">
                FLY PERCEVAL
              </span>
            </div>
            <p className="text-xs text-stone-500 max-w-sm leading-relaxed font-sans font-light">
              Operating premium on-demand helicopter transfers and executive business jet manifests since 2003. Direct flight operator serving Western Europe's luxury coastal hubs.
            </p>
            <div className="pt-1">
              <a 
                href="https://www.instagram.com/flyperceval" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-black hover:bg-stone-900 text-white text-xs font-sans font-medium py-2.5 px-4 rounded-full transition-all duration-200 shadow active:scale-98"
                id="footer-instagram-link"
              >
                <Instagram className="h-4 w-4" />
                <span>@flyperceval</span>
              </a>
            </div>
          </div>

          {/* Quick links / Bases (Column 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-sans text-xs font-semibold text-stone-800 block">
              Bases of Departure
            </span>
            <ul className="space-y-1.5 text-xs text-stone-500 font-sans font-light">
              <li>Ibiza Airport (IBZ) • Spain</li>
              <li>Mallorca Airport (PMI) • Spain</li>
              <li>Monaco Helipad Fontvieille (MCM)</li>
              <li>Malta Airport (MLA) • Malta</li>
              <li>Zurich Airport (ZRH) • Switzerland</li>
              <li>London Heliport (EGLW) • United Kingdom</li>
              <li>Megève Altiport (MVV) • France</li>
            </ul>
          </div>

          {/* Contact references (Column 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-sans text-xs font-semibold text-stone-800 block">
              Discretion & Manifests
            </span>
            <p className="text-xs text-stone-500 leading-relaxed font-sans font-light">
              For security, discretion, and optimal flight coordination, all flights are scheduled strictly on-demand. To reach our dispatch desk, email:
            </p>
            <a
              href="mailto:contact@flyperceval.com"
              className="text-xs font-sans text-stone-700 hover:text-black hover:underline transition-colors block"
            >
              contact@flyperceval.com
            </a>
          </div>

        </div>

        {/* Legal collapsible toggle */}
        <div className="bg-white border border-stone-200 rounded p-6" id="footer-legal-box">
          <button
            onClick={() => setShowLegal(!showLegal)}
            className="w-full flex items-center justify-between text-left text-xs font-sans font-light text-stone-700 hover:text-black transition-colors cursor-pointer"
          >
            <span>{t.legalMentionsTitle}</span>
            {showLegal ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {showLegal && (
            <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 leading-relaxed font-sans font-light space-y-3" id="legal-content">
              <p>{t.legalMentionsContent}</p>
              <p>
                <strong>Operator Compliance:</strong> All aircraft listed, including the Airbus H135, Embraer Phenom 300, Cessna Citation CJ4, Gulfstream G650, and Bombardier Global 6000, are fully compliant with European Union Aviation Safety Agency (EASA) standards. Flight crew members undergo regular simulator testing.
              </p>
              <p>
                <strong>SEO Indexing & General Notice:</strong> This platform is designed to provide optimal lookup dispatch parameters for luxury helicopter charters spanning Monaco, Ibiza, Mallorca, and Malta. All service requests are reviewed by qualified direct flight operations coordinators at FlyPerceval.
              </p>
            </div>
          )}
        </div>

        {/* Natural SEO Keywords Row */}
        <div className="text-center space-y-4 pt-8" id="footer-seo-terms-section">
          <p className="text-xs text-stone-500 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Providing bespoke, direct operator routes across the Mediterranean and Western Europe. Our flight coordinations regularly include private hubs like <span className="text-stone-800 font-medium">Helicopter Ibiza</span> transfers, <span className="text-stone-800 font-medium">Mallorca Ibiza helicopter</span> shuttles, <span className="text-stone-800 font-medium">Monaco Helicopter</span> dispatches, premium <span className="text-stone-800 font-medium">Malta helicopter</span> charters, <span className="text-stone-800 font-medium">Zurich alpine transfers</span>, <span className="text-stone-800 font-medium">London VIP heliport</span> dispatches, and <span className="text-stone-800 font-medium">Megève ski resort</span> shuttles.
          </p>
          <p className="text-[10px] text-stone-400 italic">
            {t.footerOperatorDisclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black pt-4" id="footer-copyright-bar">
          <div className="flex items-center gap-1.5 text-black font-sans">
            <Globe className="h-3.5 w-3.5 text-black" />
            <span className="font-sans font-medium">FlyPerceval — Direct Aviation Operator since 2003.</span>
          </div>
          <span className="font-sans text-xs text-black tracking-normal">
            {t.footerRights.replace('2026', currentYear.toString())}
          </span>
        </div>

      </div>
    </footer>
  );
}
