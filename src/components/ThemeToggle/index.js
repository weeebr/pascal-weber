import React from "react";
import { SunIcon, MoonIcon } from "shared/icons";
import { theme, themeDark } from "shared/theme";
import "./styles.css";

export const ThemeToggle = ({isDarkTheme, setDarkTheme}) => {

  /*
   * Read the blog post here:
   * https://letsbuildui.dev/articles/building-a-dark-mode-theme-toggle
   */

  const toggleState = () => {
    const docEl = document.documentElement;

    if (isDarkTheme) {
      docEl.style.setProperty("--background", theme.colors.background.main);
    } else {
      docEl.style.setProperty("--background", themeDark.colors.background.main);
    }
    setDarkTheme((prevState) => !prevState);
  };

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
