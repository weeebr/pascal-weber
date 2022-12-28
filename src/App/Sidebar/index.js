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
  const [showToast, setShowToast] = React.useState(false);

  const copyToClipboard = (text) => {
    setTimeout(() => setShowToast(false), 1000);
    setShowToast(true);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      const result = document.execCommand('copy');
      document.body.removeChild(input);
      return result;
    }
  }

  return (
    <Summary isMobile={isMobile}>
      <div className="summary">
        <PortraitFoto src={pascalFoto}><img className="img" alt="" /></PortraitFoto>
        <ProfileTitle>Pascal Weber</ProfileTitle>
        <div className="job-title">Experienced Frontend Engineer</div>
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/p-weber/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" width="20px" height={20} />
          </a>
          <a className="github" href="https://github.com/weeebr" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" width="20px" height={20} />
          </a>
          <span className="email">
            <img onKeyUp={() => copyToClipboard('contact@pascal-weber.ch')} onClick={() => copyToClipboard('contact@pascal-weber.ch')} src={emailIcon} alt="E-Mail" width="20px" height={20} data-copy="contact@pascal-weber.ch" />
            {showToast && <span className="toast">Copied to clipboard</span>}
          </span>
        </div>
      </div>
      <More />
    </Summary>
  )
}

