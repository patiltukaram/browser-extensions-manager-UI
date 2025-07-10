import React from "react";

function Header({theme, setTheme}) {
  const isDark = theme === "dark";
 
  const toggleTheme = () => setTheme(isDark ? "light": "dark");
  return (
    <header className="header">
      <img src="./assets/images/logo.svg" alt="Logo" className="logo" />
      <button className="btn" 
      onClick={toggleTheme}
      aria-label="Toggle Theme">
        <img src={`./assets/images/icon-${isDark? "sun":"moon"}.svg`} alt="Toggle Icon" width={24} height={24}/>
      </button>
    </header>
  );
}

export default Header;
