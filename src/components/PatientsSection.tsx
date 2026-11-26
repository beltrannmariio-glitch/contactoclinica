import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { PATIENT_GUIDE_TOPICS } from '../data/odontiaData';

export const PatientsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(PATIENT_GUIDE_TOPICS[0].id);

  const activeTopic =
    PATIENT_GUIDE_TOPICS.find((t) => t.id === selectedId) ??
    PATIENT_GUIDE_TOPICS[0];

  return (
    <section
      id="pacientes"
      className="py-16 lg:py-24 bg-[#F1F4F6] border-b border-[#8495A5]/20"
      aria-labelledby="patients-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl pb-8 border-b border-[#8495A5]/25">
          <p className="text-xs font-semibold tracking-wide text-[#1F5268] mb-2">
            Atención y preparación clínica
          </p>
          <h2
            id="patients-heading"
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#142B45] text-balance"
          >
            Información para pacientes
          </h2>
          <p className="mt-3 text-base text-[#142B45]/80 leading-relaxed max-w-[65ch]">
            Orientación clara y práctica para acompañarte desde tu primera consulta
            odontológica hasta el seguimiento preventivo en casa.
          </p>
        </div>

        {/* 2-Column Interactive Dossier */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation List */}
          <div
            className="lg:col-span-5 space-y-2"
            role="tablist"
            aria-label="Temas de información para pacientes"
          >
            {PATIENT_GUIDE_TOPICS.map((topic) => {
              const isSelected = topic.id === activeTopic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full text-left flex items-center justify-between gap-4 px-4 py-3.5 rounded-lg border transition-colors duration-150 min-h-[54px] ${
                    isSelected
                      ? 'bg-[#142B45] border-[#142B45] text-white'
                      : 'bg-white border-[#8495A5]/25 text-[#142B45] hover:border-[#1F5268]'
                  }`}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-display text-xs font-bold tabular-nums shrink-0 ${
                        isSelected ? 'text-[#39B7B0]' : 'text-[#1F5268]'
                      }`}
                    >
                      {topic.index}
                    </span>
                    <span className="font-display text-sm font-semibold truncate">
                      {topic.title}
                    </span>
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? 'text-[#39B7B0]' : 'text-[#8495A5]'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Reading Panel */}
          <div
            role="tabpanel"
            className="lg:col-span-7 bg-white rounded-xl border border-[#8495A5]/25 p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1F5268] mb-2 tabular-nums">
              <span>{activeTopic.index}</span>
              <span aria-hidden="true">·</span>
              <span>Orientación al paciente</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#142B45] tracking-tight">
              {activeTopic.title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-[#142B45]/85 max-w-[65ch]">
              {activeTopic.summary}
            </p>

            <div className="mt-8 pt-6 border-t border-[#8495A5]/20">
              <h4 className="font-display text-sm font-bold text-[#142B45] mb-4">
                Recomendaciones principales
              </h4>
              <ul className="space-y-4">
                {activeTopic.recommendations.map((rec, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#142B45]/85"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#39B7B0] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#8495A5]/20 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#1F5268]">
                ¿Necesitas orientación adicional sobre tu visita?
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-[#F1F4F6] hover:bg-[#142B45] text-[#142B45] hover:text-white font-display text-xs font-bold transition-colors duration-150 min-h-[40px]"
              >
                Ir a contacto institucional
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
