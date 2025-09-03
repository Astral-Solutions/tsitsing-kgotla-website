import React from "react";
import logo from "../../Public/images/KgotlhaLogo.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo">
            <img src={logo} alt="Kgotla Logo" className="logo-img" />
            Kgotla ya Rakhudu
          </a>
          <nav>
            <button className="mobile-menu-toggle" onClick={() => toggleMobileMenu()}>
              ☰
            </button>
            <ul id="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#heritage">Heritage</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#notices">Notices</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
