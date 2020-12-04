import React from "react";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Layout from "../components/layout/Layout";
import Projects from "../components/projecs/Projects";
import SEO from "../components/seo/SEO";
import Skills from "../components/skills/Skills";

const Home = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Banner />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
