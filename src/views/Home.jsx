// sito components
import SitoContainer from "sito-container";

// own components
import Navbar from "../components/Navbar/Navbar";
import Hero from "../layouts/Hero";
import Projects from "../layouts/Projects";
import About from "../layouts/About";
import Contact from "../layouts/Contact";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ width: "100vw" }}>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </SitoContainer>
  );
};

export default Home;
