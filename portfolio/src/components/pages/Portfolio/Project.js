import React from 'react';
import LogoImage from '../../../assets/Logo1.png'
import { ProjectContainer, ProjectContent, ProjectTitle } from './ProjectStyle' 

const Project = ({ title, techlist, background, deployedLink, repo }) => {
	const importedBackground = require(`../../../assets/${background}`);
	
  return (
	  <ProjectContainer background={importedBackground || LogoImage}>
		<ProjectTitle>{title}</ProjectTitle>
		<ProjectContent>{techlist}</ProjectContent>
	  </ProjectContainer>
	);
  };
  
export default Project;