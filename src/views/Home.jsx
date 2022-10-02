// sito components
import SitoContainer from "sito-container";

// own components
import Navbar from "../components/Navbar/Navbar";
import ToTop from "../components/ToTop/ToTop";

// layouts
import Hero from "../layouts/Hero/Hero";
import About from "../layouts/About/About";
import Skills from "../layouts/Skills/Skills";
import Projects from "../layouts/Projects/Projects";
import SideProjects from "../layouts/SideProjects/SideProjects";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ width: "100%" }}>
      <ToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SideProjects />
    </SitoContainer>
  );
};

export default Home;
