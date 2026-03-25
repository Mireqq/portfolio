import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Multimodal Depression Severity Classifier",
      description:
        "Real-time machine learning system integrating speech and text pipelines for depression severity classification. Built with a Flask backend API and deployed with Docker.",
      tech: "Python, Flask, Machine Learning, REST APIs, Docker, CI/CD",
      link: "https://github.com/Mireqq/Multimodal_dep_class/tree/main/Dep_det-main",
    },
    {
      title: "Real-Time Java Chat Application",
      description:
        "Multi-client messaging system using Java concurrency and TCP socket networking. Includes a Swing GUI client and a multi-threaded server for simultaneous users.",
      tech: "Java, TCP/IP, Concurrency, Networking, OOP",
      link: "https://github.com/Mireqq/java-chat-app",
    },
    {
      title: "Kotlin Network Graph Project",
      description:
        "Built a Kotlin-based project focused on graph algorithms and network data structures, including implementations of cities, edges, graphs, and disjoint sets for connectivity and path analysis using real-world capital city data.",
      tech: "Kotlin, Graph Algorithms, Data Structures, Network Analysis, CSV Data Processing",
      link: "https://github.com/Mireqq/kotlin-network-project",
    },
  ];

  return (
    <main className="portfolio-page">
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Miroslaw Mus</h1>
        <p className="subtitle">
          Graduate Software Engineer focused on backend systems, APIs,
          distributed applications, cloud infrastructure, and machine learning.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Mireqq"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/miroslaw-mus/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="about card">
        <h2>About Me</h2>
        <p>
          I am a First-Class Computer Science graduate based in London with
          experience building backend systems, distributed applications, and
          machine learning solutions. I enjoy solving engineering problems,
          designing scalable services, and working with modern software tools
          including Python, Java, Docker, AWS, and REST APIs.
        </p>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
