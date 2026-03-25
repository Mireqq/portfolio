import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isHome = location.pathname === "/";

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="logo logo-btn" onClick={() => navigate("/")}>
          Miroslaw Mus
        </button>

        <div className="nav-links">
          <button
            className={`nav-link ${isHome ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection("technologies")}
          >
            Technologies
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection("chatbot")}
          >
            AI Chatbot
          </button>

          <a
            className="nav-link"
            href="/cv/Miroslaw-Mus-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>

          <button
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
