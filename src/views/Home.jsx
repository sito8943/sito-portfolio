import { useRef } from "react";

// sito components
import SitoContainer from "sito-container";

// framer-motion
import { useInView } from "framer-motion";

// own components
import Navbar from "../components/Navbar/Navbar";
import ToTop from "../components/ToTop/ToTop";

// layouts
import Hero from "../layouts/Hero/Hero";
import About from "../layouts/About/About";
import Skills from "../layouts/Skills/Skills";
import Footer from "../components/Footer/Footer";
import Projects from "../layouts/Projects/Projects";
import SideProjects from "../layouts/SideProjects/SideProjects";
import Contact from "../layouts/Contact/Contact";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <SitoContainer flexDirection="column" sx={{ width: "100%" }}>
      <ToTop footerVisible={isInView} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SideProjects />
      <Contact />
      <Footer ref={ref} />
    </SitoContainer>
  );
};

export default Home;
