import React from "react";

export default function Technologies() {
  return (
    <main className="page">
      <section className="card">
        <h1>Skills & Technologies</h1>

        <p className="muted">
          Tools and technologies I use across data analysis, machine learning,
          software development, and technical problem solving.
        </p>

        {/* DATA ANALYTICS */}
        <h3 style={{ marginTop: 24 }}>
          Data Analytics & Business Intelligence
        </h3>
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
          <span>Statistical Analysis</span>
        </div>

        {/* MACHINE LEARNING */}
        <h3 style={{ marginTop: 24 }}>Machine Learning & Data Science</h3>
        <div className="tech-list">
          <span>Machine Learning</span>
          <span>Classification</span>
          <span>Regression</span>
          <span>Feature Engineering</span>
          <span>Model Evaluation</span>
          <span>PyTorch</span>
          <span>TensorFlow</span>
          <span>NLP</span>
          <span>Speech Processing</span>
        </div>

        {/* PROGRAMMING */}
        <h3 style={{ marginTop: 24 }}>Programming & Development</h3>
        <div className="tech-list">
          <span>Python</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>Kotlin</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>React</span>
          <span>Flask</span>
          <span>REST APIs</span>
        </div>

        {/* DATABASES */}
        <h3 style={{ marginTop: 24 }}>Databases & Data</h3>
        <div className="tech-list">
          <span>SQL</span>
          <span>Relational Databases</span>
          <span>Data Modelling</span>
          <span>Data Processing</span>
        </div>

        {/* SYSTEMS */}
        <h3 style={{ marginTop: 24 }}>Systems & Infrastructure</h3>
        <div className="tech-list">
          <span>Docker</span>
          <span>AWS</span>
          <span>Git</span>
          <span>CI/CD</span>
          <span>Linux</span>
          <span>Networking</span>
          <span>Concurrency</span>
          <span>Distributed Systems</span>
        </div>
      </section>
    </main>
  );
}
