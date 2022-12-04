//SwitchTheme.tsx
import React, { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLocalStorage } from "usehooks-ts";
const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of black.
  const [theme, setTheme] = useLocalStorage("theme", "day");
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
    // <button classNameName="btn btn-circle" onClick={toggleTheme}>
    //   {theme === "black" ? (
    //     <FiMoon classNameName="w-5 h-5" />
    //   ) : (
    //     <FiSun classNameName="w-5 h-5" />
    //   )}
    // </button>
    <div className="inline-flex">
        <FiSun className="w-5 h-5 mr-2" />
        <label className="inline-flex relative items-center cursor-pointer">
            
            <input type="checkbox" value="" onClick={toggleTheme} className="sr-only peer"/>
        
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            
        </label>
        <FiMoon className="w-5 h-5 ml-2" />
    </div>
    

    
  );
};
export default SwitchTheme;