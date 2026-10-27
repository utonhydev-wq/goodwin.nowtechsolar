import React from 'react';
import { NowTechSolarLogo } from './Logos';
import { MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md safe-top">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 px-3 sm:px-6 h-16 sm:h-18">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg py-1"
          aria-label="Página Inicial NowTech Solar"
        >
          <NowTechSolarLogo />
        </a>

        {/* Primary Support Action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://wa.me/5581996013352?text=Ol%C3%A1%2C%20equipe%20NowTech%20Solar!%20Preciso%20de%20ajuda%20para%20acessar%20o%20monitoramento%20do%20meu%20inversor%20GoodWe%20pelo%20SEMS%2B."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-xl shadow-xs transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span className="hidden sm:inline">Suporte WhatsApp</span>
            <span className="sm:hidden">Suporte</span>
          </a>
        </div>
      </div>
    </header>
  );
};
