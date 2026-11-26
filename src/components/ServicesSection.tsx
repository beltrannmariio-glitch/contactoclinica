import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  DENTAL_SERVICES,
  DentalService,
  ServiceCategory,
} from '../data/odontiaData';
import { ClinicalImage } from './BrandLogo';
import { ServiceDetailModal } from './ServiceDetailModal';

const FILTER_OPTIONS: { id: ServiceCategory; label: string }[] = [
  { id: 'todas', label: 'Todos los servicios' },
  { id: 'preventiva', label: 'Preventiva e infantil' },
  { id: 'especialidades', label: 'Especialidades clínicas' },
  { id: 'diagnostico', label: 'Diagnóstico y ortodoncia' },
];

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory>('todas');
  const [activeService, setActiveService] = useState<DentalService | null>(null);

  const visibleServices =
    selectedCategory === 'todas'
      ? DENTAL_SERVICES
      : DENTAL_SERVICES.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="servicios"
      className="py-16 lg:py-24 bg-[#F1F4F6] border-b border-[#8495A5]/20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#8495A5]/25">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#1F5268] mb-2">
              Áreas de atención clínica
            </p>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#142B45] text-balance"
            >
              Servicios odontológicos
            </h2>
            <p className="mt-3 text-base text-[#142B45]/80 leading-relaxed max-w-[65ch]">
              Conoce las nueve áreas odontológicas disponibles en las clínicas
              universitarias, su enfoque de atención y el objetivo clínico de cada
              tratamiento.
            </p>
          </div>

          {/* Interactive Segmented Filter Control */}
          <div
            role="tablist"
            aria-label="Filtrar servicios odontológicos"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-lg border border-[#8495A5]/25"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = selectedCategory === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(option.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                    isActive
                      ? 'bg-[#142B45] text-white'
                      : 'text-[#1F5268] hover:text-[#142B45] hover:bg-[#F1F4F6]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-xl border border-[#8495A5]/25 overflow-hidden flex flex-col justify-between transition-colors duration-150 hover:border-[#39B7B0]"
            >
              <div>
                {/* Clinical Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#142B45]/5 border-b border-[#8495A5]/15">
                  <ClinicalImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#1F5268] font-medium mb-2 tabular-nums">
                    <span className="font-display font-bold text-[#142B45]">
                      {service.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{service.categoryLabel}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#142B45] tracking-tight">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#142B45]/80">
                    {service.simpleExplanation}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#8495A5]/20">
                    <p className="text-xs font-semibold text-[#1F5268] mb-1">
                      Objetivo del tratamiento
                    </p>
                    <p className="text-sm leading-relaxed text-[#142B45]/85">
                      {service.treatmentObjective}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#F1F4F6] hover:bg-[#142B45] text-[#142B45] hover:text-white font-display text-sm font-semibold transition-colors duration-150 min-h-[44px]"
                >
                  <span>Conocer más</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      <ServiceDetailModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </section>
  );
};
