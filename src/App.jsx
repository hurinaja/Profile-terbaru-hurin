import { useState, useEffect } from "react";

import { translations } from "./data/translations";
import { globalStyle } from "./styles/globalStyle";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  const [lang, setLang] = useState("id");
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingDone, setLoadingDone] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
      setTimeout(() => setLoading(false), 700);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const sections = ["home", "about", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      <style>{globalStyle}</style>

      {loading && <LoadingScreen done={loadingDone} />}

      {!loading && (
        <>
          <Navbar
            t={t}
            lang={lang}
            setLang={setLang}
            dark={dark}
            setDark={setDark}
            active={activeSection}
          />
          <Hero t={t} />
          <About t={t} />
          <Skills t={t} />
          <Contact t={t} />
          <Footer t={t} />
          <ScrollTop />
        </>
      )}
    </>
  );
}