import React, { useRef, Suspense } from "react";
import loadable from "@loadable/component";

// own components
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar"
import ToTop from "../components/ToTop/ToTop"

// layouts
import Hero from "../layouts/Hero/Hero"
/* const WhatIDo = loadable(() => import("../layouts/WhatIDo/WhatIDo"));
const About = loadable(() => import("../layouts/About/About"));
const Skills = loadable(() => import("../layouts/Skills/Skills"));
const Footer = loadable(() => import("../components/Footer/Footer"));
const Projects = loadable(() => import("../layouts/Projects/Projects"));
const SideProjects = loadable(() =>
  import("../layouts/SideProjects/SideProjects")
);
const Contact = loadable(() => import("../layouts/Contact/Contact")); */

const Home = () => {
  /* const ref = useRef(null); */
  /* const isInView = useInView(ref); */

  return (
    <Suspense fallback={<Loading />}>
      <ToTop /* footerVisible={isInView} */ />
      <Navbar />
      <main sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Hero />
        <section className="h-screen"></section>
      </main>
      {/* 
        <WhatIDo />
        <About />
        <Skills />
        <Projects />
        <SideProjects />
        <Contact />
        
        <Footer ref={ref} /> */}
    </Suspense>
  );
};

export default Home;
