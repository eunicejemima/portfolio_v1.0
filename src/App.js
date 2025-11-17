import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails"; // small placeholder page

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <section id="skills" className="section skills-section">
          {/* Skills will be inside About component for clarity, or you can extract */}
        </section>
        <Projects />
        <section id="facts" className="section facts-section">
          <div className="container">
            <h2 className="section-title">Fun Facts</h2>
            <div className="facts-grid">
              <div className="fact-card">
                <p className="fact-emoji">🍳</p>
                <p className="fact-text"><strong>I’m a code-chef.</strong> I cook UIs by day and actual food by night.</p>
              </div>
              <div className="fact-card">
                <p className="fact-emoji">😜</p>
                <p className="fact-text"><strong>I copy—creatively.</strong> I borrow good ideas and remix them into something fresh.</p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
        <ProjectDetails />
      </main>
      <Footer />
    </div>
  );
}
