//SwitchTheme.tsx
import React, { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";
const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of black.
  let [theme, setTheme] = useLocalStorage("theme", "day");
  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "black" ? "day" : "black");
  };
  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="btn btn-circle bg-primary shadow-md mix-blend-normal" onClick={toggleTheme}>
      {theme === "day" ? (
        <FiMoon className="w-5 h-5"  />
      ) : (
        <FiSun className="w-5 h-5"  />
      )}
    </div>


    
  );
};
export default SwitchTheme;