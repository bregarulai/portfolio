import React from "react";
import { MenuWrapper, Links, Link } from "./sideDrawer.elements.js";

const SideDrawer = ({ toggleMenu, showMenu }) => {
  return (
    <MenuWrapper showMenu={showMenu} onClick={toggleMenu}>
      <Links>
        <Link
          onClick={toggleMenu}
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          home
        </Link>
        <Link
          onClick={toggleMenu}
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          projects
        </Link>

        <Link
          onClick={toggleMenu}
          to="about"
          spy={true}
          activeClass="active"
          smooth={true}
          offset={-50}
          duration={500}
        >
          about
        </Link>
        <Link
          onClick={toggleMenu}
          to="contact"
          activeClass="active"
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
        >
          contact
        </Link>
      </Links>
    </MenuWrapper>
  );
};

export default SideDrawer;
