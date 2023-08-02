import styled from "styled-components";
import React, {useState, useEffect} from 'react';

export const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.span`
  overflow: hidden;
  color: black;
  border-right: 0;
  white-space: nowrap;
  font-family: Comic Sans MS;
  color: black;
  font-size: 4rem;
`;

export default function WelcomeTextWriter({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [text]);

  return <WelcomeText>{displayText}</WelcomeText>;
}