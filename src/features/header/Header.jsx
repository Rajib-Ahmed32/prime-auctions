import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-blue">Auction</span>
        <span className="logo-yellow">Gallery</span>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Auctions</a>
        <a href="#">Categories</a>
        <a href="#">How it works</a>
      </nav>
      <div className="profile-icons">
        <img src="/user-icon.png" alt="User" />
      </div>
    </header>
  );
};

export default Header;
