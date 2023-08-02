import React from 'react';
import { ResumePicture, ResumeContainer, ResumeTextContainer, TitleContainer, ResumeTitle, ResumeAnchor } from './ResumeStyle';
import ResumePic from '../../../assets/Resume.png';
import ResumeDownload from '../../../assets/KyleJonesResume.pdf'

export default function Resume() {
  return (
      <ResumeContainer>
        <TitleContainer>
          <ResumeTitle><ResumeAnchor href={ResumeDownload} download>Download Resume</ResumeAnchor></ResumeTitle>
          </TitleContainer>
        <ResumeTextContainer>
          <ResumePicture src = {ResumePic}></ResumePicture>
        </ResumeTextContainer>
      </ResumeContainer>
  );
}
