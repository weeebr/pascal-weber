import React from 'react';
import { PageToggle } from "../PageToggle";
import { StyledButton } from "../PageToggle/styles";
import { TopBarWrapper } from "./styles";
import { PageTitle } from "shared/theme";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { useThemeBreakpoints, usePage } from "shared/hooks";
import { downloadIcon } from "shared/icons";
import { CV } from "shared/files";

export const TopBar = () => {
  const { isMobile } = useThemeBreakpoints();
  const { isDesign } = usePage();

  return (
    <TopBarWrapper>
      {isMobile && (
        <Sidebar />
      )}
      {!isMobile && (
        <>
            <PageTitle isDesign={isDesign}>
              <Link to={isDesign ? '/design' : '/'}>
                    /{isDesign ? 'Design' : 'Dev'}
              </Link>
            </PageTitle>

          <span>
            <StyledButton className='cv'>
              <Link target='_blank' to={CV} download>
                <span>CV</span>
                <img src={downloadIcon} width="18px" height="18px" alt='download' />
              </Link>
            </StyledButton>
            <PageToggle />
          </span>
        </>
    )}
    </TopBarWrapper>
  );
}