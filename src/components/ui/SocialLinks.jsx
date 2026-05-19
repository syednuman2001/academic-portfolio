import "./SocialLinks.css";

const SocialLinks = ({ links = [], className = "" }) => {
  return (
    <div className={`social-links ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
