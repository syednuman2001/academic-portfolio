import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";

import Badge from "../../components/ui/Badge.jsx";
import Button from "../../components/ui/Button.jsx";

import blogData from "../../data/blogData.json";

import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="blog-post-page">
        <section className="blog-post-not-found">
          <div className="container">
            <h1>Article Not Found</h1>
            <p>The article you are looking for does not exist.</p>

            <Button to="/blog" variant="outline">
              Back to Blog
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="blog-post-page">
      <section className="blog-post-hero">
        <div className="container blog-post-container">
          <Link to="/blog" className="blog-back-link">
            <FiArrowLeft />
            Back to Blog
          </Link>

          <div className="blog-post-tags">
            {blog.tags?.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <h1>{blog.title}</h1>

          <p className="blog-post-excerpt">{blog.excerpt}</p>

          <div className="blog-post-meta">
            <span>
              <FiCalendar />
              {blog.date}
            </span>

            <span>
              <FiClock />
              {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {blog.coverImage && (
        <section className="blog-post-cover-section">
          <div className="container blog-post-container">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="blog-post-cover"
            />
          </div>
        </section>
      )}

      <section className="blog-post-content-section">
        <div className="container blog-post-container">
          <article className="blog-post-content">
            <p>
              This article is currently prepared as a placeholder. Full content
              will be added soon with detailed explanations, examples, and
              research notes.
            </p>

            <h2>Overview</h2>
            <p>
              The topic focuses on concepts related to artificial intelligence,
              computer vision, and modern deep learning research. This space can
              be used to explain the motivation, background, methodology, and
              practical insights.
            </p>

            <h2>Key Ideas</h2>
            <ul>
              <li>Introduce the core concept in simple academic language.</li>
              <li>
                Explain why the topic is important in current AI research.
              </li>
              <li>Discuss possible applications and limitations.</li>
              <li>Connect the topic with your research direction.</li>
            </ul>

            <h2>Research Relevance</h2>
            <p>
              This topic is relevant to ongoing research in data-efficient
              learning, transformer-based vision models, and intelligent systems
              that can operate under real-world constraints.
            </p>

            <div className="blog-post-footer">
              <Button to="/blog" variant="secondary">
                View More Articles
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
