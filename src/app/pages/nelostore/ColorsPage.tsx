import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, Copy, Check, Info } from "lucide-react";

function ColorCard({ name, hex, description, darkText = false }: { name: string, hex: string, description: string, darkText?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-3 group">
      <div 
        className="w-full h-24 rounded-2xl relative overflow-hidden flex items-end p-3 cursor-pointer ring-1 ring-white/10 hover:ring-white/30 transition-all shadow-lg"
        style={{ backgroundColor: hex }}
        onClick={handleCopy}
      >
        <div className={`flex items-center gap-2 font-mono text-xs font-bold px-2 py-1 rounded bg-black/20 backdrop-blur-md ${darkText ? 'text-black' : 'text-white'} group-hover:scale-105 transition-transform`}>
           {copied ? <Check size={14} /> : <Copy size={14} />} {hex}
        </div>
      </div>
      <div>
        <h3 className={`font-semibold text-[15px] ${darkText ? 'text-black' : 'text-white'}`}>{name}</h3>
        <p className={`text-[13px] leading-relaxed mt-1 ${darkText ? 'text-black/60' : 'text-white/50'}`}>{description}</p>
      </div>
    </div>
  );
}

function GradientCard({ name, css, description }: { name: string, css: string, description: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`background: ${css};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-3 group">
      <div 
        className="w-full h-32 rounded-2xl relative overflow-hidden flex items-end p-4 cursor-pointer ring-1 ring-white/10 hover:ring-white/30 transition-all shadow-lg"
        style={{ background: css }}
        onClick={handleCopy}
      >
        <div className="flex items-center gap-2 font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-black/30 backdrop-blur-md text-white group-hover:scale-105 transition-transform shadow-xl">
           {copied ? <Check size={14} /> : <Copy size={14} />} COPIAR CSS
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold text-[15px]">{name}</h3>
        <p className="text-white/50 text-[13px] leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  );
}

export function NeloStoreColorsPage() {
  return (
    <div className="min-h-full flex flex-col px-8 py-12 md:px-12 md:py-16 max-w-6xl mx-auto animate-page-enter">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8" style={{ color: "#4b5563", fontSize: "13px" }}>
        <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
        <span>/</span>
        <Link to="/nelostore" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">NeloStore</Link>
        <span>/</span>
        <span style={{ color: "#9ca3af" }}>Cores e Identidade</span>
      </div>

      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <Link 
            to="/nelostore" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            title="Voltar"
          >
            <ChevronLeft size={24} />
          </Link>
          <h1 className="font-semibold text-[32px] text-white leading-tight font-['Segoe_UI',Tahoma,sans-serif]">
            Cores e Identidade
          </h1>
        </div>
        <p className="font-['Tahoma',sans-serif] font-normal text-[15px] leading-relaxed text-white/50 mt-3 max-w-3xl">
          Tokens visuais e guias de aplicação das cores e gradientes oficiais da NeloStore.
          Clique em qualquer amostra para copiar instantaneamente o seu valor.
        </p>
      </header>

      {/* Brand Colors */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold text-white">Cores de Marca (Brand)</h2>
          <div className="h-px flex-1 bg-white/10 ml-4 max-w-xs"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <ColorCard name="Brand Light" hex="#5AB0FA" description="Cor primária secundária. Usada em links, ícones e destaques." />
          <ColorCard name="Brand Primary" hex="#00A1F6" description="A cor principal da marca. Usada em fundos e botões primários." />
          <ColorCard name="Brand Dark" hex="#0072B1" description="Variação escura para hover em botões e contrastes intensos." />
          <ColorCard name="Brand Glow" hex="#7EC8FF" description="Usada para flows sutis, textos de badges e realces leves." darkText />
        </div>
      </section>

      {/* Backgrounds */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold text-white">Superfícies e Fundos</h2>
          <div className="h-px flex-1 bg-white/10 ml-4 max-w-xs"></div>
        </div>

        <div className="p-6 rounded-2xl bg-[#212121] border border-white/5 mb-8">
           <div className="flex items-center gap-2 mb-6">
              <span className="px-2 py-1 bg-white/10 text-white text-[10px] uppercase font-bold tracking-wider rounded">Theme: Dark Mode</span>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorCard name="App Background" hex="#141414" description="Fundo principal expansivo das páginas de base." />
            <ColorCard name="Component Surface" hex="#1a1a1a" description="Fundo secundário genérico, como sidebars." />
            <ColorCard name="Card / Container" hex="#212121" description="Superfície para cards elevados e divisões." />
            <ColorCard name="Card Hover / Stroke" hex="#2b2b2b" description="Stroke de elementos ou hover sutil em fundos." />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#f3f5f9] border border-black/5">
           <div className="flex items-center gap-2 mb-6">
              <span className="px-2 py-1 bg-black/10 text-black text-[10px] uppercase font-bold tracking-wider rounded">Theme: Light Mode</span>
           </div>
           <p className="text-black/60 text-sm mb-4">Nota: Cores e fundos utilizados para LPs com temas de alta luminosidade.</p>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorCard name="App Background" hex="#f3f5f9" darkText description="Fundo principal expansivo base claro." />
            <ColorCard name="Component Surface" hex="#ffffff" darkText description="Superfície genérica leve para cards visíveis." />
            <ColorCard name="Sidebar / Overlay" hex="#ccd4df" darkText description="Fundo texturizado e overlay limpo." />
            <ColorCard name="Stroke / Border" hex="#d1d5db" darkText description="Bordas demarcando inputs e separadores." />
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold text-white">Fórmulas de Gradientes</h2>
          <div className="h-px flex-1 bg-white/10 ml-4 max-w-xs"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GradientCard 
            name="Brand Primary Gradient" 
            css="linear-gradient(90deg, #00A1F6 0%, #0072B1 100%)" 
            description="Gradiente horizontal oficial de botão primário." 
          />
          <GradientCard 
            name="Overlay Fade Bottom (Dark)" 
            css="linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(20,20,20,0.8) 70%, #141414 100%)" 
            description="Use isso para esvanecer conteúdo nas bordas inferiores gradativamente." 
          />
          <GradientCard 
            name="Subtle Secondary Glow" 
            css="radial-gradient(circle at top right, rgba(0,161,246,0.15) 0%, rgba(20,20,20,0) 60%)" 
            description="Preenchimento estático radial para criar a ilusão de um feixe de luz azul saindo das bordas." 
          />
          <GradientCard 
            name="Glassmorphism Border" 
            css="linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)" 
            description="Use-o associado ao CSS `border-image` ou máscaras para replicar bordas vidradas com um leve highlight luminoso direcional." 
          />
        </div>
      </section>

      {/* Guidelines Box */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-[#5AB0FA]/30 flex flex-col md:flex-row gap-8 items-start mb-8 shadow-2xl">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-[#5AB0FA]/20 text-[#5AB0FA] flex items-center justify-center">
            <Info size={24} />
        </div>
        <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-xl">Como utilizar esses guias nos componentes de marketing?</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-4xl">
               As cores apresentadas aqui nesta tela são a base fundacional do nosso <strong className="text-white font-semibold">Design System (Tokens)</strong>.
               <br/><br/>
               Ao desenvolver ou reproduzir elementos para as Landing Pages, como cards, menus e botões, <strong className="text-white">você não deve usar códigos ad-hoc</strong> ou tentar copiar via "conta-gotas". Utilize diretamente os códigos HEX mapeados acima de acordo com o cenário especificado. Se o botão for "Erro", não use `#FF0000`, aplique o `Alert Red: #ef4444`. 
               <br/><br/>
               Para aprender como estes *Tokens* ganham formato em um design prático de interação e estrutura DOM, acesse a nossa aba interativa de <Link to="/nelostore/componentes" className="text-[#5AB0FA] font-bold hover:underline">Componentes estruturados</Link>.
            </p>
        </div>
      </div>

    </div>
  );
}
