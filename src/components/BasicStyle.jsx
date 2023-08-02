import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 150px;
  min-height: 90vh;
`;

export const Text = styled.p`
  font-family: Comic Sans MS;
  color: black;
  font-size: 2rem;
`;
export const BottomTear = styled.img`
  position: fixed;
  bottom: -20px;
  left: -100px;
  height: 12vh;
  width: 140vw;
`;

export const TopTear = styled.img`
  position: fixed;
  top: 0;
  left: -100px;
  height: 11vh;
  width: 120vw;
  z-index: 1;
`;
