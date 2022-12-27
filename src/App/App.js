import React from "react";
import './App.css';
import { TopBar } from "./TopBar";
import { Sidebar } from "./Sidebar";
import { Dev } from "../pages/Dev";
import { Design } from "../pages/Design";
import { Main } from "./styles";
import { Routes, Route } from "react-router-dom";
import useMediaQuery from "./../shared/useMediaQuery";

export const App = () => {
  const isMobile = useMediaQuery('(max-width: 880px)');

  return (
    <div className="App">
      <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
        {!isMobile && <Sidebar />}
      
        <Main isMobile={isMobile}>
          <TopBar />
          <Routes>
            <Route exact path="*" element={<Dev />} />
            <Route path="/design" element={<Design/>} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

