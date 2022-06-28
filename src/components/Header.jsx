import React from "react";
import { useContext } from "react";
import blackMoon from "../assets/images/moon-black.png";
import whiteMoon from "../assets/images/moon-white.png";

import "../styles/components/Header.css";
import { Context } from "../Context/Country";
const Header = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  return (
    <header className={`${darkMode && "darkModeElement"} header`}>
      <div className="header__container">
        <h3>Where in the world?</h3>
        <div
          className="header__container-darkmode"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <img src={`${darkMode ? whiteMoon : blackMoon}`} alt="moon" />
          <h3>Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
