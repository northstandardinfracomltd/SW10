import { ComponentType } from 'react';
import { TranslationContent, UseCase } from '../types';
import { useCasesData } from '../translations';
import { Briefcase, Compass, Heart, Sparkles } from 'lucide-react';

interface UseCasesProps {
  t: TranslationContent;
}

const iconMap: Record<string, ComponentType<any>> = {
  Briefcase,
  Compass,
  Heart,
  Sparkles
};

export default function UseCases({ t }: UseCasesProps) {
  return (
    <section id="usecases" className="py-24 bg-[#fafaf9] border-b border-stone-200/60 relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-stone-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="usecases-header">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-black tracking-tight leading-tight">
            {t.useCasesTitle}
          </h2>
          <p className="text-stone-500 font-sans font-light text-base leading-relaxed">
            {t.useCasesSubtitle}
          </p>
        </div>

        {/* Use Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="usecases-grid">
          {useCasesData.map((useCase: UseCase) => {
            const IconComponent = iconMap[useCase.iconName] || Compass;
            return (
              <div
                key={useCase.id}
                className="bg-white border border-stone-200 rounded p-6 sm:p-8 flex gap-6 items-start"
                id={`usecase-card-${useCase.id}`}
              >
                {/* Clean Lucide Icon in Black Circle */}
                <div className="p-3 bg-black rounded-full text-white shrink-0">
                  <IconComponent className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Text Body */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-normal text-black">
                    {useCase.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
