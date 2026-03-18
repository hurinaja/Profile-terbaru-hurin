import { useState } from "react";

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  return (
    <section id="contact" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <div className="section-title">
          <p style={{ color: "var(--accent2)", fontWeight: 600, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{t.contact.subtitle}</p>
          <h2>{t.contact.title}</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60 }}>
          {/* Left info */}
          <div style={{ animation: "slideLeft 0.8s ease" }}>
            <p style={{ color: "var(--text2)", lineHeight: 1.8, marginBottom: 40 }}>{t.contact.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {t.contact.info.map((info, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14,
                  padding: "16px 20px", transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <span style={{ fontSize: 24 }}>{info.icon}</span>
                  <div>
                    <div style={{ color: "var(--text3)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{info.label}</div>
                    <div style={{ color: "var(--text)", fontSize: 15, fontWeight: 500 }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div style={{ background: "var(--surface)", borderRadius: 24, padding: 40, border: "1px solid var(--border)", animation: "slideRight 0.8s ease" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0", animation: "fadeUp 0.5s ease" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: 22, marginBottom: 8 }}>Pesan Terkirim!</h3>
                <p style={{ color: "var(--text2)" }}>Terima kasih! Saya akan segera membalas.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }} style={{ marginTop: 24, background: "var(--accent)", border: "none", color: "#fff", padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { key: "name", label: t.contact.form.name, type: "text" },
                  { key: "email", label: t.contact.form.email, type: "email" },
                  { key: "subject", label: t.contact.form.subject, type: "text" },
                ].map(field => (
                  <div key={field.key} style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", color: "var(--text2)", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{field.label}</label>
                    <input type={field.type} value={form[field.key]}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      required
                      style={{
                        width: "100%", background: "var(--bg3)", border: "1px solid var(--border)",
                        borderRadius: 10, padding: "14px 16px", color: "var(--text)", fontSize: 15,
                        outline: "none", transition: "border-color 0.2s", fontFamily: "DM Sans, sans-serif",
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--accent)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", color: "var(--text2)", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{t.contact.form.message}</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required rows={5}
                    style={{
                      width: "100%", background: "var(--bg3)", border: "1px solid var(--border)",
                      borderRadius: 10, padding: "14px 16px", color: "var(--text)", fontSize: 15,
                      outline: "none", resize: "vertical", fontFamily: "DM Sans, sans-serif", transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
                <button type="submit" disabled={sending} style={{
                  width: "100%", background: "linear-gradient(135deg, var(--accent), var(--pink))",
                  border: "none", color: "#fff", padding: "16px", borderRadius: 12,
                  fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16, cursor: "pointer",
                  transition: "all 0.3s", boxShadow: "0 8px 20px var(--shadow)",
                  opacity: sending ? 0.7 : 1,
                }}
                  onMouseEnter={e => { if (!sending) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 30px var(--shadow)"; }}}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 20px var(--shadow)"; }}
                >
                  {sending ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                      {t.contact.form.sending}
                    </span>
                  ) : `✉ ${t.contact.form.send}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}