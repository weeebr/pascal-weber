import React from "react";
import { Summary, PortraitFoto, MoreWrapper } from "./styles";
import { ProfileTitle } from "shared/theme";
import { pascalFoto, pascalFotoAlternative } from 'shared/images'
import { githubIcon, emailIcon, linkedinIcon } from 'shared/icons'
import { useMediaQuery } from "shared/hooks";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width: 880px)');
  const [showToast, setShowToast] = React.useState(false);
  const { pathname } = useLocation();
  const isDesign = pathname.includes('design');


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
        <PortraitFoto src={isDesign ? pascalFotoAlternative : pascalFoto}><img className="img" alt="" /></PortraitFoto>
        <ProfileTitle>Pascal Weber</ProfileTitle>
        <div className="job-title">Experienced Frontend Engineer</div>
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/p-weber/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" width="20px" height={20} />
          </a>
          <a className="github" href="https://github.com/weeebr" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" width="20px" height={20} />
          </a>
          <span className="email">
            <img onKeyUp={() => copyToClipboard('contact@pascal-weber.ch')} onClick={() => copyToClipboard('contact@pascal-weber.ch')} src={emailIcon} alt="E-Mail" width="20px" height={20} data-copy="contact@pascal-weber.ch" />
            {showToast && <span className="toast">Copied{isMobile ? '' : ' to clipboard'}</span>}
          </span>
        </div>
      </div>
      <MoreWrapper>
        <div className="more">
          <p className="short-description">A passion for clean and elegant code, UX and details. Solution-oriented, pragmatic, engaged, and an empathetic, communicative team player.</p>
        </div>
    </MoreWrapper>
    </Summary>
  )
}

