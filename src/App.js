import React from "react";
import { TopBar } from "components/TopBar";
import { Sidebar } from "components/Sidebar";
import { Dev } from "pages/Dev";
import { DevModal } from "pages/DevModal";
import { Design } from "pages/Design";
import { DesignModal } from "pages/DesignModal";
import { Main } from "./styles";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useMobileQuery } from "shared/hooks";

export const App = () => {
  const isMobile = useMobileQuery();
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
            <Route path="/design" element={<Design setOpenIndex={setOpenIndex} />} />
            <Route exact path="*" element={<Dev setOpenIndex={setOpenIndex} />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

