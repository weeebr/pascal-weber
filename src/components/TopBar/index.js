import React from "react";
import { AboutMe } from "components/AboutMe";
import { Navigation } from "components/Navigation";
import { TopBarWrapper } from "./styles";
import { useTheme, useThemeBreakpoints } from "shared/hooks";

export const TopBar = () => {
  const { isPhone, isMobile } = useThemeBreakpoints();
  const { darkClass } = useTheme();
  
  return (
    <TopBarWrapper className={darkClass} isMobile={isMobile} isPhone={isPhone}>
      {isMobile && <AboutMe />}
      {!isMobile && <Navigation />}
    </TopBarWrapper>
  )
}