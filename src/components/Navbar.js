import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span className="brand-dot" /> Eunice Jemima
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#facts">Facts</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
