import React, { useRef, Suspense } from "react";
import loadable from "@loadable/component";
// framer-motion
import { useInView } from "framer-motion";

// own components
import Loading from "../components/Loading/Loading";
const Navbar = loadable(() => import("../components/Navbar/Navbar"));
const ToTop = loadable(() => import("../components/ToTop/ToTop"));

// layouts
const Hero = loadable(() => import("../layouts/Hero/Hero"));
const WhatIDo = loadable(() => import("../layouts/WhatIDo/WhatIDo"));
const About = loadable(() => import("../layouts/About/About"));
const Skills = loadable(() => import("../layouts/Skills/Skills"));
const Footer = loadable(() => import("../components/Footer/Footer"));
const Projects = loadable(() => import("../layouts/Projects/Projects"));
const SideProjects = loadable(() =>
  import("../layouts/SideProjects/SideProjects")
);
const Contact = loadable(() => import("../layouts/Contact/Contact"));

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Suspense fallback={<Loading />}>
        <ToTop footerVisible={isInView} />
        <Navbar />
        <Hero />
        <WhatIDo />
        <About />
        <Skills />
        <Projects />
        <SideProjects />
        <Contact />
        <Footer ref={ref} />
      </Suspense>
    </div>
  );
};

export default Home;
