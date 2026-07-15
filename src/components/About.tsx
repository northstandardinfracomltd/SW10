import { ShieldCheck, Percent, Zap, Hourglass } from 'lucide-react';
import { TranslationContent } from '../types';
import { motion } from 'motion/react';

interface AboutProps {
  t: TranslationContent;
}

export default function About({ t }: AboutProps) {
  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const stat1Title = isFr ? "20+ Ans" : isDe ? "20+ Jahre" : isNl ? "20+ Jaar" : isEs ? "20+ Años" : "20+";
  const stat1Desc = isFr 
    ? "D'opérations aériennes (depuis 2003)" 
    : isDe ? "Flugbetrieb (seit 2003)" 
    : isNl ? "Vliegoperaties (sinds 2003)" 
    : isEs ? "De operaciones de vuelo (desde 2003)" 
    : "Years of flight operations (since 2003)";

  const stat2Title = "100%";
  const stat2Desc = isFr 
    ? "Tarif direct opérateur garanti" 
    : isDe ? "Garantierter Direktbetreiber-Preis" 
    : isNl ? "Gegarandeerde directe operator prijs" 
    : isEs ? "Precio de operador directo garantizado" 
    : "Direct operator guaranteed price";

  const stat3Title = isFr ? "Élite" : isDe ? "Elite" : isNl ? "Elite" : isEs ? "Élite" : "Elite";
  const stat3Desc = isFr 
    ? "Pilotes vétérans uniquement" 
    : isDe ? "Ausschließlich erfahrene Piloten" 
    : isNl ? "Alleen ervaren piloten" 
    : isEs ? "Solo pilotos veteranos" 
    : "Veteran pilots only";

  const stat4Title = "+5";
  const stat4Desc = isFr 
    ? "Vols par jour en haute saison" 
    : isDe ? "Tägliche Flüge in der Hauptsaison" 
    : isNl ? "Dagelijkse vluchten in het hoogseizoen" 
    : isEs ? "Vuelos diarios en temporada alta" 
    : "Daily flights in high season";

  const routesSectionTitle = isFr 
    ? "Liaisons Populaires à la Demande" 
    : isDe ? "Beliebte Strecken auf Abruf" 
    : isNl ? "Populaire verbindingen op aanvraag" 
    : isEs ? "Rutas Populares Bajo Demanda" 
    : "Popular On-Demand Routes";

  const routeTypes = {
    helicopter: isFr ? "Hélicoptère" : isDe ? "Hubschrauber" : isNl ? "Helikopter" : isEs ? "Helicóptero" : "Helicopter",
    jet: isFr ? "Jet Privé" : isDe ? "Privatjet" : isNl ? "Privéjet" : isEs ? "Jet Privado" : "Private Jet",
    hybrid: isFr ? "Hélicoptère & Jet" : isDe ? "Hubschrauber & Jet" : isNl ? "Helikopter & Jet" : isEs ? "Helicóptero y Jet" : "Helicopter & Jet"
  };

  const routes = [
    { from: "Mallorca", fromIata: "PMI", to: "Ibiza", toIata: "IBZ", duration: isFr ? "35 min" : "35 mins", type: routeTypes.helicopter },
    { from: "Monaco", fromIata: "MCM", to: "Nice", toIata: "NCE", duration: isFr ? "7 min" : "7 mins", type: routeTypes.helicopter },
    { from: "Zurich", fromIata: "ZRH", to: "Megève", toIata: "MVV", duration: isFr ? "50 min" : "50 mins", type: routeTypes.hybrid },
    { from: "London", fromIata: "BQH", to: "Nice", toIata: "NCE", duration: isFr ? "1h 50" : "1h 50m", type: routeTypes.jet },
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-stone-200/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-stone-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text content (Column 1-7) */}
          <div className="lg:col-span-7 space-y-6" id="about-text-content">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight">
              {t.aboutTitle}
            </h2>
            
            <div className="space-y-4 text-stone-600 font-sans font-light text-base leading-relaxed">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>

            {/* Popular Routes list */}
            <div className="pt-2 space-y-4" id="about-popular-routes">
              <span className="font-serif text-sm text-black block font-medium">
                {routesSectionTitle}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {routes.map((route, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 bg-white rounded border border-stone-200 hover:border-stone-300 transition-all duration-200">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-black">
                        <span>{route.from} ({route.fromIata})</span>
                        <span className="text-stone-400 font-light">⇄</span>
                        <span>{route.to} ({route.toIata})</span>
                      </div>
                      <div className="text-[10px] font-sans font-light text-black">
                        {route.type}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-sans text-[11px] font-medium bg-black text-white px-3 py-1 rounded-full">
                        {route.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid of Key Features / Stats (Column 8-12) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-stats-grid">
            
            {/* Stat Card 1 */}
            <div className="bg-black text-white border border-stone-800 p-6 rounded hover:border-stone-600 transition-colors shadow-lg">
              <span className="font-serif text-3xl text-white block font-semibold">{stat1Title}</span>
              <span className="font-sans text-xs text-white block mt-1.5 leading-relaxed font-light">
                {stat1Desc}
              </span>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-black text-white border border-stone-800 p-6 rounded hover:border-stone-600 transition-colors shadow-lg">
              <span className="font-serif text-3xl text-white block font-semibold">{stat2Title}</span>
              <span className="font-sans text-xs text-white block mt-1.5 leading-relaxed font-light">
                {stat2Desc}
              </span>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-black text-white border border-stone-800 p-6 rounded hover:border-stone-600 transition-colors shadow-lg">
              <span className="font-serif text-3xl text-white block font-semibold">{stat3Title}</span>
              <span className="font-sans text-xs text-white block mt-1.5 leading-relaxed font-light">
                {stat3Desc}
              </span>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-black text-white border border-stone-800 p-6 rounded hover:border-stone-600 transition-colors shadow-lg">
              <span className="font-serif text-3xl text-white block font-semibold">{stat4Title}</span>
              <span className="font-sans text-xs text-white block mt-1.5 leading-relaxed font-light">
                {stat4Desc}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
