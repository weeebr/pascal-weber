import React from "react";
import { More } from "./More";
import { Summary, PortraitFoto } from "./styles";
import { ProfileTitle } from "../../shared/Theme/typography";
import pascalFoto from '../../assets/pascal-weber.png'
import githubIcon from '../../assets/github.svg'
import emailIcon from '../../assets/email.svg'
import linkedInIcon from '../../assets/linkedin.svg'
import useMediaQuery from "./../../shared/useMediaQuery";

export const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width: 880px)');

  return (
    <Summary isMobile={isMobile}>
      <div className="summary">
        <PortraitFoto src={pascalFoto}><img className="img" alt="" /></PortraitFoto>
        <ProfileTitle>Pascal Weber</ProfileTitle>
        <div className="job-title">Experienced Frontend Engineer</div>
        <div className="contact-info">
          <img src={linkedInIcon} alt="LinkedIn" width="20px" height={20} />
          <img src={githubIcon} alt="Github" width="20px" height={20} />
          <img src={emailIcon} alt="E-Mail" width="20px" height={20} data-copy="contact@pascal-weber.ch" />
        </div>
      </div>
      <More />
    </Summary>
  )
}

