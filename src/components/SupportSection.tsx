import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/5581996013352?text=Ol%C3%A1%2C%20equipe%20NowTech%20Solar!%20Preciso%20de%20ajuda%20para%20acessar%20o%20monitoramento%20do%20meu%20inversor%20GoodWe%20pelo%20SEMS%2B.';

export const SupportSection: React.FC = () => {
  return (
    <div className="w-full mt-4 sm:mt-6">
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Precisa de ajuda?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
            Não consegue acessar seu monitoramento ou precisa de orientação? Fale com a equipe NowTech Solar.
          </p>
        </div>

        <div className="w-full sm:w-auto shrink-0 flex flex-col items-stretch sm:items-end gap-1.5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 sm:h-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-xl shadow-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Falar com suporte</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </a>
          <span className="text-[11px] text-slate-400 text-center sm:text-right font-mono">
            WhatsApp: (81) 99601-3352
          </span>
        </div>
      </div>
    </div>
  );
};
