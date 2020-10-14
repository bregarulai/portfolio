import React from "react";
import {
  Brand,
  Header,
  Links,
  Nav,
  Link,
  ReactLink,
} from "./navigation.elements.js";
const Navigation = () => {
  return (
    <Nav>
      <Header>
        <Brand>Flavio Aquino</Brand>
        <Links>
          <Link to="home">home</Link>
          <Link to="projects">projects</Link>
          <Link to="about">about</Link>
          <ReactLink to="/resume">resume</ReactLink>
        </Links>
      </Header>
    </Nav>
  );
};

export default Navigation;
