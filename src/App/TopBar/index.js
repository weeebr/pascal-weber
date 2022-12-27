import React from 'react';
import { PageToggle } from "../../shared/PageToggle";
import { StyledButton } from "../../shared/PageToggle/styles";
import { TopBarWrapper } from "./styles";
import { PageTitle } from "../../shared/Theme/typography";
import { useLocation, Link } from "react-router-dom";
import CV from '../../assets/CV_Frontend_Engineer_Pascal_Weber.pdf'
import { Sidebar } from "./../Sidebar/index";
import useMediaQuery from "./../../shared/useMediaQuery";

export const TopBar = () => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 880px)');

  return (
    <TopBarWrapper>
      {isMobile && (
        <Sidebar />
      )}
      {!isMobile && (
        <>
          <PageTitle type={pathname}>
            /{pathname === '/design' ? 'Design' : 'Dev'}
          </PageTitle>

          <span>
            <StyledButton className='cv'>
              <Link target='_blank' to={CV} download>
                CV
              </Link>
            </StyledButton>
            <PageToggle />
          </span>
        </>
    )}
    </TopBarWrapper>
  );
}