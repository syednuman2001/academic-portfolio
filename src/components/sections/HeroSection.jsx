import { FiDownload, FiBookOpen, FiMail } from "react-icons/fi";
import Button from "../ui/Button.jsx";
import Badge from "../ui/Badge.jsx";
import profileImage from "../../assets/images/profile.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">Academic Portfolio</span>
          <h2>Syed Numan Raza</h2>

          <p>
            MS Computer Science researcher focused on Artificial Intelligence,
            Computer Vision, Few-Shot Learning, Vision Transformers, Machine
            Learning, and efficient deep learning systems.
          </p>

          <div className="hero-actions">
            <Button href="/files/fixed-resume.pdf" icon={<FiDownload />}>
              Download CV
            </Button>{" "}
            <Button to="/research" variant="secondary" icon={<FiBookOpen />}>
              View Research
            </Button>
            <Button to="/contact" variant="secondary" icon={<FiMail />}>
              Contact
            </Button>
          </div>

          <div className="hero-badges">
            <Badge variant="primary">Computer Vision</Badge>
            <Badge>Few-Shot Learning</Badge>
            <Badge>Vision Transformers</Badge>
            <Badge>PyTorch</Badge>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-shape"></div>
          <img
            src={profileImage}
            alt="Syed Numan Raza"
            className="hero-profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
