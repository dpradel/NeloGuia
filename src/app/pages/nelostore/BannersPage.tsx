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
  FileType2,
  FolderOpen,
  Sparkles,
  GalleryHorizontal,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Download,
  FileArchive,
  Info,
  X,
  ZoomIn,
  AlertTriangle,
  Menu,
} from "lucide-react";
import { Button } from "../../components/Button";
import neloStoreImg from "../../../assets/banners/primeira imagem.png";
import desktopSafeAreaImg from "../../../assets/banners/segunda imagem.webp";
import mobileSafeImg from "../../../assets/banners/terceira imagem.png";

import imgVectorLight from "../../../assets/banners/vector light.webp";
import imgVectorDark from "../../../assets/banners/vector dark.webp";
import imgUltraLight from "../../../assets/banners/ultra light.webp";
import imgUltraDark from "../../../assets/banners/ultra-dark.webp";
import imgProfitLight from "../../../assets/banners/profit light.webp";
import imgProfitDark from "../../../assets/banners/profit dark.webp";
import imgDestaquesLight from "../../../assets/banners/destaques do mes light.webp";
import imgDestaquesDark from "../../../assets/banners/destaques do mes dark.webp";
import imgConnectLight from "../../../assets/banners/connect chat light.webp";
import imgConnectDark from "../../../assets/banners/connect chat dark.webp";
import imgInvestAcademyLight from "../../../assets/banners/invest academy light.webp";
import imgInvestAcademyDark from "../../../assets/banners/invest academy dark.webp";
import imgMesAutomacaoLight from "../../../assets/banners/mes da automacao light.webp";
import imgMesAutomacaoDark from "../../../assets/banners/mes da automacao dark.webp";
import { useSidebar } from "../../context/SidebarContext";
import { NeloStoreBannerSimulator } from "./BannerTestPage";

// ─── TOC Items ────────────────────────────────────────────────────────────────
const TOC_ITEMS = [
  { id: "especificacoes", label: "Especificações", icon: <Info size={13} />, isGroup: true },
  { id: "o-que-e", label: "O que e para quê?", icon: <HelpCircle size={12} />, indent: 1 },
  { id: "local-exibicao", label: "Local de exibição", icon: <MapPin size={12} />, indent: 1 },
  { id: "dimensoes", label: "Dimensões", icon: <Ruler size={12} />, indent: 1 },
  { id: "area-segura", label: "Área segura", icon: <ShieldAlert size={12} />, indent: 1 },
  { id: "temas", label: "Temas", icon: <Palette size={12} />, indent: 1 },
  { id: "tipografias", label: "Tipografias", icon: <Type size={12} />, indent: 1 },
  { id: "recomendacoes", label: "Recomendações", icon: <CheckCircle2 size={12} />, indent: 1 },
  { id: "nao-fazer", label: "Não fazer", icon: <XCircle size={12} />, indent: 1 },
  { id: "arquivos", label: "Arquivos", icon: <FolderOpen size={13} />, isGroup: true },
  { id: "formato", label: "Formato", icon: <FileType2 size={12} />, indent: 1 },
  { id: "entregaveis", label: "Entregáveis", icon: <FileArchive size={12} />, indent: 1 },
  { id: "templates", label: "Templates", icon: <Sparkles size={12} />, indent: 1 },
  { id: "exemplos", label: "Exemplos", icon: <GalleryHorizontal size={12} />, indent: 1 },
];

// ─── Section Wrapper ──────────────────────────────────────────────────────────
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
            background: "rgba(90,176,250,0.05)",
            border: "1px solid rgba(90,176,250,0.15)",
          }}
        >
          <span style={{ color: "#5AB0FA" }}>{icon}</span>
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

// ─── Info Card ────────────────────────────────────────────────────────────────
function InfoCard({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className="rounded-2xl p-6 backdrop-blur-xl"
      style={{
        background: accent ? "rgba(90,176,250,0.04)" : "rgba(38,38,38,0.4)",
        border: accent ? "1px solid rgba(90,176,250,0.12)" : "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
}

// ─── Highlight Text ───────────────────────────────────────────────────────────
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <strong style={{ color: "#7ec8ff", fontWeight: 600 }}>{children}</strong>
  );
}

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <em style={{ color: "#90d0ff", fontStyle: "italic" }}>{children}</em>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center px-2 py-[2px] rounded-[4px]"
      style={{
        background: "rgba(29,170,251,0.1)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <span
        style={{
          background: "linear-gradient(to right, #1daafb 0%, #89d1fd 50%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "16px",
        }}
      >
        {children}
      </span>
    </span>
  );
}

// ─── Image Lightbox ───────────────────────────────────────────────────────────
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-8"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)", zIndex: 9999 }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 flex items-center justify-center rounded-full"
        style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
        onClick={onClose}
      >
        <X size={18} color="white" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain rounded-xl"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EXAMPLE_BANNERS = [
  {
    title: "Profit",
    light: imgProfitLight,
    dark: imgProfitDark,
  },
  {
    title: "Vector",
    light: imgVectorLight,
    dark: imgVectorDark,
  },
  {
    title: "Ultra",
    light: imgUltraLight,
    dark: imgUltraDark,
  },
  {
    title: "Connect Chat",
    light: imgConnectLight,
    dark: imgConnectDark,
  },
  {
    title: "Destaques do Mês",
    light: imgDestaquesLight,
    dark: imgDestaquesDark,
  },
  {
    title: "Mês da Automação",
    light: imgMesAutomacaoLight,
    dark: imgMesAutomacaoDark,
  },
  {
    title: "Invest Academy",
    light: imgInvestAcademyLight,
    dark: imgInvestAcademyDark,
  }
];

function ExamplesGallery() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-12">
      {EXAMPLE_BANNERS.map((banner, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {banner.title}
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dark version */}
            <div className="flex flex-col gap-2">
              <div 
                className="rounded-xl overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.02] border border-white/10"
                onClick={() => setLightboxImg(banner.dark)}
              >
                <img src={banner.dark} alt={`${banner.title} Dark`} className="w-full h-auto object-cover" />
              </div>
              <span className="text-center text-[11px] font-semibold text-white/50 uppercase tracking-widest">Dark Mode</span>
            </div>

            {/* Light version */}
            <div className="flex flex-col gap-2">
              <div 
                className="rounded-xl overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.02] border border-white/10 bg-[#f8fafc]"
                onClick={() => setLightboxImg(banner.light)}
              >
                <img src={banner.light} alt={`${banner.title} Light`} className="w-full h-auto object-cover" />
              </div>
              <span className="text-center text-[11px] font-semibold text-white/50 uppercase tracking-widest">Light Mode</span>
            </div>
          </div>
        </div>
      ))}
      {lightboxImg && (
        <Lightbox src={lightboxImg} alt="Banner Zoom" onClose={() => setLightboxImg(null)} />
      )}
    </div>
  );
}

// ─── Diagram Components ───────────────────────────────────────────────────────
function BannerSafeAreaDiagram({ mode }: { mode: 'desktop' | 'mobile' }) {
  const isDesktop = mode === 'desktop';
  const totalW = isDesktop ? 2560 : 768;
  const safeW = isDesktop ? 768 : 360;
  const sideW = isDesktop ? 896 : 204;
  const topH = 284;
  const bottomH = 260;
  
  return (
    <div 
      className="w-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#121212] select-none shadow-2xl"
      style={{ aspectRatio: `${totalW} / ${topH + bottomH}` }}
    >
      {/* Top Section */}
      <div className="flex w-full overflow-hidden" style={{ height: `${(topH / (topH + bottomH)) * 100}%` }}>
        {/* Left Side */}
        <div className="h-full flex flex-col items-center justify-center border-r border-white/5 bg-white/[0.02]" style={{ flex: sideW }}>
             <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest mb-1">Lateral</span>
             <span className="text-white/10 text-[9px] font-mono">{sideW}x{topH}</span>
        </div>

        {/* Safe Area */}
        <div className="h-full relative flex flex-col items-center justify-center bg-[#5AB0FA]/10" style={{ flex: safeW }}>
           <div className="absolute inset-0 border-x-2 border-dashed border-[#5AB0FA]/30" />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-px bg-[#5AB0FA]/50" />
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-[#5AB0FA]/50" />
           
           <ShieldAlert size={18} className="text-[#5AB0FA]/40 mb-2" />
           <span className="text-[#5AB0FA] text-[11px] uppercase font-black tracking-widest">Área Segura</span>
           <span className="text-[#5AB0FA]/60 text-[10px] font-mono mt-1">{safeW}x{topH}</span>
        </div>

        {/* Right Side */}
        <div className="h-full flex flex-col items-center justify-center border-l border-white/5 bg-white/[0.02]" style={{ flex: sideW }}>
             <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest mb-1">Lateral</span>
             <span className="text-white/10 text-[9px] font-mono">{sideW}x{topH}</span>
        </div>
      </div>

      {/* Bottom Section (Gradient Overlay Area) */}
      <div className="w-full flex flex-col items-center justify-center border-t border-white/5" style={{ 
          height: `${(bottomH / (topH + bottomH)) * 100}%`,
          background: 'linear-gradient(to bottom, rgba(38,38,38,0.3) 0%, rgba(26,26,26,0.1) 100%)'
      }}>
          <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest mb-1">Área do Gradiente</span>
          <span className="text-white/10 text-[9px] font-mono">{totalW}x{bottomH}</span>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function BannersPage() {
  const [activeSection, setActiveSection] = useState("o-que-e");
  const [desktopLightbox, setDesktopLightbox] = useState(false);
  const [mobileLightbox, setMobileLightbox] = useState(false);
  const [neloStoreLightbox, setNeloStoreLightbox] = useState(false);

  useEffect(() => {
    // No longer need to collapse sidebar as it's at the top
  }, []);
  useEffect(() => {
    const ids = TOC_ITEMS.filter((i) => !i.isGroup).map((i) => i.id);
    
    // We use total viewport scroll, so root: null
    const observer = new IntersectionObserver(
      (entries) => {
        // Encontra a primeira seção que está cruzando o topo do viewport
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Prioriza a seção que está mais próxima do topo (menor valor de top)
          const topVisible = visible.reduce((prev, curr) => 
            curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
          );
          setActiveSection(topVisible.target.id);
        }
      },
      { 
        root: null,
        // Detecta a seção quando ela está no topo da tela, ignorando o header (64px)
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
      {/* Sub-menu Lateral (TOC) - Agora Sticky na esquerda */}
      <aside 
        className="hidden xl:flex flex-col shrink-0 border-r border-white/5 fixed left-0 top-16 h-[calc(100vh-64px)] overflow-y-auto bg-[#1a1a1a]/40 backdrop-blur-xl w-60 z-[30]"
      >
        <div className="p-2 border-b border-white/5 flex items-center justify-start px-4 h-[50px] shrink-0">
          <span style={{ color: "#ffffff", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }} className="whitespace-nowrap transition-opacity duration-300">
            Nesta página
          </span>
        </div>
        <nav className="flex flex-col gap-0.5 p-1 pb-12 overflow-x-hidden" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent" }}>
          {TOC_ITEMS.map((item) => {
            if (item.isGroup) {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-2 py-1.5 px-2 rounded-md mt-2"
                >
                  <span style={{ color: "#5AB0FA" }}>{item.icon}</span>
                  <span
                    style={{
                      color: "#5AB0FA",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                    className="whitespace-nowrap"
                  >
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
                  background: isActive ? "rgba(90,176,250,0.08)" : "transparent",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 rounded-r-full bg-[#5AB0FA]" />
                )}
                <span style={{ color: isActive ? "#5AB0FA" : "#6b7280", transform: "scale(0.9)" }}>{item.icon}</span>
                <span
                  style={{
                    color: isActive ? "#ffffff" : "#9ca3af",
                    fontSize: "11px",
                    fontWeight: isActive ? 600 : 500,
                  }}
                  className="whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main content - Removida a margem fixa xl:ml-60 pois o sticky ocupa espaço no flow do flex container */}
      <div className="flex-1 w-full px-8 md:px-12 py-12 xl:pl-[280px]" style={{ maxWidth: "1600px" }}>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 flex-wrap mb-8" style={{ color: "#4b5563", fontSize: "13px" }}>
          <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
          <span>/</span>
          <Link to="/nelostore" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">NeloStore</Link>
          <span>/</span>
          <span style={{ color: "#9ca3af" }}>Banners</span>
        </div>

        {/* Title & Back Button */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4 group">
            <Link 
              to="/nelostore" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              title="Voltar para NeloStore"
            >
              <ChevronLeft size={24} />
            </Link>
            <h1 style={{ color: "#ffffff", fontSize: "36px", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Banners NeloStore
            </h1>
          </div>
          <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.7 }}>
            Especificações completas, guias e templates para a criação de banners da NeloStore.
          </p>
        </div>

        <NeloStoreBannerSimulator />

        {/* ── SEÇÃO: Especificações ─────────────────────────── */}
        <div
          id="especificacoes"
          className="flex items-center gap-3 mb-8"
          style={{ scrollMarginTop: "32px" }}
        >
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <span
            style={{
              color: "#5AB0FA",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Especificações
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* NeloStore screenshot */}
        <div className="mb-10">
          <div
            className="rounded-2xl overflow-hidden cursor-zoom-in"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
            onClick={() => setNeloStoreLightbox(true)}
          >
            <img
              src={neloStoreImg}
              alt="Página inicial da NeloStore (dark mode)"
              className="w-full object-cover"
            />
          </div>
          <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "8px", fontStyle: "italic", textAlign: "center" }}>
            Banner principal, exibido no topo da Página Inicial da NeloStore.
          </p>
          {neloStoreLightbox && (
            <Lightbox src={neloStoreImg} alt="NeloStore screenshot" onClose={() => setNeloStoreLightbox(false)} />
          )}
        </div>

        {/* ── O que e para quê? ─────────────────────────────── */}
        <Section id="o-que-e" icon={<HelpCircle size={15} />} title="O que e para quê?">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "12px" }}>
              Os <Highlight>banners principais</Highlight> são exibidos no topo da página principal da NeloStore.
              São utilizados para:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Enfatizar campanhas ativas no momento;",
                "Anunciar eventos que irão começar nos próximos dias;",
                "Promover as plataformas de investimento da Nelogica;",
                "Destacar categorias e produtos relevantes aos usuários.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#5AB0FA",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </Section>

        {/* ── Local de exibição ─────────────────────────────── */}
        <Section id="local-exibicao" icon={<MapPin size={15} />} title="Local de exibição">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "14px" }}>
              Este elemento é apresentado <Highlight>sempre no topo da página</Highlight>. Pode ser apresentado em duas páginas distintas:
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Página inicial da NeloStore",
                  url: "https://store.nelogica.com.br/",
                },
                {
                  label: "Página de evento da NeloStore (quando houver evento ativo)",
                  url: "https://store.nelogica.com.br/offers",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all hover:border-[rgba(90,176,250,0.3)]"
                  style={{
                    background: "rgba(90,176,250,0.05)",
                    border: "1px solid rgba(90,176,250,0.12)",
                    textDecoration: "none",
                  }}
                >
                  <ExternalLink size={13} style={{ color: "#5AB0FA", flexShrink: 0 }} />
                  <div className="flex flex-col gap-0.5">
                    <span style={{ color: "#c9d1d9", fontSize: "13px", fontWeight: 600 }}>{item.label}</span>
                    <span style={{ color: "#5AB0FA", fontSize: "11px" }}>{item.url}</span>
                  </div>
                </a>
              ))}
            </div>
          </InfoCard>
        </Section>

        {/* ── Dimensões ─────────────────────────────────────── */}
        <Section id="dimensoes" icon={<Ruler size={15} />} title="Dimensões">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
              O banner possui <Highlight>2 formatos</Highlight>:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Desktop", dim: "2560 × 544", desc: "Exibido quando a tela tem 769px ou mais de largura." },
                { label: "Mobile", dim: "768 × 544", desc: "Exibido quando a tela tem menos de 768px de largura." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      color: "#5AB0FA",
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                    {item.dim}
                  </span>
                  <span style={{ color: "#6b7280", fontSize: "12px", lineHeight: 1.5 }}>{item.desc}</span>
                </div>
              ))}
            </div>
            <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.7, marginTop: "14px" }}>
              Quando o usuário estiver visualizando a loja em uma tela com menos de <Tag>768px</Tag> de largura, o banner
              <Highlight> Mobile</Highlight> será exibido. Quando a tela possuir <Tag>769px</Tag> ou mais, o usuário
              visualizará a versão <Highlight>Desktop</Highlight>.
            </p>
          </InfoCard>
        </Section>

        {/* ── Área segura ───────────────────────────────────── */}
        <Section id="area-segura" icon={<ShieldAlert size={15} />} title="Área segura">
          <div className="flex flex-col gap-4">
            <InfoCard>
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "10px" }}>
                A <Highlight>"Área Segura"</Highlight> é a seção do banner que{" "}
                <strong style={{ color: "#f87171", textDecoration: "underline", textDecorationColor: "rgba(248,113,113,0.5)" }}>
                  nunca vai ser ocultada
                </strong>
                , independentemente do tamanho da tela em que o usuário estiver visualizando a loja. É{" "}
                <Highlight>dentro da área segura</Highlight> que devem ser posicionados a{" "}
                <Accent>Chamada</Accent>, o <Accent>CTA</Accent> e os{" "}
                <Accent>textos complementares</Accent> do banner.
              </p>
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "10px" }}>
                Entretanto, é importante <Highlight>evitar a criação de uma divisão nítida</Highlight> entre a Área
                Segura e o restante da imagem. O restante do banner pode conter imagens, cores e elementos gráficos
                que ajudem a compor a campanha e transmitir a mensagem desejada.
              </p>
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8 }}>
                A zona abaixo da Área segura é ocupada por um <Highlight>gradiente</Highlight> que se sobrepõe aos
                banners, criando uma transição suave entre as imagens e o conteúdo da página.
              </p>
            </InfoCard>

            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(90,176,250,0.05)",
                border: "1px solid rgba(90,176,250,0.15)",
              }}
            >
              <p style={{ color: "#7ec8ff", fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>
                A área segura está posicionada no <span style={{ textDecoration: "underline" }}>centro</span> dos banners.
              </p>
              <p style={{ color: "#9ca3af", fontSize: "13px" }}>
                Clique duas vezes nas imagens abaixo para ampliá-las e/ou fazer o download.
              </p>
            </div>

            {/* Safe area images replaced by coded diagrams */}
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col gap-3">
                <BannerSafeAreaDiagram mode="desktop" />
                <p style={{ color: "#6b7280", fontSize: "12px", fontStyle: "italic", textAlign: "center" }}>
                  Esquema da área segura para o formato <Highlight>Desktop</Highlight> (2560×544px)
                </p>
              </div>

              <div className="flex flex-col gap-3 max-w-[768px] mx-auto w-full">
                <BannerSafeAreaDiagram mode="mobile" />
                <p style={{ color: "#6b7280", fontSize: "12px", fontStyle: "italic", textAlign: "center" }}>
                  Esquema da área segura para o formato <Highlight>Mobile</Highlight> (768×544px)
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Temas ─────────────────────────────────────────── */}
        <Section id="temas" icon={<Palette size={15} />} title="Temas">
          <div className="flex flex-col gap-4">
            <InfoCard>
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "6px" }}>
                A NeloStore possui <Highlight>2 temas de cores: Dark e Light</Highlight>. O usuário possui liberdade
                para alternar entre os temas conforme sua preferência.
              </p>
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8 }}>
                É <strong style={{ color: "#f87171", textDecoration: "underline", textDecorationColor: "rgba(248,113,113,0.5)" }}>obrigatório</strong>{" "}
                que todo banner seja adaptado para <Highlight>ambos os temas</Highlight>, a fim de tornar a experiência
                de uso da loja consistente, sem problemas de contraste entre cores.
              </p>
            </InfoCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dark */}
              <div
                className="p-5 rounded-2xl flex flex-col gap-3"
                style={{
                  background: "rgba(10,10,12,0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#1a1a2e" }} />
                  <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600 }}>Tema Escuro / Dark</span>
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-4 marker:text-[#5AB0FA]">
                  {[
                    <>Background em <Highlight>cores escuras</Highlight></>,
                    <>Textos gerais na cor <Highlight>branca</Highlight></>,
                    <>CTAs e textos em destaque: cores <Accent>mais claras e vibrantes</Accent>, usados em <Highlight>poucos lugares</Highlight></>,
                  ].map((item, i) => (
                    <li key={i} className="pl-1">
                      <span style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6, display: "block" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Light */}
              <div
                className="p-5 rounded-2xl flex flex-col gap-3"
                style={{
                  background: "rgba(245,247,250,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f5f5f5", border: "1px solid #ccc" }} />
                  <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600 }}>Tema Claro / Light</span>
                </div>
                <ul className="flex flex-col gap-2 list-disc pl-4 marker:text-[#5AB0FA]">
                  {[
                    <>Background em cores <Highlight>muito claras e pouco saturadas</Highlight></>,
                    <>Textos gerais na cor <Highlight>preta</Highlight></>,
                    <>CTAs e textos em destaque: cores <Accent>vibrantes com tons escuros</Accent> para garantir contraste</>,
                    <><strong style={{ color: "#f87171" }}>Evitar</strong> glows, brilhos e gradientes no fundo</>,
                  ].map((item, i) => (
                    <li key={i} className="pl-1">
                      <span style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6, display: "block" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Tipografias ───────────────────────────────────── */}
        <Section id="tipografias" icon={<Type size={15} />} title="Tipografias">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
              Os banners podem utilizar <Highlight>diferentes tipografias</Highlight> de acordo com o tema ou assunto principal:
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  brand: "Marca Nelogica",
                  title: "Effra",
                  secondary: "Segoe UI, Tahoma",
                  color: "#5AB0FA",
                },
                {
                  brand: "Plataforma Profit",
                  title: "Effra",
                  secondary: "Segoe UI, Tahoma",
                  color: "#5AB0FA",
                },
                {
                  brand: "Plataforma BlackArrow",
                  title: "Archivo",
                  secondary: "Segoe UI, Tahoma",
                  color: "#fb923c",
                },
                {
                  brand: "Plataforma Vector",
                  title: "Effra",
                  secondary: "Segoe UI, Tahoma",
                  color: "#5AB0FA",
                },
                {
                  brand: "Campanhas / Eventos",
                  title: "Tipografias próprias da campanha",
                  secondary: null,
                  color: "#00A1F6",
                },
                {
                  brand: "Outros (padrão)",
                  title: "Segoe UI, Tahoma",
                  secondary: null,
                  color: "#9ca3af",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      width: "3px",
                      height: "36px",
                      borderRadius: "2px",
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span style={{ color: "#6b7280", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                      {item.brand}
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span style={{ color: item.color, fontSize: "14px", fontWeight: 600 }}>
                        {item.title}
                      </span>
                      {item.secondary && (
                        <>
                          <span style={{ color: "#374151" }}>+</span>
                          <span style={{ color: "#9ca3af", fontSize: "13px" }}>{item.secondary} (secundárias)</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        </Section>

        {/* ── Recomendações ─────────────────────────────────── */}
        <Section id="recomendacoes" icon={<CheckCircle2 size={15} />} title="Recomendações">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
              Apesar de cada produto e campanha possuir sua própria identidade, é{" "}
              <Highlight>imprescindível</Highlight> que os banners mantenham uma <Accent>coesão entre si</Accent>.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Layout centralizado",
                  desc: (
                    <>
                      Sempre que possível, os elementos e textos dos banners devem ser{" "}
                      <Highlight>alinhados no centro horizontal</Highlight>. O alinhamento à esquerda não é proibido,
                      mas o alinhamento centralizado faz com que o banner fique bem enquadrado em qualquer tamanho
                      de tela, sem que os limites da área de segurança sejam notados.
                    </>
                  ),
                },
                {
                  title: "Logotipo",
                  desc: (
                    <>
                      Se o produto/campanha possuir um logotipo, o mesmo deve ser posicionado{" "}
                      <Highlight>acima da chamada e do CTA</Highlight>.
                    </>
                  ),
                },
                {
                  title: "Chamada",
                  desc: (
                    <>
                      Não há limite de caracteres estipulado, mas deve-se{" "}
                      <Highlight>evitar o uso de texto em excesso</Highlight> — o usuário dificilmente
                      interromperá sua navegação para ler um parágrafo completo. Recomenda-se o uso de{" "}
                      <Accent>palavras-chave</Accent>.
                    </>
                  ),
                },
                {
                  title: "Botão / CTA",
                  desc: (
                    <>
                      Usar formato <Highlight>retangular com cantos arredondados</Highlight>. Texto inteiramente em{" "}
                      <Highlight>CAIXA ALTA</Highlight>. Dar preferência por Call To Actions de{" "}
                      <Accent>texto curto</Accent>, utilizando um{" "}
                      <strong style={{ color: "#7ec8ff" }}>verbo no imperativo</strong>. Exemplos:{" "}
                      {['"Confira os planos"', '"Saiba mais"', '"Conheça"', '"Teste grátis"'].map((ex, i, arr) => (
                        <span key={i}>
                          <Tag>{ex}</Tag>
                          {i < arr.length - 1 ? " " : ""}
                        </span>
                      ))}
                    </>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl"
                  style={{
                    background: "rgba(52,211,153,0.04)",
                    border: "1px solid rgba(52,211,153,0.12)",
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: "#34d399", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>{item.title}</p>
                    <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>
        </Section>

        {/* ── Não fazer ─────────────────────────────────────── */}
        <Section id="nao-fazer" icon={<XCircle size={15} />} title="Não fazer">
          <div className="flex flex-col gap-3">
            {[
              {
                title: "Baixo contraste",
                desc: (
                  <>
                    <strong style={{ color: "#f87171" }}>Não utilize</strong> cores pouco contrastantes entre o plano de
                    fundo e os textos dos banners. Exemplo: fundo amarelo com fonte em cor amarela ou branca.
                  </>
                ),
              },
              {
                title: "Desacordo com os temas da loja",
                desc: (
                  <>
                    <strong style={{ color: "#f87171" }}>Não crie</strong> banners para o tema{" "}
                    <Highlight>dark</Highlight> com o fundo muito claro ou muito vibrante. Da mesma forma,{" "}
                    <strong style={{ color: "#f87171" }}>não crie</strong> banner para o tema{" "}
                    <Highlight>light</Highlight> que possua uma cor escura ou muito saturada no fundo. Fazer isso
                    pode comprometer a <Accent>legibilidade do restante da interface da loja</Accent>.
                  </>
                ),
              },
              {
                title: "Ausência de Call To Action",
                desc: (
                  <>
                    <strong style={{ color: "#f87171" }}>Sempre apresente</strong> uma frase ou "botão" de CTA no
                    banner. A probabilidade do usuário clicar no banner é muito maior quando é utilizado um{" "}
                    <Highlight>CTA claro e visível</Highlight> na arte. Exemplo de CTA:{" "}
                    <Tag>Saiba mais</Tag>.
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(248,113,113,0.05)",
                  border: "1px solid rgba(248,113,113,0.15)",
                }}
              >
                <AlertTriangle size={16} style={{ color: "#f87171", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p style={{ color: "#fca5a5", fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>{item.title}</p>
                  <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── SEÇÃO: Arquivos ───────────────────────────────── */}
        <div
          id="arquivos"
          className="flex items-center gap-3 mb-8"
          style={{ scrollMarginTop: "32px" }}
        >
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <span
            style={{
              color: "#5AB0FA",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Arquivos
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* ── Formato ───────────────────────────────────────── */}
        <Section id="formato" icon={<FileType2 size={15} />} title="Formato">
          <InfoCard>
            <div className="flex flex-col gap-3">
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8 }}>
                As imagens dos banners devem ser entregues em formato{" "}
                <Tag>.webp</Tag>, por ser um formato{" "}
                <Highlight>otimizado para a exibição em ambientes web</Highlight>.
              </p>
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(90,176,250,0.06)",
                  border: "1px solid rgba(90,176,250,0.15)",
                }}
              >
                <Info size={15} style={{ color: "#5AB0FA", flexShrink: 0 }} />
                <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6 }}>
                  As imagens devem ser exportadas em <Highlight>1x</Highlight>, exatamente nos tamanhos{" "}
                  <Tag>2560×544</Tag> e <Tag>768×544</Tag>.
                </p>
              </div>
            </div>
          </InfoCard>
        </Section>

        {/* ── Entregáveis ───────────────────────────────────── */}
        <Section id="entregaveis" icon={<FileArchive size={15} />} title="Entregáveis">
          <div className="flex flex-col gap-4">
            <InfoCard>
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "12px" }}>
                Um mesmo banner é constituído de <Highlight>diversas imagens diferentes</Highlight>. Isto é necessário
                para que o banner possa ser exibido corretamente em diferentes dispositivos, além de se adaptar ao
                tema utilizado pelo usuário e ao idioma em que ele está visualizando a loja.
              </p>

              {/* Variações */}
              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p style={{ color: "#7ec8ff", fontSize: "13px", fontWeight: 600, marginBottom: "10px" }}>
                  Variações necessárias para cada banner:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Idiomas", items: ["Português", "Inglês", "Espanhol"] },
                    { label: "Temas", items: ["Dark", "Light"] },
                    { label: "Dimensões", items: ["Desktop (2560×544)", "Mobile (768×544)"] },
                  ].map((group) => (
                    <div key={group.label} className="flex flex-col gap-1.5">
                      <span style={{ color: "#5AB0FA", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                        {group.label}
                      </span>
                      {group.items.map((item) => (
                        <span key={item} style={{ color: "#9ca3af", fontSize: "13px" }}>{item}</span>
                      ))}
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center gap-2 mt-4 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(90,176,250,0.08)", border: "1px solid rgba(90,176,250,0.2)" }}
                >
                  <span style={{ color: "#7ec8ff", fontSize: "13px", fontWeight: 600 }}>Total:</span>
                  <span style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600 }}>12 artes</span>
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>por banner</span>
                </div>
              </div>

              {/* Exemplo de entregável */}
              <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "10px" }}>
                Exemplo de arquivo <Tag>.zip</Tag> a ser encaminhado para o time de desenvolvimento:
              </p>
              <a
                href="https://nelogica.sharepoint.com/sites/UX/Documentos%20Compartilhados/Forms/AllItems.aspx?id=%2Fsites%2FUX%2FDocumentos%20Compartilhados%2FNeloStore%2F1%2E%20Banners%2FM%C3%AAs%20das%20Automa%C3%A7%C3%B5es%2FautomationMonth25%2Dhome%2Ezip&parent=%2Fsites%2FUX%2FDocumentos%20Compartilhados%2FNeloStore%2F1%2E%20Banners%2FM%C3%AAs%20das%20Automa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl transition-all hover:scale-[1.01]"
                style={{
                  background: "rgba(90,176,250,0.08)",
                  border: "1px solid rgba(90,176,250,0.2)",
                  textDecoration: "none",
                  display: "flex",
                }}
              >
                <FileArchive size={16} style={{ color: "#5AB0FA" }} />
                <span style={{ color: "#7ec8ff", fontSize: "14px", fontWeight: 600 }}>
                  automationMonth25-home.zip
                </span>
                <ExternalLink size={12} style={{ color: "#5AB0FA", marginLeft: "auto" }} />
              </a>
            </InfoCard>
          </div>
        </Section>

        {/* ── Templates ─────────────────────────────────────── */}
        <Section id="templates" icon={<Sparkles size={15} />} title="Templates">
          <InfoCard>
            <p style={{ color: "#c9d1d9", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
              Para criar um banner para a NeloStore seguindo os padrões estabelecidos, utilize os arquivos abaixo:
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Photoshop", file: "nelostore-banners-template.psd", ext: ".psd", color: "#5AB0FA" },
                { label: "Illustrator", file: "nelostore-banners-template.eps", ext: ".eps", color: "#fb923c" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `rgba(${item.color === "#5AB0FA" ? "90,176,250" : "251,146,60"},0.1)`,
                      border: `1px solid rgba(${item.color === "#5AB0FA" ? "90,176,250" : "251,146,60"},0.2)`,
                      flexShrink: 0,
                    }}
                  >
                    <FileType2 size={16} style={{ color: item.color }} />
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span style={{ color: "#6b7280", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                      {item.label}
                    </span>
                    <span style={{ color: "#c9d1d9", fontSize: "13px", fontWeight: 600 }}>{item.file}</span>
                  </div>
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#9ca3af",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "not-allowed",
                      opacity: 0.6,
                    }}
                    disabled
                    title="Link em breve"
                  >
                    <Download size={12} />
                    Baixar
                  </button>
                </div>
              ))}
            </div>
          </InfoCard>
        </Section>

        {/* ── Exemplos ──────────────────────────────────────── */}
        <Section id="exemplos" icon={<GalleryHorizontal size={15} />} title="Exemplos">
          <div className="flex flex-col gap-4">
            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>
              Inspire-se nos exemplos de banners já criados para a NeloStore! Clique em uma imagem para visualizá-la
              em tela cheia.
            </p>
            <ExamplesGallery />
          </div>
        </Section>
      </div>
    </div>
  );
}
