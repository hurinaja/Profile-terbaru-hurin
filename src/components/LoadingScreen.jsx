import { useState, useEffect } from "react";
export default function LoadingScreen({ done }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setProgress(p => { if (p >= 100) { clearInterval(t); return 100; } return p + 2; }), 30);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "linear-gradient(135deg, #0a0a0f 0%, #12102a 50%, #0a0a0f 100%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      opacity: done ? 0 : 1, pointerEvents: done ? "none" : "all",
      transform: done ? "scale(1.05)" : "scale(1)",
    }}>
      <div style={{ position: "relative", marginBottom: 40 }}>
        <div style={{ width: 120, height: 120, borderRadius: "50%", border: "2px solid rgba(124,92,252,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "absolute", inset: -4, borderRadius: "50%", border: "3px solid transparent", borderTopColor: "#7c5cfc", animation: "spin 1.2s linear infinite" }} />
          <div style={{ position: "absolute", inset: -12, borderRadius: "50%", border: "2px solid transparent", borderTopColor: "#f472b6", animation: "spin 2s linear infinite reverse" }} />
          <span style={{ fontSize: 40 }}>⚡</span>
        </div>
      </div>
      <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, color: "#e8e8f0", marginBottom: 8 }}>Hurin Adhana Syakira</h1>
      <p style={{ color: "#9999bb", marginBottom: 32, fontSize: 14 }}>Portfolio</p>
      <div style={{ width: 280, height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, #7c5cfc, #f472b6)", borderRadius: 2, width: `${progress}%`, transition: "width 0.1s ease" }} />
      </div>
      <p style={{ color: "#6666aa", marginTop: 12, fontSize: 13 }}>{progress}%</p>
    </div>
  );
}