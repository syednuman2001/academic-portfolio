import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle.jsx";
import Button from "../ui/Button.jsx";
import BlogCard from "../cards/BlogCard.jsx";
import blogData from "../../data/blogData.json";
import "./BlogPreview.css";

const BlogPreview = () => {
  return (
    <section className="blog-preview">
      <div className="container">
        <div className="preview-header">
          <SectionTitle
            eyebrow="Latest From Blog"
            title="Recent Articles"
            description="Thoughts, tutorials, and insights on AI, computer vision, and research."
          />

          <Button to="/blog" variant="outline" icon={<FiArrowRight />}>
            View All Posts
          </Button>
        </div>

        <div className="blog-preview-grid">
          {blogData
            .filter((blog) => blog.featured)
            .map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
