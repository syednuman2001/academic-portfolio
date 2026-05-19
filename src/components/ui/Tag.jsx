import "./Tag.css";

const Tag = ({ children, active = false, onClick, className = "" }) => {
  return (
    <button
      type="button"
      className={`tag ${active ? "tag-active" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tag;
