import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/images/logo.png" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}

export default Header;
