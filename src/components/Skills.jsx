import { useState } from "react";
export default function Skills({ t }) {
  const cats = t.skills.categories;
  const [active, setActive] = useState(cats[0]);
  const filtered = active === cats[0] ? t.skills.items : t.skills.items.filter(i => i.cat ===  active);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <p style={{ color: "var(--accent2)", fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{t.skills.subtitle}</p>
          <h2>{t.skills.title}</h2>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              padding: "10px 24px", borderRadius: 40, border: "1px solid",
              borderColor: active === c ? "var(--accent)" : "var(--border)",
              background: active === c ? "rgba(124,92,252,0.15)" : "transparent",
              color: active === c ? "var(--accent2)" : "var(--text2)",
              cursor: "pointer", fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 14,
              transition: "all 0.25s",
            }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {filtered.map((skill, i) => (
            <div key={skill.name} style={{
              background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16,
              padding: "24px", transition: "all 0.3s", animation: `fadeUp 0.5s ease ${i * 0.05}s both`,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 30px var(--shadow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 28 }}>{skill.icon}</span>
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16 }}>{skill.name}</div>
                  <div style={{ color: "var(--text3)", fontSize: 12 }}>{skill.cat}</div>
                </div>
                <div style={{ marginLeft: "auto", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18, color: "var(--accent2)" }}>{skill.level}%</div>
              </div>
              <div style={{ height: 8, background: "var(--bg3)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: 4,
                  background: "linear-gradient(90deg, var(--accent), var(--pink))",
                  width: `${skill.level}%`, animation: "progressFill 1.2s ease", transition: "width 1s ease",
                  "--w": `${skill.level}%`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}