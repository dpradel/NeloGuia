import { Link } from "react-router";
import { Construction } from "lucide-react";

export function BlackArrowPage() {
  return (
    <div className="min-h-full flex flex-col px-8 py-12 md:px-12 md:py-16 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8" style={{ color: "#4b5563", fontSize: "13px" }}>
        <Link to="/" style={{ color: "#6b7280" }} className="hover:text-white transition-colors">Início</Link>
        <span>/</span>
        <span style={{ color: "#9ca3af" }}>BlackArrow</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 mt-16 text-center">
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{
            width: "72px",
            height: "72px",
            background: "rgba(251,146,60,0.1)",
            border: "1px solid rgba(251,146,60,0.2)",
          }}
        >
          <Construction size={32} style={{ color: "#fb923c" }} />
        </div>
        <div>
          <h1 style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", fontWeight: 600, fontSize: "28px", color: "#ffffff", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            BlackArrow
          </h1>
          <p style={{ fontFamily: "'Tahoma', sans-serif", fontWeight: 400, fontSize: "15px", color: "#6b7280", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto" }}>
            O guia de marca da BlackArrow está em construção. Em breve você encontrará aqui todos os materiais e diretrizes.
          </p>
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.15)" }}
        >
          <Construction size={14} style={{ color: "#fb923c" }} />
          <span style={{ color: "#fb923c", fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em" }}>EM CONSTRUÇÃO</span>
        </div>
      </div>
    </div>
  );
}
