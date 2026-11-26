import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clínicas', href: '#clinicas' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Salud bucal', href: '#salud-bucal' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[#8495A5]/25">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title + Uploaded Official Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:rounded"
          aria-label="ODONTIA UABC — Inicio"
        >
          <BrandLogo size={34} />
          <span className="font-display text-lg font-bold tracking-tight text-[#142B45]">
            ODONTIA UABC
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1F5268] hover:text-[#142B45] relative py-1 transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#39B7B0] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150 after:origin-left"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#142B45] hover:bg-[#1F5268] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px]"
          >
            Contacto
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#8495A5]/30 text-[#142B45] hover:bg-[#F1F4F6] transition-colors duration-150"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Menú móvil"
          className="md:hidden bg-white border-b border-[#8495A5]/25 px-4 py-4 space-y-1"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-sm font-medium text-[#142B45] hover:bg-[#F1F4F6] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="flex items-center justify-center min-h-[44px] mt-2 px-4 rounded-lg text-sm font-semibold text-white bg-[#142B45] hover:bg-[#1F5268] transition-colors"
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
};
