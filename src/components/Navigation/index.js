import React from 'react';
import { Link } from "react-router-dom";
import { CV } from "shared/files";
import { usePage, useTheme } from "shared/hooks";
import { DownloadIcon } from "shared/icons";
import { PageToggle } from "../PageToggle";
import { StyledButton } from "../PageToggle/styles";
import { ThemeToggle } from "../ThemeToggle";
import { PageTitle, PageSubTitle } from "./styles";

export const Navigation = () => {
  const { darkClass } = useTheme();
  const { isDesign, otherRoot } = usePage();

  return (
    <>
      <PageTitle className={darkClass} isDesign={isDesign}>
        <Link to={otherRoot}>/{isDesign ? 'Design' : 'Dev'}</Link>
      </PageTitle>
      <ThemeToggle />

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
  )
}


export const NavigationMobile = ({darkClass}) => {
  const { isDesign, pageTitle } = usePage();

  return (
    <>
      <span>
        <PageTitle className={darkClass} isDesign={isDesign}>
          <Link to={'/'}>
            { pageTitle }
          </Link>
        </PageTitle>

        <span>
          <StyledButton className={`cv ${darkClass}`}>
            <Link target='_blank' to={CV} download>
              <span>CV</span>
              <DownloadIcon width="18px" height="18px" alt='download' />
            </Link>
          </StyledButton>
          <PageToggle />
        </span>
      </span>
      <PageSubTitle className={darkClass} isDesign={isDesign}>Portfolio</PageSubTitle>
    </>
  )
}