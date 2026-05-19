import { useMemo, useState } from "react";

import SectionTitle from "../../components/ui/SectionTitle.jsx";
import Tag from "../../components/ui/Tag.jsx";
import ResearchCard from "../../components/cards/ResearchCard.jsx";

import researchData from "../../data/researchData.json";

import "./Research.css";

const Research = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const allTags = researchData.flatMap((item) => item.tags || []);
    return ["All", "Featured", ...new Set(allTags)];
  }, []);

  const filteredResearch = useMemo(() => {
    if (activeFilter === "All") return researchData;

    if (activeFilter === "Featured") {
      return researchData.filter((item) => item.featured);
    }

    return researchData.filter((item) => item.tags?.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="research-page">
      <section className="research-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Research Portfolio"
            title="Research Areas & Projects"
            description="A collection of research directions focused on computer vision, few-shot learning, transformer-based models, domain adaptation, and incremental learning."
          />
        </div>
      </section>

      <section className="research-content">
        <div className="container">
          <div className="research-filter-bar">
            {filters.map((filter) => (
              <Tag
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Tag>
            ))}
          </div>

          <div className="research-results-info">
            Showing <strong>{filteredResearch.length}</strong> research item
            {filteredResearch.length !== 1 ? "s" : ""}
          </div>

          <div className="research-grid">
            {filteredResearch.map((research) => (
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
                problem={research.problem}
                methodology={research.methodology}
                results={research.results}
                technologies={research.tags}
                github={research.github}
                paper={research.paper}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Research;
