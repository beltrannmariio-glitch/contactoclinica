import React, { useState } from 'react';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import {
  CLINIC_LOCATIONS,
  CAMPUS_IMAGE,
  ClinicLocation,
} from '../data/odontiaData';
import { ClinicalImage } from './BrandLogo';

const ClinicVisualHeader: React.FC<{ clinic: ClinicLocation }> = ({ clinic }) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <div className="relative h-48 bg-[#142B45] overflow-hidden">
        <img
          src={clinic.image}
          alt={clinic.imageAlt}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#142B45]/90 via-[#142B45]/25 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
          <span className="font-display text-xs font-bold tracking-widest text-[#39B7B0] bg-[#142B45]/85 px-2.5 py-1 rounded tabular-nums">
            {clinic.code}
          </span>
          <Navigation className="w-4 h-4 text-white/90" aria-hidden="true" />
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-xs text-white/85 font-medium">{clinic.shortLabel}</p>
          <p className="font-display text-xl font-bold text-white mt-0.5">
            {clinic.name}
          </p>
        </div>
      </div>
    );
  }

  // Architectural fallback patterns when the uploaded file is not yet placed in public/images/
  if (clinic.accentTone === 'navy') {
    return (
      <div className="relative h-48 bg-[#142B45] overflow-hidden p-5 flex flex-col justify-between">
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          viewBox="0 0 320 180"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 40H320M0 90H320M0 140H320" stroke="#8495A5" strokeWidth="1" />
          <path d="M60 0V180M160 0V180M260 0V180" stroke="#8495A5" strokeWidth="1" />
          <rect x="115" y="45" width="90" height="90" stroke="#39B7B0" strokeWidth="2" />
          <circle cx="160" cy="90" r="16" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="160" cy="90" r="5" fill="#39B7B0" />
        </svg>
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-display text-xs font-bold tracking-widest text-[#39B7B0] tabular-nums">
            {clinic.code}
          </span>
          <Navigation className="w-4 h-4 text-white/80" aria-hidden="true" />
        </div>
        <div className="relative z-10">
          <p className="text-xs text-white/75 font-medium">{clinic.shortLabel}</p>
          <p className="font-display text-xl font-bold text-white mt-0.5">
            {clinic.name}
          </p>
        </div>
      </div>
    );
  }

  if (clinic.accentTone === 'petrol') {
    return (
      <div className="relative h-48 bg-[#1F5268] overflow-hidden p-5 flex flex-col justify-between">
        <svg
          className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
          viewBox="0 0 320 180"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="240" cy="90" r="70" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="240" cy="90" r="42" stroke="#39B7B0" strokeWidth="1.5" />
          <path d="M0 90H240M240 0V180" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="240" cy="90" r="6" fill="#39B7B0" />
        </svg>
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-display text-xs font-bold tracking-widest text-[#39B7B0] tabular-nums">
            {clinic.code}
          </span>
          <Navigation className="w-4 h-4 text-white/80" aria-hidden="true" />
        </div>
        <div className="relative z-10">
          <p className="text-xs text-white/80 font-medium">{clinic.shortLabel}</p>
          <p className="font-display text-xl font-bold text-white mt-0.5">
            {clinic.name}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 bg-[#142B45] overflow-hidden p-5 flex flex-col justify-between">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1F5268] via-[#142B45] to-[#142B45]"
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
        viewBox="0 0 320 180"
        fill="none"
        aria-hidden="true"
      >
        <path d="M30 150L120 30H290" stroke="#39B7B0" strokeWidth="2" />
        <path d="M80 150L170 30" stroke="#FFFFFF" strokeWidth="1" />
        <path d="M0 110H320" stroke="#8495A5" strokeWidth="1" />
        <rect x="200" y="65" width="52" height="52" rx="4" stroke="#39B7B0" strokeWidth="1.5" />
        <circle cx="226" cy="91" r="6" fill="#FFFFFF" />
      </svg>
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-display text-xs font-bold tracking-widest text-[#39B7B0] tabular-nums">
          {clinic.code}
        </span>
        <Navigation className="w-4 h-4 text-white/80" aria-hidden="true" />
      </div>
      <div className="relative z-10">
        <p className="text-xs text-white/80 font-medium">{clinic.shortLabel}</p>
        <p className="font-display text-xl font-bold text-white mt-0.5">
          {clinic.name}
        </p>
      </div>
    </div>
  );
};

export const ClinicsSection: React.FC = () => {
  const [focusedClinicId, setFocusedClinicId] = useState<string>(
    CLINIC_LOCATIONS[0].id
  );

  const focusedClinic =
    CLINIC_LOCATIONS.find((c) => c.id === focusedClinicId) ?? CLINIC_LOCATIONS[0];

  return (
    <section
      id="clinicas"
      className="py-16 lg:py-24 bg-white border-b border-[#8495A5]/20"
      aria-labelledby="clinics-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Intro + Campus Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pb-12 border-b border-[#8495A5]/20">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#1F5268] mb-2">
                Nuestras clínicas universitarias
              </p>
              <h2
                id="clinics-heading"
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#142B45] text-balance"
              >
                Encuentra tu clínica
              </h2>
              <p className="mt-4 text-base text-[#142B45]/80 leading-relaxed max-w-[62ch]">
                La Facultad de Odontología de la UABC cuenta con tres sedes
                clínicas en Mexicali. Selecciona una sede para revisarla y abre su
                enlace directo en Google Maps para planificar tu traslado.
              </p>
            </div>

            {/* Interactive Quick Locator Strip */}
            <div className="mt-8 bg-[#F1F4F6] rounded-xl border border-[#8495A5]/25 p-5">
              <p className="text-xs font-semibold text-[#1F5268] mb-3">
                Comparador rápido de sedes
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {CLINIC_LOCATIONS.map((clinic) => {
                  const selected = clinic.id === focusedClinicId;
                  return (
                    <button
                      key={clinic.id}
                      type="button"
                      onClick={() => setFocusedClinicId(clinic.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[38px] ${
                        selected
                          ? 'bg-[#142B45] text-white'
                          : 'bg-white text-[#142B45] border border-[#8495A5]/30 hover:border-[#142B45]'
                      }`}
                    >
                      {clinic.name}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#8495A5]/20">
                <div>
                  <p className="font-display text-base font-bold text-[#142B45]">
                    {focusedClinic.name}
                  </p>
                  <p className="text-xs text-[#1F5268] mt-0.5">
                    {focusedClinic.shortLabel}
                  </p>
                </div>
                <a
                  href={focusedClinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#39B7B0] hover:bg-[#2da39d] text-[#142B45] font-display text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[42px]"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Ver ubicación</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full min-h-[240px] lg:min-h-[320px] rounded-xl overflow-hidden border border-[#8495A5]/25 bg-[#F1F4F6]">
              <ClinicalImage
                src={CAMPUS_IMAGE}
                alt="Instalaciones universitarias de clínica odontológica UABC en Mexicali"
                fallbackTitle="Clínicas Odontológicas UABC"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Three Independent Clinic Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_LOCATIONS.map((clinic) => {
            const isHighlighted = clinic.id === focusedClinicId;
            return (
              <article
                key={clinic.id}
                onMouseEnter={() => setFocusedClinicId(clinic.id)}
                className={`rounded-xl border overflow-hidden flex flex-col justify-between bg-white transition-colors duration-150 ${
                  isHighlighted
                    ? 'border-[#39B7B0]'
                    : 'border-[#8495A5]/25 hover:border-[#1F5268]'
                }`}
              >
                <div>
                  <ClinicVisualHeader clinic={clinic} />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-[#142B45]">
                      {clinic.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#1F5268]">
                      {clinic.shortLabel}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#142B45]/80">
                      {clinic.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ubicación de ${clinic.name} en Google Maps`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#142B45] hover:bg-[#1F5268] text-white font-display text-sm font-semibold transition-colors duration-150 min-h-[44px]"
                  >
                    <MapPin className="w-4 h-4 text-[#39B7B0]" aria-hidden="true" />
                    <span>Ver ubicación</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
