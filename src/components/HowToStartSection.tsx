import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const HowToStartSection: React.FC = () => {
  return (
    <div className="w-full mt-4 sm:mt-6">
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 shadow-sm">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-3 sm:mb-4">
          Como Começar em 3 Passos:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5">
          {/* Step 1 */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-amber-500 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center font-mono shrink-0">
                1
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900">
                Instale o aplicativo
              </strong>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">
              Escolha a versão correspondente ao seu celular e instale o SEMS+.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-amber-500 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center font-mono shrink-0">
                2
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900">
                Acesse sua conta
              </strong>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">
              Entre com as credenciais fornecidas ou orientadas pelo responsável pelo monitoramento do seu sistema.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-amber-500 text-white font-bold text-[11px] sm:text-xs flex items-center justify-center font-mono shrink-0">
                3
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900">
                Acompanhe seu sistema
              </strong>
            </div>
            <p className="text-xs text-slate-600 pl-7 leading-relaxed">
              Consulte as informações disponibilizadas pelo SEMS+ para a sua instalação.
            </p>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-start sm:items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-snug">
            A Central NowTech Solar não solicita nem armazena as suas senhas. O acesso é feito de forma segura e direta no app oficial da GoodWe.
          </span>
        </div>
      </div>
    </div>
  );
};
