import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

const CONTACT_EMAIL = 'emiliano.contreras@uabc.edu.mx';
const FACULTY_URL = 'https://odontologia.mxl.uabc.mx/odo3/';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: no-op if clipboard permission is unavailable; mailto link remains primary
    }
  };

  return (
    <section
      id="contacto"
      className="py-16 lg:py-24 bg-[#F1F4F6] border-b border-[#8495A5]/20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Card (Exclusive Institutional Email) */}
          <div className="lg:col-span-7 bg-[#142B45] text-white rounded-xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#39B7B0] mb-2">
                Atención e información institucional
              </p>
              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance"
              >
                Contacto
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85 max-w-[56ch]">
                Para orientación general sobre los servicios odontológicos o las
                sedes clínicas de la Facultad de Odontología en Mexicali, comunícate
                directamente mediante correo electrónico institucional.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <p className="text-xs font-medium text-white/70 mb-1.5">
                Correo electrónico
              </p>
              <p className="font-display text-lg sm:text-2xl font-bold text-white break-all">
                {CONTACT_EMAIL}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    'Consulta informativa — ODONTIA UABC'
                  )}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#39B7B0] hover:bg-[#2da39d] text-[#142B45] font-display text-sm font-bold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Enviar correo</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/25 hover:border-white/60 text-white font-display text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#39B7B0]" aria-hidden="true" />
                      <span>Correo copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copiar correo</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Institutional Identity Block */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#8495A5]/25 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <BrandLogo size={64} />
                <div>
                  <p className="font-display text-lg font-bold text-[#142B45]">
                    Facultad de Odontología
                  </p>
                  <p className="text-xs font-medium text-[#1F5268] mt-0.5">
                    Universidad Autónoma de Baja California · Campus Mexicali
                  </p>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-[#142B45]">
                Identidad institucional
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#142B45]/80">
                ODONTIA UABC integra información verificada sobre la atención
                odontológica universitaria, fortaleciendo el vínculo entre la
                comunidad de Mexicali y la formación clínica supervisada de la
                Facultad de Odontología.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#8495A5]/20">
              <p className="text-xs font-medium text-[#1F5268] mb-3">
                Sitio oficial de referencia académica
              </p>
              <a
                href={FACULTY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#F1F4F6] hover:bg-[#142B45] text-[#142B45] hover:text-white font-display text-sm font-semibold transition-colors duration-150 min-h-[44px]"
              >
                <span className="truncate">Portal Facultad de Odontología UABC</span>
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
