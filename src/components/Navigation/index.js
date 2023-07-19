import React from 'react';
import { Link } from "react-router-dom";
import { CV } from "shared/files";
import { usePage, useTheme, useThemeBreakpoints } from "shared/hooks";
import { DownloadIcon } from "shared/icons";
import { NavRootToggle } from "../NavRootToggle";
import { StyledButton } from "../NavRootToggle/styles";
import { ThemeToggle } from "../ThemeToggle";
import { PageTitle, PageSubTitle } from "./styles";

export const Navigation = () => {
  const { darkClass } = useTheme();
  const { isDesign, otherRoot } = usePage();
  const { isPhone } = useThemeBreakpoints();

  return (
    <>
      <PageTitle className={darkClass} isDesign={isDesign}>
        <Link to={otherRoot}>/{isDesign ? 'Design' : 'Dev'}</Link>
      </PageTitle>
      <ThemeToggle />

      <span>
        <StyledButton className={`cv ${darkClass}`} isPhone={isPhone}>
          <Link target='_blank' to={CV} download>
            <span>CV</span>
            <DownloadIcon width="18px" height="18px" alt='download' />
          </Link>
        </StyledButton>
        <NavRootToggle />
      </span>
    </>
  )
}


export const NavigationMobile = () => {
  const { isDesign, pageTitle } = usePage();
  const { darkClass } = useTheme();
  const { isPhone } = useThemeBreakpoints();

  return (
    <>
      <span>
        <PageTitle className={darkClass} isDesign={isDesign} isPhone={isPhone}>
          <Link to={'/'}>
            { pageTitle }
          </Link>
        </PageTitle>

        <span>
          <StyledButton className={`cv ${darkClass}`} isPhone={isPhone}>
            <Link target='_blank' to={CV} download>
              <span>CV</span>
              <DownloadIcon width="18px" height="18px" alt='download' />
            </Link>
          </StyledButton>
          <NavRootToggle />
        </span>
      </span>
      <PageSubTitle className={darkClass} isDesign={isDesign} isPhone={isPhone}>Portfolio</PageSubTitle>
    </>
  )
}