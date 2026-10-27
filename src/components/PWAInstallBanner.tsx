import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, X, Smartphone } from 'lucide-react';

interface PWAInstallBannerProps {
  onOpenIOSGuide: () => void;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({ onOpenIOSGuide }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);

  if (isInstalled || dismissed) return null;
  if (!isInstallable && !isIOS) return null;

  const handleAction = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      onOpenIOSGuide();
    }
  };

  return (
    <aside
      aria-label="Aviso para instalar o aplicativo"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm z-40 p-4 rounded-2xl bg-white border border-slate-200 shadow-lg animate-in slide-in-from-bottom duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              Instalar Atalho
            </h4>
            <p className="text-[11px] text-slate-500">
              Acesse a Central direto da tela inicial.
            </p>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
          aria-label="Dispensar aviso"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
        <button
          onClick={() => setDismissed(true)}
          className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-700"
        >
          Fechar
        </button>
        <button
          onClick={handleAction}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{isIOS ? 'Como Instalar' : 'Instalar'}</span>
        </button>
      </div>
    </aside>
  );
};
