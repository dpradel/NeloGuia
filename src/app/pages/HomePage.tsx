import { Link } from "react-router";
import { ArrowRight, Palette, Layers } from "lucide-react";
import neloStoreIcon from "../../assets/nelostore.svg";
import nelogicaIcon from "../../assets/nelogica.svg";
import blackArrowIcon from "../../assets/black-arrow.svg";

export function HomePage() {
  return (
    <div className="min-h-full flex flex-col px-8 py-12 md:px-12 md:py-16 max-w-5xl mx-auto">
      <header className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        <h1 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "40px", lineHeight: "1.2", color: "white", marginBottom: "16px", letterSpacing: "-0.02em" }}>
          Seja bem-vindo(a) ao NeloGuia!
        </h1>
        <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "rgba(255,255,255,0.6)" }} className="max-w-2xl">
          Encontre guias para a criação de artes, templates, padrões e muito mais. 
          A central unificada para a consistência visual de nossos produtos.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link 
          to="/nelostore" 
          className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] border border-transparent hover:border-[#5AB0FA]/30 transition-all duration-300 flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#5AB0FA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-[6px] bg-[#5AB0FA]/20 border border-[#5AB0FA]/30 flex items-center justify-center text-[#5AB0FA] mb-4 group-hover:bg-[#5AB0FA]/30 transition-colors">
              <img src={neloStoreIcon} alt="NeloStore" className="w-6 h-6 object-contain" />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", color: "white", marginBottom: "8px" }}>NeloStore</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)" }} className="mb-6 flex-grow">
              Guias de banners, especificações técnicas e diretrizes para a loja de produtos e serviços.
            </p>
            <div className="flex items-center text-[#5AB0FA] text-sm font-semibold mt-auto">
              Explorar <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link 
          to="/nelogica" 
          className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] border border-transparent hover:border-[#00A1F6]/30 transition-all duration-300 flex flex-col"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A1F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-[6px] bg-[#00A1F6]/20 border border-[#00A1F6]/30 flex items-center justify-center text-[#00A1F6] mb-4 group-hover:bg-[#00A1F6]/30 transition-colors">
              <img src={nelogicaIcon} alt="Nelogica" className="w-6 h-6 object-contain" />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", color: "white", marginBottom: "8px" }}>Nelogica</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)" }} className="mb-6 flex-grow">
              Diretrizes de marca, aplicações institucionais e padrões corporativos.
            </p>
            <div className="flex items-center text-[#00A1F6] text-sm font-semibold mt-auto">
              Explorar <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link 
          to="/blackarrow" 
          className="group relative overflow-hidden rounded-[8px] p-[16px] bg-[#2b2b2b] border border-transparent hover:border-[#fb923c]/30 transition-all duration-300 flex flex-col opacity-60 hover:opacity-100"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-[6px] bg-[#fb923c]/20 border border-[#fb923c]/30 flex items-center justify-center text-[#fb923c] mb-4 group-hover:bg-[#fb923c]/30 transition-colors">
              <img src={blackArrowIcon} alt="BlackArrow" className="w-6 h-6 object-contain" />
            </div>
            <h2 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "18px", color: "white", marginBottom: "8px" }}>BlackArrow</h2>
            <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)" }} className="mb-6 flex-grow">
              Padrões de design, tipografia e assets para a plataforma internacional.
            </p>
            <div className="flex items-center text-[#fb923c] text-sm font-semibold mt-auto">
              Explorar <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ease-out fill-mode-both">
        <div className="rounded-[8px] bg-[#2b2b2b] p-[16px] flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Palette className="text-[#5AB0FA]" size={24} />
            <h3 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Cores & Tipografia</h3>
          </div>
          <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)" }}>
            Mantenha a consistência visual utilizando nossa paleta de cores oficial e a família tipográfica recomendada. O contraste adequado e o uso correto das fontes são essenciais para a acessibilidade.
          </p>
        </div>

        <div className="rounded-[8px] bg-[#2b2b2b] p-[16px] flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Layers className="text-[#5AB0FA]" size={24} />
            <h3 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Componentes UI</h3>
          </div>
          <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "rgba(255,255,255,0.4)" }}>
            Todos os componentes visuais, como botões, modais e formulários, foram projetados para se adaptarem aos temas Light e Dark, mantendo o aspecto glassmorphism exigido pelo sistema.
          </p>
        </div>
      </div>
    </div>
  );
}


