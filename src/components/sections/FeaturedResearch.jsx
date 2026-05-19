import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle.jsx";
import Button from "../ui/Button.jsx";
import ResearchCard from "../cards/ResearchCard.jsx";
import researchData from "../../data/researchData";
import "./FeaturedResearch.css";

const FeaturedResearch = () => {
  return (
    <section className="featured-research">
      <div className="container">
        <div className="featured-research-header">
          <div className="featured-research-title">
            <SectionTitle
              eyebrow="Featured Research"
              title="Research Highlights"
              description="Selected research work focused on data-efficient learning, computer vision, and transformer-based models."
            />
          </div>

          <Button to="/research" variant="outline" icon={<FiArrowRight />}>
            View All Research
          </Button>
        </div>

        <div className="featured-research-grid">
          {researchData
            .filter((item) => item.featured)
            .map((research) => (
              <ResearchCard key={research.id} {...research} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResearch;
