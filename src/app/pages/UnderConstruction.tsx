import { HardHat } from 'lucide-react';

export function UnderConstruction({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-10 text-center">
      <div className="bg-[#2B2B2B] p-10 rounded-2xl ring-1 ring-white/5 shadow-2xl flex flex-col items-center max-w-md w-full relative overflow-hidden">
        {/* Decorative backdrop */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#5AB0FA]/20 blur-[50px] rounded-full pointer-events-none" />
        
        <div className="w-16 h-16 bg-[#5AB0FA]/10 text-[#5AB0FA] rounded-2xl flex items-center justify-center mb-6 ring-1 ring-[#5AB0FA]/30">
          <HardHat size={32} />
        </div>
        
        <h1 className="text-2xl font-semibold text-white mb-3">
          {title}
        </h1>
        
        <p className="text-white/60 text-sm leading-relaxed">
          Esta seção ainda está sendo documentada pela nossa equipe de Design. 
          Em breve, você encontrará todas as diretrizes e componentes da marca aqui.
        </p>
      </div>
    </div>
  );
}


