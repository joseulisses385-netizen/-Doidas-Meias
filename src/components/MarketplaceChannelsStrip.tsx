import React, { useState, useEffect } from 'react';
import { Instagram, ShoppingBag, Truck, ShieldCheck, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { StoreSettings } from '../types';

interface MarketplaceChannelsStripProps {
  settings: StoreSettings;
}

export const MarketplaceChannelsStrip: React.FC<MarketplaceChannelsStripProps> = ({ settings }) => {
  // Flash deal countdown simulation
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 5, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(
    settings.heroWhatsAppDefaultMessage || 'Olá! Vim pelo site da Doidas e Meias e quero comprar!'
  )}`;

  return (
    <div className="w-full bg-gradient-to-b from-[#190224] via-[#24032e] to-[#190224] py-8 border-b border-pink-500/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Marketplace Flash Deals Urgency Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#831843]/60 via-[#581c87]/60 to-[#0284c7]/40 border-2 border-pink-500/50 shadow-xl shadow-pink-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Zap className="w-5 h-5 fill-amber-300 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                  Oferta Relâmpago
                </span>
                <span className="text-xs text-purple-200/90 font-semibold">
                  Kits com Desconto Progressivo
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white mt-0.5">
                Compre 3 ou mais pares e garanta brindes exclusivos!
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#190222]/80 px-4 py-2 rounded-xl border border-purple-700/50">
            <span className="text-xs text-purple-300 font-bold uppercase tracking-wider">
              Termina em:
            </span>
            <div className="flex items-center gap-1 font-mono text-sm font-black text-amber-300">
              <span className="bg-[#2e053a] px-2 py-1 rounded-md border border-purple-600/50">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="bg-[#2e053a] px-2 py-1 rounded-md border border-purple-600/50">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="bg-[#2e053a] px-2 py-1 rounded-md border border-purple-600/50 text-pink-400">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Marketplace 4 Main Channels Grid */}
        <div className="text-center mb-6">
          <span className="text-xs font-black uppercase tracking-widest text-amber-300 font-fun">
            Onde Comprar
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-fun text-white mt-1">
            Escolha o Canal que Preferir para Fazer seu Pedido
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/80 mt-1 max-w-xl mx-auto">
            Integramos nosso estoque com os maiores canais de venda para você comprar com agilidade e total segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Channel 1: TikTok Shop */}
          <div className="p-5 rounded-2xl bg-[#1c0226] border border-pink-500/40 hover:border-pink-400 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-black border border-[#00f2fe]/40 flex items-center justify-center text-2xl shadow-md">
                  🎵
                </div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-pink-600/30 text-pink-300 border border-pink-500/30">
                  Cupons no App
                </span>
              </div>
              <h4 className="text-lg font-black text-white group-hover:text-pink-300 transition-colors">
                TikTok Shop
              </h4>
              <p className="text-xs text-purple-200/80 mt-1.5 leading-relaxed">
                Compre com 1 toque direto nos vídeos virais. Aproveite cupons de primeira compra e frete promocional do TikTok!
              </p>
            </div>
            <a
              href={settings.tiktokShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-black hover:bg-zinc-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-pink-500/40 transition-all shadow-xs"
            >
              <span>Ir para o TikTok Shop</span>
              <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
            </a>
          </div>

          {/* Channel 2: WhatsApp */}
          <div className="p-5 rounded-2xl bg-[#1c0226] border border-emerald-500/40 hover:border-emerald-400 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#22c55e]/20 border border-[#22c55e]/50 flex items-center justify-center text-2xl shadow-md">
                  💬
                </div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-600/30 text-emerald-300 border border-emerald-500/30">
                  Atendimento Humano
                </span>
              </div>
              <h4 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                WhatsApp Oficial
              </h4>
              <p className="text-xs text-purple-200/80 mt-1.5 leading-relaxed">
                Fale com a nossa equipe, receba fotos de modelos em estoque, tire dúvidas de tamanhos e pague com Pix rápido.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Channel 3: Instagram */}
          <div className="p-5 rounded-2xl bg-[#1c0226] border border-purple-500/40 hover:border-purple-400 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/30">
                  Looks & Stories
                </span>
              </div>
              <h4 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors">
                Instagram Shop
              </h4>
              <p className="text-xs text-purple-200/80 mt-1.5 leading-relaxed">
                Veja clientes reais usando as meias, acompanhe lançamentos semanais nos stories e peça pelo Direct.
              </p>
            </div>
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-700 to-pink-600 hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-pink-200" />
            </a>
          </div>

          {/* Channel 4: Loja Virtual Direta */}
          <div className="p-5 rounded-2xl bg-[#1c0226] border border-amber-500/40 hover:border-amber-400 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-2xl text-amber-300 shadow-md">
                  🛍️
                </div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center gap-1">
                  <span>⚡</span>
                  <span>5% OFF no Pix</span>
                </span>
              </div>
              <h4 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                Loja Virtual Oficial
              </h4>
              <p className="text-xs text-purple-200/80 mt-1.5 leading-relaxed">
                Adicione quantos modelos quiser à sacola, ganhe <strong className="text-emerald-300">5% de desconto automático no Pix</strong>, calcule frete com desconto e conclua seu pedido na hora.
              </p>
            </div>
            <a
              href="#produtos"
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-[#3d0954] hover:bg-[#4d0b64] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-purple-500/40 transition-all shadow-xs"
            >
              <span>Ver Todo o Catálogo</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </a>
          </div>

        </div>

        {/* Marketplace Trust Badges Bar */}
        <div className="mt-8 pt-6 border-t border-purple-900/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-purple-200/90 font-semibold">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Envio Rápido p/ Todo Brasil</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-purple-200/90 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Compra 100% Garantida</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-purple-200/90 font-semibold">
            <span className="text-sm">⭐</span>
            <span>Nota 4.9 nas Avaliações</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-purple-200/90 font-semibold">
            <span className="text-sm">⚡</span>
            <span><strong>5% OFF</strong> no Pix Instantâneo</span>
          </div>
        </div>

      </div>
    </div>
  );
};
