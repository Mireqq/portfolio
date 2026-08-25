import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Multimodal Depression Severity Classifier",
      description:
        "Developed a multimodal machine learning classification system combining speech and text data to analyse depression severity. The project involved data preprocessing, feature extraction, model evaluation and comparison of multimodal and unimodal approaches, achieving 99%+ classification accuracy.",
      tech: "Python, Flask, Machine Learning, PyTorch, TensorFlow, Wav2Vec2, Transformers, REST APIs",
      link: "https://github.com/Mireqq/Multimodal_dep_class/tree/main/Dep_det-main",
    },
    {
      title: "AI Portfolio Chatbot",
      description:
        "Built an interactive AI chatbot integrated into my portfolio, answering questions about my experience, projects and technical skills in real time. Developed with React and deployed using Vercel serverless functions and the OpenAI API.",
      tech: "React, JavaScript, OpenAI API, Vercel, Serverless Functions",
      link: "https://github.com/Mireqq/portfolio",
    },
    {
      title: "Real-Time Java Chat Application",
      description:
        "Developed a multi-client messaging system using Java concurrency and TCP/IP socket networking, with a Swing GUI client and a multithreaded server supporting simultaneous users.",
      tech: "Java, TCP/IP, Concurrency, Multithreading, Networking, OOP, CI/CD",
      link: "https://github.com/Mireqq/java-chat-app",
    },
    {
      title: "Kotlin Network Graph Project",
      description:
        "Developed a Kotlin application using graph algorithms and data structures to analyse connectivity and paths using real-world capital city data, including graphs, weighted edges and disjoint-set structures.",
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
          Data Analyst and First-Class Computer Science graduate focused on
          Python, SQL, Power BI, data analysis and machine learning, with
          hands-on experience investigating operational data, systems and
          business processes.
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
          I am a First-Class Computer Science graduate based in London with a
          strong interest in data analytics, business intelligence and machine
          learning. My background combines technical education with extensive
          experience in high-volume operational environments, where I developed
          hands-on experience investigating stock, system and workflow issues,
          analysing operational data, identifying root causes and supporting
          process improvements.
        </p>

        <p>
          Alongside my professional experience, I have built projects involving
          data analysis, machine learning, APIs, distributed systems and
          software development. I am particularly interested in using Python,
          SQL and Power BI to transform complex data into clear insights that
          support real-world business decisions.
        </p>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>

        <p className="subtitle">
          Selected projects demonstrating my experience across data, machine
          learning, software engineering and distributed systems.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
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
