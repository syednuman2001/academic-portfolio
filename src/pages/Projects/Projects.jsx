import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./Projects.css";

const projects = [
  {
    title: "Okra Leaf Disease Detection using DeiT + Mistral-7B",
    category: "AI / Research",
    description:
      "Transformer-based plant disease detection system using DeiT for okra leaf disease classification, with Mistral-7B integrated for human-readable disease explanations.",
    tech: [
      "DeiT",
      "Vision Transformer",
      "Mistral-7B",
      "Python",
      "Deep Learning",
    ],
    github: "https://github.com/syednuman2001/Okra-leaf-disease-app",
    live: "https://okrafarmer.streamlit.app/",
  },
  {
    title: "Few-Shot Okra Disease Classification: DeiT vs ResNet18",
    category: "Machine Learning",
    description:
      "Compared DeiT-small and ResNet18 for few-shot okra leaf disease classification under 1-shot, 5-shot, and 10-shot learning scenarios.",
    tech: ["DeiT-small", "ResNet18", "PyTorch", "Few-Shot Learning"],
    github: "https://github.com/syednuman2001",
    live: "",
  },
  {
    title: "Laravel Final Year Project",
    category: "Web Development",
    description:
      "BSCS final year project developed using PHP Laravel with database-driven functionality and web-based user interaction.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/syednuman2001",
    live: "",
  },
  {
    title: "WordPress Client Website",
    category: "WordPress Development",
    description:
      "Designed and customized WordPress websites for freelance clients with responsive layouts and modern UI sections.",
    tech: ["WordPress", "Elementor", "CSS", "Hosting"],
    github: "",
    live: "https://wordpress-984670-5979765.cloudwaysapps.com/",
  },
  {
    title: "React Calculator App",
    category: "Frontend Development",
    description:
      "Responsive calculator app built using React with dynamic state management, real-time expression evaluation, and clean modular UI.",
    tech: ["React", "JavaScript", "CSS"],
    github: "",
    live: "",
  },
];

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label">Portfolio Work</span>
          <h1>Projects</h1>
          <p>
            A collection of research, machine learning, frontend, WordPress, and
            web development projects.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-top">
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                )}

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
