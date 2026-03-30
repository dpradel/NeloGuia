import { Link } from "react-router";
import { ChevronLeft, Info, MousePointer2, Type, Target } from "lucide-react";

export function NeloStoreComponentsPage() {
  return (
    <div className="min-h-full flex flex-col px-8 py-12 md:px-12 md:py-16 max-w-6xl mx-auto animate-page-enter">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8" style={{ color: "#4b5563", fontSize: "13px" }}>
        <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
        <span>/</span>
        <Link to="/nelostore" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">NeloStore</Link>
        <span>/</span>
        <span style={{ color: "#9ca3af" }}>Componentes Base</span>
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
            Componentes NeloStore
          </h1>
        </div>
        <p className="font-['Tahoma',sans-serif] font-normal text-[15px] leading-relaxed text-white/50 mt-3 max-w-3xl">
          Instruções de interface e comportamento dos componentes da NeloStore para auxiliar no desenvolvimento de Landing Pages de conversão da equipe de marketing.
        </p>
      </header>

      {/* Seção de Botões */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
             <MousePointer2 size={16} />
          </div>
          <h2 className="text-2xl font-semibold text-white">Botão Primário de Conversão (CTA)</h2>
          <div className="h-px flex-1 bg-white/10 ml-4 max-w-xs"></div>
        </div>

        <div className="p-8 rounded-2xl bg-[#141414] border border-white/5 flex flex-col md:flex-row gap-12 items-start mb-6 shadow-xl">
           <div className="flex flex-col gap-6 w-full md:w-1/3">
              <p className="text-white/60 text-[14px] leading-relaxed">
                 O botão de <strong>Primary Action</strong> em nossas LPs utiliza <strong className="text-white">múltiplas camadas de estilização</strong> para garantir o apelo visual de clique.
                 <br/><br/>
                 Ele combina o <strong className="text-[#00A1F6]">Brand Primary Gradient</strong> com um border sutil (<code>#1f72ff</code>) e arredondamento <code>border-radius: 4px</code>.
              </p>
           </div>
           
           <div className="flex-1 flex flex-col gap-8 w-full bg-[#1a1a1a] p-8 rounded-xl ring-1 ring-white/5 shadow-2xl">
              <div className="flex flex-wrap gap-8 items-center">
                 <div className="flex flex-col gap-3 items-center">
                    <span className="text-white/40 text-[11px] font-bold tracking-wider uppercase">Default</span>
                    {/* Botão extraído do BtnSystem */}
                    <div className="relative rounded-[4px] cursor-pointer" style={{ height: "40px", minWidth: "144px", backgroundImage: "linear-gradient(260.965deg, rgb(39, 153, 250) 0%, rgb(4, 99, 200) 75%)" }}>
                       <div className="flex items-center justify-center h-full px-[16px]">
                          <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 700, fontSize: "14px", color: "white" }}>
                             COMPRAR AGORA
                          </span>
                       </div>
                       <div className="absolute inset-0 pointer-events-none rounded-[4px] border border-[#1f72ff]"></div>
                    </div>
                 </div>

                 <div className="flex flex-col gap-3 items-center">
                    <span className="text-white/40 text-[11px] font-bold tracking-wider uppercase">Hover</span>
                    <div className="relative rounded-[4px] cursor-pointer" style={{ height: "40px", minWidth: "144px", backgroundImage: "linear-gradient(90deg, rgba(243, 245, 249, 0.15) 0%, rgba(243, 245, 249, 0.15) 100%), linear-gradient(260.965deg, rgb(39, 153, 250) 0%, rgb(4, 99, 200) 75%)" }}>
                       <div className="flex items-center justify-center h-full px-[16px]">
                          <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 700, fontSize: "14px", color: "white" }}>
                             COMPRAR AGORA
                          </span>
                       </div>
                       <div className="absolute inset-0 pointer-events-none rounded-[4px] border border-[#1686fd]"></div>
                    </div>
                 </div>

                 <div className="flex flex-col gap-3 items-center">
                    <span className="text-white/40 text-[11px] font-bold tracking-wider uppercase">Disabled</span>
                    <div className="relative rounded-[4px] cursor-not-allowed opacity-50" style={{ height: "40px", minWidth: "144px", backgroundImage: "linear-gradient(260.965deg, rgb(39, 153, 250) 0%, rgb(4, 99, 200) 75%)" }}>
                       <div className="flex items-center justify-center h-full px-[16px]">
                          <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 700, fontSize: "14px", color: "white" }}>
                             COMPRAR AGORA
                          </span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="w-full bg-[#111] p-4 rounded-lg border border-white/10 font-mono text-[11px] text-[#A6ACCD] overflow-x-auto">
                 <pre>{`.btn-primary {
  height: 40px;
  min-width: 144px;
  border-radius: 4px;
  background-image: linear-gradient(260deg, #2799FA 0%, #0463C8 75%);
  border: 1px solid #1f72ff;
  color: #FFFFFF;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  font-weight: 700;
  font-size: 14px;
}

.btn-primary:hover {
  background-image: linear-gradient(90deg, rgba(243,245,249,0.15), rgba(243,245,249,0.15)), 
                    linear-gradient(260deg, #2799FA 0%, #0463C8 75%);
  border-color: #1686fd;
}`}</pre>
              </div>
           </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col md:flex-row gap-6 mt-4">
           <div className="w-full">
               <h4 className="text-white font-bold text-[14px] mb-2">Botões Secundários (Dark/Ghost)</h4>
               <p className="text-white/50 text-[13px] leading-relaxed mb-4">
                  Para ações como "Cancelar", "Saber mais" ou opções secundárias, não utilize borders brancas sólidas. Aplique preenchimentos sutis utilizando a escala de <strong className="text-white tracking-widest">rgba(243,245,249, 0.1)</strong> para o topo do gradiente e <strong className="text-white tracking-widest">0.05</strong> para o fundo, criando uma leve elevação fosca.<br/><br/>As bordas devem ser extremamente discretas: <code>rgba(243,245,249, 0.03)</code> e o hover deve apenas clarear sutilmente o background. Evite usar cores chamativas na fonte.
               </p>
               <div className="relative rounded-[4px] cursor-pointer inline-block" style={{ height: "40px", minWidth: "144px", backgroundImage: "linear-gradient(to bottom, rgba(243,245,249,0.1), rgba(243,245,249,0.05))" }}>
                   <div className="flex items-center justify-center h-full px-[16px]">
                      <span style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 700, fontSize: "14px", color: "white" }}>
                         VER MAIS DETALHES
                      </span>
                   </div>
                   <div className="absolute inset-0 pointer-events-none rounded-[4px] border border-[rgba(243,245,249,0.03)]"></div>
               </div>
           </div>
        </div>
      </section>

      {/* Seção de Inputs */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
             <Type size={16} />
          </div>
          <h2 className="text-2xl font-semibold text-white">Inputs e Formulários Dark Mode</h2>
          <div className="h-px flex-1 bg-white/10 ml-4 max-w-xs"></div>
        </div>

        <div className="p-8 rounded-2xl bg-[#141414] border border-white/5 flex flex-col md:flex-row gap-12 items-start mb-6 shadow-xl">
           <div className="flex flex-col gap-6 w-full md:w-1/3">
              <p className="text-white/60 text-[14px] leading-relaxed">
                 O campo de captura (e-mail, nome, celular) não deve ser branco para Landing Pages escuras. 
                 <br/><br/>
                 O <strong className="text-white">Input NeloStore</strong> possui altura <code>32px</code>, fonte <code>Tahoma 12px</code>, fundo semi-transparente <code>rgba(243,245,249,0.05)</code> e as bordas destacam de uma cor neutra no _Default_ para o <strong className="text-[#00A1F6]">Azul NeloStore (<code>#2689de</code>)</strong> no estado _Focus_.
              </p>
           </div>
           
           <div className="flex-1 flex flex-col gap-8 w-full bg-[#1a1a1a] p-8 rounded-xl ring-1 ring-white/5 shadow-2xl">
              
              <div className="w-full flex flex-col gap-6 max-w-sm">
                 {/* Input Default State */}
                 <div className="flex flex-col gap-1.5 focus-within:ring-0">
                    <div className="flex items-center gap-1">
                       <label className="font-['Segoe_UI',Tahoma,sans-serif] font-semibold text-[12px] text-white">E-mail corporativo</label>
                       <span className="font-['Segoe_UI',Tahoma,sans-serif] font-bold text-[12px] text-white/70">*</span>
                    </div>
                    <div className="relative h-[32px] w-full rounded-[4px] bg-[rgba(243,245,249,0.05)] flex items-center group">
                       <div className="absolute inset-0 rounded-[4px] border border-[rgba(243,245,249,0.05)] pointer-events-none group-focus-within:border-[#2689de] transition-colors"></div>
                       <input 
                         type="text" 
                         placeholder="Ex: joao@empresa.com" 
                         className="w-full h-full bg-transparent outline-none border-none text-[12px] font-['Tahoma',sans-serif] text-white px-[8px] placeholder:text-white/40"
                       />
                    </div>
                 </div>

                 {/* Input Focus State Demonstrativo Visível */}
                 <div className="flex flex-col gap-1.5 pointer-events-none opacity-80">
                    <div className="flex items-center gap-1">
                       <label className="font-['Segoe_UI',Tahoma,sans-serif] font-semibold text-[12px] text-white">Como ficaria no Focus</label>
                    </div>
                    <div className="relative h-[32px] w-full rounded-[4px] bg-[rgba(243,245,249,0.1)] flex items-center">
                       <div className="absolute inset-0 rounded-[4px] border border-[#2689de]"></div>
                       <input 
                         type="text" 
                         value="exemplo"
                         readOnly
                         className="w-full h-full bg-transparent outline-none border-none text-[12px] font-['Tahoma',sans-serif] text-white pl-[8px] pr-[16px]"
                       />
                       <div className="absolute left-[62px] top-1/2 -translate-y-1/2 w-0.5 h-3.5 bg-[#2689de] animate-pulse"></div>
                    </div>
                 </div>
              </div>

              <div className="w-full bg-[#111] p-4 rounded-lg border border-white/10 font-mono text-[11px] text-[#A6ACCD] overflow-x-auto">
                 <pre>{`.input-container {
  height: 32px;
  border-radius: 4px;
  background: rgba(243, 245, 249, 0.05);
  border: 1px solid rgba(243, 245, 249, 0.05);
}

.input-container:focus-within {
  background: rgba(243, 245, 249, 0.1);
  border-color: #2689de;
}

.input-field {
  font-family: 'Tahoma', sans-serif;
  font-size: 12px;
  color: #FFFFFF;
}`}</pre>
              </div>
           </div>
        </div>

      </section>

      {/* Guidelines Box */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-start mb-8 shadow-2xl">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
            <Info size={24} />
        </div>
        <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-white font-bold text-xl">Uso e Recombinação</h3>
            <p className="text-white/70 text-sm leading-relaxed max-w-4xl">
               Esta estrutura em HTML/CSS garante que qualquer página de aterrissagem mantenha os mesmos padrões da plataforma principal de Checkout e da Dashboard NeloStore, garantindo fluidez e confiança para o usuário e otimizando o seu tempo. (Copie as linguagens listadas em cada aba de componente do quadro negro).
            </p>
            <div className="mt-4">
              <Link 
                to="/nelostore/lp-exemplo" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00A1F6] text-white font-bold text-sm hover:bg-[#0088d1] transition-all shadow-lg shadow-blue-500/20"
              >
                Ver Exemplo Prático (LP) <Target size={18} />
              </Link>
            </div>
        </div>
      </div>

    </div>
  );
}
