import FluidBackground from "../components/FluidBackground";
import Chatbot from "./chatbot";
export default function Home() {
  const cvUrl = "/cv/Miroslaw-Mus-CV.pdf";

  const projects = [
    {
      title: "Multimodal Depression Severity Classifier",
      description:
        "Built a machine learning system that analyses speech and language signals to help detect depression severity using multimodal data.",
      tech: "Python, Machine Learning, AI",
      link: "https://github.com/Mireqq",
    },
    {
      title: "Real-Time Java Chat Application",
      description:
        "Developed a distributed real-time chat system in Java with client-server communication, concurrency, and networking concepts.",
      tech: "Java, Networking, Distributed Systems",
      link: "https://github.com/Mireqq",
    },
    {
      title: "Kotlin Network Graph Project",
      description:
        "Developed a Kotlin project exploring graph algorithms and network data structures, with implementations of graphs, edges, cities, and disjoint sets to analyse connectivity and solve network-related problems using real-world capital city data.",
      tech: "Kotlin, Graph Algorithms, Data Structures, Network Analysis",
      link: "https://github.com/Mireqq/kotlin-network-project",
    },
  ];

  return (
    <>
      <FluidBackground />

      <main className="page">
        {/* HERO */}
        <section className="card hero" id="top">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Miroslaw Mus</h1>

              <p className="muted">
                Graduate Software Engineer specialising in backend systems,
                distributed applications, cloud infrastructure, and machine
                learning.
              </p>

              <div className="btn-row" style={{ marginTop: 16 }}>
                <a className="btn" href="#projects">
                  View Projects
                </a>

                <a className="btn secondary" href="#chatbot">
                  Try AI Chatbot
                </a>

                <a
                  className="btn secondary"
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View CV
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img src="/portfolioface.jpg" alt="Miroslaw Mus" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="card"
          style={{ marginTop: 18, scrollMarginTop: 100 }}
        >
          <h2>About Me</h2>

          <p className="muted">
            First-Class Computer Science graduate based in London with
            experience building backend services, APIs, distributed systems, and
            machine learning applications. I enjoy designing scalable software,
            solving engineering problems, and working with modern technologies
            including Python, Java, Docker, AWS and REST APIs.
          </p>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="card projects-section"
          style={{ marginTop: 18, scrollMarginTop: 100 }}
        >
          <h2>Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech">{project.tech}</div>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section
          id="technologies"
          className="card"
          style={{ marginTop: 18, scrollMarginTop: 100 }}
        >
          <h2>Technologies</h2>

          <div className="tech-list">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>REST APIs</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>SQL</span>
            <span>Distributed Systems</span>
            <span>Networking</span>
            <span>Machine Learning</span>
            <span>CI/CD</span>
            <span>Git</span>
          </div>
        </section>

        {/* CHATBOT */}
        <section
          id="chatbot"
          className="card"
          style={{ marginTop: 18, scrollMarginTop: 100 }}
        >
          <h2>AI Chatbot</h2>
          <p className="muted">
            Ask about my background, projects, technologies, and experience.
          </p>

          <div style={{ marginTop: 16 }}>
            <Chatbot />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="card"
          style={{ marginTop: 18, marginBottom: 28, scrollMarginTop: 100 }}
        >
          <h2>Contact</h2>

          <p className="muted">Feel free to reach out or explore my work.</p>

          <div className="contact-links">
            <a href="mailto:miroslaw.k.mus@gmail.com">Email</a>

            <a
              href="https://www.linkedin.com/in/miroslaw-mus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Mireqq"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://huggingface.co/Mireq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hugging Face
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
