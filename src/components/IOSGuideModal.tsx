import React from 'react';
import { X, Share, PlusSquare, Smartphone } from 'lucide-react';

interface IOSGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSGuideModal: React.FC<IOSGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-white border border-slate-200 p-6 shadow-xl text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Fechar guia"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h3 id="ios-guide-title" className="text-base font-bold text-slate-900">
              Instalar no iPhone
            </h3>
            <p className="text-xs text-slate-500">
              Adicione à Tela de Início
            </p>
          </div>
        </div>

        <div className="space-y-3 my-5 text-xs sm:text-sm text-slate-600">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700 shrink-0">
              <Share className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-slate-900 block mb-0.5">1. Toque em Compartilhar</strong>
              <span>No Safari, toque no ícone de compartilhamento na barra inferior.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 shrink-0">
              <PlusSquare className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-slate-900 block mb-0.5">2. Adicionar à Tela de Início</strong>
              <span>Role o menu para baixo e selecione <strong>"Adicionar à Tela de Início"</strong>.</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors shadow-xs"
        >
          Entendi
        </button>
      </div>
    </div>
  );
};
