import React from 'react';
import { NowTechSolarLogo } from './Logos';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-8 sm:mt-12 py-6 sm:py-8 px-4 sm:px-6 safe-bottom">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <NowTechSolarLogo />
          <p className="text-xs text-slate-500 mt-1.5">
            Tecnologia e acompanhamento para o seu sistema solar.
          </p>
        </div>

        <div className="text-[11px] sm:text-xs text-slate-400 sm:text-right max-w-sm space-y-1">
          <p>
            SEMS+ é uma plataforma da GoodWe. A Central NowTech Solar facilita o acesso ao aplicativo e não substitui a plataforma oficial.
          </p>
          <p className="text-slate-500 font-medium">
            © {currentYear} NowTech Solar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
