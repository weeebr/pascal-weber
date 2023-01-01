import React from "react";
import { SunIcon, MoonIcon } from "shared/icons";
import { currentToggleButton, currentToggleBg } from "shared/theme";
import "./styles.css";

export const ThemeToggle = ({isDarkTheme, setDarkTheme}) => {
  const docEl = document.documentElement;

  const toggleState = React.useCallback(() => {
    docEl.style.setProperty("--background", currentToggleButton(!isDarkTheme));
    docEl.style.setProperty("--toggle-bg", currentToggleBg(!isDarkTheme));

    setDarkTheme(!isDarkTheme);
  }, [docEl.style, isDarkTheme, setDarkTheme]);

  React.useEffect(() => {
    if (docEl.style.getPropertyValue("--background") === "") {
      docEl.style.setProperty("--toggle-bg", currentToggleBg(isDarkTheme));
      docEl.style.setProperty("--background", currentToggleButton(isDarkTheme));
    }
  }, [docEl.style, isDarkTheme])

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${!isDarkTheme ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isDarkTheme ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
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
    </label>
  );
}
