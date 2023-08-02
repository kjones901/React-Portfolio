import styled from "styled-components";

export const ContactContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

export const UpperBox = styled.section`
  display: flex;
  height: 300px;
  width: 800px;
`;

export const ContactMeTitle = styled.h1`
  height: 200px;
  color: black;
  font-family: Comic Sans MS;
  text-align: center;
  justify-contents: center;
  font-size: 3.5rem;
  font-weight: bold;
  padding-top: 30px;
`

export const NameEmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 400px;
  border: 9px solid black;
`;

export const NameEmailInput = styled.input`
  border-top: 9px solid black;
  text-align: center;
  height: 100px;
  font-family: Comic Sans MS;
  font-size: 1.6rem;
`;

export const SideImage = styled.img`
  height: 300px;
  width: 400px;
  border: 9px solid black;
`;

export const MessageInputContainer = styled.div`
  width: 800px;
  height: 300px;
  border: 9px solid black;
`;

export const MessageInput = styled.input`
  width: 780px;
  height: 280px;
  border: none;
  text-align: center;
  font-family: Comic Sans MS;
`;
export const Text = styled.p`
  font-family: Comic Sans MS;
  font-size: 1.6rem;
  padding: 10px;
  color: black;
`;

export const SubmitButton = styled.button`
  background-color: orange;
  font-family: Comic Sans MS;
  color: white;
  padding: 12px 20px;
  border: 9px solid black;
  cursor: pointer;

  &:hover {
    background-color: #fc6f03;
  }
`;
