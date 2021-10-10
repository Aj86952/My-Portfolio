import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-main">
      <nav className="nav-bar">
        <ul className="nav-ul">
          <Link to="/" className="nav-li">
            <li>Home</li>
          </Link>
          <Link to="/about" className="nav-li">
            <li>About</li>
          </Link>
          <Link to="/skills" className="nav-li">
            <li>Skills</li>
          </Link>
          <Link to="/contact" className="nav-li">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
