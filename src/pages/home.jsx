import FluidBackground from "../components/FluidBackground";
import Chatbot from "./chatbot";

export default function Home() {
  const cvUrl = "/cv/Miroslaw-Mus-CV.pdf";

  const projects = [
    {
      title: "Multimodal Depression Severity Classifier",
      description:
        "Developed a multimodal machine learning classification system combining speech and text data to analyse depression severity. The project involved data preprocessing, feature extraction, model evaluation and comparison of multimodal and unimodal approaches, achieving 99%+ classification accuracy.",
      tech: "Python, Machine Learning, PyTorch, TensorFlow, Wav2Vec2, Transformers, Flask, REST API",
      link: "https://github.com/Mireqq/Multimodal_dep_class/tree/main/Dep_det-main",
    },
    {
      title: "AI Portfolio Chatbot",
      description:
        "Built an interactive AI chatbot integrated into my portfolio, answering questions about my experience, projects and skills in real time. Developed with React and deployed using Vercel serverless functions and the OpenAI API.",
      tech: "React, JavaScript, OpenAI API, Vercel, Serverless Functions",
      link: "https://github.com/Mireqq/portfolio",
    },
    {
      title: "Real-Time Java Chat Application",
      description:
        "Developed a concurrent client-server chat application using Java and TCP/IP networking, supporting multiple users through multithreading and real-time communication.",
      tech: "Java, TCP/IP, Multithreading, Networking, Distributed Systems, CI/CD",
      link: "https://github.com/Mireqq/java-chat-app",
    },
    {
      title: "Kotlin Network Graph Project",
      description:
        "Developed a Kotlin application using graph algorithms and data structures to analyse network connectivity using real-world capital city data, including graphs, weighted edges and disjoint-set structures.",
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
                Data Analyst and First-Class Computer Science graduate
                specialising in Python, SQL, Power BI, data analysis and machine
                learning, with hands-on experience investigating operational
                data, systems and business processes.
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
            I am a First-Class Computer Science graduate based in London with a
            strong interest in data analytics, business intelligence and machine
            learning. My background combines technical education with extensive
            experience in high-volume operational environments, where I
            developed hands-on experience investigating stock, system and
            workflow issues, identifying root causes and supporting process
            improvements.
          </p>

          <p className="muted" style={{ marginTop: 12 }}>
            Alongside my professional experience, I have built projects
            involving data analysis, machine learning, APIs, distributed systems
            and software development. I am particularly interested in using
            Python, SQL and Power BI to transform complex data into clear
            insights that support real-world business decisions.
          </p>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="card projects-section"
          style={{ marginTop: 18, scrollMarginTop: 100 }}
        >
          <h2>Projects</h2>

          <p className="muted">
            Selected projects demonstrating my experience across data, machine
            learning, software engineering and distributed systems.
          </p>

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
          <h2>Skills & Technologies</h2>

          <h3 style={{ marginTop: 20 }}>Data Analytics</h3>
          <div className="tech-list">
            <span>Python</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>Excel</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Data Analysis</span>
            <span>Data Cleaning</span>
            <span>Data Visualisation</span>
            <span>Exploratory Data Analysis</span>
            <span>Data Validation</span>
          </div>

          <h3 style={{ marginTop: 24 }}>Machine Learning</h3>
          <div className="tech-list">
            <span>Machine Learning</span>
            <span>Classification</span>
            <span>Model Evaluation</span>
            <span>Feature Engineering</span>
            <span>PyTorch</span>
            <span>TensorFlow</span>
            <span>NLP</span>
            <span>Speech Processing</span>
          </div>

          <h3 style={{ marginTop: 24 }}>Development & Systems</h3>
          <div className="tech-list">
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Flask</span>
            <span>REST APIs</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>CI/CD</span>
            <span>Git</span>
            <span>Linux</span>
            <span>Distributed Systems</span>
            <span>Networking</span>
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
            Ask about my data analytics experience, projects, technologies and
            professional background.
          </p>

          <div style={{ marginTop: 16 }}>
            <Chatbot />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="card"
          style={{
            marginTop: 18,
            marginBottom: 28,
            scrollMarginTop: 100,
          }}
        >
          <h2>Contact</h2>

          <p className="muted">
            I am currently interested in Graduate and Junior Data Analyst
            opportunities in London. Feel free to get in touch or explore my
            work.
          </p>

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
