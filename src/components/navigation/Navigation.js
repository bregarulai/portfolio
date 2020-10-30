import React from "react";
import {
  Brand,
  Header,
  Links,
  Nav,
  Link,
} from "./navigation.elements.js";
const Navigation = () => {
  return (
    <Nav>
      <Header>
        <Brand>Flavio Aquino</Brand>
        <Links>
          <Link to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
          >home</Link>
          <Link to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
          >projects</Link>
          <Link to="about"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-50}
                duration={500}
          >about</Link>
          <Link to="contact"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-50}
                duration={500}
          >contact</Link>
        </Links>
      </Header>
    </Nav>
  );
};

export default Navigation;
