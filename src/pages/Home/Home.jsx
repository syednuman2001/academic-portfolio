import HeroSection from "../../components/sections/HeroSection.jsx";
import AboutPreview from "../../components/sections/AboutPreview.jsx";
import FeaturedResearch from "../../components/sections/FeaturedResearch.jsx";
import SkillsAndStats from "../../components/sections/SkillsAndStats.jsx";
import BlogPreview from "../../components/sections/BlogPreview.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedResearch />
      <SkillsAndStats />
      <BlogPreview />
    </>
  );
};

export default Home;
