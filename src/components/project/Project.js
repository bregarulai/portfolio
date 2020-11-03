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

const Project = ({
  heading,
  image,
  alt,
  description,
  stack,
  githubUrl,
  liveUrl,
}) => {
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
        {stack.map((tech, index) => {
          return <Technology key={index}>{tech}</Technology>;
        })}
      </Stack>
      <ProjectLinks>
        <ProjectLink href={githubUrl || "#"}>github</ProjectLink>
        <ProjectLink href={liveUrl || "#"}>live</ProjectLink>
      </ProjectLinks>
    </ProjectSection>
  );
};

export default Project;
