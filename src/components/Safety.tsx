import { ShieldAlert, UserCheck, AlertTriangle, BadgeAlert } from 'lucide-react';
import { TranslationContent } from '../types';

interface SafetyProps {
  t: TranslationContent;
}

export default function Safety({ t }: SafetyProps) {
  const isFr = t.navContact === "Nous Contacter";
  const isDe = t.navContact === "Flug anfragen";
  const isNl = t.navContact === "Aanvraag indienen";
  const isEs = t.navContact === "Solicitud de Vuelo";

  const onDemandSuffix = isFr ? "À la demande" : isDe ? "Auf Anfrage" : isNl ? "Op aanvraag" : isEs ? "Bajo demanda" : "On demand";
  const titlePart = t.safetyTwoPilots.split(':')[0].trim();
  const descPart = t.safetyTwoPilots.substring(t.safetyTwoPilots.indexOf(':') + 1).trim();

  return (
    <section id="safety" className="py-24 bg-white border-b border-stone-200/60 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="safety-header">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight">
            {t.safetyTitle}
          </h2>
          <p className="text-stone-500 font-sans font-light text-base leading-relaxed">
            {t.safetySubtitle}
          </p>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="safety-content">
          
          {/* Forbidden Items (Column 1-6) */}
          <div className="lg:col-span-6 bg-white border border-stone-200/60 rounded p-6 sm:p-8 space-y-6" id="safety-forbidden-panel">
            <div>
              <h3 className="font-serif text-lg font-normal text-black">
                {t.safetyForbiddenTitle}
              </h3>
              <p className="text-[10px] text-red-600 font-sans font-light mt-0.5">Regulatory Compliance</p>
            </div>

            <p className="text-stone-600 font-sans font-light text-sm leading-relaxed">
              {t.safetyForbiddenDesc}
            </p>

            {/* List with red dots */}
            <ul className="space-y-3 font-sans font-light text-sm text-stone-500" id="forbidden-items-list">
              {t.forbiddenItemsList.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="text-red-500 mt-2 shrink-0 w-1 h-1 rounded-full bg-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Premium S3 Forbidden Items Illustration */}
            <div className="flex justify-start" id="forbidden-items-img-wrapper">
              <img
                src="https://civilprom.s3.eu-north-1.amazonaws.com/items+not+permitted+helibiza.png"
                alt="FlyPerceval Flight Security Guidelines - Items Prohibited on Private Flights"
                loading="lazy"
                className="max-w-[70%] sm:max-w-[50%] h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Pilot and Crew Standard (Column 7-12) */}
          <div className="lg:col-span-6 bg-white border border-stone-200/60 rounded p-6 sm:p-8 space-y-6 flex flex-col justify-between" id="safety-crew-panel">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-normal text-black">
                  {t.safetyPilotsTitle}
                </h3>
                <p className="text-[10px] text-stone-500 font-sans font-light mt-0.5">Professional Crew Standards</p>
              </div>

              {/* Two pilots notice (At the top!) */}
              <div className="bg-black rounded p-5 text-white">
                <p className="text-xs text-stone-300 font-sans font-light leading-relaxed">
                  <strong className="text-white font-semibold flex items-center gap-2 mb-1.5">
                    <span>{titlePart} ({onDemandSuffix}).</span>
                  </strong>
                  {descPart}
                </p>
              </div>

              <p className="text-stone-600 font-sans font-light text-sm leading-relaxed">
                {t.safetyPilotsDesc}
              </p>

              <div className="space-y-4" id="crew-features-list">
                <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-black font-sans font-semibold text-sm block">Minimum 3,000 Flight Hours</strong>
                    <span className="text-xs text-stone-500 block font-sans font-light mt-0.5 leading-relaxed">Our pilots are veteran captains with deep experience flying high-end corporate transfers.</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-black font-sans font-semibold text-sm block">Frequent Simulator Assessments</strong>
                    <span className="text-xs text-stone-500 block font-sans font-light mt-0.5 leading-relaxed">Recurrent multi-engine and bad-weather flight simulator checkups twice per year.</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-black font-sans font-semibold text-sm block">Localized Airspace Experts</strong>
                    <span className="text-xs text-stone-500 block font-sans font-light mt-0.5 leading-relaxed">Extensive knowledge of specific approach vectors for Monaco Helipad Fontvieille, Malta and Gozo, and Balearic islands.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
