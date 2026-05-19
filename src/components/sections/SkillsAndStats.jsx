import {
  FiArrowRight,
  FiBookOpen,
  FiFolder,
  FiAward,
  FiUsers,
} from "react-icons/fi";

import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";

import skillsData from "../../data/skillsData.json";

import "./SkillsAndStats.css";

const numbers = [
  { icon: <FiBookOpen />, number: "0", label: "Research Papers" },
  { icon: <FiFolder />, number: "5+", label: "Projects Completed" },
  { icon: <FiAward />, number: "0", label: "Awards & Honors" },
  { icon: <FiUsers />, number: "3+", label: "Years of Experience" },
];

const SkillsAndStats = () => {
  // flatten all skills from categories
  const allSkills = skillsData.categories.flatMap((category) =>
    category.skills.map((skill) => skill.name),
  );

  return (
    <section className="skills-stats-section">
      <div className="container skills-stats-grid">
        <div>
          <h2>Technical Skills</h2>

          <div className="skills-pill-grid">
            {allSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>

          <Button to="/skills" variant="outline" icon={<FiArrowRight />}>
            View All Skills
          </Button>
        </div>

        <div>
          <h2>By The Numbers</h2>

          <div className="numbers-grid">
            {numbers.map((item) => (
              <div className="number-card" key={item.label}>
                <div className="number-icon">{item.icon}</div>

                <div>
                  <h3>{item.number}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndStats;
