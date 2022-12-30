import React from 'react';
import { PageToggle } from "../PageToggle";
import { StyledButton } from "../PageToggle/styles";
import { TopBarWrapper } from "./styles";
import { PageTitle } from "shared/theme";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { useThemeBreakpoints, usePage } from "shared/hooks";
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
            /{isDesign ? 'Design' : 'Dev'}
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