import React from "react";
import { Summary, PortraitFoto, MoreWrapper } from "./styles";
import { ProfileTitle } from "shared/theme";
import { pascalFoto, pascalFotoAlternative } from 'shared/images'
import { githubIcon, emailIcon, linkedinIcon } from 'shared/icons'
import { useThemeBreakpoints, usePage, useClipboard } from "shared/hooks";
import { ThemeToggle } from "components/ThemeToggle";

export const Sidebar = ({darkClass, isDarkTheme, setDarkTheme}) => {
  const [showToast, setShowToast] = React.useState(false);
  const { isMobile } = useThemeBreakpoints();
  const { isDesign } = usePage();
  const clip = useClipboard();
  const src = React.useMemo(() => isDesign ? pascalFotoAlternative : pascalFoto, [isDesign])

  const handleEmailClick = () => {
    clip.copy('contact@pascal-weber.ch');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  return (
    <Summary className={darkClass} isMobile={isMobile}>
      <div className="summary">
        <PortraitFoto src={src}><img className="img" alt="" /></PortraitFoto>
        <ProfileTitle className={darkClass}>Pascal Weber</ProfileTitle>
        <div className="job-title">Experienced Frontend Engineer</div>
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/p-weber/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" width="20px" height={20} />
          </a>
          <a className="github" href="https://github.com/weeebr" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" width="20px" height={20} />
          </a>
          <span className="email">
            <img 
              onKeyUp={handleEmailClick} 
              onClick={handleEmailClick} 
              src={emailIcon} 
              alt="E-Mail" 
              width={20} 
              height={20} 
            />
            {showToast && <span className="toast">Copied{isMobile ? '' : ' to clipboard'}</span>}
          </span>
        </div>
      </div>
      <MoreWrapper className={darkClass}>
        <div className="more">
          <p className="short-description">A passion for clean and elegant code, UX and details. Solution-oriented, pragmatic, engaged, and an empathetic, communicative team player.</p>
        </div>
    </MoreWrapper>
      {isMobile && <ThemeToggle isDarkTheme={isDarkTheme}  setDarkTheme={setDarkTheme} />}

    </Summary>
  )
}

