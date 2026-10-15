import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { scrollTo } from "some-javascript-utils/browser";
import loadable from "@loadable/component";

// @sito/ui
import { Spinner } from "@sito/ui";

import { PageLayout } from "@/shared/ui/templates";

// sections
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
const Features = loadable(() => import("./sections/Features"));
const About = loadable(() => import("./sections/About"));
const Skills = loadable(() => import("./sections/Skills"));
const Projects = loadable(() => import("./sections/Projects"));
const Contact = loadable(() => import("./sections/Contact"));
const Footer = loadable(() => import("./sections/Footer"));
const ToTop = loadable(() =>
  import("@/shared/ui/molecules/ToTop").then((m) => ({ default: m.ToTop })),
);

/** Single-page portfolio: every section lives here. */
function Home() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const { hash } = location;
    if (!hash) return;
    const timeout = setTimeout(() => {
      scrollTo(document.getElementById(hash.substring(1))?.offsetTop ?? 0);
    }, 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <Suspense
      fallback={
        <div className="flex w-full h-full items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <PageLayout
        overlay={<ToTop label={t("_common:ariaLabels.toTop")} />}
        header={<Header />}
        footer={<Footer />}
      >
        <Hero />
        <Features />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </PageLayout>
    </Suspense>
  );
}

export default Home;
