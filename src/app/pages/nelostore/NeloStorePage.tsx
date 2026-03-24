import { Link } from "react-router";
import { ChevronLeft, GalleryHorizontal, Palette, LayoutGrid } from "lucide-react";

export function NeloStorePage() {
  return (
    <div className="min-h-full flex flex-col px-8 py-12 md:px-12 md:py-16 max-w-5xl mx-auto">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 mb-8" style={{ color: "#4b5563", fontSize: "13px" }}>
        <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
        <span>/</span>
        <span style={{ color: "#9ca3af" }}>NeloStore</span>
      </div>

      <header className="mb-[56px]">
        <div className="flex items-center gap-4 mb-4 group">
          <Link 
            to="/" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            title="Voltar"
          >
            <ChevronLeft size={24} />
          </Link>
          <h1 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "32px", lineHeight: "1", color: "white" }}>
            NeloStore
          </h1>
        </div>
        <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "24px", color: "rgba(255,255,255,0.5)", marginTop: "12px" }} className="max-w-2xl">
          Central de diretrizes e componentes visuais para a loja. Navegue pelas categorias abaixo para acessar os guias específicos.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          to="/nelostore/banners" 
          className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] border border-transparent hover:border-[#5AB0FA]/30 transition-all duration-300"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-[6px] bg-[#5AB0FA]/10 border border-[#5AB0FA]/20 flex items-center justify-center text-[#5AB0FA] mb-6 group-hover:bg-[#5AB0FA]/20 transition-all">
              <GalleryHorizontal size={24} />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "white", marginBottom: "8px" }}>Banners</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Especificações completas, áreas seguras, temas e exemplos para a criação de banners principais.
            </p>
            <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "12px" }} className="inline-flex items-center text-[#5AB0FA] group-hover:translate-x-1 transition-transform">
              Acessar Guia
            </span>
          </div>
        </Link>

        {/* Em breve / Outras categorias */}
        <div className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] opacity-60">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-[6px] bg-white/5 border border-white/10 flex items-center justify-center text-white/40 mb-6">
              <Palette size={24} />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "white", marginBottom: "8px" }}>Cores e Identidade</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Paleta de cores e uso correto da marca na NeloStore.
            </p>
            <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
              Em breve
            </span>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] opacity-60">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-[6px] bg-white/5 border border-white/10 flex items-center justify-center text-white/40 mb-6">
              <LayoutGrid size={24} />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "white", marginBottom: "8px" }}>Componentes</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Cards de produto, selos, botões e navegação estruturada.
            </p>
            <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
              Em breve
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


