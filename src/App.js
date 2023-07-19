import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { TopBar } from "components/TopBar";
import { AboutMe } from "components/AboutMe";
import { Navigation } from "components/Navigation";
import { ProjectGallery } from "./components/ProjectGallery";
import { ProjectDetails } from "./components/ProjectDetails";
import { useTheme, useTouchListener, usePage, useThemeBreakpoints } from "shared/hooks";
import { AppRoot } from "./styles";

export const App = () => {
  const { isDarkTheme, darkClass } = useTheme();
  const { invalidRoot } = usePage();
  const { isMobile } = useThemeBreakpoints();
  const navigate = useNavigate();
  useTouchListener();

  React.useEffect(() => {
    if (invalidRoot) {
      navigate("/");
    }
  }, [invalidRoot, navigate])


  React.useEffect(() => {
    if (isDarkTheme) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.add("light");
    }
  }, [isDarkTheme])

  return (
    <AppRoot>
      {!isMobile && <AboutMe />}
    
      <div>
        <TopBar className={darkClass} isMobile={isMobile}>
          {isMobile && <AboutMe />}
          {!isMobile && <Navigation />}
        </TopBar>

        <Routes>
          <Route path="/dev/:id" element={<ProjectDetails />} />
          <Route path="/design/:id" element={<ProjectDetails />} />
          <Route path="/dev/" element={<ProjectGallery />} />
          <Route path="/design/" element={<ProjectGallery />} />
          <Route exact path="/" element={<ProjectGallery />} />
        </Routes>
      </div>
    </AppRoot>
  );
}

