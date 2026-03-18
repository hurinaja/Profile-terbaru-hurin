import { useState, useEffect } from "react";

export default function Navbar({ t, lang, setLang, dark, setDark, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["home", "about", "skills", "contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "0 24px",
      background: scrolled ? (dark ? "rgba(10,10,15,0.92)" : "rgba(248,247,255,0.92)") : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid var(--border)` : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 22, cursor: "pointer", background: "linear-gradient(135deg, #a78bfa, #f472b6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} onClick={() => scrollTo("home")}>
          RP.
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {navItems.map(k => (
            <button key={k} onClick={() => scrollTo(k)} style={{
              background: active === k ? "rgba(124,92,252,0.15)" : "transparent",
              border: "none", cursor: "pointer", padding: "8px 16px", borderRadius: 8,
              color: active === k ? "var(--accent2)" : "var(--text2)",
              fontFamily: "DM Sans, sans-serif", fontSize: 14, fontWeight: 500,
              transition: "all 0.2s", textTransform: "capitalize",
            }}
              onMouseEnter={e => { if (active !== k) { e.target.style.color = "var(--text)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}}
              onMouseLeave={e => { if (active !== k) { e.target.style.color = "var(--text2)"; e.target.style.background = "transparent"; }}}
            >
              {t.nav[k]}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {/* Lang toggle */}
          <button onClick={() => setLang(l => l === "id" ? "en" : "id")} style={{
            background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 20,
            padding: "6px 14px", cursor: "pointer", color: "var(--text2)", fontSize: 13, fontWeight: 600,
            transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6,
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent2)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text2)"; }}
          >
            🌐 {lang === "id" ? "EN" : "ID"}
          </button>

          {/* Theme toggle */}
          <button onClick={() => setDark(d => !d)} style={{
            background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 20,
            width: 40, height: 40, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "rotate(20deg)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "rotate(0deg)"; }}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(m => !m)} style={{
            background: "transparent", border: "none", cursor: "pointer", color: "var(--text)", fontSize: 22, padding: 4,
            display: "none",
          }} className="hamburger">☰</button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: 72, left: 0, right: 0, background: "var(--bg2)",
          borderBottom: "1px solid var(--border)", padding: "16px 24px",
          display: "flex", flexDirection: "column", gap: 4, animation: "fadeIn 0.2s ease",
        }}>
          {navItems.map(k => (
            <button key={k} onClick={() => scrollTo(k)} style={{
              background: "transparent", border: "none", cursor: "pointer", padding: "12px 16px",
              color: "var(--text2)", fontFamily: "DM Sans, sans-serif", fontSize: 15,
              textAlign: "left", borderRadius: 8, transition: "all 0.2s",
            }}>{t.nav[k]}</button>
          ))}
        </div>
      )}
    </nav>
  );
}