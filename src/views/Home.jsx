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
import Contact from "../layouts/Contact/Contact";
import Footer from "../components/Footer/Footer";

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
        <Contact />
      </main>
      <Footer />
    </Suspense>
  );
};

export default Home;
