import { Users, Gauge, Compass, Shield } from 'lucide-react';
import { TranslationContent, AircraftInfo } from '../types';
import { aircraftData } from '../translations';

interface FleetProps {
  t: TranslationContent;
  onSelectAircraft: (aircraftName: string) => void;
}

export default function Fleet({ t, onSelectAircraft }: FleetProps) {
  return (
    <section id="fleet" className="py-24 bg-white border-b border-stone-200/60 relative">
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-stone-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="fleet-header">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight">
            {t.fleetTitle}
          </h2>
          <p className="text-stone-500 font-sans font-light text-base leading-relaxed">
            {t.fleetSubtitle}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="fleet-grid">
          {aircraftData.map((aircraft: AircraftInfo) => (
            <div
              key={aircraft.id}
              className="bg-[#fafaf9] border border-stone-200 rounded overflow-hidden group hover:border-black transition-all duration-300 flex flex-col h-full"
              id={`aircraft-card-${aircraft.id}`}
            >
              {/* Image box */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={aircraft.imageUrl}
                  alt={`${aircraft.name} - ${aircraft.type === 'helicopter' ? 'Helicopter Ibiza & Monaco Charter' : 'Private Jet Luxury Charter'}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.98] contrast-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf9] via-transparent to-transparent" />
              </div>

              {/* Text / Stats Body */}
              <div className="p-6 flex flex-col flex-grow space-y-5">
                <div>
                  <h3 className="font-serif text-xl font-normal text-black tracking-tight group-hover:text-stone-800 transition-colors">
                    {aircraft.name}
                  </h3>
                  <p className="text-[11px] text-stone-500 font-sans font-light mt-1">
                    {aircraft.type === 'helicopter' ? 'Twin-Engine Utility Helicopter' : 'Bespoke Executive Business Jet'}
                  </p>
                </div>

                {/* Micro Description */}
                <p className="text-xs text-stone-600 leading-relaxed font-sans font-light flex-grow">
                  {aircraft.seoText}
                </p>

                {/* Specs Block */}
                <div className="bg-white border border-stone-200/80 rounded p-4 space-y-3">
                  {/* Spec 1: Passengers */}
                  <div className="flex items-center justify-between text-xs font-sans text-stone-600 font-light">
                    <span>{t.fleetPax}</span>
                    <span className="text-black font-semibold">{aircraft.passengers} Max</span>
                  </div>

                  {/* Spec 2: Speed */}
                  <div className="flex items-center justify-between text-xs font-sans text-stone-600 font-light">
                    <span>{t.fleetSpeed}</span>
                    <span className="text-black font-semibold">{aircraft.speed}</span>
                  </div>

                  {/* Spec 3: Range */}
                  <div className="flex items-center justify-between text-xs font-sans text-stone-600 font-light">
                    <span>{t.fleetRange}</span>
                    <span className="text-black font-semibold">{aircraft.range}</span>
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectAircraft(aircraft.name)}
                  className="w-full bg-black hover:bg-stone-900 text-stone-50 font-sans font-semibold py-2.5 px-4 rounded transition-all duration-300 text-center text-xs cursor-pointer active:scale-95"
                >
                  {t.fleetRequestBtn}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
