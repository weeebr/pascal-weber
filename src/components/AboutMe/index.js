import { EmailIcon, GitHubIcon, LinkedInIcon } from 'shared/icons'
import { MoreWrapper, PortraitFoto, ProfileTitle, Summary } from "./styles";
import { pascalFoto, pascalFotoAlternative } from 'shared/images'
import { useClipboard, usePage, useTheme, useThemeBreakpoints } from "shared/hooks";

import React from "react";
import { ThemeToggle } from "components/ThemeToggle";
import { theme } from 'shared/theme';

export const AboutMe = () => {
  const [showToast, setShowToast] = React.useState(false);
  const { darkClass, isDarkTheme } = useTheme();
  const { isPhone, isMobile, isTablet } = useThemeBreakpoints();
  const { isDesign } = usePage();
  const clip = useClipboard();
  const src = React.useMemo(() => isDesign ? pascalFotoAlternative : pascalFoto, [isDesign])

  const handleEmailClick = () => {
    clip.copy('p.weber.92@gmail.com');

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 100000);
  }

  return (
    <Summary className={darkClass} isMobile={isMobile} isTablet={isTablet}>
      <div className="summary">
        <PortraitFoto src={src} />
        <ProfileTitle className={darkClass}>Pascal Weber</ProfileTitle>
        <div className="job-title">Frontend Engineer (React, TypeScript)</div>
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/p-weber/" target="_blank" rel="noopener noreferrer">
            {isDarkTheme ? (
              <LinkedInIcon fill={theme.colors.background.main} />
            ) : (
              <LinkedInIcon fill={theme.colors.navigation.pageTitle} />
            )}
          </a>
          <a className="github" href="https://github.com/weeebr" target="_blank" rel="noopener noreferrer">
            {isDarkTheme ? (
              <GitHubIcon fill={theme.colors.background.main} />
            ) : (
              <GitHubIcon fill={theme.colors.navigation.pageTitle} />
            )}
          </a>
          <span className="email" onClick={handleEmailClick}>
            {isDarkTheme ? (
              <EmailIcon fill={theme.colors.background.main} />
            ) : (
              <EmailIcon fill={theme.colors.navigation.pageTitle} />
            )}
            {showToast && <span className="toast">Copied{isMobile ? '' : ' to clipboard'}</span>}
          </span>
        </div>
      </div>
      <MoreWrapper className={darkClass} isPhone={isPhone}>
        <div className="more">
          <p className="short-description">7+ Jahre Frontend-Fokus, 12+ Jahren Softwareentwicklung. End-to-End Ownership von skalierbaren Web-UIs in enger Zusammenarbeit mit Product, Design & Backend.</p>
          <p className="short-description">Fokus auf nachhaltige Code-Qualität durch gezieltes Refactoring und Mentoring sowie ausgeprägtes UX-Verständnis.</p>
        </div>
      </MoreWrapper>
      {isMobile && <ThemeToggle isDarkTheme={isDarkTheme} />}

    </Summary>
  )
}

