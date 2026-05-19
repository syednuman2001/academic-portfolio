import Badge from "../ui/Badge.jsx";
import Button from "../ui/Button.jsx";
import "./PublicationCard.css";

const PublicationCard = ({
  title,
  authors,
  venue,
  year,
  status,
  abstract,
  tags = [],
  link,
  pdf,
}) => {
  return (
    <article className="publication-card">
      <div className="publication-header">
        <div>
          <h3>{title}</h3>
          {authors && <p className="publication-authors">{authors}</p>}
        </div>

        {status && <Badge variant="primary">{status}</Badge>}
      </div>

      <div className="publication-meta">
        {venue && <span>{venue}</span>}
        {year && <span>{year}</span>}
      </div>

      {abstract && <p className="publication-abstract">{abstract}</p>}

      <div className="publication-tags">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="publication-actions">
        {link && (
          <Button href={link} variant="secondary" size="sm">
            View
          </Button>
        )}
        {pdf && (
          <Button href={pdf} variant="outline" size="sm">
            PDF
          </Button>
        )}
      </div>
    </article>
  );
};

export default PublicationCard;
