export default function CV() {
  const cvUrl = "/cv/Miroslaw-Mus-CV.pdf";

  return (
    <main className="page">
      <section className="card">
        <div className="header-row">
          <div>
            <h1>Curriculum Vitae</h1>
            <p className="muted">
              Data Analyst | First-Class Computer Science Graduate
            </p>
          </div>

          <div className="btn-row">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Open CV
            </a>

            <a
              href={cvUrl}
              download="Miroslaw-Mus-CV.pdf"
              className="btn secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="pdf-wrap">
          <object
            data={cvUrl}
            type="application/pdf"
            width="100%"
            height="900"
            aria-label="Miroslaw Mus CV"
          >
            <p>
              Your browser cannot display the PDF.{" "}
              <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                Open CV
              </a>
            </p>
          </object>
        </div>
      </section>
    </main>
  );
}
