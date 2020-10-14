import React from "react";
import {
  ProjectHeading,
  ProjectImage,
  ProjectLink,
  ProjectLinks,
  ProjectText,
  ProjectSection,
} from "./project.elements";

const Project = ({ heading, image, alt, description }) => {
  return (
    <ProjectSection>
      <ProjectHeading>{heading}</ProjectHeading>
      <ProjectImage src={image} alt={alt} />
      <ProjectText>{description}</ProjectText>
      <ProjectLinks>
        <ProjectLink href="#">github</ProjectLink>
        <ProjectLink href="#">live</ProjectLink>
      </ProjectLinks>
    </ProjectSection>
  );
};

export default Project;
