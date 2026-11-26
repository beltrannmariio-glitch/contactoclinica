import React, { useEffect } from 'react';
import { X, CheckCircle2, MapPin, ClipboardCheck } from 'lucide-react';
import { DentalService } from '../data/odontiaData';
import { ClinicalImage } from './BrandLogo';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#142B45]/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl border border-[#8495A5]/30 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-48 sm:h-56 bg-[#142B45] shrink-0">
          <ClinicalImage
            src={service.image}
            alt={service.imageAlt}
            fallbackTitle={service.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#142B45]/90 via-[#142B45]/35 to-transparent"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle del servicio"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/95 text-[#142B45] hover:bg-[#39B7B0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <p className="text-xs font-medium text-[#39B7B0] tracking-wide mb-1 tabular-nums">
              {service.index} · {service.categoryLabel}
            </p>
            <h3
              id="service-modal-title"
              className="font-display text-2xl font-bold tracking-tight"
            >
              {service.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-display text-sm font-bold text-[#142B45] mb-1.5">
              Descripción general
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-[#142B45]/85">
              {service.detailSummary}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#F1F4F6] border border-[#8495A5]/20">
            <h4 className="font-display text-sm font-bold text-[#142B45] mb-1">
              Objetivo del tratamiento
            </h4>
            <p className="text-sm leading-relaxed text-[#142B45]/85">
              {service.treatmentObjective}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-[#142B45] mb-3">
              Enfoque de valoración clínica
            </h4>
            <ul className="space-y-2.5">
              {service.keyAspects.map((aspect, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#142B45]/85 leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#1F5268] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{aspect}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#F1F4F6] border-t border-[#8495A5]/25 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <a
            href="#pacientes"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5268] hover:text-[#142B45] transition-colors"
          >
            <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
            <span>Guía para pacientes</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#8495A5]/35 bg-white text-sm font-semibold text-[#142B45] hover:bg-[#F1F4F6] transition-colors min-h-[40px]"
            >
              Cerrar
            </button>
            <a
              href="#clinicas"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#39B7B0] hover:bg-[#2da39d] text-[#142B45] font-display text-sm font-bold transition-colors min-h-[40px]"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Encuentra tu clínica</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
