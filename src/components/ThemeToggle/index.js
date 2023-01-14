import React from "react";
import { SunIcon, MoonIcon } from "shared/icons";
import { currentThemeBg } from "shared/theme";
import { ToggleWrapper } from "./styles";
import { useSwipeable } from "react-swipeable";

export const ThemeToggle = ({isDarkTheme, setDarkTheme}) => {

  const toggleState = React.useCallback(() => {
    if (isDarkTheme) {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    } else {
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    }

    setDarkTheme(!isDarkTheme);
  }, [isDarkTheme, setDarkTheme]);


  const handlers = useSwipeable({
    onSwipedLeft: toggleState,
    onSwipedRight: toggleState,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });


  return (
    <ToggleWrapper {...handlers} htmlFor="toggle">
      <div className={`toggle ${isDarkTheme ? "dark" : ""}`}>
        <div className="icons">
          <MoonIcon fill={currentThemeBg(isDarkTheme)} />
          <SunIcon fill={currentThemeBg(isDarkTheme)} />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={!!isDarkTheme}
          onChange={() => {}}
          onClick={toggleState}
        />
      </div>
    </ToggleWrapper>
  );
}
