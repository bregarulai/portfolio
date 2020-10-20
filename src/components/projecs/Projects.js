import React from "react";
import { ProjectsSection, ProjectsTitle } from "./projects.elements";
import painter from "./painterSite.PNG";
import tvShows from "./tvShows.PNG";
import faceRecognition from "./faceRecognitionApp.PNG";
import Project from "../project/Project";

const Projects = () => {
  const painterStack = ["html", "css"];
  const tvShowStack = ["react", "html", "css", "javascript"];
  const faceRecognitionStack = [
    "react",
    "html",
    "css",
    "javascript",
    "node.js",
  ];
  return (
    <ProjectsSection>
      <ProjectsTitle>projects</ProjectsTitle>
      <Project
        heading="painter website"
        image={painter}
        alt="painter website"
        description="A website I created for a local painter"
        stack={painterStack}
      />
      <Project
        heading="tv show website"
        image={tvShows}
        alt="painter website"
        description="A website I created for a local painter"
        stack={tvShowStack}
      />
      <Project
        heading="face recognition website"
        image={faceRecognition}
        alt="painter website"
        description="A website I created for a local painter"
        stack={faceRecognitionStack}
      />
    </ProjectsSection>
  );
};

export default Projects;
