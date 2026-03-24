import { useState, useRef } from "react";
import { Link } from "react-router";
import { ChevronLeft, UploadCloud, X, Monitor, MousePointer2, Type, Gauge, Globe } from "lucide-react";
import { Button } from "../../components/Button";
import { useSidebar } from "../../context/SidebarContext";

// --- Simulated Components for Nelogica Site ---

function NelogicaSimulatedHeader() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 pointer-events-none select-none flex flex-col" style={{ fontFamily: "'Montserrat', sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <div className="visible bg-black/5 backdrop-blur-[16px] flex flex-col w-full border-b border-white/5 relative transition-all duration-300">
        <div className="ins-preview-wrapper" style={{ display: 'block', visibility: 'visible' }}>
          <div className="flex items-center justify-center gap-[2cqw] h-[2.3cqw] py-[0.2cqw] bg-[#383f47]">
            <a className="ins-element-link flex items-center">
               <span className="text-white text-[0.7cqw] tracking-wide opacity-90 uppercase" style={{ fontWeight: 300 }}>Últimos dias para garantir <span className="font-bold" style={{ fontWeight: 700 }}>DESCONTOS EXCLUSIVOS</span></span>
            </a>
            <div className="countdown-wrapper flex items-center gap-[0.5cqw]">
               <span className="text-white text-[0.7cqw] opacity-90" style={{ fontWeight: 300 }}>Ends in</span>
               <div className="flex items-center gap-[0.3cqw] font-bold text-white text-[0.7cqw]">
                 <div className="flex flex-col items-center leading-none"><span className="text-[0.9cqw]" style={{ fontWeight: 300 }}>02</span><span className="text-[0.35cqw] uppercase text-white/70" style={{ fontWeight: 300 }}>Dias</span></div>
                 <span className="text-[0.9cqw] leading-none mb-[0.4cqw]" style={{ fontWeight: 300 }}>:</span>
                 <div className="flex flex-col items-center leading-none"><span className="text-[0.9cqw]" style={{ fontWeight: 300 }}>14</span><span className="text-[0.35cqw] uppercase text-white/70" style={{ fontWeight: 300 }}>Horas</span></div>
                 <span className="text-[0.9cqw] leading-none mb-[0.4cqw]" style={{ fontWeight: 300 }}>:</span>
                 <div className="flex flex-col items-center leading-none"><span className="text-[0.9cqw]" style={{ fontWeight: 300 }}>36</span><span className="text-[0.35cqw] uppercase text-white/70" style={{ fontWeight: 300 }}>Min</span></div>
                 <span className="text-[0.9cqw] leading-none mb-[0.4cqw]" style={{ fontWeight: 300 }}>:</span>
                 <div className="flex flex-col items-center leading-none"><span className="text-[0.9cqw]" style={{ fontWeight: 300 }}>30</span><span className="text-[0.35cqw] uppercase text-white/70" style={{ fontWeight: 300 }}>Seg</span></div>
               </div>
            </div>
          </div>
        </div>
        
        <nav className="top-nav flex items-center justify-between px-[5cqw] h-[3.75cqw]">
          <a className="flex items-center gap-[0.5cqw]">
             <img src="/NeloGuia/logotipo-nelogica-branco.svg" alt="Nelogica" className="h-[1.4cqw] object-contain" />
          </a>
          <ul className="flex items-center gap-[1.8cqw] lg:gap-[2.4cqw] text-white/80 text-[0.7cqw] tracking-tight whitespace-nowrap mt-[0.2cqw]">
             <a className="hover:text-white transition-colors"><span style={{ fontWeight: 400 }}>Profit</span></a>
             <a className="hover:text-white transition-colors"><span style={{ fontWeight: 400 }}>BlackArrow</span></a>
             <a className="hover:text-white transition-colors"><span style={{ fontWeight: 400 }}>Copy Invest</span></a>
             <a className="hover:text-white transition-colors"><span style={{ fontWeight: 400 }}>HUB3</span></a>
             <a className="hover:text-white transition-colors"><span style={{ fontWeight: 400 }}>Algotools</span></a>
             <li className="flex items-center gap-[0.4cqw] hover:text-white transition-colors"><span style={{ fontWeight: 400 }}>Soluções</span><span className="text-[0.45cqw] ml-[0.1cqw]">▼</span></li>
             <li className="flex items-center gap-[0.4cqw] hover:text-white transition-colors"><span style={{ fontWeight: 400 }}>Empresa</span><span className="text-[0.45cqw] ml-[0.1cqw]">▼</span></li>
             <a className="flex items-center gap-[0.3cqw] hover:text-white transition-colors text-[0.7cqw]">
               <img src="https://www.nelogica.com.br/cache/images/Header/ic-new_store.svg" className="h-[0.9cqw]" alt="Store" />
               <span style={{ fontWeight: 400 }}>NeloStore</span>
             </a>
          </ul>
          <div className="flex items-center">
             <button className="flex items-center gap-[0.4cqw] bg-transparent border-[1px] border-white/60 text-white rounded-[4px] px-[1.2cqw] py-[0.4cqw] text-[0.7cqw] hover:bg-white hover:text-black transition-colors" style={{ fontWeight: 400 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 26 26" fill="currentColor" className="opacity-90">
                   <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                   <path d="M13.0195 15C15.0906 15 16.7695 13.3211 16.7695 11.25C16.7695 9.17893 15.0906 7.5 13.0195 7.5C10.9485 7.5 9.26953 9.17893 9.26953 11.25C9.26953 13.3211 10.9485 15 13.0195 15Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                   <path d="M7 18.6938C7.56434 17.5825 8.42538 16.6491 9.48768 15.9971C10.55 15.3451 11.7721 15 13.0185 15C14.2649 15 15.487 15.3451 16.5493 15.9971C17.6116 16.6491 18.4727 17.5825 19.037 18.6938" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span style={{ fontWeight: 300 }}>Entrar</span>
             </button>
          </div>
        </nav>
      </div>
    </header>
  );
}





function NelogicaSimulatedBannerOverlay({ titleType = "standard" }: { titleType?: string }) {
  return (
    <div className="homepage-banner__content flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 lg:absolute lg:top-[50%] lg:-translate-y-[50%] lg:right-[8cqw] w-auto max-w-[45cqw] gap-[1.5cqw] pointer-events-none select-none z-10 font-['Inter',sans-serif] mt-[10cqw] lg:mt-0">
      {/* Title block follows the DOM order: Title, Logo, Container */}
      
      <h2 className={`homepage-banner__content-title order-2 text-white font-[700] tracking-tight leading-[1.1] ${titleType === "long" ? "text-[2.5cqw] max-w-[42cqw]" : "text-[2.8cqw] max-w-[35cqw]"}`}>
        {titleType === "long" ? (
          <>Dolarize seu day trade com o BlackArrow<br /><span style={{ fontSize: '1.45cqw', fontWeight: 500, opacity: 0.9, marginTop: '0.8cqw', display: 'block' }}>Recursos avançados para dominar o mundo</span></>
        ) : (
          "A mais alta performance para seus investimentos."
        )}
      </h2>
      
      <img 
        className="homepage-banner__content-logo order-1 w-[18.7cqw] object-contain mb-[0.5cqw]" 
        src="https://downloadserver-cdn.nelogica.com.br/content/site/nelogica/home/banner/logo_BAUltra.png" 
        alt="Logo do Produto" 
      />
      
      <div className="homepage-banner__content-link-container order-3 flex flex-row items-center justify-center lg:justify-start gap-[1.2cqw] mt-[0.5cqw]">
        <a className="homepage-banner__content-link primary px-[1.5cqw] py-[0.8cqw] min-w-[10cqw] text-center rounded-[4px] bg-white hover:bg-white/90 text-black text-[0.83cqw] font-[600] tracking-wide transition-colors">
          Conhecer
        </a>
        <a className="homepage-banner__content-link bg-[rgba(255,255,255,0.15)] px-[1.5cqw] py-[0.8cqw] min-w-[10cqw] text-center rounded-[4px] border border-white/10 backdrop-blur-[8px] text-white text-[0.83cqw] font-[600] tracking-wide hover:bg-[rgba(255,255,255,0.25)] transition-colors">
          Ver planos
        </a>
      </div>
    </div>
  );
}

import { AlertTriangle, CheckCircle2, Image as ImageIcon } from "lucide-react";

export function NelogicaBannerSimulator() {
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [titleType, setTitleType] = useState<string>("standard");
  const [contrastStatus, setContrastStatus] = useState<'idle' | 'checking' | 'pass' | 'fail'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setIsCollapsed } = useSidebar();

  const checkContrast = (imgSrc: string) => {
    setContrastStatus('checking');
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Analyze top 15% where the transparent menu sits
      const topHeight = Math.floor(img.height * 0.15);
      const topData = ctx.getImageData(0, 0, img.width, topHeight).data;
      
      let rSum = 0, gSum = 0, bSum = 0;
      let count = 0;
      for (let i = 0; i < topData.length; i += 16) { // sample every 4th pixel to save CPU
         rSum += topData[i];
         gSum += topData[i+1];
         bSum += topData[i+2];
         count++;
      }
      
      const rAvg = rSum / count;
      const gAvg = gSum / count;
      const bAvg = bSum / count;

      // Simple relative luminance heuristic
      const luminance = (0.299 * rAvg + 0.587 * gAvg + 0.114 * bAvg) / 255;
      
      // If luminance is high, white menu text will be unreadable
      if (luminance > 0.55) {
         setContrastStatus('fail');
      } else {
         setContrastStatus('pass');
      }
    };
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setBannerUrl(result);
        checkContrast(result);
        setIsCollapsed(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setBannerUrl(null);
    setContrastStatus('idle');
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden bg-[#0f0f10] border border-white/10 mb-16 shadow-2xl">
      {/* Top Header Control Area */}
      <div className="p-6 md:p-8 border-b border-white/5 bg-[#0f0f10]/80 backdrop-blur-md">
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="flex items-center gap-2 text-[#00A1F6] text-[11px] font-[700] tracking-[0.12em] uppercase">
                <Monitor size={14} /> Ambiente de Simulação
              </span>
              <h2 className="text-[#ffffff] text-[24px] font-[600] tracking-[-0.02em] leading-[1.15]">
                Teste sua Capa
              </h2>
              <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                Faça o upload da arte (2560x900) para testar proporções, tipografia e executar o teste automático de contraste para acessibilidade.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              {/* Toggles */}
              <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1 backdrop-blur-md">
                 <button 
                  onClick={() => setTitleType("standard")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${titleType === 'standard' ? 'bg-[#00A1F6] text-white shadow-[0_0_20px_rgba(0,161,246,0.3)]' : 'text-white/40 hover:text-white/60'}`}
                 >
                    <Type size={14} /> Título Curto
                 </button>
                 <button 
                  onClick={() => setTitleType("long")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${titleType === 'long' ? 'bg-[#00A1F6] text-white shadow-[0_0_20px_rgba(0,161,246,0.3)]' : 'text-white/40 hover:text-white/60'}`}
                 >
                    <Type size={14} /> Título Longo
                 </button>
              </div>

              {!bannerUrl ? (
                <Button variant="primary" className="bg-[#00A1F6] hover:bg-[#33b4f8] text-white border-0" onClick={() => fileInputRef.current?.click()} leftIcon={<UploadCloud size={18} />}>
                  Carregar Arte WebP
                </Button>
              ) : (
                <Button variant="secondary" className="border-white/10 hover:bg-white/5" onClick={clearImage} leftIcon={<X size={16} />}>
                  Remover Arte
                </Button>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/webp, image/png, image/jpeg" className="hidden" />
            </div>
          </div>
          
          {/* Contrast Checker Output */}
          {bannerUrl && contrastStatus !== 'idle' && (
            <div className={`p-4 rounded-xl flex items-center gap-3 border transition-all ${contrastStatus === 'pass' ? 'bg-[#10b981]/10 border-[#10b981]/20' : contrastStatus === 'fail' ? 'bg-[#ef4444]/10 border-[#ef4444]/20' : 'bg-white/5 border-white/10'}`}>
              {contrastStatus === 'pass' && <CheckCircle2 className="text-[#10b981]" size={20} />}
              {contrastStatus === 'fail' && <AlertTriangle className="text-[#ef4444]" size={20} />}
              {contrastStatus === 'checking' && <Monitor className="text-white/40 animate-pulse" size={20} />}
              <div className="flex flex-col">
                <span className={`font-semibold text-sm ${contrastStatus === 'pass' ? 'text-[#10b981]' : contrastStatus === 'fail' ? 'text-[#ef4444]' : 'text-white/60'}`}>
                  {contrastStatus === 'pass' ? 'Contraste Aprovado' : contrastStatus === 'fail' ? 'Aviso de Acessibilidade' : 'Analisando imagem...'}
                </span>
                <span className="text-white/60 text-xs">
                  {contrastStatus === 'pass' ? 'O topo da imagem possui luminosidade adequada para permitir a leitura do menu transparente branco.' : contrastStatus === 'fail' ? 'A área superior da imagem está muito clara. O menu global (branco vazado) poderá ficar ilegível.' : 'Calculando luminância...'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Simulation Area */}
      <div className="w-full flex justify-center py-10 px-0 md:px-4 bg-[#131920]">
        <div className="w-full flex flex-col gap-4">
          
          <div className="flex items-center gap-4 mb-2">
             <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-black font-mono">
                <Monitor size={12} /> Visualização Desktop (Proporcional)
             </div>
             <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="w-full overflow-x-auto pb-4 custom-scrollbar px-4">
            <div 
              className="min-w-[1100px] w-full aspect-video rounded-2xl overflow-hidden shadow-[0_32px_120px_-20px_rgba(0,0,0,0.8)] border border-white/10 relative bg-[#18232f] isolate z-0"
              style={{ 
                containerType: 'inline-size',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)'
              }}
            >
              {/* The Banner Image Background */}
              {bannerUrl && (
                <div 
                  className="absolute inset-x-0 z-0 bg-no-repeat rounded-[inherit]"
                  style={{ 
                    backgroundImage: `url(${bannerUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    top: '0',
                    height: '100%'
                  }}
                />
              )}
              
              {/* The Site Overlay */}
              <NelogicaSimulatedHeader />
              <NelogicaSimulatedBannerOverlay titleType={titleType} />

              {/* Empty State */}
              {!bannerUrl && (
                <div 
                  className="absolute inset-0 z-0 flex flex-col items-center justify-center cursor-pointer group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center gap-4 text-white/20 group-hover:text-[#00A1F6]/40 transition-all duration-500">
                    <div className="p-8 rounded-full border-2 border-dashed border-white/10 group-hover:border-[#00A1F6]/20 group-hover:scale-110 transition-all">
                      <UploadCloud size={64} strokeWidth={1} />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-black tracking-widest uppercase">Solte sua arte aqui</p>
                      <p className="text-[11px] font-medium opacity-60 mt-1">Recomendado: 2560x900px</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Overlay Helpers (Optional - can be toggled) */}
              <div className="absolute bottom-6 left-6 z-[60] flex items-center gap-4">
                 <div className="px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-[#00A1F6] font-bold">
                    SIMULAÇÃO DE INTERFACE EM TEMPO REAL
                 </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
             <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#00A1F6]/10 flex items-center justify-center text-[#00A1F6] shrink-0">
                   <Gauge size={20} />
                </div>
                <div className="flex flex-col gap-1">
                   <h3 className="text-white font-bold text-sm">Contraste do Menu</h3>
                   <p className="text-white/40 text-[12px] leading-relaxed">Observe se os links do menu perdem leitura conforme passam por cima da sua arte.</p>
                </div>
             </div>
             <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#00A1F6]/10 flex items-center justify-center text-[#00A1F6] shrink-0">
                   <Type size={20} />
                </div>
                <div className="flex flex-col gap-1">
                   <h3 className="text-white font-bold text-sm">Flutuação do CTA</h3>
                   <p className="text-white/40 text-[12px] leading-relaxed">Alterne entre título curto e longo para ver os botões "dançarem" sobre o seu fundo.</p>
                </div>
             </div>
             <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#00A1F6]/10 flex items-center justify-center text-[#00A1F6] shrink-0">
                   <X size={20} />
                </div>
                <div className="flex flex-col gap-1">
                   <h3 className="text-white font-bold text-sm">Safe Area Direita</h3>
                   <p className="text-white/40 text-[12px] leading-relaxed">Elementos importantes não devem ficar na metade direita para evitar ruído com o texto de código.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Realistic Simulator (Real Site HTML) ────────────────────────────────────

const NELOGICA_SITE_CSS_URLS = [
  "/NeloGuia/css/index-qsG0n2qt.css",
  "/NeloGuia/css/HomeView-CyGQi1il.css",
];

const buildIframeSrcdoc = (bannerSrc: string | null, logoSrc: string | null) => {
  const defaultLogo = 'https://downloadserver-cdn.nelogica.com.br/content/site/nelogica/home/banner/logo_BAUltra.png';
  const logoToUse = logoSrc || defaultLogo;
  const bannerStyle = bannerSrc
    ? `style="background-image: url('${bannerSrc}') !important; background-size: cover !important; background-position: center top !important;"`
    : `style="background-color: #18232f;"`;

  return `<!DOCTYPE html>
<html lang="pt" style="margin:0;padding:0;overflow:hidden;">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${NELOGICA_SITE_CSS_URLS.map(url => `<link rel="stylesheet" href="${url}">`).join('\n')}
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #18232f; }
  /* Force the header to be always visible and positioned */
  #app-header { position: absolute; top: 0; left: 0; right: 0; z-index: 100; }
  #nl-header { position: relative !important; }
  /* Hide hello-bar / countdown / ins-preview */
  .ins-preview-wrapper, .ins-preview-wrapper-47794, [class*="ins-hello-bar"], [class*="ins-preview"] { display: none !important; }
  /* Hero section fills page */
  .homepage-banner { position: relative; width: 100%; height: 100vh; overflow: hidden; margin: 0; }
  .homepage-banner__slides { height: 100vh; }
  .homepage-banner__slide-item { height: 100vh; display: none; }
  .homepage-banner__slide-item:first-child { display: block; }
  .homepage-banner__background { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; }
  /* Simulator background override */
  #sim-bg { position: absolute; inset: 0; background-size: cover; background-position: center top; background-repeat: no-repeat; z-index: 0; }
  /* Bring content on top */
  .homepage-banner__content { z-index: 10; position: absolute; top: 50%; transform: translateY(-50%); right: 8%; }
  /* Navigation logo display */
  .top-nav-logo-img { display: flex; align-items: center; justify-content: flex-start; }
</style>
</head>
<body>
<div id="app">
  <div>
    <!-- HEADER (nav only, no hello-bar) -->
    <header id="app-header">
      <div id="nl-header" class="nl-bg0 visible" style="z-index:101; position:relative;">
        <nav class="top-nav" aria-label="top-nav">
          <a href="https://www.nelogica.com.br/" class="top-nav-logo-img" title="Nelogica" style="text-decoration: none;">
            <img src="/NeloGuia/logotipo-nelogica-branco.svg" alt="Nelogica" style="height:32px; width:auto; object-fit:contain; display:block;">
          </a>
          <ul class="top-main-nav top-menu-itens">
            <a href="#" class="main-nav__list-item header-nav-item" title="Profit"><span>Profit</span></a>
            <a href="#" class="main-nav__list-item header-nav-item" title="BlackArrow"><span>BlackArrow</span></a>
            <a href="#" class="main-nav__list-item header-nav-item" title="Copy Invest"><span>Copy Invest</span></a>
            <a href="#" class="main-nav__list-item header-nav-item" title="HUB3"><span>HUB3</span></a>
            <a href="#" class="main-nav__list-item header-nav-item" title="Algotools"><span>Algotools</span></a>
            <li class="main-nav__list-item"><div class="header-nav-item"><span>Soluções</span></div></li>
            <li class="main-nav__list-item"><div class="header-nav-item"><span>Empresa</span></div></li>
            <a href="#" class="main-nav__list-item header-nav-item" title="NeloStore">
              <img class="carousel__image" src="https://www.nelogica.com.br/cache/images/Header/ic-new_store.svg" loading="lazy" alt="NeloStore" width="20" height="20">
              <span>NeloStore</span>
            </a>
          </ul>
          <div id="login-button" class="top-login login-area">
            <div class="login-button">
              <div class="login-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 26 26" fill="none">
                  <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.0195 15C15.0906 15 16.7695 13.3211 16.7695 11.25C16.7695 9.17893 15.0906 7.5 13.0195 7.5C10.9485 7.5 9.26953 9.17893 9.26953 11.25C9.26953 13.3211 10.9485 15 13.0195 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7 18.6938C7.56434 17.5825 8.42538 16.6491 9.48768 15.9971C10.55 15.3451 11.7721 15 13.0185 15C14.2649 15 15.487 15.3451 16.5493 15.9971C17.6116 16.6491 18.4727 17.5825 19.037 18.6938" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <span class="login-text">Entrar</span>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- HERO / CAROUSEL (single slide) -->
    <main>
      <div id="home-page">
        <section class="homepage-banner">
          <!-- Simulator background div (replaced via postMessage) -->
          <div id="sim-bg" ${bannerStyle}></div>

          <!-- Slide with transparent bg (the real image is replaced by sim-bg above) -->
          <div class="homepage-banner__slides" style="position:relative;z-index:1;">
            <div class="homepage-banner__slide-item active" style="display:block;">
              <picture>
                <img src="${bannerSrc || 'https://downloadserver-cdn.nelogica.com.br/content/site/nelogica/home/banner/banner-automacoes-desk.webp'}"
                     alt="Banner" class="homepage-banner__background"
                     id="main-banner-img"
                     style="${bannerSrc ? 'opacity:0;' : ''}width:100%;height:100vh;object-fit:cover;object-position:center top;">
              </picture>
              <div class="homepage-banner__content">
                <h2 class="homepage-banner__content-title order-2">Automatize suas estratégias e transforme sua forma de operar</h2>
                <img class="homepage-banner__content-logo" src="${logoToUse}" alt="Produto" height="46" loading="lazy" id="sim-product-logo" style="max-height: 46px; width: auto; object-fit: contain;">
                <div class="homepage-banner__content-link-container order-3" style="flex-direction:row;">
                  <a class="homepage-banner__content-link" href="#">Conhecer</a>
                  <a class="homepage-banner__content-link" href="#">Ver planos</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Indicators Removed per request -->
        </section>
      </div>
    </main>
  </div>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'UPDATE_BANNER') {
      var bg = document.getElementById('sim-bg');
      if (bg) {
        if (e.data.src) {
          bg.style.backgroundImage = "url('" + e.data.src + "')";
          bg.style.backgroundSize = 'cover';
          bg.style.backgroundPosition = 'center top';
          bg.style.backgroundRepeat = 'no-repeat';
          var img = document.getElementById('main-banner-img');
          if (img) img.style.opacity = '0';
        } else {
          bg.style.backgroundImage = 'none';
          var img = document.getElementById('main-banner-img');
          if (img) img.style.opacity = '1';
        }
      }
    }
    if (e.data && e.data.type === 'UPDATE_LOGO') {
      var logo = document.getElementById('sim-product-logo');
      if (logo) {
         logo.src = e.data.src || '${defaultLogo}';
      }
    }
  });
</script>
</body>
</html>`;
};

export function NelogicaRealisticSimulator() {
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [contrastStatus, setContrastStatus] = useState<'idle' | 'checking' | { menu: 'pass' | 'fail', center: 'pass' | 'fail' }>('idle');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { setIsCollapsed } = useSidebar();

  const checkContrast = (imgSrc: string) => {
    setContrastStatus('checking');
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Menu Area (Top 15%)
      const topHeight = Math.floor(img.height * 0.15);
      const topData = ctx.getImageData(0, 0, img.width, topHeight).data;
      let sumTop = 0, countTop = 0;
      for (let i = 0; i < topData.length; i += 16) { 
         sumTop += (0.299 * topData[i] + 0.587 * topData[i+1] + 0.114 * topData[i+2]) / 255;
         countTop++;
      }
      const menuPass = (sumTop / countTop) <= 0.55 ? 'pass' : 'fail';

      // Center/Right Area for Logo/Text (Right 45%, Middle 35%)
      const boxX = Math.floor(img.width * 0.45);
      const boxY = Math.floor(img.height * 0.35);
      const boxW = Math.floor(img.width * 0.45);
      const boxH = Math.floor(img.height * 0.35);
      const centerData = ctx.getImageData(boxX, boxY, boxW, boxH).data;
      
      let sumCenter = 0, countCenter = 0;
      for (let i = 0; i < centerData.length; i += 16) { 
         sumCenter += (0.299 * centerData[i] + 0.587 * centerData[i+1] + 0.114 * centerData[i+2]) / 255;
         countCenter++;
      }
      const centerPass = (sumCenter / countCenter) <= 0.60 ? 'pass' : 'fail';

      setContrastStatus({ menu: menuPass, center: centerPass });
    };
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setBannerUrl(result);
        checkContrast(result);
        setIsCollapsed(true);
        iframeRef.current?.contentWindow?.postMessage({ type: 'UPDATE_BANNER', src: result }, '*');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogoUrl(result);
        iframeRef.current?.contentWindow?.postMessage({ type: 'UPDATE_LOGO', src: result }, '*');
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setBannerUrl(null);
    setContrastStatus('idle');
    if (fileInputRef.current) fileInputRef.current.value = "";
    iframeRef.current?.contentWindow?.postMessage({ type: 'UPDATE_BANNER', src: null }, '*');
  };

  const clearLogo = () => {
    setLogoUrl(null);
    if (logoInputRef.current) logoInputRef.current.value = "";
    iframeRef.current?.contentWindow?.postMessage({ type: 'UPDATE_LOGO', src: null }, '*');
  };

  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden bg-[#0f0f10] border border-white/10 mb-6 shadow-2xl">
      {/* Header Controls */}
      <div className="p-6 md:p-8 border-b border-white/5 bg-[#0f0f10]/80 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="flex items-center gap-2 text-emerald-400 text-[11px] font-[700] tracking-[0.12em] uppercase">
              <Monitor size={14} /> Ambiente de Simulação
            </span>
            <h2 className="text-[#ffffff] text-[24px] font-[600] tracking-[-0.02em] leading-[1.15]">
              Teste sua Capa
            </h2>
            <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
              Faça o upload da arte (2560x900) para a capa e uma para logo do produto para testar proporções, legibilidade e executar o teste automático de contraste para acessibilidade.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3 shrink-0">
            <div className="flex flex-wrap items-center justify-end gap-2">
              {!logoUrl ? (
                <Button variant="secondary" className="border-white/10 hover:bg-white/5 bg-transparent" onClick={() => logoInputRef.current?.click()} leftIcon={<ImageIcon size={16} />}>
                  Trocar Logo
                </Button>
              ) : (
                <Button variant="secondary" className="border-white/10 hover:bg-white/5" onClick={clearLogo} leftIcon={<X size={16} />}>
                  Remover Logo
                </Button>
              )}
              <input type="file" ref={logoInputRef} onChange={handleLogoChange} accept="image/webp, image/png, image/jpeg, image/svg+xml" className="hidden" />

              {!bannerUrl ? (
                <Button variant="primary" className="bg-emerald-500 hover:bg-emerald-400 text-white border-0" onClick={() => fileInputRef.current?.click()} leftIcon={<UploadCloud size={18} />}>
                  Carregar Arte WebP
                </Button>
              ) : (
                <Button variant="secondary" className="border-white/10 hover:bg-white/5" onClick={clearImage} leftIcon={<X size={16} />}>
                  Remover Arte
                </Button>
              )}
              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/webp, image/png, image/jpeg, image/jpg" className="hidden" />
            </div>

          </div>
        </div>

        {/* Contrast Checker Output (More Prominent) */}
        {bannerUrl && contrastStatus !== 'idle' && typeof contrastStatus !== 'string' && (
          <div className={`mt-6 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 border transition-all ${contrastStatus.menu === 'pass' && contrastStatus.center === 'pass' ? 'bg-[#10b981]/10 border-[#10b981]/20' : 'bg-[#ef4444]/10 border-[#ef4444]/20'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${contrastStatus.menu === 'pass' && contrastStatus.center === 'pass' ? 'bg-[#10b981]/20 text-[#10b981]' : 'bg-[#ef4444]/20 text-[#ef4444]'}`}>
                {contrastStatus.menu === 'pass' && contrastStatus.center === 'pass' ? <CheckCircle2 size={24} /> : <AlertTriangle size={24} />}
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-[16px] ${contrastStatus.menu === 'pass' && contrastStatus.center === 'pass' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  {contrastStatus.menu === 'pass' && contrastStatus.center === 'pass' ? 'Destaque: Contraste Aprovado' : 'Aviso: Falha de Contraste Encontrada'}
                </span>
                <p className="text-white/60 text-[13px] mt-1 max-w-2xl leading-relaxed">
                  {contrastStatus.menu === 'pass' && contrastStatus.center === 'pass' 
                    ? 'Excelente! Tanto a área do menu quanto a região do logo possuem contraste adequado com o fundo para garantir a leitura.' 
                    : 'Atenção. Identificamos que algumas áreas críticas da capa estão muito claras, o que pode tornar os textos brancos e a logo ilegíveis.'}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 shrink-0">
               <div className={`px-4 py-3 rounded-xl border flex flex-col items-center min-w-[120px] ${contrastStatus.menu === 'pass' ? 'bg-[#10b981]/5 border-[#10b981]/20' : 'bg-[#ef4444]/5 border-[#ef4444]/20'}`}>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 mb-1">Menu Topo</span>
                  <span className={`text-[13px] font-black ${contrastStatus.menu === 'pass' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                    {contrastStatus.menu === 'pass' ? 'OK' : 'CRÍTICO'}
                  </span>
               </div>
               <div className={`px-4 py-3 rounded-xl border flex flex-col items-center min-w-[120px] ${contrastStatus.center === 'pass' ? 'bg-[#10b981]/5 border-[#10b981]/20' : 'bg-[#ef4444]/5 border-[#ef4444]/20'}`}>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 mb-1">Logo/CTA</span>
                  <span className={`text-[13px] font-black ${contrastStatus.center === 'pass' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                    {contrastStatus.center === 'pass' ? 'OK' : 'CRÍTICO'}
                  </span>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Iframe Simulation */}
      <div className="w-full bg-[#131920] py-6 px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-black font-mono">
            <Globe size={12} /> Layout Real do Site (CSS Oficial)
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="w-full flex justify-center pb-4 px-2 sm:px-4 text-center">
          <div className="w-full relative shadow-[0_32px_120px_-20px_rgba(0,0,0,0.8)] border border-white/10 rounded-2xl overflow-hidden bg-[#0f0f10] flex flex-col mx-auto flex-1" style={{ aspectRatio: '16/10', containerType: 'inline-size' }}>
            
            {/* Fake Browser Toolbar */}
            <div className="h-10 sm:h-12 w-full bg-[#1e1e1e] flex items-center px-4 shrink-0 border-b border-white/5 z-20">
              <div className="flex gap-1.5 sm:gap-2 w-16 sm:w-20">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-black/20" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-black/20" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-black/20" />
              </div>
              <div className="flex-1 max-w-xl mx-auto h-6 sm:h-7 bg-black/40 rounded-md border border-white/5 flex items-center justify-center text-[9px] sm:text-[11px] text-white/30 font-mono shadow-inner tracking-wider">🔒 nelogica.com.br</div>
              <div className="w-16 sm:w-20" />
            </div>

            {/* Iframe */}
            <div className="flex-1 relative bg-[#18232f] overflow-hidden group">
              <iframe
                ref={iframeRef}
                srcDoc={buildIframeSrcdoc(bannerUrl, logoUrl)}
                title="Simulador Realista Nelogica"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                sandbox="allow-scripts allow-same-origin"
              />
              {/* Empty State Overlay */}
              {!bannerUrl && (
                <div 
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center cursor-pointer bg-black/60 backdrop-blur-md transition-opacity duration-300 pointer-events-auto"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center gap-4 text-white/40 hover:text-emerald-400 transition-all duration-500">
                    <div className="p-8 rounded-full border-2 border-dashed border-white/20 hover:border-emerald-500/30 hover:scale-110 transition-transform bg-black/50">
                      <UploadCloud size={64} strokeWidth={1} />
                    </div>
                    <div className="text-center drop-shadow-xl">
                      <p className="text-sm font-black tracking-widest uppercase text-white/90">Solte sua arte aqui</p>
                      <p className="text-[11px] font-medium opacity-60 mt-2 text-white/80">A proporção preencherá uma visualização de janela web desktop.</p>
                      <p className="text-[10px] opacity-40 mt-1">Sua arte ajustará responsivamente.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fake System Taskbar */}
            <div className="h-10 sm:h-[48px] w-full bg-[#111111] border-t border-white/10 flex items-center justify-center gap-3 shrink-0 z-20">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/5" />
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/5" />
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/5" />
              <div className="w-px h-5 sm:h-6 bg-white/10 mx-1 sm:mx-2" />
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/20 shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-white/5" /> {/* Active window */}
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/5" />
            </div>
          </div>
        </div>

        <p className="text-center text-white/20 text-[11px] mt-3 italic">
          Este simulador carrega o CSS oficial do site nelogica.com.br — o layout é idêntico ao original.
        </p>
      </div>
    </div>
  );
}

