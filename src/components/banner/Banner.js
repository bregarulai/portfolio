import React from "react";

import {
  BackgroundImage,
  Heading,
  SubHeading,
  ProjectButton,
  Name,
} from "./banner.elements";

const Banner = () => {
  return (
    <BackgroundImage id='home'>
      <div data-aos="slide-right">
        <Heading data-aos="zoom-in">
          Hi, I'm <Name>Flavio Aquino</Name>
        </Heading>
      </div>
      <SubHeading data-aos="zoom-out">
        frontend developer living in Tampa, FL.
      </SubHeading>
      <ProjectButton data-aos="slide-up" to="projects">
        {" "}
        see my projects{" "}
      </ProjectButton>
    </BackgroundImage>
  );
};

export default Banner;
