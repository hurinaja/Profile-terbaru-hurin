import { useState } from "react";

export default function About({ t }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="about" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="section-title">
          <p style={{ color: "var(--accent2)", fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{t.about.subtitle}</p>
          <h2>{t.about.title}</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Left: text + accordion */}
          <div style={{ animation: "slideLeft 0.8s ease" }}>
            <div style={{ marginBottom: 32 }}>
              {[t.about.p1, t.about.p2, t.about.p3].map((p, i) => (
                <p key={i} style={{ color: "var(--text2)", lineHeight: 1.9, marginBottom: 16, fontSize: "0.95rem" }}>{p}</p>
              ))}
            </div>

            {/* Accordion */}
            <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 20, marginBottom: 16, color: "var(--text)" }}>{t.about.accordionTitle}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {t.about.accordion.map((item, i) => (
                <div key={i} style={{
                  background: "var(--surface)", border: `1px solid ${openIdx === i ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: 12, overflow: "hidden", transition: "border-color 0.3s",
                }}>
                  <button onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer",
                    color: openIdx === i ? "var(--accent2)" : "var(--text)", fontFamily: "Syne, sans-serif",
                    fontWeight: 600, fontSize: 15, transition: "color 0.2s",
                  }}>
                    <span>{item.q}</span>
                    <span style={{ transform: openIdx === i ? "rotate(180deg)" : "none", transition: "transform 0.3s", color: "var(--accent)" }}>▾</span>
                  </button>
                  <div style={{
                    maxHeight: openIdx === i ? "200px" : "0", overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", padding: openIdx === i ? "0 20px 16px" : "0 20px 0",
                  }}>
                    <p style={{ color: "var(--text2)", lineHeight: 1.8, fontSize: 14 }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: avatar + stats */}
          <div style={{ animation: "slideRight 0.8s ease" }}>
            {/* Avatar */}
            <div style={{ position: "relative", marginBottom: 40, display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <div style={{
                  width: 280, height: 280, borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  background: "linear-gradient(135deg, var(--accent), var(--pink))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  animation: "float 6s ease infinite", boxShadow: "0 20px 60px rgba(124,92,252,0.3)",
                }}>
                  <span style={{ fontSize: 120 }}>👨‍💻</span>
                </div>
                {/* Orbiting icons */}
                {[{ icon: "⚛️", delay: "0s" }, { icon: "🎨", delay: "1.3s" }, { icon: "🚀", delay: "2.6s" }].map((o, i) => (
                  <div key={i} style={{
                    position: "absolute", top: "50%", left: "50%", marginTop: -20, marginLeft: -20,
                    width: 40, height: 40, borderRadius: "50%", background: "var(--surface)",
                    border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, animation: `orbitSpin ${4 + i}s linear infinite ${o.delay}`,
                    transformOrigin: "50% 50%",
                  }}>{o.icon}</div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {t.about.stats.map((s, i) => (
                <div key={i} style={{
                  background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16,
                  padding: "24px 20px", textAlign: "center", transition: "all 0.3s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px var(--shadow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontFamily: "Syne, sans-serif", fontSize: 32, fontWeight: 800, background: "linear-gradient(135deg, var(--accent2), var(--pink))", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                  <div style={{ color: "var(--text2)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}