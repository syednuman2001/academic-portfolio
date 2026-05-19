import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiGlobe,
  FiBriefcase,
} from "react-icons/fi";

import SectionTitle from "../../components/ui/SectionTitle.jsx";
import "./Experience.css";

const experiences = [
  {
    icon: <FiCpu />,
    title: "MSCS Research Work",
    type: "Academic Research",
    date: "2024 - 2026 (Final Semester is ongoing)",
    description:
      "Working on transformer-based computer vision research focused on okra leaf disease detection using DeiT, with Mistral-7B integrated for human-readable explanations.",
    points: [
      "Plant disease classification using Vision Transformers",
      "DeiT-based model training and evaluation",
      "LLM-based explanation generation using Mistral-7B",
    ],
  },

  {
    icon: <FiGlobe />,
    title: "WordPress Website Development",
    type: "Freelance / Client Work",
    date: "2023 - Present",
    description:
      "Designed and customized WordPress websites for clients using modern layouts, page builders, and custom styling.",
    points: [
      "WordPress customization",
      "Elementor-based page design",
      "Responsive client websites",
    ],
  },
  {
    icon: <FiBookOpen />,
    title: "BSCS Final Year Project",
    type: "Academic Project",
    date: "2023",
    description:
      "Developed a Laravel and PHP-based (Event Management System) final year project with database-driven functionality and user interaction.",
    points: [
      "Laravel backend development",
      "PHP and MySQL integration",
      "Academic project documentation",
    ],
  },
  {
    icon: <FiBriefcase />,
    title: "Self-Learning & Technical Growth",
    type: "Professional Development",
    date: "Ongoing",
    description:
      "Continuously improving skills in machine learning, deep learning, web development, and research writing.",
    points: [
      "Python, React, Laravel, WordPress, and Node.js learning",
      "PyTorch-based model training and analysis",
      "Research paper writing and literature review",
    ],
  },
  {
    icon: <FiCode />,
    title: "React Frontend Development",
    type: "Frontend Practice",
    date: "2024 - Present",
    description:
      "Built responsive frontend interfaces using React, JavaScript, CSS, and modular component-based design.",
    points: [
      "React calculator application",
      "Reusable UI components",
      "Responsive layouts and clean user interfaces",
    ],
  },
];

const Experience = () => {
  return (
    <main className="experience-page">
      <section className="experience-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Experience"
            title="Academic & Development Experience"
            description="A timeline of research work, web development practice, freelance WordPress projects, and academic technical experience."
          />
        </div>
      </section>

      <section className="experience-content">
        <div className="container">
          <div className="experience-timeline">
            {experiences.map((item, index) => (
              <article className="experience-card" key={index}>
                <div className="experience-icon">{item.icon}</div>

                <div className="experience-details">
                  <div className="experience-top">
                    <div>
                      <h3>{item.title}</h3>
                      <span>{item.type}</span>
                    </div>
                    <p>{item.date}</p>
                  </div>

                  <p className="experience-description">{item.description}</p>

                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
