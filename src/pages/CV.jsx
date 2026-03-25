export default function CV() {
  const cvUrl = "/cv/Miroslaw-Mus-CV.pdf";

  return (
    <main className="page">
      <section className="card">
        <div className="header-row">
          <h1>Curriculum Vitae</h1>
          <div className="btn-row">
            <a href={cvUrl} target="_blank" rel="noopener" className="btn">
              Open PDF
            </a>
            <a href={cvUrl} download className="btn secondary">
              Download
            </a>
          </div>
        </div>

        <div className="pdf-wrap">
          <object data={cvUrl} type="application/pdf" width="100%" height="900">
            <p>
              Your browser can’t display PDFs.
              <a href={cvUrl} target="_blank" rel="noopener">
                Open CV
              </a>
            </p>
          </object>
        </div>
      </section>
    </main>
  );
}
