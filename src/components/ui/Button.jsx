import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  to,
  href,
  icon,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} {...props}>
      {content}
    </button>
  );
};

export default Button;
