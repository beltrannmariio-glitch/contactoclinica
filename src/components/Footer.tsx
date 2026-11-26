import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const FOOTER_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clínicas', href: '#clinicas' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Salud bucal', href: '#salud-bucal' },
  { label: 'Contacto', href: '#contacto' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#142B45]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#8495A5]/20">
          <div className="flex items-center gap-3.5">
            <BrandLogo size={42} />
            <div>
              <p className="font-display text-base font-bold text-[#142B45]">
                ODONTIA UABC
              </p>
              <p className="text-xs text-[#1F5268]">
                Facultad de Odontología · UABC Campus Mexicali
              </p>
            </div>
          </div>

          <nav
            aria-label="Navegación de pie de página"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1F5268] hover:text-[#142B45] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-display text-sm font-semibold text-[#142B45]">
            ODONTIA UABC — Acercamos la atención odontológica universitaria a tu
            comunidad.
          </p>

          <a
            href="https://odontologia.mxl.uabc.mx/odo3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F5268] hover:text-[#142B45] transition-colors whitespace-nowrap shrink-0"
          >
            <span>odontologia.mxl.uabc.mx</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
