import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo } from "some-javascript-utils/browser";

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
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    setTimeout(() => {
      scrollTo(document.getElementById(hash?.substring(1))?.offsetTop);
    }, 500);
  }, [location]);

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
