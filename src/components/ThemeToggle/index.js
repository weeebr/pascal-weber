import React from "react";
import { SunIcon, MoonIcon } from "shared/icons";
import "./styles.css";

export const ThemeToggle = ({isDarkTheme, setDarkTheme}) => {
  const docEl = document.documentElement;
  console.log('pwe', 'isDarkTheme', isDarkTheme)
  const toggleState = React.useCallback(() => {
    docEl.style.setProperty("--background", isDarkTheme ? 'white' : 'black');

    setDarkTheme(!isDarkTheme);
  }, [docEl.style, isDarkTheme, setDarkTheme]);

  React.useEffect(() => {
    if (docEl.style.getPropertyValue("--background") === "") {
      docEl.style.setProperty("--background", isDarkTheme ? 'black' : 'white');
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
