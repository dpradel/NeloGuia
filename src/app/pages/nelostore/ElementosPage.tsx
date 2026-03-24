import { Link } from "react-router";
import { Image, RectangleHorizontal, ArrowRight, Clock } from "lucide-react";

export function ElementosPage() {
  return (
    <div className="min-h-screen" style={{ padding: "64px 48px 48px" }}>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8" style={{ color: "#4b5563", fontSize: "13px" }}>
        <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
        <span>/</span>
        <Link to="/nelostore" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">NeloStore</Link>
        <span>/</span>
        <span style={{ color: "#9ca3af" }}>Elementos Personalizáveis</span>
      </div>

      <div className="mb-10">
        <h1 style={{ color: "#ffffff", fontSize: "32px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "10px" }}>
          Elementos Personalizáveis
        </h1>
        <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.7, maxWidth: "580px" }}>
          Seções da loja que podem ser personalizadas conforme a necessidade. Acesse um elemento para visualizar suas
          definições, guias de como personalizá-lo e templates para uso.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span style={{ color: "#4b5563", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Banner e Mini-banner
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        {/* Banners */}
        <Link to="/nelostore/elementos/banners">
          <div
            className="flex flex-col gap-5 p-6 rounded-2xl transition-all duration-200 hover:scale-[1.01]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(90,176,250,0.2)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-xl"
              style={{
                width: "48px",
                height: "48px",
                background: "rgba(90,176,250,0.1)",
                border: "1px solid rgba(90,176,250,0.25)",
              }}
            >
              <Image size={22} style={{ color: "#5AB0FA" }} />
            </div>
            <div>
              <h3 style={{ color: "#f0f6ff", fontSize: "17px", fontWeight: 600, marginBottom: "6px" }}>
                Banners NeloStore
              </h3>
              <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6 }}>
                Especificações, dimensões, área segura, temas, tipografias, recomendações e templates para criação de banners.
              </p>
            </div>
            <div className="flex items-center gap-1.5 mt-auto" style={{ color: "#5AB0FA", fontSize: "13px", fontWeight: 600 }}>
              <span>Acessar guia</span>
              <ArrowRight size={13} />
            </div>
          </div>
        </Link>

        {/* Mini-banner - coming soon */}
        <div
          className="flex flex-col gap-5 p-6 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            opacity: 0.5,
            cursor: "not-allowed",
          }}
        >
          <div
            className="flex items-center justify-center rounded-xl"
            style={{
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <RectangleHorizontal size={22} style={{ color: "#6b7280" }} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h3 style={{ color: "#9ca3af", fontSize: "17px", fontWeight: 600 }}>
                Mini-banner
              </h3>
              <span
                className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "10px",
                  color: "#6b7280",
                  fontWeight: 600,
                }}
              >
                <Clock size={9} />
                Em breve
              </span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.6 }}>
              Guia de especificações e criação de mini-banners para a NeloStore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


