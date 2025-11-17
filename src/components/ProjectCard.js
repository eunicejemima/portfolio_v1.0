import React from "react";

export default function ProjectCard({ project }) {
  const { title, desc, tech, img, demo, repo } = project;

  return (
    <article className="project-card">
      <div className="project-media">
        <img src={img} alt={title} className="project-img" />
      </div>

      <div className="project-info">
        <h3>{title}</h3>

        <p className="proj-desc">{desc}</p>

        <div className="proj-tech">
          {tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="proj-actions">
          {demo && (
            <a
              href={demo}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}

          {repo && (
            <a
              href={repo}
              className="btn ghost"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
