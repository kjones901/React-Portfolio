import React from "react";
import { ProjectList } from "./PortfolioStyle";
import Project from './Project/Project'
import projects from "./projectData.json";

export default function Portfolio() {
  return (
    <ProjectList>
      {projects.map((project) => (
        <Project
          title={project.title}
          key={project.title}
          techlist={project.techlist}
          background={project.background}
          deployedLink={project.deployedLink}
          repo={project.repo}
        />
      ))}
    </ProjectList>
  );
}
