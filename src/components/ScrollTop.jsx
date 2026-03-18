import { useState, useEffect } from "react";
export default function ScrollTop() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const h = () => setVis(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 999,
      width: 48, height: 48, borderRadius: "50%", background: "var(--accent)", border: "none",
      color: "#fff", fontSize: 20, cursor: "pointer", transition: "all 0.3s",
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
      boxShadow: "0 8px 20px var(--shadow)", display: "flex", alignItems: "center", justifyContent: "center",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = vis ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)"; }}
    >↑</button>
  );
}