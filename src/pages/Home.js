import React from "react";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Layout from "../components/layout/Layout";
import Projects from "../components/projecs/Projects";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
