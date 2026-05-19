import "./SkillCard.css";

const SkillCard = ({ title, skills = [], icon }) => {
  return (
    <article className="skill-card">
      {icon && <div className="skill-icon">{icon}</div>}

      <h3>{title}</h3>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;
