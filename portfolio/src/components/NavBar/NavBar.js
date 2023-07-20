import {H1, Header, Button, ButtonContainer} from "./NavBarStyling";
import React from "react";

export default function Nav() {
  return (
        <Header>
          <H1>Kyle Jones</H1>
          <ButtonContainer>
            <Button>About Me</Button>
            <Button>Projects</Button>
            <Button>Contact Me</Button>
            <Button>Resume</Button>
          </ButtonContainer>
        </Header>
  );
}
