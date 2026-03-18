export default function Footer({ t }) {
  const scrollTo = (label) => {
  const map = {
    Beranda: "home",
    Tentang: "about",
    Keahlian: "skills",
    Kontak: "contact",
    Home: "home",
    About: "about",
    Skills: "skills",
    Contact: "contact",
  };
  const id = map[label];
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "48px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 28, background: "linear-gradient(135deg, #a78bfa, #f472b6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>RP.</div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {t.footer.links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{ background: "none", border: "none", color: "var(--text2)", cursor: "pointer", fontSize: 14, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--accent2)"}
              onMouseLeave={e => e.target.style.color = "var(--text2)"}
            >{link}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["🐙", "💼", "🐦", "📧"].map((icon, i) => (
            <a key={i} href=".blank" style={{
              width: 40, height: 40, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >{icon}</a>
          ))}
        </div>
        <p style={{ color: "var(--text3)", fontSize: 13 }}>{t.footer.copy}</p>
      </div>
    </footer>
  );
}