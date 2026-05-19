import { useState } from "react";
import { FiFileText, FiGithub, FiExternalLink } from "react-icons/fi";
import "./Publications.css";

import SectionTitle from "../../components/ui/SectionTitle.jsx";

const publications = [
  {
    title: "Okra Leaf Disease Detection using DeiT and Mistral-7B",
    authors: "Syed Numan Raza",
    venue: "MSCS Research Manuscript",
    status: "In Preparation",
    year: "2026",
    description:
      "A transformer-based plant disease detection study using DeiT for okra leaf classification and Mistral-7B for human-readable explanation generation.",
    tags: ["DeiT", "Mistral-7B", "Plant Disease", "Computer Vision"],
    paperLink: "",
    githubLink: "",
  },
  {
    title:
      "Few-Shot Learning for Plant Disease Classification using Vision Transformers",
    authors: "Syed Numan Raza",
    venue: "Research Project",
    status: "Under Development",
    year: "2026",
    description:
      "A comparative study of DeiT-small and ResNet18 for few-shot okra disease classification under limited data settings.",
    tags: ["Few-Shot Learning", "DeiT-small", "ResNet18", "PyTorch"],
    paperLink: "",
    githubLink: "https://github.com/syednuman2001",
  },
  {
    title:
      "Incremental Learning with Transformer Models for Real-World Object Recognition",
    authors: "Syed Numan Raza",
    venue: "Research Proposal",
    status: "Research Proposal",
    year: "2026",
    description:
      "A proposed research direction focused on adapting transformer models for new class incremental learning with limited samples.",
    tags: ["Incremental Learning", "Transformers", "Domain Adaptation"],
    paperLink: "",
    githubLink: "",
  },
];

const Publications = () => {
  const [popup, setPopup] = useState("");

  const handlePaperClick = (paperLink) => {
    if (paperLink) {
      window.open(paperLink, "_blank");
    } else {
      setPopup("This paper is not published yet.");
      setTimeout(() => setPopup(""), 2500);
    }
  };

  return (
    <main className="publications-page">
      {popup && <div className="publication-popup">{popup}</div>}

      <section className="publications-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Research Output"
            title="Publications & Manuscripts"
            description="Published papers, manuscripts in preparation, and ongoing research directions will be updated here as they progress."
          />
        </div>
      </section>

      <section className="publications-content">
        <div className="container">
          <div className="publication-note">
            <FiFileText />
            <p>
              No published papers yet. Current manuscripts are in preparation
              and will be updated after publication.
            </p>
          </div>

          <div className="publications-grid">
            {publications.map((item, index) => (
              <article className="publication-card" key={index}>
                <div className="publication-top">
                  <span className="publication-status">{item.status}</span>
                  <span className="publication-year">{item.year}</span>
                </div>

                <h3>{item.title}</h3>

                <div className="publication-meta">
                  <span>{item.authors}</span>
                  <span>{item.venue}</span>
                </div>

                <p>{item.description}</p>

                <div className="publication-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <div className="publication-actions">
                  <button onClick={() => handlePaperClick(item.paperLink)}>
                    <FiExternalLink /> Paper
                  </button>

                  {item.githubLink && (
                    <a href={item.githubLink} target="_blank" rel="noreferrer">
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Publications;
