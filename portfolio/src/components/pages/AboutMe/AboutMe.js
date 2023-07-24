import Image from "../../../assets/ProfilePic.jpg";
import { AboutMeContainer, ProfilePicture, TextContainer, Text } from "./AboutMeStyle";

export default function AboutMe() {
	return (
	  <AboutMeContainer>
		<ProfilePicture src={Image} />
		<TextContainer>
		  <Text>
			I'm a full stack web developer, recently graduated from the University of Utah's
			bootcamp.
		  </Text>
		  <Text>
			I'm familiar with the full development life-cycle, with an emphasis on
			front-end client experience using React, JavaScript, and CSS.
		  </Text>
		  <Text></Text>
		</TextContainer>
	  </AboutMeContainer>
	);
  }