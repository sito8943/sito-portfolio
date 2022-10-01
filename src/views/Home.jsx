// sito components
import SitoContainer from "sito-container";

// own components
import Navbar from "../components/Navbar/Navbar";
import ToTop from "../components/ToTop/ToTop";

// layouts
import Hero from "../layouts/Hero";
import Projects from "../layouts/Projects";
import About from "../layouts/About";
import SideProjects from "../layouts/SideProjects";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ width: "100%" }}>
      <ToTop />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SideProjects />
    </SitoContainer>
  );
};

export default Home;
