import "./SectionTitle.css";

const SectionTitle = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  return (
    <div className={`section-title section-title-${align} ${className}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionTitle;
