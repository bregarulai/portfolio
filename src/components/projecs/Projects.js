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
    <ProjectsSection id="projects">
      <ProjectsTitle>projects</ProjectsTitle>
      <Project
        heading="painter website"
        image={painter}
        alt="painter website"
        description="Responsive landing page built for a painter company."
        stack={painterStack}
        githubUrl="https://github.com/bregarulai/painter-website"
        liveUrl="http://painter.bregacode.com/"
      />
      <Project
        heading="tv show website"
        image={tvShows}
        alt="painter website"
        description="Responsive website built using external API to fetch data and displays it in a nice formated way for the user."
        stack={tvShowStack}
        githubUrl="https://github.com/bregarulai/samira-tv-show"
        liveUrl="https://samira.bregacode.com/"
      />
      <Project
        heading="face recognition website"
        image={faceRecognition}
        alt="painter website"
        description="Responsive website built for using external API that uses artificial intelligence to detect face in a picture.  It has a back-end to store user's data."
        stack={faceRecognitionStack}
        githubUrl="https://github.com/bregarulai/facerecognitionbrain"
        liveUrl="http://facerecognition.bregacode.com/"
      />
    </ProjectsSection>
  );
};

export default Projects;
