import { Link } from "react-router";
import { ChevronLeft, GalleryHorizontal, Palette, LayoutGrid, MousePointer2 } from "lucide-react";

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

        <Link 
          to="/nelostore/cores" 
          className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] border border-transparent hover:border-[#5AB0FA]/30 transition-all duration-300"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-[6px] bg-[#5AB0FA]/10 border border-[#5AB0FA]/20 flex items-center justify-center text-[#5AB0FA] mb-6 group-hover:bg-[#5AB0FA]/20 transition-all">
              <Palette size={24} />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "white", marginBottom: "8px" }}>Cores e Identidade</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Paleta de cores, gradientes interativos, variáveis CSS e uso correto da marca na loja.
            </p>
            <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "12px" }} className="inline-flex items-center text-[#5AB0FA] group-hover:translate-x-1 transition-transform">
              Acessar Guia
            </span>
          </div>
        </Link>

        <Link 
          to="/nelostore/componentes" 
          className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] border border-transparent hover:border-[#5AB0FA]/30 transition-all duration-300"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-[6px] bg-[#5AB0FA]/10 border border-[#5AB0FA]/20 flex items-center justify-center text-[#5AB0FA] mb-6 group-hover:bg-[#5AB0FA]/20 transition-all">
              <LayoutGrid size={24} />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "white", marginBottom: "8px" }}>Componentes</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Cards de produto, selos, botões interativos e estrutura DOM baseada nestes estilos.
            </p>
            <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "12px" }} className="inline-flex items-center text-[#5AB0FA] group-hover:translate-x-1 transition-transform">
              Acessar Guia
            </span>
          </div>
        </Link>

        {/* Exemplo LP */}
        <Link 
          to="/nelostore/lp-exemplo" 
          className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] border border-transparent hover:border-emerald-500/30 transition-all duration-300"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-[6px] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500/20 transition-all">
              <MousePointer2 size={24} />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "white", marginBottom: "8px" }}>Exemplo Prático (LP)</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Demonstração ao vivo de todas as cores e componentes aplicados a construção de uma Landing Page real da NeloStore.
            </p>
            <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "12px" }} className="inline-flex items-center text-emerald-500 group-hover:translate-x-1 transition-transform">
              Ver Demonstração
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}


