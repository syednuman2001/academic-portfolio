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
  const [showPopup, setShowPopup] = useState(false);

  const handlePaperClick = () => {
    if (paper && paper !== "#") {
      window.open(paper, "_blank", "noopener,noreferrer");
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      {showPopup && (
        <div className="paper-popup">This paper is not published yet.</div>
      )}

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
            {github && (
              <Button href={github} variant="secondary" size="sm">
                GitHub
              </Button>
            )}

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
