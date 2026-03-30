import { useState, useRef } from "react";
import { Link } from "react-router";
import { 
  ChevronLeft, Search, ShoppingCart, User, 
  Plus, Minus, Moon, Sun, Tag, Users,
  Puzzle, Monitor, CreditCard,
  TrendingUp, BarChart2, Layers, 
  Star, Quote, Zap, Shield, RefreshCw
} from "lucide-react";
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import NavSideMenu from "../../../imports/NavSideMenu";
import nelostoreLogo from "../../../assets/img-logo-neloStore-125x24.svg";

// Checkmark Fornecido pelo Usuário
function CheckmarkBig() {
  return (
    <div className="shrink-0 flex items-center justify-center w-[24px] h-[24px]" style={{ position: 'relative' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="url(#paint0_linear_11_15838)"/>
        <path d="M9.52212 14.5863L17.0796 7.02876C17.3068 6.80162 17.5701 6.68805 17.8695 6.68805C18.1689 6.68805 18.4322 6.80162 18.6593 6.80162C18.8864 7.2559 19 7.51917 19 7.81858C19 8.11799 18.8864 8.38126 18.6593 8.6084L10.2965 16.9712C10.0693 17.1984 9.80605 17.3119 9.50664 17.3119C9.20723 17.3119 8.94395 17.1984 8.71681 16.9712L5.34071 13.5951C5.11357 13.368 5 13.1047 5 12.8053C5 12.5059 5.11357 12.2426 5.34071 12.0155C5.56785 11.7883 5.83112 11.6748 6.13053 11.6748C6.42994 11.6748 6.69322 11.7883 6.92035 12.0155L9.52212 14.5863Z" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear_11_15838" x1="24" y1="5.65778e-06" x2="-0.733812" y2="0.781716" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2799FA"/>
            <stop offset="0.75" stopColor="#0463C8"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Badge de Desconto conforme estilo Figma
function DiscountBadge({ discount, isBestOption }: { discount: string, isBestOption?: boolean }) {
  return (
    <div className={clsx(
      "absolute bottom-[-2px] right-[-2px] flex items-center gap-1.5 px-1.5 py-1 rounded-tl-[4px] z-10 shadow-lg animate-in fade-in zoom-in duration-300",
      isBestOption ? "bg-[#ea8a2b]" : "bg-[#2689de]"
    )}>
      <Tag size={12} className="text-white fill-current opacity-80" />
      <span className="text-white font-bold text-[12px] leading-none">-{discount}</span>
    </div>
  );
}

// Componente de Avaliação por Estrelas
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[2px]">
      {[1,2,3,4,5].map(i => (
        <Star 
          key={i} 
          size={14} 
          className={i <= rating ? "text-[#ea8a2b] fill-[#ea8a2b]" : "text-white/20"} 
        />
      ))}
    </div>
  );
}

export function NeloStoreLPExamplePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedPlan, setSelectedPlan] = useState<"mensal" | "anual" | "bienal">("bienal");
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number[]>([20]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled(e.currentTarget.scrollTop > 80);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const isDark = theme === "dark";
  const bgApp = isDark ? "bg-[#141414]" : "bg-[#f3f5f9]";
  const bgCard = isDark ? "bg-[#212121]" : "bg-white";
  const bgHeader = isDark ? "bg-[#212121]/95" : "bg-white/95";
  const borderCore = isDark ? "border-white/5" : "border-black/5";
  const textTitle = isDark ? "text-white" : "text-[#141414]";
  const textMuted = isDark ? "text-white/50" : "text-black/50";
  const bgInput = isDark ? "bg-white/5" : "bg-black/5";
  const faqBg = isDark ? "bg-[#1a1a1a]" : "bg-[#f3f5f9]";

  // Cores de acessibilidade (Light vs Dark)
  const priceGreen = isDark ? "text-[#9ad994]" : "text-[#166534]";
  const accentOrange = isDark ? "text-[#ea8a2b]" : "text-[#c2410c]";

  // Mapa de preços por plano
  const planPrice: Record<string, string> = { mensal: '179,90', anual: '159,90', bienal: '134,90' };

  // Mini-imagem do produto para sticky header (placeholder visual)
  const ProductThumb = () => (
    <div className="w-[40px] h-[24px] rounded-[4px] overflow-hidden bg-gradient-to-br from-[#0a1e3b] to-[#040d1a] border border-white/10 flex items-center justify-center shrink-0">
      <span className="text-[#00A1F6] font-black text-[8px] tracking-wider">|||</span>
    </div>
  );

  return (
    <div className="min-h-full flex flex-col animate-page-enter">
      
      {/* Container de Documentação (Superior) */}
      <div className="px-8 py-[12px] md:px-[48px] md:pt-[32px] md:pb-[16px] max-w-[1440px] mx-auto w-full flex items-end justify-between">
        <div>
          <div className="flex items-center gap-[8px] mb-[24px]" style={{ color: "#4b5563", fontSize: "13px" }}>
            <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link to="/nelostore" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">NeloStore</Link>
            <span>/</span>
            <span style={{ color: "#9ca3af" }}>Página do Produto</span>
          </div>

          <header>
            <div className="flex items-center gap-[16px] mb-[12px]">
              <Link 
                to="/nelostore" 
                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all font-bold"
                title="Voltar"
              >
                <ChevronLeft size={24} />
              </Link>
              <h1 className="font-semibold text-[32px] text-white leading-tight font-['Segoe_UI',Tahoma,sans-serif]">
                Simulador NeloStore
              </h1>
            </div>
          </header>
        </div>

        {/* Switcher de Tema */}
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 mb-2 invisible md:visible">
           <button onClick={() => setTheme("dark")} className={clsx("flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold transition-all", isDark ? 'bg-white/10 text-white shadow-lg' : 'text-white/40')}>
             <Moon size={14} /> Dark
           </button>
           <button onClick={() => setTheme("light")} className={clsx("flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold transition-all", !isDark ? 'bg-white/10 text-white shadow-lg' : 'text-white/40')}>
             <Sun size={14} /> Light
           </button>
        </div>
      </div>

      {/* ─── SIMULADOR DA NELOSTORE ────────────────────────────────────────── */}
      <div className={`w-full max-w-[1440px] mx-auto flex-1 ${bgApp} border ${borderCore} rounded-t-[12px] shadow-2xl relative overflow-hidden flex flex-col transition-colors duration-300`}>
        
        {/* Header Superior Principal */}
        <header className={clsx("h-[60px] w-full border-b flex items-center justify-between px-[24px] z-50", bgHeader, borderCore)}>
            <div className="flex items-center gap-[32px] flex-1">
                <img src={nelostoreLogo} alt="NeloStore" className="h-[22px] w-auto" />
                <div className={clsx("flex items-center h-[32px] max-w-[320px] w-full rounded-[4px] px-[12px] gap-[8px]", bgInput)}>
                <Search size={16} className={textMuted} />
                <input type="text" placeholder="Pesquisar na loja..." className={`bg-transparent border-none outline-none text-[13px] ${textTitle} w-full placeholder:${textMuted}`} />
                </div>
            </div>

            <div className="flex items-center gap-[16px]">
                <div className="relative p-2 cursor-pointer hover:bg-white/5 rounded-full transition-colors">
                <ShoppingCart size={20} className={textTitle} />
                <span className="absolute top-1 right-1 bg-[#2689de] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">3</span>
                </div>
                <div className="p-2 cursor-pointer hover:bg-white/5 rounded-full transition-colors">
                <User size={20} className={textTitle} />
                </div>
            </div>
        </header>

        <div className="flex h-[800px] overflow-hidden relative">
            {/* ─── Header Flutuante (sticky on scroll) ─── */}
            <div className={twMerge(clsx(
                "absolute top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none opacity-0 translate-y-[-100%]",
                scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : ""
            ))}>
                <div className={`${bgHeader} backdrop-blur-md border-b ${borderCore} flex items-center justify-between px-[24px] shadow-2xl gap-[24px] py-[8px]`}>
                    {/* Esquerda: Logo + Thumb + Nome — ocupa o espaço disponível */}
                    <div className="flex items-center gap-[12px] flex-1">
                        <img src={nelostoreLogo} alt="NeloStore" className="h-[20px]" />
                        <div className={`w-[1px] h-[28px] ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                        <div className="flex items-center gap-[10px]">
                            <ProductThumb />
                            <span className={`text-[14px] font-semibold ${textTitle} whitespace-nowrap leading-[19px]`}>Plugin Bookmap</span>
                        </div>
                    </div>

                    {/* Direita: Mini-cards dos planos + botão Contratar */}
                    <div className="flex items-center gap-[10px]">
                        {(["mensal", "anual", "bienal"] as const).map((plan) => {
                            const prices    = { mensal: '179,90', anual: '159,90', bienal: '134,90' };
                            const oldPrices = { mensal: '199,90', anual: '199,90', bienal: '199,90' };
                            const discounts = { mensal: '10%',    anual: '20%',    bienal: '33%' };
                            const labels    = { mensal: 'Mensal', anual: 'Anual',  bienal: 'Bienal' };
                            const isActive  = selectedPlan === plan;
                            // Cores tema-aware
                            const cardBg      = isDark ? 'rgba(243,245,249,0.05)' : 'rgba(0,0,0,0.04)';
                            const cardBorder  = isDark ? 'rgba(243,245,249,0.05)' : 'rgba(0,0,0,0.10)';
                            const labelColor  = isDark ? 'rgba(255,255,255,0.70)' : 'rgba(0,0,0,0.55)';
                            const priceColor  = isDark ? '#9ad994' : '#166534';
                            const badgeBgOff  = isDark ? 'rgba(243,245,249,0.10)' : 'rgba(0,0,0,0.08)';
                            return (
                                <button
                                    key={plan}
                                    onClick={() => setSelectedPlan(plan)}
                                    className="relative overflow-hidden rounded-[4px] border-2 transition-all cursor-pointer text-left items-start"
                                    style={{
                                        width: '155px',
                                        height: '71px',
                                        background: isActive
                                            ? 'radial-gradient(circle at 0% 0%, rgba(29,170,251,0.15) 0%, rgba(29,170,251,0.07) 100%)'
                                            : cardBg,
                                        borderColor: isActive ? '#2689de' : cardBorder,
                                    }}
                                >
                                    <div className="flex flex-col items-start gap-[4px] px-[10px] pt-[8px] pb-[8px] h-full">
                                        <span className="text-[10px] leading-[13px]" style={{ fontFamily: 'Tahoma, sans-serif', color: labelColor }}>
                                            {labels[plan]}
                                        </span>
                                        <span className="text-[14px] font-semibold leading-[19px]" style={{ color: priceColor }}>
                                            R$ {prices[plan]}
                                        </span>
                                        <span className="text-[10px] leading-[13px] line-through" style={{ fontFamily: 'Tahoma, sans-serif', color: labelColor }}>
                                            R$ {oldPrices[plan]}
                                        </span>
                                    </div>
                                    <div
                                        className="absolute bottom-0 right-0 flex items-center gap-[4px] px-[6px] pb-[4px] pt-[2px]"
                                        style={{
                                            borderTopLeftRadius: '4px',
                                            background: isActive ? '#2689de' : badgeBgOff,
                                        }}
                                    >
                                        <Tag size={12} className={isActive ? 'text-white shrink-0' : `shrink-0 ${isDark ? 'text-white' : 'text-black/60'}`} />
                                        <span className="text-[12px] font-bold leading-[16px]" style={{ color: isActive ? '#fff' : (isDark ? '#fff' : 'rgba(0,0,0,0.6)') }}>-{discounts[plan]}</span>
                                    </div>
                                </button>
                            );
                        })}
                        {/* Botão Contratar */}
                        <button className="h-[32px] px-[16px] rounded-[4px] text-white font-bold text-[12px] uppercase shadow-lg whitespace-nowrap shrink-0" style={{ backgroundImage: "linear-gradient(261.9deg, #2799FA 0%, #0463C8 75%)" }}>
                            CONTRATAR
                        </button>
                    </div>
                </div>

            </div>

            {/* Sidebar (Menu Lateral) */}
            <div className={clsx("w-[72px] border-r shrink-0 z-40 h-full transition-colors", isDark ? "bg-[#1a1a1a] border-white/10" : "bg-white border-black/5")}>
                <NavSideMenu />
            </div>

           {/* Área Principal */}
           <div 
             className={`flex-1 ${isDark ? "bg-[#141414]" : "bg-white"} overflow-y-auto scrollbar-custom relative shadow-inner`}
             onScroll={handleScroll}
             ref={scrollContainerRef}
           >
              {/* Breadcrumb Local */}
              <div className="px-[32px] h-[32px] flex items-center text-[11px] gap-2 pt-4">
                 <span className={textMuted}>Início</span>
                 <span className={textMuted}>&rsaquo;</span>
                 <span className={textMuted}>Plugins</span>
                 <span className={textMuted}>&rsaquo;</span>
                 <span className={textTitle}>Plugin Bookmap</span>
              </div>

              {/* Seção Principal do Produto */}
              <div className="px-[32px] py-[32px] flex flex-col gap-[32px]">
                 
                 <div className="flex flex-col md:flex-row gap-[40px] items-start">
                    {/* Imagem do Produto */}
                    <div className="w-full md:w-[420px] aspect-[420/236] rounded-[8px] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl shrink-0 flex items-center justify-center relative">
                       <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e3b] to-[#040d1a]"></div>
                       <div className="z-10 flex flex-col items-center">
                          <h2 className="text-[32px] font-black text-white font-['Segoe_UI'] tracking-widest"><span className="text-[#00A1F6]">|||</span> BOOKMAP</h2>
                       </div>
                    </div>

                    {/* Área de Seleção */}
                    <div className="flex-1 flex flex-col gap-[20px]">
                       <h1 className={clsx("text-[28px] font-semibold font-['Segoe_UI']", textTitle)}>Plugin Bookmap</h1>
                       
                       <div className="flex gap-[12px]">
                           {(["mensal", "anual", "bienal"] as const).map((plan) => {
                              const prices    = { mensal: '179,90', anual: '159,90', bienal: '134,90' };
                              const oldPrices = { mensal: '199,90', anual: '199,90', bienal: '199,90' };
                              const discounts = { mensal: '10%',    anual: '20%',    bienal: '33%' };
                              const labels    = { mensal: 'Mensal', anual: 'Anual',  bienal: 'Bienal' };
                              const isActive  = selectedPlan === plan;
                              // Cores tema-aware
                              const cardBg      = isDark ? 'rgba(243,245,249,0.05)' : 'rgba(0,0,0,0.04)';
                              const cardBorder  = isDark ? 'rgba(243,245,249,0.05)' : 'rgba(0,0,0,0.10)';
                              const labelColor  = isDark ? 'rgba(255,255,255,0.70)' : 'rgba(0,0,0,0.55)';
                              const priceColor  = isDark ? '#9ad994' : '#166534';
                              const badgeBgOff  = isDark ? 'rgba(243,245,249,0.10)' : 'rgba(0,0,0,0.08)';
                              return (
                                 <button
                                    key={plan}
                                    onClick={() => setSelectedPlan(plan)}
                                    className="relative overflow-hidden rounded-[4px] border-2 flex-1 transition-all cursor-pointer text-left"
                                    style={{
                                       minHeight: '80px',
                                       background: isActive
                                          ? 'radial-gradient(circle at 0% 0%, rgba(29,170,251,0.15) 0%, rgba(29,170,251,0.07) 100%)'
                                          : cardBg,
                                       borderColor: isActive ? '#2689de' : cardBorder,
                                    }}
                                 >
                                    <div className="flex flex-col items-start gap-[4px] px-[12px] pt-[10px] pb-[10px] h-full">
                                       <span className="text-[11px] leading-[14px]" style={{ fontFamily: 'Tahoma, sans-serif', color: labelColor }}>
                                          {labels[plan]}
                                       </span>
                                       <span className="text-[16px] font-semibold leading-[21px]" style={{ color: priceColor }}>
                                          R$ {prices[plan]}
                                       </span>
                                       <span className="text-[11px] leading-[14px] line-through" style={{ fontFamily: 'Tahoma, sans-serif', color: labelColor }}>
                                          R$ {oldPrices[plan]}
                                       </span>
                                    </div>
                                    <div
                                       className="absolute bottom-0 right-0 flex items-center gap-[4px] px-[8px] pb-[5px] pt-[3px]"
                                       style={{
                                          borderTopLeftRadius: '4px',
                                          background: isActive ? '#2689de' : badgeBgOff,
                                       }}
                                    >
                                       <Tag size={13} className={isActive ? 'text-white shrink-0' : `shrink-0 ${isDark ? 'text-white' : 'text-black/60'}`} />
                                       <span className="text-[12px] font-bold leading-[16px]" style={{ color: isActive ? '#fff' : (isDark ? '#fff' : 'rgba(0,0,0,0.6)') }}>-{discounts[plan]}</span>
                                    </div>
                                 </button>
                              );
                           })}
                        </div>

                       <div className="flex flex-col gap-[14px]">
                          <button className="h-[40px] min-w-[140px] max-w-fit rounded-[4px] px-8 text-white font-bold text-[14px] uppercase tracking-wide shadow-lg hover:-translate-y-0.5 mt-2 transition-all active:translate-y-0" style={{ backgroundImage: "linear-gradient(261.9deg, #2799FA 0%, #0463C8 75%)" }}>
                             CONTRATAR
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* Barra de Highlights — ícones corretos por categoria */}
                 <div className={twMerge(clsx("w-full h-[64px] border-t border-b flex items-center transition-colors px-4", borderCore))}>
                    {[
                       { icon: Puzzle,      label: "Plugin",     sub: "Formato" },
                       { icon: Users,       label: "15k+",       sub: "Assinantes" },
                       { icon: Monitor,     label: "Desktop",    sub: "Plataforma" },
                       { icon: CreditCard,  label: "Assinatura", sub: "Modelo" },
                    ].map((item, i) => (
                       <div key={i} className="flex-1 flex flex-col items-center justify-center gap-1 border-r last:border-r-0 border-white/5">
                          <div className="flex items-center gap-1.5 font-bold text-[12px]">
                             <item.icon size={14} className="text-[#00A1F6]" />
                             <span className={textTitle}>{item.label}</span>
                          </div>
                          <span className={clsx("text-[11px]", textMuted)}>{item.sub}</span>
                       </div>
                    ))}
                 </div>

                 {/* ─── CONTEÚDO DA LANDING PAGE ────────────────────────────────── */}
                 <div className="w-full flex flex-col gap-[64px] pb-[100px] animate-in fade-in duration-700">
                    
                    {/* ── 1. HERO SECTION — sem quebra de linha no título ── */}
                    <div className="flex flex-col md:flex-row items-center gap-[48px] py-[32px]">
                       <div className="flex-1">
                          <div className={`text-[14px] font-bold italic ${accentOrange} mb-2 uppercase tracking-widest`}>
                             P profit | Gráfico MID Price
                          </div>
                          <h2 className={`text-[30px] font-bold ${textTitle} leading-snug`}>
                             APRENDA A EXTRAIR RESULTADOS COM O{" "}
                             <span className="text-[#00A1F6]">GRÁFICO MID PRICE</span>
                          </h2>
                          <p className={`text-[15px] ${textMuted} font-['Tahoma'] leading-relaxed max-w-full mt-4`}>
                             Opere contratos futuros de menor negociação com mais confiança a partir dessa novidade exclusiva. Uma ferramenta que vai transformar a sua análise de mercado.
                          </p>
                       </div>
                       <div className="flex-1 w-full bg-neutral-900 rounded-lg aspect-video flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl">
                           <div className="w-full h-full bg-gradient-to-br from-[#040d1a] to-[#0a1e3b] flex flex-col items-center justify-center gap-3">
                              <BarChart2 size={56} className="text-[#00A1F6]/30" />
                              <span className="text-white/20 text-[12px] font-bold uppercase tracking-widest">Preview do Gráfico MID</span>
                           </div>
                       </div>
                    </div>

                    {/* ── 2. SOCIAL PROOF ── */}
                    <div className={`w-full rounded-[8px] border ${borderCore} ${bgCard} p-[32px] flex flex-col md:flex-row items-center gap-[32px]`}>
                       <div className="flex flex-col items-center gap-1 flex-1 text-center">
                          <span className={`text-[36px] font-semibold ${textTitle}`}>15.000<span className="text-[#00A1F6]">+</span></span>
                          <span className={`text-[12px] uppercase font-bold tracking-widest ${textMuted}`}>Traders Ativos</span>
                       </div>
                       <div className={`hidden md:block w-[1px] h-[48px] ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                       <div className="flex flex-col items-center gap-1 flex-1 text-center">
                          <span className={`text-[36px] font-semibold ${textTitle}`}>4.8<span className="text-[#ea8a2b]">★</span></span>
                          <span className={`text-[12px] uppercase font-bold tracking-widest ${textMuted}`}>Avaliação Média</span>
                       </div>
                       <div className={`hidden md:block w-[1px] h-[48px] ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                       <div className="flex flex-col items-center gap-1 flex-1 text-center">
                          <span className={`text-[36px] font-semibold ${textTitle}`}>3 <span className="text-[#00A1F6]">anos</span></span>
                          <span className={`text-[12px] uppercase font-bold tracking-widest ${textMuted}`}>No Mercado</span>
                       </div>
                       <div className={`hidden md:block w-[1px] h-[48px] ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                       <div className="flex flex-col items-center gap-1 flex-1 text-center">
                          <span className={`text-[36px] font-semibold ${textTitle}`}>Profit<span className="text-[#00A1F6]">™</span></span>
                          <span className={`text-[12px] uppercase font-bold tracking-widest ${textMuted}`}>Exclusivo</span>
                       </div>
                    </div>

                    {/* ── 3. FUNCIONALIDADES ── */}
                    <div className="flex flex-col gap-[24px]">
                       <div className="flex flex-col gap-[4px]">
                          <span className={`text-[11px] uppercase tracking-widest font-bold ${accentOrange}`}>Recursos</span>
                          <h3 className={`text-[22px] font-bold ${textTitle}`}>Tudo que você precisa para operar com vantagem</h3>
                          <p className={`text-[13px] ${textMuted} mt-1 max-w-[480px]`}>
                             O Plugin Bookmap foi desenvolvido com foco total na experiência do trader profissional na plataforma Profit.
                          </p>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                          {[
                             { icon: TrendingUp,  color: "#00A1F6", title: "Análise de Tendências", desc: "Visualize a direção do mercado de forma clara e antecipada, identificando oportunidades antes dos movimentos." },
                             { icon: BarChart2,   color: "#2799FA", title: "Gráfico MID Price",     desc: "Acompanhe o preço médio ponderado em tempo real, essencial para ativos com spreads largos." },
                             { icon: Layers,      color: "#ea8a2b", title: "Múltiplos Timeframes",  desc: "Analise o mesmo ativo em diferentes períodos sem precisar alternar entre janelas." },
                             { icon: Zap,         color: "#00A1F6", title: "Alertas Inteligentes",  desc: "Configure notificações automáticas quando o mercado atingir condições específicas." },
                             { icon: Shield,      color: "#2799FA", title: "Gestão de Risco",       desc: "Visualize seu risco por operação em tempo real diretamente no gráfico." },
                             { icon: RefreshCw,   color: "#ea8a2b", title: "Atualizações Contínuas",desc: "Receba novas funcionalidades e melhorias de performance automaticamente." },
                          ].map((feat, i) => (
                             <div key={i} className={`${bgCard} border ${borderCore} rounded-[8px] p-[20px] flex flex-col gap-[10px] hover:border-[#00A1F6]/20 transition-colors`}>
                                <div className="w-[36px] h-[36px] rounded-[6px] flex items-center justify-center" style={{ background: feat.color + "20" }}>
                                   <feat.icon size={18} style={{ color: feat.color }} />
                                </div>
                                <span className={`font-bold text-[13px] ${textTitle}`}>{feat.title}</span>
                                <span className={`text-[12px] leading-relaxed ${textMuted}`}>{feat.desc}</span>
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* ── 4. FORMULÁRIO + BENEFÍCIOS (layout consolidado) ── */}
                    <div className={`w-full rounded-[12px] border ${borderCore} overflow-hidden`}>
                       {/* Header da seção */}
                       <div className="p-[28px] pb-0">
                          <span className={`text-[11px] uppercase tracking-widest font-bold ${accentOrange}`}>Live Exclusiva</span>
                          <h3 className={`text-[20px] font-bold italic ${textTitle} mt-1`}>
                             Live gratuita — 27 de Novembro
                          </h3>
                          <p className={`text-[13px] ${textMuted} mt-1`}>
                             Participe ao vivo e aprenda na prática como usar o Gráfico MID Price para operar com mais precisão.
                          </p>
                       </div>

                       {/* Conteúdo em duas colunas */}
                       <div className="flex flex-col md:flex-row items-start gap-0">
                          {/* Form */}
                          <div className="flex-1 p-[28px]">
                             <div className={`flex flex-col gap-[16px] ${bgCard} border ${borderCore} p-[24px] rounded-[8px] shadow-lg`}>
                                <p className={`text-[12px] font-bold uppercase tracking-wider ${textMuted}`}>Garanta sua vaga gratuita</p>
                                {[
                                   { label: "Nome Completo", placeholder: "Ex: João da Silva" },
                                   { label: "Email", placeholder: "nome@email.com" },
                                ].map((f, i) => (
                                  <div key={i} className="flex flex-col gap-[6px]">
                                     <label className={`font-semibold text-[11px] uppercase tracking-wider ${textTitle}`}>{f.label} *</label>
                                     <div className={`relative h-[36px] w-full rounded-[4px] ${bgInput} flex items-center border ${borderCore} focus-within:border-[#2689de] transition-colors`}>
                                        <input type="text" placeholder={f.placeholder} className={`w-full h-full bg-transparent outline-none text-[13px] ${textTitle} px-[12px]`} />
                                     </div>
                                  </div>
                                ))}
                                <button className="w-full h-[40px] rounded-[4px] font-bold text-white uppercase text-[14px] mt-2 hover:-translate-y-0.5 transition-transform" style={{ backgroundImage: "linear-gradient(260deg, #2799FA 0%, #0463C8 75%)" }}>
                                   GARANTIR VAGA
                                </button>
                                <p className={`text-center text-[11px] ${textMuted}`}>🔒 Seus dados estão protegidos. Sem spam.</p>
                             </div>
                          </div>

                          {/* Divisor vertical */}
                          <div className={`hidden md:flex flex-col items-center justify-center py-8`}>
                             <div className={`w-[1px] h-full min-h-[200px] ${isDark ? "bg-white/5" : "bg-black/5"}`} />
                          </div>

                          {/* Benefícios */}
                          <div className="flex-1 p-[28px]">
                             <h4 className={`text-[11px] ${textMuted} mb-[20px] uppercase font-bold tracking-[0.1em]`}>O QUE VOCÊ VAI APRENDER:</h4>
                             <div className="flex flex-col gap-[16px]">
                                {[
                                   "Identificação de tendências com o MID Price",
                                   "Leitura avançada de gráficos de candles",
                                   "Como identificar reversões antes do mercado",
                                   "Leitura clara dos movimentos de preços",
                                   "Como operar os novos ativos da B3 com vantagem",
                                   "Configuração ideal do Plugin Bookmap no Profit",
                                ].map((text, i) => (
                                   <div key={i} className="flex items-center gap-[12px]">
                                      <CheckmarkBig />
                                      <span className={`${textTitle} text-[13px] font-['Tahoma'] leading-snug`}>{text}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* ── 5. DEPOIMENTOS ── */}
                    <div className="flex flex-col gap-[24px]">
                       <div className="flex flex-col gap-[4px]">
                          <span className={`text-[11px] uppercase tracking-widest font-bold ${accentOrange}`}>Depoimentos</span>
                          <h3 className={`text-[22px] font-bold ${textTitle}`}>O que nossos traders dizem</h3>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                          {[
                             { name: "Ricardo A.", role: "Day Trader · 4 anos", stars: 5, text: "O Gráfico MID mudou completamente minha análise. Consegui identificar reversões que antes eu simplesmente não via. É ferramenta obrigatória no meu dia a dia." },
                             { name: "Fernanda B.", role: "Swing Trader · 2 anos", stars: 5, text: "A integração com o Profit é impecável. Parece que o plugin foi feito sob medida para a plataforma. Recomendo para qualquer trader sério." },
                             { name: "Marcos L.",   role: "Scalper · 6 anos",    stars: 4, text: "Já testei vários plugins de análise, e esse é disparado o melhor para contratos futuros. O suporte da equipe também é excelente." },
                          ].map((dep, i) => (
                             <div key={i} className={`${bgCard} border ${borderCore} rounded-[8px] p-[20px] flex flex-col gap-[14px]`}>
                                <Quote size={20} className="text-[#00A1F6]/40" />
                                <p className={`text-[13px] leading-relaxed ${textMuted} flex-grow`}>"{dep.text}"</p>
                                <div className="flex flex-col gap-[6px] border-t border-white/5 pt-[14px]">
                                   <StarRating rating={dep.stars} />
                                   <span className={`text-[13px] font-bold ${textTitle}`}>{dep.name}</span>
                                   <span className={`text-[11px] ${textMuted}`}>{dep.role}</span>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                     {/* ── 5.5. PLANOS ── */}
                     <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[4px]">
                           <span className={`text-[11px] uppercase tracking-widest font-bold ${accentOrange}`}>Preços</span>
                           <h3 className={`text-[22px] font-bold ${textTitle}`}>Escolha o plano ideal para você</h3>
                           <p className={`text-[13px] ${textMuted} mt-1 max-w-[480px]`}>
                              Cancele quando quiser, sem taxas ou multas. Quanto maior o período, maior a economia.
                           </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                           {[
                              {
                                 plan: "mensal" as const,
                                 label: "Mensal",
                                 price: "179,90",
                                 discount: "10%",
                                 badge: null,
                                 highlight: false,
                                 features: [
                                    "Acesso completo ao Plugin Bookmap",
                                    "Gráfico MID Price em tempo real",
                                    "Suporte por chat nos horários de pregão",
                                    "1 dispositivo simultâneo",
                                    "Atualizações automáticas incluídas",
                                 ]
                              },
                              {
                                 plan: "anual" as const,
                                 label: "Anual",
                                 price: "159,90",
                                 discount: "20%",
                                 badge: "Mais Popular",
                                 highlight: true,
                                 features: [
                                    "Tudo do plano Mensal",
                                    "Prioridade no suporte técnico",
                                    "Acesso antecipado a novos recursos",
                                    "Até 2 dispositivos simultâneos",
                                    "Relatórios mensais de performance",
                                 ]
                              },
                              {
                                 plan: "bienal" as const,
                                 label: "Bienal",
                                 price: "134,90",
                                 discount: "33%",
                                 badge: "Melhor Custo",
                                 highlight: false,
                                 features: [
                                    "Tudo do plano Anual",
                                    "Suporte dedicado via e-mail",
                                    "Acesso ao grupo VIP de traders",
                                    "Até 3 dispositivos simultâneos",
                                    "Consultoria mensal de 30 minutos",
                                 ]
                              },
                           ].map((tier) => (
                              <div
                                 key={tier.plan}
                                 onClick={() => setSelectedPlan(tier.plan)}
                                 className={clsx(
                                    "relative rounded-[8px] border-2 p-[24px] flex flex-col gap-[20px] cursor-pointer transition-all",
                                    selectedPlan === tier.plan
                                       ? "border-[#2689de] bg-[#1daafb]/10 shadow-xl"
                                       : `${borderCore} ${bgCard} hover:border-[#2689de]/40`
                                 )}
                              >
                                 {tier.badge && (
                                    <div className={clsx(
                                       "absolute top-[-1px] right-[20px] text-white text-[9px] px-[10px] py-[4px] rounded-b-[4px] font-bold uppercase tracking-widest",
                                       tier.highlight ? "bg-[#2799FA]" : "bg-[#2689de]"
                                    )}>
                                       {tier.badge}
                                    </div>
                                 )}
                                 <div className="flex flex-col gap-[4px]">
                                    <span className={`text-[11px] uppercase font-bold tracking-widest ${textMuted}`}>{tier.label}</span>
                                    <div className="flex items-baseline gap-[6px]">
                                       <span className={`text-[28px] font-semibold ${textTitle}`}>R$ {tier.price}</span>
                                       <span className={`text-[12px] ${textMuted}`}>/mês</span>
                                    </div>
                                    <div className="flex items-center gap-[6px] mt-1">
                                       <Tag size={12} className="text-[#2799FA]" />
                                       <span className="text-[11px] text-[#2799FA] font-bold">Economia de {tier.discount} vs. mensal</span>
                                    </div>
                                 </div>
                                 <div className={`w-full h-[1px] ${isDark ? "bg-white/5" : "bg-black/5"}`} />
                                 <div className="flex flex-col gap-[10px]">
                                    {tier.features.map((feat, fi) => (
                                       <div key={fi} className="flex items-center gap-[10px]">
                                          <CheckmarkBig />
                                          <span className={`text-[12px] ${textTitle} font-['Tahoma']`}>{feat}</span>
                                       </div>
                                    ))}
                                 </div>
                                 <button
                                    className={clsx(
                                       "w-full h-[40px] rounded-[4px] font-bold text-[13px] uppercase tracking-wide mt-auto transition-all hover:-translate-y-0.5",
                                       selectedPlan === tier.plan
                                          ? "text-white shadow-lg"
                                          : `${isDark ? "bg-white/5 text-white/60 hover:bg-white/10" : "bg-black/5 text-black/50 hover:bg-black/10"}`
                                    )}
                                    style={selectedPlan === tier.plan ? { backgroundImage: "linear-gradient(261.9deg, #2799FA 0%, #0463C8 75%)" } : {}}
                                 >
                                    {selectedPlan === tier.plan ? "CONTRATAR" : `SELECIONAR ${tier.label.toUpperCase()}`}
                                 </button>
                              </div>
                           ))}
                        </div>
                        <p className={`text-center text-[12px] ${textMuted}`}>
                           💳 Pagamento seguro via cartão de crédito, boleto ou Pix. Sem fidelidade.
                        </p>
                     </div>

                    {/* ── 6. CTA FINAL ── */}
                    <div className={`w-full rounded-[12px] border ${isDark ? "border-[#00A1F6]/20 bg-gradient-to-br from-[#0a1e3b] to-[#040d1a]" : "border-[#2689de]/20 bg-gradient-to-br from-[#eff8ff] to-[#dbeafe]"} p-[48px] flex flex-col items-center gap-[24px] text-center`}>
                       <div className="w-[56px] h-[56px] rounded-full bg-[#00A1F6]/10 border border-[#00A1F6]/20 flex items-center justify-center">
                          <Puzzle size={28} className="text-[#00A1F6]" />
                       </div>
                       <div>
                          <h3 className={`text-[24px] font-bold ${isDark ? "text-white" : "text-[#141414]"} mb-2`}>Pronto para operar com vantagem?</h3>
                          <p className={`text-[14px] ${isDark ? "text-white/50" : "text-black/50"} max-w-[400px] mx-auto`}>
                             Junte-se a mais de 15.000 traders que já transformaram sua análise com o Plugin Bookmap no Profit.
                          </p>
                       </div>
                       <div className="flex items-center gap-[16px] flex-wrap justify-center">
                          <button className="h-[44px] px-[32px] rounded-[4px] text-white font-bold text-[14px] uppercase tracking-wide shadow-lg hover:-translate-y-0.5 transition-all" style={{ backgroundImage: "linear-gradient(261.9deg, #2799FA 0%, #0463C8 75%)" }}>
                             CONTRATAR AGORA
                          </button>
                          <button className={`h-[44px] px-[32px] rounded-[4px] font-bold text-[14px] uppercase tracking-wide border ${isDark ? "border-white/10 text-white/70 hover:bg-white/5" : "border-black/10 text-black/60 hover:bg-black/5"} transition-all`}>
                             VER PLANOS
                          </button>
                       </div>
                    </div>

                    {/* ── 7. FAQ ── */}
                    <div className="flex flex-col gap-[16px]">
                       <div className="flex flex-col gap-[4px]">
                          <span className={`text-[11px] uppercase tracking-widest font-bold ${accentOrange}`}>Dúvidas Frequentes</span>
                          <h3 className={`text-[22px] font-bold ${textTitle}`}>Perguntas & Respostas</h3>
                       </div>
                       <div className="w-full flex flex-col gap-[8px]">
                           {[
                              { q: "O que é o Gráfico MID?", a: "O Gráfico MID é uma tecnologia exclusiva do Profit que permite visualizar o preço médio entre o melhor bid e o melhor ask de forma fluida e em tempo real, ideal para ativos com spreads mais largos como contratos futuros e opções pouco líquidas.", id: 20 },
                              { q: "Em quais versões do Profit o plugin está disponível?", a: "O Plugin Bookmap está disponível em todas as versões oficiais do Profit: Profit Pro, Profit Chart e Profit Ultra. Basta instalar via NeloStore e o plugin será ativado automaticamente.", id: 21 },
                              { q: "Quais os melhores ativos para utilizar o Mid Price?", a: "Títulos com spread largo, opções pouco líquidas e contratos futuros menos negociados são os ideais para usar o Mid Price. Exemplos: WIN, WDO, opções de ações com baixo volume.", id: 22 },
                              { q: "Posso cancelar minha assinatura a qualquer momento?", a: "Sim. Você pode cancelar sua assinatura a qualquer momento diretamente pela NeloStore sem nenhuma taxa ou multa. O acesso permanece ativo até o fim do período já pago.", id: 23 },
                              { q: "O plugin funciona em modo gráfico offline?", a: "Não. O Plugin Bookmap requer conexão ativa com a plataforma Profit para receber dados do book de ofertas em tempo real, que é a base para o cálculo do MID Price.", id: 24 },
                           ].map((faq) => (
                             <div key={faq.id} className={`${faqBg} border ${borderCore} rounded-[4px] flex flex-col overflow-hidden`}>
                                <div 
                                  className={`px-[24px] py-[16px] flex items-center justify-between cursor-pointer hover:bg-white/5`}
                                  onClick={() => toggleFaq(faq.id)}
                                >
                                   <span className={`${textTitle} font-bold text-[13px]`}>{faq.q}</span>
                                   {openFaq.includes(faq.id) ? <Minus size={16} className={textTitle} /> : <Plus size={16} className={textTitle} />}
                                </div>
                                {openFaq.includes(faq.id) && (
                                  <div className={`px-[24px] pb-[16px] pt-0 ${bgCard}`}>
                                     <p className={`${textMuted} text-[13px] leading-relaxed pt-2 border-t border-white/5`}>
                                        {faq.a}
                                      </p>
                                  </div>
                                )}
                             </div>
                           ))}
                       </div>
                    </div>

                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
