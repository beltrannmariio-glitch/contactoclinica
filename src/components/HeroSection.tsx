import React from 'react';
import {
  ArrowRight,
  Stethoscope,
  MapPin,
  ClipboardCheck,
  BookOpen,
  Mail,
} from 'lucide-react';
import { HERO_IMAGE } from '../data/odontiaData';
import { BrandLogo, ClinicalImage } from './BrandLogo';

const QUICK_ACCESS_ITEMS = [
  {
    title: 'Servicios odontológicos',
    subtitle: '9 áreas clínicas',
    href: '#servicios',
    icon: Stethoscope,
  },
  {
    title: 'Nuestras clínicas',
    subtitle: '3 sedes en Mexicali',
    href: '#clinicas',
    icon: MapPin,
  },
  {
    title: 'Atención para pacientes',
    subtitle: 'Guía y preparación',
    href: '#pacientes',
    icon: ClipboardCheck,
  },
  {
    title: 'Consejos de salud bucal',
    subtitle: 'Prevención diaria',
    href: '#salud-bucal',
    icon: BookOpen,
  },
  {
    title: 'Contacto',
    subtitle: 'Correo institucional',
    href: '#contacto',
    icon: Mail,
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="bg-white border-b border-[#8495A5]/20"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 lg:pt-14 lg:pb-12">
        {/* Balanced 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Institutional Editorial Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BrandLogo size={48} />
                <div className="text-xs font-medium tracking-wide text-[#1F5268]">
                  <span>Facultad de Odontología</span>
                  <span className="mx-2 text-[#8495A5]" aria-hidden="true">
                    ·
                  </span>
                  <span>UABC Campus Mexicali</span>
                </div>
              </div>

              <h1
                id="hero-title"
                className="font-display font-extrabold tracking-tight text-[#142B45] leading-[1.06] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                ODONTIA UABC
              </h1>

              <p className="mt-4 font-display text-xl sm:text-2xl font-semibold text-[#1F5268] leading-snug text-balance max-w-xl">
                Salud bucal con respaldo universitario.
              </p>

              <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-[#142B45]/80 max-w-[58ch]">
                Conoce nuestros servicios odontológicos, descubre nuestras clínicas y
                encuentra opciones de atención para cuidar tu salud bucal.
              </p>
            </div>

            {/* Single Primary Action + Subtle Text Action */}
            <div className="mt-8 pt-6 border-t border-[#8495A5]/20 flex flex-wrap items-center gap-4">
              <a
                href="#clinicas"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#39B7B0] hover:bg-[#2da39d] text-[#142B45] font-display text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>Encuentra tu clínica</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#8495A5]/40 hover:border-[#142B45] text-[#142B45] font-display text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>Ver servicios odontológicos</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dominant Clinical Photography */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-[#8495A5]/25 bg-[#F1F4F6]">
              <ClinicalImage
                src={HERO_IMAGE}
                alt="Clínica universitaria moderna de la Facultad de Odontología UABC durante atención odontológica"
                fallbackTitle="Clínicas Universitarias ODONTIA UABC"
                className="w-full h-full lg:h-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#142B45]/85 via-[#142B45]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                <p className="text-xs sm:text-sm font-medium text-white/95 tracking-wide">
                  Plataforma informativa de atención odontológica · Mexicali, B.C.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 5-Column Quick Access Strip */}
        <nav
          aria-label="Accesos directos"
          className="mt-8 pt-6 border-t border-[#8495A5]/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
        >
          {QUICK_ACCESS_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3.5 p-3.5 rounded-lg bg-[#F1F4F6] hover:bg-[#142B45] border border-[#8495A5]/20 hover:border-[#142B45] transition-colors duration-150 min-h-[56px]"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white text-[#1F5268] group-hover:bg-[#39B7B0] group-hover:text-[#142B45] transition-colors duration-150 shrink-0">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-semibold text-[#142B45] group-hover:text-white transition-colors truncate">
                    {item.title}
                  </span>
                  <span className="block text-xs text-[#1F5268] group-hover:text-white/80 transition-colors truncate">
                    {item.subtitle}
                  </span>
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
