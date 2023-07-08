import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Headroom from "react-headroom";
import AnimatedCursor from "./components/animatedCursor";
import AnimatedRoutes from "./components/AnimatedRoutes";
// eslint-disable-next-line
import Preloader from "./components/Preloader";
// eslint-disable-next-line

const App = () => {
  const initialTheme = localStorage.getItem("selectedTheme");
  const [theme, setTheme] = useState(initialTheme);
  const setThemeOuter = (currentTheme)=>{
    setTheme(currentTheme)
  }
  return (
    <>
      <Preloader />
      <AnimatedCursor />
      <HashRouter>
        <Headroom>
          <Navbar setThemeParent={setThemeOuter}/>
        </Headroom>
        <AnimatedRoutes useTheme={theme}/>
      </HashRouter>
    </>
  );
};

export default App;
