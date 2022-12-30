import React from "react";
import './App.css';
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { Dev } from "../pages/Dev";
import { DevModal } from "../shared/DevModal";
import { Design } from "../pages/Design";
import { DesignModal } from "../shared/DesignModal";
import { Main } from "./styles";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "./../shared/useMediaQuery";

export const App = () => {
  const isMobile = useMediaQuery('(max-width: 880px)');
  const [openIndex, setOpenIndex] = React.useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = pathname.split('/')[2];

  React.useEffect(() => {
    const possibleRootPaths = ['dev', 'design'];
    const rootPath = pathname.split('/')[1];

    if (!possibleRootPaths.includes(rootPath)) {
      navigate("/");
    }
  }, [navigate, pathname])

  return (
    <div className="App">
      <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
        {!isMobile && <Sidebar />}
      
        <Main isMobile={isMobile}>
           <TopBar />
          <Routes>
            <Route path="/dev/:id" element={<DevModal openIndex={openIndex || id} setOpenIndex={setOpenIndex}  />} />
            <Route path="/design/:id" element={<DesignModal openIndex={openIndex || id} setOpenIndex={setOpenIndex} />} />
            <Route path="/design" element={<Design setOpenIndex={setOpenIndex} openIndex={openIndex} />} />
            <Route exact path="*" element={<Dev setOpenIndex={setOpenIndex} openIndex={openIndex} />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

