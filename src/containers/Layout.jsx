import React from "react";
import { useContext } from "react";
import Header from "../components/Header";
import { Context } from "../Context/Country";

const Layout = ({ children }) => {
  const { darkMode } = useContext(Context);
  return (
    <div className={`${darkMode && "darkModeBody"}`}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
