import { useMemo, useState } from "react";

import SectionTitle from "../../components/ui/SectionTitle.jsx";
import Tag from "../../components/ui/Tag.jsx";
import BlogCard from "../../components/cards/BlogCard.jsx";

import blogData from "../../data/blogData.json";

import "./Blog.css";

const Blog = () => {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const allTags = blogData.flatMap((blog) => blog.tags || []);
    return ["All", "Featured", ...new Set(allTags)];
  }, []);

  const filteredBlogs = useMemo(() => {
    if (activeTag === "All") return blogData;

    if (activeTag === "Featured") {
      return blogData.filter((blog) => blog.featured);
    }

    return blogData.filter((blog) => blog.tags?.includes(activeTag));
  }, [activeTag]);

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Blog"
            title="Research Notes & Technical Articles"
            description="Articles, notes, and tutorials about artificial intelligence, computer vision, few-shot learning, and research workflows."
          />
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="blog-filter-bar">
            {tags.map((tag) => (
              <Tag
                key={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </Tag>
            ))}
          </div>

          <p className="blog-results-info">
            Showing <strong>{filteredBlogs.length}</strong> article
            {filteredBlogs.length !== 1 ? "s" : ""}
          </p>

          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
