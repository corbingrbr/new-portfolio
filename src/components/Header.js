import React from 'react';

const Header = ({ activeLink }) => (
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand text-white">corbingrbr</h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className={`nav-link ${activeLink === "profile" ? "active" : ""}`} href="/profile">Profile</a>
          <a className={`nav-link ${activeLink === "portfolio" ? "active" : ""}`} href="/portfolio">Portfolio</a>
          <a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  </div>
)

export default Header;