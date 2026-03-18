export const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0f;
    --bg2: #111118;
    --bg3: #1a1a26;
    --surface: #1e1e2e;
    --surface2: #252538;
    --border: rgba(255,255,255,0.08);
    --text: #e8e8f0;
    --text2: #9999bb;
    --text3: #6666aa;
    --accent: #7c5cfc;
    --accent2: #a78bfa;
    --accent3: #c4b5fd;
    --pink: #f472b6;
    --cyan: #22d3ee;
    --green: #4ade80;
    --yellow: #fbbf24;
    --shadow: rgba(124,92,252,0.25);
    --radius: 16px;
    --transition: 0.35s cubic-bezier(0.4,0,0.2,1);
  }

  [data-theme="light"] {
    --bg: #f8f7ff;
    --bg2: #eeecff;
    --bg3: #e4e0ff;
    --surface: #ffffff;
    --surface2: #f0eeff;
    --border: rgba(124,92,252,0.15);
    --text: #1a1a2e;
    --text2: #4a4a7a;
    --text3: #8888bb;
    --accent: #6c3cf7;
    --accent2: #8b5cf6;
    --accent3: #a78bfa;
    --shadow: rgba(124,92,252,0.15);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    transition: background var(--transition), color var(--transition);
  }

  h1,h2,h3,h4 { font-family: 'Syne', sans-serif; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--bg2); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }

  section { padding: 100px 0; }

  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes slideLeft { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
  @keyframes slideRight { from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0); } }
  @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg);} 50%{transform:translateY(-20px) rotate(3deg);} }
  @keyframes pulse { 0%,100%{opacity:0.6;transform:scale(1);} 50%{opacity:1;transform:scale(1.05);} }
  @keyframes spin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  @keyframes shimmer { 0%{background-position:200% center;} 100%{background-position:-200% center;} }
  @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
  @keyframes progressFill { from{width:0;} to{width:var(--w);} }
  @keyframes orbitSpin { from{transform:rotate(0deg) translateX(80px) rotate(0deg);} to{transform:rotate(360deg) translateX(80px) rotate(-360deg);} }
  @keyframes gradient-bg { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }

  .section-title {
    text-align:center;
    margin-bottom: 64px;
  }
  .section-title h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent2), var(--pink), var(--cyan));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: shimmer 4s linear infinite;
    margin-bottom: 12px;
  }
  .section-title p {
    color: var(--text2);
    font-size: 1.1rem;
  }
`;