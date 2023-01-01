import React from "react";
import { TopBar } from "components/TopBar";
import { Sidebar } from "components/Sidebar";
import { Dev } from "pages/Dev";
import { DevModal } from "pages/DevModal";
import { Design } from "pages/Design";
import { DesignModal } from "pages/DesignModal";
import { Main } from "./styles";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useThemeBreakpoints, useSession } from "shared/hooks";
import { useTouchListener } from "./shared/hooks";

export const App = () => {
  const { isMobile } = useThemeBreakpoints();
  const [openIndex, setOpenIndex] = React.useState(null);
  const [themeDark] = useSession('theme-dark', false);
  const [isDarkTheme, setDarkTheme] = useSession('theme-dark', themeDark);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = pathname.split('/')[2];
  const darkClass = isDarkTheme ? 'dark' : '';
  useTouchListener()

  React.useEffect(() => {
    const possibleRootPaths = ['dev', 'design'];
    const rootPath = pathname.split('/')[1];

    if (!possibleRootPaths.includes(rootPath)) {
      navigate("/");
    }
  }, [navigate, pathname])

  return (
    <div className="App">
      <div style={{ display: 'flex', width: '100%', height: '100vh', zIndex: 1, position: 'relative' }}>
        {!isMobile && <Sidebar darkClass={darkClass} isDarkTheme={isDarkTheme} setDarkTheme={setDarkTheme} />}
      
        <Main className={darkClass}>
           <TopBar 
            darkClass={darkClass} 
            isDarkTheme={isDarkTheme} 
            setDarkTheme={setDarkTheme} 
          />

          <Routes>
            <Route path="/dev/:id" element={
              <DevModal 
                darkClass={darkClass}
                isDarkTheme={isDarkTheme} 
                setOpenIndex={setOpenIndex}
                openIndex={openIndex || id}  
              />}
            />
            <Route path="/design/:id" element={
              <DesignModal 
                darkClass={darkClass}
                openIndex={openIndex || id} 
                setOpenIndex={setOpenIndex} 
              />} 
            />
            <Route path="/design" element={
              <Design 
                darkClass={darkClass}
                isDarkTheme={isDarkTheme} 
                setDarkTheme={setDarkTheme} 
                setOpenIndex={setOpenIndex} 
                />} 
            />
            <Route exact path="*" element={
              <Dev 
                darkClass={darkClass}
                isDarkTheme={isDarkTheme} 
                setDarkTheme={setDarkTheme} 
                setOpenIndex={setOpenIndex} 
              />} 
            />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

