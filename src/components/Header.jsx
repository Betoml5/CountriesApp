import React from "react";
import regularMoon from "../assets/images/moon-regular.svg";
import "../styles/components/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h3>Where in the world?</h3>
        <div className="header__container-darkmode">
          <img src={regularMoon} alt="moon" />
          <h3>Dark Mode</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
