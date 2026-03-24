import { useState, useRef } from "react";
import { Link } from "react-router";
import { ChevronLeft, UploadCloud, X, Moon, Sun } from "lucide-react";
import HomeXLarge1200PxDark from "../../../imports/HomeXLarge1200Px";
import HomeXLarge1200PxLight from "../../../imports/HomeXLarge1200Px-5-30883";
import { useSidebar } from "../../context/SidebarContext";
import defaultDark from "../../../assets/banners/default_dark.png";
import defaultLight from "../../../assets/banners/default_light.png";
import { Button } from "../../components/Button";

export function NeloStoreBannerSimulator() {
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setIsCollapsed } = useSidebar();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBannerUrl(e.target?.result as string);
        setIsCollapsed(true); // Auto-collapse sidebar
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setBannerUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const effectiveBanner = bannerUrl || (isDarkMode ? defaultDark : defaultLight);

  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 mb-16 shadow-2xl">
      {/* Top Header */}
      <div className="p-6 md:p-8 border-b border-white/5 bg-[#1a1a1a]/80 backdrop-blur-md">
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="flex items-center gap-2 text-[#5AB0FA] text-[11px] font-[700] tracking-[0.12em] uppercase">
                Pré-visualização
              </span>
              <h2 className="text-[#ffffff] text-[24px] font-[600] tracking-[-0.02em] leading-[1.15]">
                Teste seu banner
              </h2>
              <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                Faça o upload da sua arte (1016x464) para testar os estados Dark/Light mode antes de finalizar na NeloStore.
              </p>
            </div>

            <div className="flex-none flex items-center gap-4">
              <div 
                className="flex items-center p-1 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <button
                  onClick={() => setIsDarkMode(false)}
                  className={`flex items-center justify-center p-2 rounded-lg transition-colors ${!isDarkMode ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/80'}`}
                  title="Tema Light"
                >
                  <Sun size={18} />
                </button>
                <button
                  onClick={() => setIsDarkMode(true)}
                  className={`flex items-center justify-center p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-[#5AB0FA]/20 text-[#5AB0FA]' : 'text-white/40 hover:text-white/80'}`}
                  title="Tema Dark"
                >
                  <Moon size={18} />
                </button>
              </div>
              
              {!bannerUrl ? (
                <Button
                  variant="primary"
                  colorTheme="brand"
                  onClick={() => fileInputRef.current?.click()}
                  leftIcon={<UploadCloud size={18} />}
                >
                  Fazer upload do banner
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  onClick={clearImage}
                  leftIcon={<X size={16} />}
                >
                  Remover imagem
                </Button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`pb-20 ${isDarkMode ? "bg-[#141414]" : "bg-[#ccd4df]"}`}>
        <div className="p-4 md:p-8 flex justify-center">
          <div 
            className="w-full max-w-[1400px] h-[800px] rounded-2xl overflow-hidden shadow-2xl relative"
            style={{ 
              border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
              background: isDarkMode ? "#212121" : "#f3f5f9"
            }}
          >
            {/* Browser-like Header */}
            <div className={`${isDarkMode ? "bg-[#2d2d2d] border-[#3d3d3d]" : "bg-[#e5e7eb] border-[#d1d5db]"} h-10 border-b flex items-center px-4 gap-2 absolute top-0 left-0 w-full z-20`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className={`${isDarkMode ? "bg-[#1c1c1c] border-[#3a3a3a]" : "bg-white border-[#d1d5db]"} rounded px-3 py-1 flex items-center gap-2 max-w-sm w-full border`}>
                  <span className={`${isDarkMode ? "text-[#888]" : "text-gray-500"} text-[11px]`}>store.nelogica.com.br</span>
                </div>
              </div>
            </div>
            
            <div className={`w-full overflow-hidden ${isDarkMode ? 'bg-[#212121]' : 'bg-[#f3f5f9]'}`}>
              <div style={{ width: "100%", minWidth: "1200px" }}>
                {!bannerUrl && (
                  <div 
                    className="absolute top-[48px] left-0 w-full h-[280px] z-10 flex flex-col items-center justify-center group cursor-pointer" 
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="flex flex-col items-center gap-3 text-white/40 group-hover:text-white/60 transition-all">
                      <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 backdrop-blur-md">
                        <UploadCloud size={32} />
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-extrabold text-sm tracking-widest uppercase">O seu banner será aplicado aqui</span>
                        <span className="text-[11px] font-medium opacity-60">Clique aqui ou arraste seu arquivo para testar</span>
                      </div>
                    </div>
                  </div>
                )}
                {isDarkMode ? (
                  <HomeXLarge1200PxDark bannerUrl={effectiveBanner || undefined} />
                ) : (
                  <HomeXLarge1200PxLight bannerUrl={effectiveBanner || undefined} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

