import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full pt-3 sm:pt-6 pb-1">
      {/* Direct Notice Card */}
      <div className="rounded-2xl bg-amber-500/10 border-2 border-amber-400/90 p-3.5 sm:p-5 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-amber-800 uppercase block mb-0.5">
              Comunicado NowTech Solar
            </span>
            <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Caro cliente, aviso importante:
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-medium">
              Se o seu sistema solar possui o inversor da <strong className="text-slate-900 font-bold">GoodWe</strong>, atente-se às seguintes atualizações para continuar acompanhando a geração de energia pelo aplicativo oficial <strong className="text-amber-800 font-bold">SEMS+</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Direct Header Subtitle */}
      <div className="mt-3.5 px-0.5">
        <h2 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
          Central GoodWe — Acesso Rápido ao Monitoramento
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Acesse o aplicativo de monitoramento do seu inversor GoodWe de maneira simples e rápida.
        </p>
      </div>
    </div>
  );
};
