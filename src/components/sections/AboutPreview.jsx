import { FiUser, FiBookOpen, FiCode, FiAward } from "react-icons/fi";
import { FaFlask } from "react-icons/fa";
import Button from "../ui/Button.jsx";
import "./AboutPreview.css";

const aboutCards = [
  {
    icon: <FiBookOpen />,
    title: "Education",
    text: "Master in Computer Science",
  },
  {
    icon: <FaFlask />,
    title: "Research Focus",
    text: "AI, Computer Vision, Few-Shot Learning, Vision Transformers",
  },
  {
    icon: <FiCode />,
    title: "Experience",
    text: "Research, Projects, Development",
  },
  {
    icon: <FiAward />,
    title: "Achievements",
    text: "Publications, Projects, Awards",
  },
];

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="container about-preview-grid">
        <div className="about-preview-text">
          <h2>
            {" "}
            <span className="about-icon">
              <FiUser />
            </span>
            About Me
          </h2>

          <p>
            I am an MSc graduate and researcher with a strong interest in
            Artificial Intelligence, Computer Vision, Few-Shot Learning, and
            Vision Transformers. I enjoy building impactful research and
            real-world solutions.
          </p>

          <Button to="/about" variant="outline">
            More About Me
          </Button>
        </div>

        <div className="about-preview-cards">
          {aboutCards.map((item) => (
            <div className="about-mini-card" key={item.title}>
              <div className="about-mini-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
