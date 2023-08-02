import ProfilePic from "../../../assets/ProfilePic.jpg";
import { AboutMeContainer, ProfilePicture, TextContainer, Text, BottomContainer } from "./AboutMeStyle";

export default function AboutMe() {
	return (
	  <AboutMeContainer>
		<ProfilePicture src={ProfilePic} />
		<TextContainer>
		  <Text>
			I'm a full stack web developer, recently graduated from the University of Utah's
			bootcamp,
		  </Text>
		  <Text>
			I'm familiar with the full development life-cycle, but find myself drawn to
			front-end client experience using React, JavaScript, and CSS.
		  </Text>
		</TextContainer>
		<BottomContainer>
			<Text>Outside the world of programming you might find me: running, playing pickleball, watching a Jazz game, or in the garage building something wooden.
			</Text>
			<Text>
			If you're a hiring manager seeking quality developers, I'd love to hear about your opportunities. Send me an email and let's get in touch.
			</Text>
		</BottomContainer>
	  </AboutMeContainer>
	);
  }