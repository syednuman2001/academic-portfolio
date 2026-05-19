import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  image,
  technologies = [],
  github,
  demo,
  category,
}) => {
  return (
    <article className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="project-content">
        {category && <Badge variant="primary">{category}</Badge>}

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-tech">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="project-actions">
          {github && (
            <Button href={github} variant="secondary" size="sm">
              GitHub
            </Button>
          )}
          {demo && (
            <Button href={demo} variant="outline" size="sm">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
