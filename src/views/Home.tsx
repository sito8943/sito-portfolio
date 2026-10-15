import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo } from "some-javascript-utils/browser";
import loadable from "@loadable/component";

// @sito/ui
import { Spinner } from "@sito/ui";

// own components
import Navbar from "../components/Navbar/Navbar";

// layouts
import Hero from "../layouts/Hero/Hero";
const Features = loadable(() => import("../layouts/Features/Features"));
const About = loadable(() => import("../layouts/About/About"));
const Skills = loadable(() => import("../layouts/Skills/Skills"));
const Projects = loadable(() => import("../layouts/Projects/Projects"));
const Contact = loadable(() => import("../layouts/Contact/Contact"));
const Footer = loadable(() => import("../components/Footer/Footer"));
const ToTop = loadable(() => import("../components/ToTop/ToTop"));

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (!hash) return;
    const timeout = setTimeout(() => {
      scrollTo(document.getElementById(hash.substring(1))?.offsetTop ?? 0);
    }, 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <Suspense
      fallback={
        <div className="flex w-full h-full items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <ToTop />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Suspense>
  );
};

export default Home;
