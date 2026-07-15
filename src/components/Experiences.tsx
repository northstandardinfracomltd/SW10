import { TranslationContent, Language } from '../types';

interface ExperiencesProps {
  t: TranslationContent;
  currentLang: Language;
}

export default function Experiences({ t, currentLang }: ExperiencesProps) {
  // Translate names depending on currentLang
  const getPignataroName = () => {
    switch (currentLang) {
      case 'fr': return "Famille Pignataro.";
      case 'de': return "Familie Pignataro.";
      case 'nl': return "Familie Pignataro.";
      case 'es': return "Familia Pignataro.";
      default: return "Pignataro Family.";
    }
  };

  const getGuettaName = () => {
    switch (currentLang) {
      case 'fr': return "Famille Guetta.";
      case 'de': return "Familie Guetta.";
      case 'nl': return "Familie Guetta.";
      case 'es': return "Familia Guetta.";
      default: return "Guetta Family.";
    }
  };

  const getGarritsenName = () => {
    switch (currentLang) {
      case 'fr': return "Monsieur Martijn Garritsen.";
      case 'de': return "Herr Martijn Garritsen.";
      case 'nl': return "De heer Martijn Garritsen.";
      case 'es': return "Señor Martijn Garritsen.";
      default: return "Mr. Martijn Garritsen.";
    }
  };

  const getVanderpoelName = () => {
    switch (currentLang) {
      case 'fr': return "Monsieur Mathieu van der Poel.";
      case 'de': return "Herr Mathieu van der Poel.";
      case 'nl': return "De heer Mathieu van der Poel.";
      case 'es': return "Señor Mathieu van der Poel.";
      default: return "Mr. Mathieu van der Poel.";
    }
  };

  const experiences = [
    {
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/FlyPerceval1.jpg",
      name: getPignataroName()
    },
    {
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/FlyPerceval2.jpg",
      name: getGuettaName()
    },
    {
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/FlyPerceval3.jpg",
      name: getGarritsenName()
    },
    {
      image: "https://civilprom.s3.eu-north-1.amazonaws.com/MCDP.jpg",
      name: getVanderpoelName()
    }
  ];

  return (
    <section id="experiences" className="py-24 bg-[#fafaf9] border-t border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center" id="experiences-header">
          <h2 className="font-serif text-3xl sm:text-4xl text-black tracking-tight font-normal leading-tight uppercase">
            {t.experiencesTitle || "DES CLIENTS DE TOUS TYPES"}
          </h2>
        </div>

        {/* 4-Column Grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="experiences-grid">
          {experiences.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-stone-200 rounded overflow-hidden hover:border-stone-400 transition-colors duration-200"
            >
              {/* Image with referrerPolicy for safety */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img 
                  src={item.image} 
                  alt={`${item.name} - FlyPerceval Flight Client Experience`} 
                  className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              
              {/* Very minimal raw label */}
              <div className="p-4 bg-white border-t border-stone-100">
                <p className="font-sans text-xs font-semibold text-black tracking-tight">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
