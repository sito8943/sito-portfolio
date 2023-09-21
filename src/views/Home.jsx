import React, { Suspense } from "react";

// own components
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ToTop from "../components/ToTop/ToTop";

// layouts
import Hero from "../layouts/Hero/Hero";
import Features from "../layouts/Features/Features";
import About from "../layouts/About/About";
/* 
const About = loadable(() => import("../layouts/About/About"));
const Skills = loadable(() => import("../layouts/Skills/Skills"));
const Footer = loadable(() => import("../components/Footer/Footer"));
const Projects = loadable(() => import("../layouts/Projects/Projects"));
const SideProjects = loadable(() =>
  import("../layouts/SideProjects/SideProjects")
);
const Contact = loadable(() => import("../layouts/Contact/Contact")); */

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ToTop />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      {/* 
        
        <Skills />
        <Projects />
        <SideProjects />
        <Contact />
        
        <Footer ref={ref} /> */}
    </Suspense>
  );
};

export default Home;
