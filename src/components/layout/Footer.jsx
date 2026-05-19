import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>Syed Numan Raza</h3>
          <p>
            AI Researcher • Computer Vision • Machine Learning • Few-Shot
            Learning
          </p>
        </div>

        <div className="footer-copy">
          <p>
            © {new Date().getFullYear()} Academic Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
