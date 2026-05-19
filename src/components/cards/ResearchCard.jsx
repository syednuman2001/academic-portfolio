import { useState } from "react";
import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import "./ResearchCard.css";

const ResearchCard = ({
  title,
  description,
  problem,
  methodology,
  results,
  technologies = [],
  github,
  paper,
}) => {
  const [popupMessage, setPopupMessage] = useState("");

  const showMessage = (message) => {
    setPopupMessage(message);

    setTimeout(() => {
      setPopupMessage("");
    }, 3000);
  };

  const handleGithubClick = () => {
    if (github && github !== "#") {
      window.open(github, "_blank", "noopener,noreferrer");
      return;
    }

    showMessage("Repository is not publicly available yet.");
  };

  const handlePaperClick = () => {
    if (paper && paper !== "#") {
      window.open(paper, "_blank", "noopener,noreferrer");
      return;
    }

    showMessage("This paper is not published yet.");
  };

  return (
    <>
      {popupMessage && <div className="paper-popup">{popupMessage}</div>}

      <article className="research-card">
        <div className="research-card-content">
          <h3>{title}</h3>
          <p className="research-description">{description}</p>

          {problem && (
            <div className="research-block">
              <strong>Problem:</strong>
              <p>{problem}</p>
            </div>
          )}

          {methodology && (
            <div className="research-block">
              <strong>Methodology:</strong>
              <p>{methodology}</p>
            </div>
          )}

          {results && (
            <div className="research-block">
              <strong>Results:</strong>
              <p>{results}</p>
            </div>
          )}

          <div className="research-tags">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="research-actions">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleGithubClick}
            >
              GitHub
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handlePaperClick}
            >
              Paper
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ResearchCard;
