import React from "react";
import { AboutMe } from "components/AboutMe";
import { Navigation } from "components/Navigation";
import { TopBarWrapper } from "./styles";
import { useTheme, useThemeBreakpoints } from "shared/hooks";

export const TopBar = () => {
  const { isMobile } = useThemeBreakpoints();
  const { darkClass, isDarkTheme } = useTheme();
console.log({darkClass, isDarkTheme})
  
  return (
    <TopBarWrapper className={darkClass} isMobile={isMobile}>
      {isMobile && <AboutMe />}
      {!isMobile && <Navigation />}
    </TopBarWrapper>
  )
}