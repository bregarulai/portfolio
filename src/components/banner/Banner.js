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
      <Heading
        data-aos="zoom-in"
        data-aos-mirror="true"
        data-aos-easing="ease-in-out"
      >
        Hi, I am Flavio
      </Heading>
      <SubHeading
        data-aos="zoom-out"
        data-aos-mirror="true"
        data-aos-easing="ease-in-out"
      >
        frontend developer living in Tampa, FL.
      </SubHeading>
      <ProjectButton to="projects"> see my projects </ProjectButton>
    </BackgroundImage>
  );
};

export default Banner;
