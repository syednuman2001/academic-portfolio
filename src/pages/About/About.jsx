import { FiBookOpen, FiCode, FiCpu, FiGithub, FiTarget } from "react-icons/fi";

import SectionTitle from "../../components/ui/SectionTitle.jsx";
import Badge from "../../components/ui/Badge.jsx";
import Button from "../../components/ui/Button.jsx";
import Timeline from "../../components/sections/Timeline.jsx";

import educationData from "../../data/education.json";
import experienceData from "../../data/experience.json";

import "./About.css";

const researchInterests = [
  "Okra Leaf Disease Detection",
  "Agriculture AI",
  "Explainable AI",
  "Few-Shot Learning",
  "Computer Vision",
  "Vision Transformers",
  "DeiT",
  "Mistral-7B LLM",
  "Deep Learning",
  "Incremental Learning",
  "Domain Adaptation",
];

const skills = [
  "Python",
  "PyTorch",
  "OpenCV",
  "Scikit-learn",
  "React.js",
  "PHP / Laravel",
  "WordPress",
  "GitHub",
];

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <SectionTitle
            eyebrow="About Me"
            title="Computer Science Researcher & Developer"
            description="A motivated Computer Science graduate with an MSCS degree and research interests in few-shot learning, computer vision, and deep learning systems."
          />

          <div className="about-summary-card">
            <p>
              Experienced in developing and evaluating AI models including CNNs
              and Vision Transformers for limited-data learning environments,
              with current MSCS research focused on okra leaf disease detection
              using DeiT and Mistral-7B for human-readable explanation
              generation.
            </p>

            <div className="about-actions">
              <Button
                href="https://github.com/syednuman2001"
                variant="secondary"
                icon={<FiGithub />}
              >
                GitHub Profile
              </Button>

              <Button to="/research" variant="outline" icon={<FiTarget />}>
                View Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-focus">
        <div className="container about-focus-grid">
          <div className="about-info-card">
            <FiCpu className="about-info-icon" />
            <h3>Research Interests</h3>

            <div className="about-badge-list">
              {researchInterests.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>

          <div className="about-info-card">
            <FiCode className="about-info-icon" />
            <h3>Technical Skills</h3>

            <div className="about-badge-list">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="about-info-card">
            <FiBookOpen className="about-info-icon" />
            <h3>Academic Goal</h3>
            <p>
              Interested in pursuing a fully funded PhD focused on efficient AI
              systems, adaptive computer vision, and data-efficient learning
              methods.
            </p>
          </div>
        </div>
      </section>

      <section className="about-timeline-section">
        <div className="container about-timeline-grid">
          <div>
            <SectionTitle
              eyebrow="Education"
              title="Academic Background"
              description="Formal education and academic qualifications."
            />

            <Timeline items={educationData} type="education" />
          </div>

          <div>
            <SectionTitle
              eyebrow="Experience"
              title="Research & Work Experience"
              description="Academic research, experimental work, and development experience."
            />

            <Timeline items={experienceData} type="experience" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
