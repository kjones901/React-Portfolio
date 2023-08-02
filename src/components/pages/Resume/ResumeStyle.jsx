import styled from "styled-components";

export const ResumeContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 100px;
  width: 800px;
  border: 9px solid black;
  color: black;
  justify-content: center;
  align-items: center;
`;

export const ResumeTitle = styled.h1`
  font-family: Comic Sans MS;
  text-align: center;
  justify-contents: center;
  font-size: 3.5rem;
  font-weight: bold;
`;

export const ResumeAnchor = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: #fc6f03;
  }
`

export const ResumeTextContainer = styled.div`
  list-style-type: none;
  width: 800px;
  height: 800px;
  border: 9px solid black;
  color: black;
`;

export const Text = styled.p`
  font-family: Comic Sans MS;
  font-size: 1.6rem;
  padding: 10px;
  color: black;
`;

export const ResumePicture = styled.img`
  padding-top: 10px;
  width: 780px;
`;
