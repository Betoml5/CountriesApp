import React from "react";
import { useContext } from "react";
import regularMoon from "../assets/images/moon-regular.svg";
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
          <img src={regularMoon} alt="moon" />
          <h3>Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
