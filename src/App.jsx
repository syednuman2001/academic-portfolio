import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import Loader from "./components/ui/Loader.jsx";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import Home from "./pages/Home/Home";
const About = lazy(() => import("./pages/About/About"));
const Research = lazy(() => import("./pages/Research/Research"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Publications = lazy(() => import("./pages/Publications/Publications"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const CV = lazy(() => import("./pages/CV/CV"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogPost = lazy(() => import("./pages/Blog/BlogPost"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Navbar />

      <main className="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
