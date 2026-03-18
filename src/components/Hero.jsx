import { useState, useEffect, useRef } from "react";

export default function Hero({ t }) {
  const [typed, setTyped] = useState("");
  const [particles] = useState(() => {
    const data = [];

    for (let i = 0; i < 20; i++) {
      data.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 3,
        color: ["#7c5cfc", "#f472b6", "#22d3ee", "#4ade80"][
          Math.floor(Math.random() * 4)
        ],
      });
    }

    return data;
  });

  const roleRef = useRef(0);
  const charRef = useRef(0);
  const delRef = useRef(false);

  useEffect(() => {
    const roles = [
      t.hero.role,
      "Student",
      "Sport Enthusias",
      "Future Tech Leader",
    ];

    const tick = () => {
      const role = roles[roleRef.current % roles.length];

      if (!delRef.current) {
        setTyped(role.slice(0, charRef.current + 1));
        charRef.current++;

        if (charRef.current === role.length) {
          delRef.current = true;
          return 2000;
        }
      } else {
        setTyped(role.slice(0, charRef.current - 1));
        charRef.current--;

        if (charRef.current === 0) {
          delRef.current = false;
          roleRef.current++;
          return 500;
        }
      }

      return delRef.current ? 40 : 80;
    };

    let timer;

    const run = () => {
      const delay = tick();
      timer = setTimeout(run, delay);
    };

    timer = setTimeout(run, 1000);

    return () => clearTimeout(timer);
  }, [t]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,92,252,0.15), transparent 70%)",
            animation: "pulse 4s ease infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(244,114,182,0.12), transparent 70%)",
            animation: "pulse 5s ease infinite 1s",
          }}
        />

        {/* PARTICLES */}
        {particles.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 2,
              height: 2,
              borderRadius: "50%",
              background: p.color,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: 0.4,
              animation: `float ${p.duration}s ease infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, padding: 40 }}>
        <p>{t.hero.greeting}</p>

        <h1>{t.hero.name}</h1>

        <div>
          {typed}
          <span style={{ marginLeft: 4, animation: "blink 1s infinite" }}>
            |
          </span>
        </div>

        <p>{t.hero.desc}</p>

        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t.hero.cta}
        </button>

        {/* SOCIAL */}
        <div style={{ marginTop: 20 }}>
          <a href="https://github.com/hurinaja">GitHub</a> |{" "}
          <a href="https://instagram.com/hurinadhana.">Instagram</a> |{" "}
          <a href="mailto:hurinsyakira1@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}