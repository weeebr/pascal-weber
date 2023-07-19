import React from "react";
import { SunIcon, MoonIcon } from "shared/icons";
import { useTheme } from "shared/hooks";
import { currentThemeBg } from "shared/theme";
import { ToggleWrapper } from "./styles";
import { useSwipeable } from "react-swipeable";

export const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const handlers = useSwipeable({
    onSwipedLeft: toggleTheme,
    onSwipedRight: toggleTheme,
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
          onClick={toggleTheme}
        />
      </div>
    </ToggleWrapper>
  );
}
