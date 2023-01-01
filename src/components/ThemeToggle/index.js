import React from "react";
import { SunIcon, MoonIcon } from "shared/icons";
import { currentThemeBg } from "shared/theme";
import { ToggleWrapper } from "./styles";

export const ThemeToggle = ({isDarkTheme, setDarkTheme}) => {
  const docEl = document.documentElement;

  const toggleState = React.useCallback(() => {
    docEl.style.setProperty("--background", currentThemeBg(!isDarkTheme));

    setDarkTheme(!isDarkTheme);
  }, [docEl.style, isDarkTheme, setDarkTheme]);

  React.useEffect(() => {
    if (docEl.style.getPropertyValue("--background") === "") {
      docEl.style.setProperty("--background", currentThemeBg(isDarkTheme));
    }
  }, [docEl.style, isDarkTheme])

  return (
    <ToggleWrapper htmlFor="toggle">
      <div className={`toggle ${isDarkTheme ? "dark" : ""}`}>
        <div className="icons">
          <SunIcon fill={currentThemeBg(isDarkTheme)} />
          <MoonIcon fill={currentThemeBg(isDarkTheme)} />
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
