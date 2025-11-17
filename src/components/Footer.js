import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Eunice Jemima — Designed & built by me</p>
        <div className="footer-links">
          <a href="mailto:seunice2116@gmail.com">seunice2116@gmail.com</a>
          <a href="https://github.com/eunicejemima" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/eunice21" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
