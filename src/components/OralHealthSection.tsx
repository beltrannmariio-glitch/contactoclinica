import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  Shield,
  Activity,
  Apple,
  Layers,
  Heart,
  ArrowUpRight,
  X,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import {
  ORAL_HEALTH_ARTICLES,
  OralHealthArticle,
  HYGIENE_IMAGE,
} from '../data/odontiaData';
import { ClinicalImage } from './BrandLogo';

const renderArticleIcon = (iconName: OralHealthArticle['iconName']) => {
  switch (iconName) {
    case 'brush':
      return <SlidersHorizontal className="w-5 h-5" aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className="w-5 h-5" aria-hidden="true" />;
    case 'shield':
      return <Shield className="w-5 h-5" aria-hidden="true" />;
    case 'activity':
      return <Activity className="w-5 h-5" aria-hidden="true" />;
    case 'apple':
      return <Apple className="w-5 h-5" aria-hidden="true" />;
    case 'layers':
      return <Layers className="w-5 h-5" aria-hidden="true" />;
    case 'heart':
      return <Heart className="w-5 h-5" aria-hidden="true" />;
  }
};

export const OralHealthSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] =
    useState<OralHealthArticle | null>(null);

  useEffect(() => {
    if (!selectedArticle) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedArticle]);

  return (
    <section
      id="salud-bucal"
      className="py-16 lg:py-24 bg-white border-b border-[#8495A5]/20"
      aria-labelledby="oral-health-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Intro + Hygiene Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pb-12 border-b border-[#8495A5]/20">
          <div className="lg:col-span-5">
            <div className="h-full min-h-[240px] lg:min-h-[300px] rounded-xl overflow-hidden border border-[#8495A5]/25 bg-[#F1F4F6]">
              <ClinicalImage
                src={HYGIENE_IMAGE}
                alt="Implementos modernos de higiene bucal cotidiana: cepillo suave e hilo dental"
                fallbackTitle="Educación en salud bucal"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-wide text-[#1F5268] mb-2">
              Promoción y prevención cotidiana
            </p>
            <h2
              id="oral-health-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#142B45] text-balance"
            >
              Educación en salud bucal
            </h2>
            <p className="mt-4 text-base text-[#142B45]/80 leading-relaxed max-w-[65ch]">
              Artículos breves y recomendaciones prácticas elaboradas para fomentar
              hábitos diarios de higiene, alimentación responsable y detección temprana
              en todas las etapas de la vida.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-[#1F5268] font-medium">
              <span>7 guías educativas</span>
              <span aria-hidden="true">·</span>
              <span>Lectura accesible para toda la familia</span>
            </div>
          </div>
        </div>

        {/* 7 Articles Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORAL_HEALTH_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              className={`rounded-xl border border-[#8495A5]/25 bg-[#F1F4F6]/60 hover:bg-white hover:border-[#39B7B0] p-6 flex flex-col justify-between transition-colors duration-150 ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#1F5268] tabular-nums">
                    <span className="font-display font-bold text-[#142B45]">
                      {article.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-[#8495A5]/20 text-[#1F5268]">
                    {renderArticleIcon(article.iconName)}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#142B45] tracking-tight">
                  {article.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#1F5268]">
                  {article.subtitle}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed text-[#142B45]/80 ${
                    idx === 6 ? 'max-w-[75ch]' : ''
                  }`}
                >
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#8495A5]/20">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-sm font-display font-semibold text-[#142B45] hover:text-[#1F5268] transition-colors min-h-[36px]"
                >
                  <span>Leer recomendaciones</span>
                  <ArrowUpRight className="w-4 h-4 text-[#39B7B0]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#142B45]/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-xl border border-[#8495A5]/30 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 bg-[#142B45] text-white flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#39B7B0] tabular-nums">
                  {selectedArticle.index} · {selectedArticle.readTime}
                </p>
                <h3
                  id="article-modal-title"
                  className="font-display text-2xl font-bold mt-1"
                >
                  {selectedArticle.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  {selectedArticle.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Cerrar artículo educativo"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              <p className="text-sm sm:text-base leading-relaxed text-[#142B45]/85">
                {selectedArticle.summary}
              </p>

              <div className="pt-4 border-t border-[#8495A5]/20">
                <h4 className="font-display text-sm font-bold text-[#142B45] mb-3">
                  Puntos clave de cuidado
                </h4>
                <ul className="space-y-3">
                  {selectedArticle.recommendations.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#142B45]/85"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#39B7B0] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-6 py-4 bg-[#F1F4F6] border-t border-[#8495A5]/20 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-lg bg-[#142B45] hover:bg-[#1F5268] text-white font-display text-sm font-semibold transition-colors min-h-[40px]"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
