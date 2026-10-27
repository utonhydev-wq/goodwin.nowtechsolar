import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Wifi, Key, Monitor, Smartphone, AlertTriangle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const faqs: FAQItem[] = [
  {
    id: 'credentials',
    question: 'Como obtenho meu usuário e senha do SEMS+?',
    answer:
      'Após a conclusão e ativação do seu sistema fotovoltaico pela equipe NowTech Solar, nosso time cadastra sua usina e envia seus dados de acesso (e-mail cadastrado e senha inicial) por WhatsApp ou e-mail. Caso ainda não tenha recebido, clique no botão "Falar com suporte".',
    icon: Key,
  },
  {
    id: 'wifi-change',
    question: 'Troquei o roteador ou a senha do Wi-Fi de casa, o que fazer?',
    answer:
      'Quando o roteador ou senha do Wi-Fi é alterado, o inversor GoodWe precisa ser reconectado à nova rede. Pelo próprio aplicativo SEMS+ ou através da rede Wi-Fi interna do inversor (Solar-WiFi), é possível reconfigurar a rede. Se precisar de um passo a passo guiado, entre em contato com nosso suporte técnico.',
    icon: Wifi,
  },
  {
    id: 'pc-access',
    question: 'Posso acessar o monitoramento pelo computador?',
    answer:
      'Sim! A GoodWe disponibiliza o portal web oficial no endereço semsportal.com. Você pode entrar com o mesmo e-mail e senha cadastrados no aplicativo do celular para visualizar relatórios detalhados.',
    icon: Monitor,
  },
  {
    id: 'inverter-offline',
    question: 'O aplicativo mostra "Offline" ou o LED Wi-Fi está piscando rápido?',
    answer:
      'Verifique se a internet da sua residência está funcionando normalmente e se o roteador está próximo ao inversor. Lembre-se também de que o inversor se desliga à noite por ausência de luz solar, podendo ficar em espera até o nascer do sol no dia seguinte.',
    icon: AlertTriangle,
  },
  {
    id: 'install-central',
    question: 'Posso fixar esta Central NowTech Solar na tela inicial do meu celular?',
    answer:
      'Sim! Esta Central foi desenvolvida como um aplicativo web progressivo (PWA). No Android pelo Chrome, toque em "Instalar" ou nos 3 pontinhos > "Adicionar à tela inicial". No iPhone pelo Safari, toque no botão "Compartilhar" e selecione "Adicionar à Tela de Início".',
    icon: Smartphone,
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('credentials');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/60">
      <div className="max-w-3xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Respostas diretas para as dúvidas mais comuns sobre o acesso ao monitoramento GoodWe.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-amber-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    <p className="pl-12">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
