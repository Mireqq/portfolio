import React from "react";

export default function Contact() {
  return (
    <main className="page">
      <section className="card">
        <h1>Contact</h1>
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
  );
}
