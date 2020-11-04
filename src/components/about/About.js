import React from "react";
import { AboutSection, Description, Heading } from "./about.elements";

const About = () => {
  return (
    <AboutSection id="about">
      <Heading>about me</Heading>
      <Description>
        Ever since my first Hello World program I felt in love with programming.
        Therefore, I am extremely passionate about what I do. Learning new
        technologies that will further help me develop my skills is an
        enjoyment. Aside from programming, family and outdoors activities are
        sacred to me.
      </Description>
    </AboutSection>
  );
};

export default About;
