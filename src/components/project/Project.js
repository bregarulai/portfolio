import React from "react";
import {
  ProjectHeading,
  ProjectImage,
  ProjectLink,
  ProjectLinks,
  ProjectText,
  ProjectSection,
  Technology,
  Stack,
} from "./project.elements";

const Project = ({ heading, image, alt, description, stack }) => {
  return (
    <ProjectSection
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <ProjectHeading>{heading}</ProjectHeading>
      <ProjectImage src={image} alt={alt} />
      <ProjectText>{description}</ProjectText>
      <Stack>
        {stack.map((tech) => {
          return <Technology>{tech}</Technology>;
        })}
      </Stack>
      <ProjectLinks>
        <ProjectLink href="#">github</ProjectLink>
        <ProjectLink href="#">live</ProjectLink>
      </ProjectLinks>
    </ProjectSection>
  );
};

export default Project;
