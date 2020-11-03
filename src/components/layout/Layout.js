import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import SideDrawer from "../sideDrawer/SideDrawer";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <Navigation toggleMenu={toggleMenu} />
      <SideDrawer toggleMenu={toggleMenu} showMenu={showMenu} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
