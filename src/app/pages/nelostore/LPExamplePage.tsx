import { useState, useRef } from "react";
import { Link } from "react-router";
import { 
  ChevronLeft, Search, ShoppingCart, User, 
  Plus, Minus, Moon, Sun, ArrowRight, Tag, Users, MapPin, Calendar
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
  const priceGreen = isDark ? "text-[#9ad994]" : "text-[#166534]"; // Verde Dark vs Verde Floresta (Light)
  const accentOrange = isDark ? "text-[#ea8a2b]" : "text-[#c2410c]"; // Laranja Dark vs Laranja Escuro (Light)
  const borderBienal = isDark ? "border-[#ea8a2b]" : "border-[#c2410c]";
  const bgBienalSelected = isDark ? "bg-[#ea8a2b]/10" : "bg-[#c2410c]/10";

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
            {/* Header Flutuante que aparece no scroll */}
            <div className={twMerge(clsx(
                "absolute top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none opacity-0 translate-y-[-100%]",
                scrolled ? "opacity-100 translate-y-0 pointer-events-auto" : ""
            ))}>
                <div className={`h-[68px] ${bgHeader} backdrop-blur-md border-b ${borderCore} flex items-center justify-between px-[32px] shadow-2xl`}>
                    <div className="flex items-center gap-[24px]">
                        <img src={nelostoreLogo} alt="NeloStore" className="h-[20px]" />
                         <div className="flex flex-col">
                             <span className={`text-[11px] ${textMuted}`}>Opcional</span>
                             <span className={`text-[13px] font-bold ${textTitle}`}>Plugin Bookmap</span>
                         </div>
                    </div>
                    <button className="h-[36px] px-[24px] rounded-[4px] text-white font-bold text-[12px] uppercase shadow-lg" style={{ backgroundImage: "linear-gradient(261.9deg, #2799FA 0%, #0463C8 75%)" }}>
                        CONTRATAR
                    </button>
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
                 <span className={textMuted}>Opcional</span>
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
                          {["mensal", "anual", "bienal"].map((plan) => (
                             <button 
                                key={plan}
                                onClick={() => setSelectedPlan(plan as any)}
                                className={clsx(
                                   "relative flex-1 h-[71px] rounded-[4px] p-2.5 flex flex-col items-start transition-all border-2",
                                   selectedPlan === plan ? (plan === 'bienal' ? `${borderBienal} ${bgBienalSelected} shadow-lg` : "border-[#2689de] bg-[#1daafb]/10 shadow-lg") : `border-transparent ${bgInput}`
                                )}
                             >
                                {plan === 'bienal' && <div className={clsx("absolute top-[8px] right-[10px] text-white text-[8px] px-1 rounded font-bold uppercase", isDark ? "bg-[#ea8a2b]" : "bg-[#c2410c]")}>Melhor</div>}
                                <span className={clsx("text-[10px] uppercase font-bold", textMuted)}>{plan}</span>
                                <div className="flex items-baseline gap-1 mt-1">
                                   <span className={clsx("font-bold text-[18px]", selectedPlan === plan ? textTitle : priceGreen)}>R$ {plan === 'mensal' ? '179,90' : plan === 'anual' ? '159,90' : '134,90'}</span>
                                </div>
                                <DiscountBadge discount={plan === 'mensal' ? '10%' : plan === 'anual' ? '20%' : '33%'} isBestOption={plan === 'bienal'} />
                             </button>
                          ))}
                       </div>

                       <div className="flex flex-col gap-[14px]">
                          <button className="h-[40px] min-w-[140px] max-w-fit rounded-[4px] px-8 text-white font-bold text-[14px] uppercase tracking-wide shadow-lg hover:-translate-y-0.5 mt-2 transition-all active:translate-y-0" style={{ backgroundImage: "linear-gradient(261.9deg, #2799FA 0%, #0463C8 75%)" }}>
                             CONTRATAR
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* Barra de Highlights */}
                 <div className={twMerge(clsx("w-full h-[64px] border-t border-b flex items-center transition-colors px-4", borderCore))}>
                    {[
                       { icon: Plus, label: "Plugin", sub: "Formato" },
                       { icon: Users, label: "15k+", sub: "Assinantes" },
                       { icon: MapPin, label: "Desktop", sub: "Plataforma" },
                       { icon: Calendar, label: "Assinatura", sub: "Modelo" },
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
                    
                    <div className="flex flex-col md:flex-row items-center gap-[48px] py-[32px]">
                       <div className="flex-1">
                          <div className={`text-[18px] font-bold italic ${textTitle} mb-1`}>
                             P profit | Gráfico MID Price
                          </div>
                          <h2 className={`text-[32px] font-bold ${textTitle} leading-snug`}>
                             APRENDA A EXTRAIR RESULTADOS COM O<br/>
                             <span className="uppercase text-[#00A1F6]">GRÁFICO MID PRICE</span>
                          </h2>
                          <p className={`text-[15px] ${textMuted} font-['Tahoma'] leading-relaxed max-w-full mt-4`}>
                             Opere contratos futuros de menor negociação com mais confiança a partir dessa novidade exclusiva.
                          </p>
                       </div>
                       <div className="flex-1 w-full bg-neutral-900 rounded-lg aspect-video flex items-center justify-center overflow-hidden border border-white/5 shadow-2x">
                           <div className="w-full h-full bg-[#040d1a] flex items-center justify-center">
                              <Plus size={48} className="text-white/10" />
                           </div>
                       </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-[64px]">
                       {/* Form */}
                       <div className="flex-1 w-full">
                          <h3 className={`text-[18px] ${textTitle} mb-[24px] uppercase font-semibold italic`}>
                             Live gratuita no dia 27/11
                          </h3>
                          <div className={`flex flex-col gap-[16px] ${bgCard} border ${borderCore} p-[24px] rounded-[8px] shadow-lg`}>
                             {[
                                { label: "Nome Completo", placeholder: "Ex: João da Silva" },
                                { label: "Email", placeholder: "nome@email.com" },
                             ].map((f, i) => (
                               <div key={i} className="flex flex-col gap-[6px]">
                                  <label className={`font-semibold text-[11px] uppercase tracking-wider ${textTitle}`}>{f.label} *</label>
                                  <div className={`relative h-[36px] w-full rounded-[4px] ${bgInput} flex items-center border ${borderCore} focus-within:border-[#2689de]`}>
                                     <input type="text" placeholder={f.placeholder} className={`w-full h-full bg-transparent outline-none text-[13px] ${textTitle} px-[12px]`} />
                                  </div>
                               </div>
                             ))}
                             <button className="w-full h-[40px] rounded-[4px] font-bold text-white uppercase text-[14px] mt-2" style={{ backgroundImage: "linear-gradient(260deg, #2799FA 0%, #0463C8 75%)" }}>
                                GARANTIR VAGA
                             </button>
                          </div>
                       </div>

                       {/* Benefícios */}
                       <div className="flex-1 w-full">
                          <h3 className={`text-[12px] ${textMuted} mb-[20px] uppercase font-bold tracking-[0.1em]`}>BENEFÍCIOS:</h3>
                          <div className="flex flex-col gap-[14px]">
                             {[
                                "Identificação de tendências",
                                "Gráficos de candles completos",
                                "Identificação de reversões de movimentos",
                                "Clareza de movimentos de preços",
                                "Operar os novos ativos da B3"
                             ].map((text, i) => (
                                <div key={i} className="flex items-center gap-[12px]">
                                   <CheckmarkBig />
                                   <span className={`${textTitle} text-[14px] font-['Tahoma']`}>{text}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>

                    {/* FAQ */}
                    <div className="w-full flex flex-col gap-[8px]">
                        {[
                           { q: "O que é o Gráfico MID?", a: "O Gráfico MID é uma tecnologia que permite visualizar o preço médio de forma fluida.", id: 20 },
                           { q: "Em quais versões do Profit?", a: "Disponível em todas as versões oficiais.", id: 21 },
                           { q: "Quais os melhores ativos para utilizar o Mid Price?", a: "Títulos com spread largo, opções pouco líquidas e contratos futuros menos negociados são os ideais para usar o Mid Price.", id: 22 }
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
  );
}
