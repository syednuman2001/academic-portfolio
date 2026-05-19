import { FiCode, FiCpu, FiTool, FiMonitor } from "react-icons/fi";

import SectionTitle from "../../components/ui/SectionTitle.jsx";
import Badge from "../../components/ui/Badge.jsx";

import skillsData from "../../data/skillsData.json";

import "./Skills.css";

const iconMap = {
  "Machine Learning & AI": <FiCpu />,
  "Computer Vision": <FiMonitor />,
  "Programming Languages": <FiCode />,
  "Web Development": <FiCode />,
  "Tools & Infrastructure": <FiTool />,
};

const Skills = () => {
  return (
    <main className="skills-page">
      <section className="skills-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Technical Skills"
            title="Research & Development Skill Set"
            description="A structured overview of tools and technologies used in AI research, computer vision experiments, and web development projects."
          />
        </div>
      </section>

      <section className="skills-content">
        <div className="container skills-grid">
          {skillsData.categories.map((category) => (
            <article className="skills-category-card" key={category.name}>
              <div className="skills-card-header">
                <div className="skills-card-icon">
                  {iconMap[category.name] || <FiTool />}
                </div>

                <div>
                  <h3>{category.name}</h3>
                  <p>{category.skills.length} technologies</p>
                </div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-top">
                      <span>{skill.name}</span>
                      <Badge>{skill.level}%</Badge>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
