import React, { useState } from 'react';
import { GoodWeLogo, SemsPlusIcon, AndroidIcon, AppleIcon } from './Logos';
import { useDeviceDetect } from '../hooks/useDeviceDetect';
import { ExternalLink, Smartphone, Globe, ArrowUpRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=com.goodwe.sems.plus';
const IPHONE_STORE_URL = 'https://apps.apple.com/br/app/sems/id6755710856';
const WEB_PORTAL_URL = 'https://www.semsportal.com';

export const MainAppCard: React.FC = () => {
  const device = useDeviceDetect();
  const [openStatus, setOpenStatus] = useState<string | null>(null);

  const handleOpenInstalledApp = () => {
    setOpenStatus('Tentando abrir o aplicativo SEMS+ no seu celular...');
    const targetScheme = device.isIOS ? 'semsplus://' : 'semsplus://open';
    
    try {
      window.location.href = targetScheme;
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setOpenStatus(
        'Caso o aplicativo não tenha aberto, você pode instalá-lo ou atualizá-lo diretamente pelo botão da loja acima.'
      );
    }, 2000);
  };

  return (
    <div className="w-full">
      {/* Main Download Card */}
      <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-7 shadow-sm">
        {/* Header inside Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <SemsPlusIcon size={52} className="shrink-0" />
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight truncate">
                SEMS+ — GoodWe
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-amber-600 truncate">
                Aplicativo Oficial de Monitoramento
              </p>
            </div>
          </div>

          <div className="self-start sm:self-center px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Inversores:</span>
            <GoodWeLogo className="h-4" />
          </div>
        </div>

        {/* Clear Description */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
          Monitore a geração de energia do seu sistema fotovoltaico, consulte informações de desempenho e acompanhe seu sistema pelo aplicativo oficial.
        </p>

        {/* Device Tag / Guidance specifically for mobile/iPhone */}
        {device.isMobile && (
          <div className={`mt-4 p-3 rounded-xl border flex items-center justify-between gap-2 text-xs ${
            device.isIOS
              ? 'bg-sky-50/80 border-sky-200 text-sky-950'
              : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
          }`}>
            <span className="flex items-center gap-2">
              <Smartphone className={`w-4 h-4 shrink-0 ${device.isIOS ? 'text-sky-600' : 'text-emerald-600'}`} />
              <span>
                Seu aparelho: <strong>{device.osName}</strong>
              </span>
            </span>
            <span className={`font-bold shrink-0 ${device.isIOS ? 'text-sky-700' : 'text-emerald-700'}`}>
              {device.isIOS ? 'Toque em "Baixar para iPhone"' : 'Toque em "Baixar para Android"'}
            </span>
          </div>
        )}

        {/* Large Action Buttons (Smart Order: iPhone on top if on iOS) */}
        <div className="mt-5 flex flex-col sm:grid sm:grid-cols-2 gap-3">
          {/* If iOS, show iPhone button first */}
          {device.isIOS && (
            <a
              href={IPHONE_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl border-2 border-sky-500 bg-sky-50/80 text-sky-950 shadow-sm active:scale-[0.98] transition-all min-h-[64px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-sky-200 shadow-xs flex items-center justify-center text-sky-600 shrink-0">
                  <AppleIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] sm:text-[11px] font-bold text-sky-700 uppercase tracking-wide">
                    Apple App Store (iPhone)
                  </span>
                  <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    Baixar para iPhone
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-sky-600 shrink-0" />
            </a>
          )}

          {/* Android Button */}
          <a
            href={ANDROID_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between p-4 rounded-xl border transition-all min-h-[64px] active:scale-[0.98] ${
              device.isAndroid
                ? 'border-2 border-emerald-500 bg-emerald-50/80 text-emerald-950 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80 text-slate-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-emerald-600 shrink-0">
                <AndroidIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Google Play Store
                </span>
                <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Baixar para Android
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-400 shrink-0" />
          </a>

          {/* If NOT iOS, show iPhone button in normal order */}
          {!device.isIOS && (
            <a
              href={IPHONE_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 text-slate-900 transition-all min-h-[64px] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-sky-600 shrink-0">
                  <AppleIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                    Apple App Store
                  </span>
                  <span className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    Baixar para iPhone
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 shrink-0" />
            </a>
          )}
        </div>

        {/* Guidance if already installed */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/70">
            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
              Se você já possui o aplicativo instalado, abra o SEMS+ no seu celular para acessar seu sistema.
            </p>

            {device.isMobile && (
              <button
                onClick={handleOpenInstalledApp}
                className="w-full sm:w-auto h-11 px-4 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 active:scale-[0.98] border border-slate-300 rounded-xl shadow-xs shrink-0 transition-all"
              >
                <span>Abrir SEMS+ no celular</span>
                <ArrowUpRight className="w-4 h-4 text-slate-700" />
              </button>
            )}
          </div>

          {openStatus && (
            <div className="mt-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{openStatus}</span>
            </div>
          )}
        </div>

        {/* Alternative web link for PC */}
        <div className="mt-4 pt-3 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 text-xs text-slate-500 border-t border-slate-100">
          <span>Acesso alternativo pelo computador:</span>
          <a
            href={WEB_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1"
          >
            <span>Portal Web (semsportal.com)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
