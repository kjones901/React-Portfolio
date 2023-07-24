import styled from 'styled-components';

export const ProjectContainer = styled.section`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
  background-image: ${(props)=> `url(${props.background})`};
  background-size: cover;
  background-position: center;
  `;

export const ProjectTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const ProjectContent = styled.p`
  font-size: 16px;
`;


