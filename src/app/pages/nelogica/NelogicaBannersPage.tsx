import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  HelpCircle,
  MapPin,
  Ruler,
  ShieldAlert,
  Palette,
  Type,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  Info,
  ExternalLink,
  Monitor,
  LayoutTemplate,
  GalleryHorizontal,
  Gauge
} from "lucide-react";
import { Button } from "../../components/Button";
import { NelogicaBannerSimulator } from "./BannerTestPage";

// ─── TOC Items ────────────────────────────────────────────────────────────────
const TOC_ITEMS = [
  { id: "especificacoes", label: "Especificações", icon: <Info size={13} />, isGroup: true },
  { id: "formato", label: "Formato e Resolução", icon: <Ruler size={12} />, indent: 1 },
  { id: "area-neutra-topo", label: "Área Neutra (Topo)", icon: <LayoutTemplate size={12} />, indent: 1 },
  { id: "textos-dinamicos", label: "Textos Dinâmicos", icon: <Type size={12} />, indent: 1 },
  { id: "diagrama", label: "Diagrama da Capa", icon: <Monitor size={12} />, indent: 1 },
];

function Section({ id, icon, title, children }: { id: string; icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section 
      id={id} 
      style={{ scrollMarginTop: "96px", marginBottom: "64px" }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div
          className="flex items-center justify-center rounded-xl shrink-0"
          style={{
            width: "40px",
            height: "40px",
            background: "rgba(0,161,246,0.05)",
            border: "1px solid rgba(0,161,246,0.15)",
          }}
        >
          <span style={{ color: "#00A1F6" }}>{icon}</span>
        </div>
        <h2 style={{ color: "#f0f6ff", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.01em" }}>
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
}

function InfoCard({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 backdrop-blur-xl"
      style={{
        background: accent ? "rgba(0,161,246,0.04)" : "rgba(38,38,38,0.4)",
        border: accent ? "1px solid rgba(0,161,246,0.12)" : "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <strong style={{ color: "#7ec8ff", fontWeight: 600 }}>{children}</strong>
  );
}

// ─── Diagram Components ───────────────────────────────────────────────────────
function NelogicaSafeAreaDiagram() {
  const totalW = 2560;
  const totalH = 900;
  
  const menuH = 100; // Área neutra superior recomendada para o menu transparente
  const contentH = totalH - menuH;
  
  return (
    <div 
      className="w-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#121212] select-none shadow-2xl relative"
      style={{ aspectRatio: `${totalW} / ${totalH}` }}
    >
      {/* Top Neutral Area */}
      <div 
        className="w-full flex items-center justify-center bg-black/40 backdrop-blur-md border-b border-white/10 relative z-20"
        style={{ height: `${(menuH / totalH) * 100}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A1F6]/10 to-transparent" />
        <span className="text-[#00A1F6] text-[9px] md:text-[11px] font-bold tracking-widest uppercase relative z-10">Área Neutra para Menu (100px) - Evitar Cores Claras</span>
      </div>

      {/* Main Banner Zone */}
      <div className="flex w-full relative" style={{ height: `${(contentH / totalH) * 100}%` }}>
        
        {/* Left Focus Area */}
        <div 
          className="h-full flex flex-col items-center justify-center border-r border-[#00A1F6]/20 bg-[#00A1F6]/5 relative overflow-hidden" 
          style={{ flex: 1 }}
        >
          <div className="absolute inset-0 border-[4px] border-[#00A1F6]/10 m-4 rounded-xl" />
          <span className="text-[#00A1F6] text-[11px] md:text-[13px] uppercase font-black tracking-widest mb-2 text-center px-4">Área de Destaque<br/>Visual</span>
          <span className="text-[#00A1F6]/60 text-[10px] md:text-[12px] text-center px-4 max-w-[400px]">Posicione aqui personagens, gráficos, produtos e elementos principais. Livre de sobreposições de código.</span>
        </div>

        {/* Right Code Overlay Area */}
        <div 
          className="h-full flex flex-col items-center justify-center relative bg-white/[0.02]" 
          style={{ flex: "0 0 50%" }}
        >
          {/* Mock Overlay Bounding Box */}
          <div className="w-[80%] max-w-[700px] bg-black/40 border border-white/20 rounded-xl p-6 backdrop-blur-sm flex flex-col gap-4 relative mt-[-20px]">
            <div className="w-24 h-6 bg-white/20 rounded" />
            
            <div className="flex flex-col gap-2">
              <div className="w-full h-8 bg-[#00A1F6]/30 rounded" />
              <div className="w-3/4 h-8 bg-[#00A1F6]/30 rounded" />
              <div className="text-xs text-[#7ec8ff] font-mono mt-1 opacity-70">Título (Altura Variável: 1 a 3 linhas)</div>
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <div className="w-full h-3 bg-white/10 rounded" />
              <div className="w-5/6 h-3 bg-white/10 rounded" />
            </div>

            <div className="flex gap-4 mt-6">
              <div className="w-32 h-10 bg-white rounded-lg opacity-90" />
              <div className="w-32 h-10 border border-white/30 rounded-lg" />
            </div>

            <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <ChevronLeft size={16} className="text-[#00A1F6] rotate-90" />
                <div className="w-px h-24 bg-[#00A1F6]/40" />
                <ChevronLeft size={16} className="text-[#00A1F6] -rotate-90" />
              </div>
              <span className="text-[10px] text-[#00A1F6] font-mono leading-none writing-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>
                Flutuação CTA (~100px)
              </span>
            </div>
          </div>
          
          <span className="absolute bottom-6 text-white/30 text-[10px] md:text-[12px] uppercase font-bold tracking-widest text-center">Sobreposição Dinâmica via HTML/CSS</span>
        </div>
      </div>
    </div>
  );
}


export function NelogicaBannersPage() {
  const [activeSection, setActiveSection] = useState("formato");

  useEffect(() => {
    const ids = TOC_ITEMS.filter((i) => !i.isGroup).map((i) => i.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topVisible = visible.reduce((prev, curr) => 
            curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
          );
          setActiveSection(topVisible.target.id);
        }
      },
      { 
        root: null,
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full min-h-screen relative animate-page-enter">
      {/* Sub-menu Lateral (TOC) */}
      <aside 
        className="hidden xl:flex flex-col shrink-0 border-r border-white/5 fixed left-0 top-16 h-[calc(100vh-64px)] overflow-y-auto bg-[#1a1a1a]/40 backdrop-blur-xl w-60 z-[30]"
      >
        <div className="p-2 border-b border-white/5 flex items-center justify-start px-4 h-[50px] shrink-0">
          <span style={{ color: "#ffffff", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Nesta página
          </span>
        </div>
        <nav className="flex flex-col gap-0.5 p-1 pb-12 overflow-x-hidden">
          {TOC_ITEMS.map((item) => {
            if (item.isGroup) {
              return (
                <div key={item.id} className="flex items-center gap-2 py-1.5 px-2 rounded-md mt-2">
                  <span style={{ color: "#00A1F6" }}>{item.icon}</span>
                  <span style={{ color: "#00A1F6", fontSize: "9px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {item.label}
                  </span>
                </div>
              );
            }
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 py-1.5 rounded-md transition-all hover:bg-white/5 relative"
                style={{
                  paddingLeft: `${8 + (item.indent || 0) * 10}px`,
                  textDecoration: "none",
                  background: isActive ? "rgba(0,161,246,0.08)" : "transparent",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 rounded-r-full bg-[#00A1F6]" />}
                <span style={{ color: isActive ? "#00A1F6" : "#6b7280", transform: "scale(0.9)" }}>{item.icon}</span>
                <span style={{ color: isActive ? "#ffffff" : "#9ca3af", fontSize: "11px", fontWeight: isActive ? 600 : 500 }}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 w-full px-4 md:px-8 py-12 xl:pl-[260px]" style={{ maxWidth: "1600px" }}>
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 flex-wrap mb-8" style={{ color: "#4b5563", fontSize: "13px" }}>
          <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
          <span>/</span>
          <Link to="/nelogica" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Nelogica</Link>
          <span>/</span>
          <span style={{ color: "#9ca3af" }}>Banners</span>
        </div>

        {/* Title & Back Button */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 group">
              <Link 
                to="/nelogica" 
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                title="Voltar para Nelogica"
              >
                <ChevronLeft size={24} />
              </Link>
              <h1 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Hero Banners Nelogica
              </h1>
            </div>
            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.7, maxWidth: "600px" }}>
              Diretrizes técnicas para as capas do site institucional, focando em resoluções de alta densidade e comportamento de código.
            </p>
          </div>
        </div>

        <NelogicaBannerSimulator />

        {/* ── SEÇÃO: Especificações ─────────────────────────── */}
        <div id="especificacoes" className="flex items-center gap-3 mb-8" style={{ scrollMarginTop: "32px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <span style={{ color: "#00A1F6", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Especificações Gerais
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        <Section id="formato" icon={<Ruler size={15} />} title="Formato e Resolução">
          <InfoCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/10">
                <span style={{ color: "#00A1F6", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Resolução</span>
                <span className="text-white text-2xl font-bold italic">2560 × 900 px</span>
                <p className="text-[#9ca3af] text-xs leading-relaxed mt-1">Alta definição para cobrir telas ultrawide e garantir nitidez.</p>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/10">
                <span style={{ color: "#00A1F6", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Arquivo</span>
                <span className="text-white text-2xl font-bold">.webp</span>
                <p className="text-[#9ca3af] text-xs leading-relaxed mt-1">Obrigatório para otimização de performance e tempo de carregamento.</p>
              </div>
            </div>
          </InfoCard>
        </Section>

        <Section id="area-neutra-topo" icon={<LayoutTemplate size={15} />} title="Área Neutra (Menu Superior)">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
              O menu de navegação do site é transparente e utiliza um efeito de <Highlight>blur</Highlight>. Para garantir que os links (que são brancos) permaneçam legíveis:
            </p>
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-black/40 border-l-4 border-[#00A1F6]">
              <div className="text-white text-5xl font-black opacity-40">100</div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold">Pixels de Altura Neutra</span>
                <p className="text-[#9ca3af] text-sm">Os primeiros 100px (topo) da sua arte devem ser escuros ou neutros.</p>
              </div>
            </div>
          </InfoCard>
        </Section>

        <Section id="textos-dinamicos" icon={<Type size={15} />} title="Os Textos Overlay e a Variação dos CTAs">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "12px" }}>
               Todo o conteúdo textual (Logo, Título, Descrição e Botões) é dinâmico. A altura total do bloco de texto aumenta conforme o título quebra linhas ( de 1 a 3 linhas).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
               <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span style={{ color: "#00A1F6", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="block mb-1">Comportamento dos CTAs</span>
                  <p className="text-white text-sm leading-relaxed">
                     Como o título pode variar, os botões (CTAs) flutuam verticalmente cerca de <Highlight>100 pixels</Highlight>.
                  </p>
               </div>
               <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span style={{ color: "#00A1F6", fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="block mb-1">Zona de Safe Area Direita</span>
                  <p className="text-white text-sm leading-relaxed">
                     Mantenha a metade direita (<Highlight>1280px para a direita</Highlight>) livre de elementos essenciais.
                  </p>
               </div>
            </div>
          </InfoCard>
        </Section>

        <Section id="diagrama" icon={<Monitor size={15} />} title="Diagrama Geral da Capa">
          <div className="flex flex-col gap-6">
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.8 }}>
              Observe o esquema interativo abaixo para visualizar como os elementos em código irão interagir com a sua arte (background exportado):
            </p>
            <div className="flex flex-col gap-3">
              <NelogicaSafeAreaDiagram />
              <p style={{ color: "#6b7280", fontSize: "12px", fontStyle: "italic", textAlign: "center", marginTop: "8px" }}>
                Esquema de áreas para o formato <Highlight>Desktop Institucional</Highlight> (2560×900px)
              </p>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}
