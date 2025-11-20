import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile-placeholder.jpeg";
export default function Home() {
  // simple typing effect (used directly here so we don't need a separate component file)
  const lines = [
    "I design clean, user-focused UIs.",
    "I convert Figma into responsive code.",
    "I love minimal green & black themes."
  ];
  const [lineIndex, setLineIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const speed = 50;
    const pause = 900;
    const current = lines[lineIndex % lines.length];

    if (!deleting) {
      if (charIndex <= current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIndex));
          setCharIndex((i) => i + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);
        }, speed / 2);
      } else {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex, lines]);

  useEffect(() => {
    setCharIndex(1);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Hi, I'm <span className="accent">Eunice Jemima S</span></h1>
          <p className="subtitle">Design-focused IT student building delightful interfaces</p>
          <div className="typing-line">
            <span className="typing">{display}<span className="cursor">|</span></span>
          </div>
          <div className="hero-ctas">
            <a href="#projects" className="btn">See my work</a>
            <a href="#contact" className="btn ghost">Contact me</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <img src={profileImg} alt="Profile" className="profile-img" />
            <div className="profile-meta">
              <p><strong>B.Tech IT</strong></p>
              <p>LICET </p>
              <p>Shell Internship • Inplant training - Oracle APEX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
