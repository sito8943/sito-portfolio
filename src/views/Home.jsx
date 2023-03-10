import React, { useRef, lazy, Suspense } from "react";

// framer-motion
import { useInView } from "framer-motion";

// own components
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";
import ToTop from "../components/ToTop/ToTop";

// layouts
const Hero = lazy(() => import("../layouts/Hero/Hero"));
const About = lazy(() => import("../layouts/About/About"));
const Skills = lazy(() => import("../layouts/Skills/Skills"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Projects = lazy(() => import("../layouts/Projects/Projects"));
const SideProjects = lazy(() => import("../layouts/SideProjects/SideProjects"));
const Contact = lazy(() => import("../layouts/Contact/Contact"));

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Suspense fallback={<Loading />}>
        <ToTop footerVisible={isInView} />
        <Navbar />
        <Hero />
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
