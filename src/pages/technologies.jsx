import React from "react";

export default function Technologies() {
  return (
    <main className="page">
      <section className="card">
        <h1>Technologies</h1>

        <p className="muted">
          Tools and technologies I use to build backend systems, distributed
          applications, and machine learning solutions.
        </p>

        <h3 style={{ marginTop: 20 }}>Languages</h3>
        <div className="tech-list">
          <span>Python</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>SQL</span>
        </div>

        <h3 style={{ marginTop: 20 }}>Web & Frontend</h3>
        <div className="tech-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>React</span>
          <span>REST APIs</span>
        </div>

        <h3 style={{ marginTop: 20 }}>Backend & Systems</h3>
        <div className="tech-list">
          <span>Flask</span>
          <span>API Development</span>
          <span>Networking</span>
          <span>Concurrency</span>
          <span>Distributed Systems</span>
        </div>

        <h3 style={{ marginTop: 20 }}>Cloud & Infrastructure</h3>
        <div className="tech-list">
          <span>Docker</span>
          <span>AWS</span>
          <span>CI/CD</span>
          <span>Git</span>
          <span>Linux</span>
        </div>

        <h3 style={{ marginTop: 20 }}>Machine Learning</h3>
        <div className="tech-list">
          <span>Machine Learning</span>
          <span>NLP</span>
          <span>Speech Processing</span>
          <span>Model Deployment</span>
        </div>
      </section>
    </main>
  );
}
