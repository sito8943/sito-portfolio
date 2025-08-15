import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo } from "some-javascript-utils/browser";
import loadable from "@loadable/component";

// @emotion/css
import { css } from "@emotion/css";

// own components
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";

// layouts
import Hero from "../layouts/Hero/Hero";
const Features = loadable(() => import("../layouts/Features/Features"));
const About = loadable(() => import("../layouts/About/About"));
const Skills = loadable(() => import("../layouts/Skills/Skills"));
const Projects = loadable(() => import("../layouts/Projects/Projects"));
const Contact = loadable(() => import("../layouts/Contact/Contact"));
const Footer = loadable(() => import("../components/Footer/Footer"));
const ToTop = loadable(() => import("../components/ToTop/ToTop"));

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
      <ToTop
        shape="filled"
        className={css({
          svg: {
            marginLeft: "-1px",
          },
        })}
      />
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
