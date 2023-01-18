import React, { useState, useEffect } from "react";
import "./ThemeSwitcher.css";


function ThemeSwitcher({ className, theme, toggleTheme }) {

  const icon = theme === `light` ? "🌤" : "🌑";



  return (
    <span className={`${className} ThemeSwitcher`}>
      <button
        type="button"
        className="theme-switcher__toggle"
        onClick={toggleTheme}
      >


        <span className="theme-switcher__switch" />
        {icon}
      </button>
    </span>

  );
}

export default ThemeSwitcher;
