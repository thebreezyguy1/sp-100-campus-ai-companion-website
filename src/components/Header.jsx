import React from "react";
import ksuImg from "../assets/ksu.webp";

const Header = () => {
  return (
    <div id="header-container">
      <div className="container">
        <img src={ksuImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
