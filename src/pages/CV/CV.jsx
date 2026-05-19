import { FiDownload, FiGithub, FiMail } from "react-icons/fi";

import SectionTitle from "../../components/ui/SectionTitle.jsx";
import Button from "../../components/ui/Button.jsx";

import "./CV.css";

const cvFile = "/files/CV2.pdf";

const CV = () => {
  return (
    <main className="cv-page">
      <section className="cv-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Curriculum Vitae"
            title="Academic CV"
            description="A concise overview of my education, research experience, technical skills, projects, and academic interests."
          />

          <div className="cv-actions">
            <Button href={cvFile} icon={<FiDownload />}>
              Download CV
            </Button>

            <Button
              href="https://github.com/syednuman2001"
              variant="secondary"
              icon={<FiGithub />}
            >
              GitHub
            </Button>

            <Button to="/contact" variant="outline" icon={<FiMail />}>
              Contact
            </Button>
          </div>
        </div>
      </section>

      <section className="cv-preview-section">
        <div className="container">
          <div className="cv-preview-card">
            <iframe
              src={`${cvFile}#toolbar=1&navpanes=0`}
              title="Syed Numan Raza CV"
              className="cv-iframe"
            ></iframe>
          </div>

          <p className="cv-note">
            If the CV preview does not load, your browser or IDM extension may
            be forcing PDF downloads. You can still use the Download CV button.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CV;
