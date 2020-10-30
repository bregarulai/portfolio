import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
