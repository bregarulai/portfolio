import React from "react";
import {
  BackgroundImage,
  Heading,
  SubHeading,
  ProjectButton,
} from "./banner.elements";

const Banner = () => {
  return (
    <BackgroundImage>
      <Heading>Hi, I am Flavio</Heading>
      <SubHeading>frontend developer living in Tampa, FL.</SubHeading>
      <ProjectButton to="projects">see my projects</ProjectButton>
    </BackgroundImage>
  );
};

export default Banner;
