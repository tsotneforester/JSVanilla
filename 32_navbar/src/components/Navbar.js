import React, { useState, useRef } from "react";
import "./style.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const listContRef = useRef(null);
  const listRef = useRef(null);

  const linkStyles = {
    height: showLinks ? `${listRef.current.getBoundingClientRect().height}px` : "0px",
  };

  function handler() {
    setShowLinks(!showLinks);
  }

  return (
    <header>
      <div className="nav-cont">
        <img src="assets/logo.png" alt="logo" />
        <img src="assets/menu.png" alt="menu" onClick={handler} />
      </div>
      <div className="list-cont" ref={listContRef} style={linkStyles}>
        <ul className="list" ref={listRef}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="social">
        <img src="assets/facebook.png" alt="logo" />
        <img src="assets/instagram.png" alt="logo" />
        <img src="assets/linkedin.png" alt="logo" />
        <img src="assets/twitter.png" alt="logo" />
      </div>
    </header>
  );
}

export default Navbar;
