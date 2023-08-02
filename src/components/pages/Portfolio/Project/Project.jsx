import React from "react";
import {
  DeployedImageBox,
  ProjectContainer,
  ProjectDetailsContainer,
  ProjectContent,
  ProjectTitle,
  GithubImage,
  DeployedAnchor,
} from "./ProjectStyle";

const Project = ({ title, techlist, background, deployedLink, repo }) => {
  const importedBackground = require(`../../../../assets/${background}`);

  return (
    <ProjectContainer>
      <DeployedImageBox>
        <DeployedAnchor background={importedBackground} href={deployedLink} />
      </DeployedImageBox>
      <ProjectDetailsContainer>
        <ProjectTitle>Tech List:</ProjectTitle>
        <ProjectContent>{techlist}</ProjectContent>
        <GithubImage href={repo} />
      </ProjectDetailsContainer>
    </ProjectContainer>
  );
};

export default Project;
