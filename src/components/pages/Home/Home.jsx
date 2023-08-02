import React from 'react';
import { WelcomeBox} from './HomeStyle';
import WelcomeTextWriter from './HomeStyle';

export default function Home() {
  return (
    <WelcomeBox>
      <WelcomeTextWriter text= "Hello, I'm Kyle"></WelcomeTextWriter>
    </WelcomeBox>
  );
}
