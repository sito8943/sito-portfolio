import React, { Suspense } from "react";

// own components
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ToTop from "../components/ToTop/ToTop";

// layouts
import Hero from "../layouts/Hero/Hero";
import Features from "../layouts/Features/Features";
import About from "../layouts/About/About";
import Skills from "../layouts/Skills/Skills";
import Projects from "../layouts/Projects/Projects";
import SideProjects from "../layouts/SideProjects/SideProjects";
import Contact from "../layouts/Contact/Contact";
/* 
const Footer = loadable(() => import("../components/Footer/Footer"));
*/

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ToTop />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Skills />
        <Projects />
        <SideProjects />
        <Contact />
      </main>
      {/* 

        <Footer ref={ref} /> */}
    </Suspense>
  );
};

export default Home;
