import { useState, useRef } from "react";
import { Link } from "react-router";
import { ChevronLeft, UploadCloud, X, Monitor, MousePointer2, Type, Gauge } from "lucide-react";
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
             <img src="/logotipo-nelogica-branco.svg" alt="Nelogica" className="h-[1.4cqw] object-contain" />
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
