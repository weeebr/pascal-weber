import React from 'react';
import { PageToggle } from "../PageToggle";
import { StyledButton } from "../PageToggle/styles";
import { TopBarWrapper } from "./styles";
import { PageTitle } from "shared/theme";
import { ThemeToggle } from "../ThemeToggle";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { useThemeBreakpoints, usePage } from "shared/hooks";
import { DownloadIcon } from "shared/icons";
import { CV } from "shared/files";

export const TopBar = ({darkClass, isDarkTheme, setDarkTheme}) => {
  const { isMobile } = useThemeBreakpoints();
  const { isDesign } = usePage();

  return (
    <TopBarWrapper isMobile={isMobile} className={darkClass}>
      {isMobile && (
        <Sidebar isDarkTheme={isDarkTheme}  setDarkTheme={setDarkTheme} darkClass={darkClass} />
      )}
      {!isMobile && (
        <>
            <PageTitle className={darkClass} isDesign={isDesign}>
              <Link to={isDesign ? '/design' : '/'}>
                    /{isDesign ? 'Design' : 'Dev'}
              </Link>
            </PageTitle>
            <ThemeToggle isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme} />

          <span>
            <StyledButton className={`cv ${darkClass}`}>
              <Link target='_blank' to={CV} download>
                <span>CV</span>
                <DownloadIcon width="18px" height="18px" alt='download' />
              </Link>
            </StyledButton>
            <PageToggle />
          </span>
        </>
    )}
    </TopBarWrapper>
  );
}