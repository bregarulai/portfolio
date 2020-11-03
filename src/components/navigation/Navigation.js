import React from "react";
import {
  Brand,
  Header,
  Links,
  Nav,
  Link,
  MenuIcon,
} from "./navigation.elements.js";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = ({ toggleMenu }) => {
  return (
    <Nav>
      <Header>
        <Brand>
          <Link to="home">Flavio Aquino</Link>
        </Brand>
        <Links>
          <Link
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
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            projects
          </Link>

          <Link
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
        <MenuIcon onClick={toggleMenu}>
          <AiOutlineMenu />
        </MenuIcon>
      </Header>
    </Nav>
  );
};

export default Navigation;
