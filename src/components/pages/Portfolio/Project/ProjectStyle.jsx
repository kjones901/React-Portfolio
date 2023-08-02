import styled from "styled-components";
import GithubImport from "../../../../assets/GithubLogo.png";

export const ProjectContainer = styled.section`
  display: flex;
  flex-wrap: nowrap;
  height: 190px;
  width: 800px;
`;

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 8px solid black;
  width: 300px;
  align-items: center;
`;

export const ProjectTitle = styled.h2`
  font-family: Comic Sans MS;
  font-size: 2rem;
  margin-bottom: 8px;
  color: black;
`;

export const ProjectContent = styled.p`
  font-family: Comic Sans MS;
  font-size: 16px;
  color: black;
`;

export const DeployedImageBox = styled.div`
  display: flex;
  width: 600px;
  border: 8px solid black;
`

export const DeployedAnchor = styled.a`
background-image: ${(props) => `url(${props.background})`};
background-size: contain;
background-position: center;
width: 100%;

&:hover {
  opacity: 50%;
}
`

export const GithubImage = styled.a`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-image: url(${GithubImport});
  height: 40px;
  width: 40px;
  background-size: cover;
  
  
  &:hover {
    opacity: 50%;
  }
`;
