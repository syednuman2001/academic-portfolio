import { Link } from "react-router-dom";
import Badge from "../ui/Badge.jsx";
import "./BlogCard.css";

const BlogCard = ({ title, excerpt, date, category, slug, readTime }) => {
  return (
    <article className="blog-card">
      {category && <Badge variant="primary">{category}</Badge>}

      <h3>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h3>

      <p>{excerpt}</p>

      <div className="blog-meta">
        {date && <span>{date}</span>}
        {readTime && <span>{readTime}</span>}
      </div>
    </article>
  );
};

export default BlogCard;
