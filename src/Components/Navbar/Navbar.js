import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>Chetan G</div>
        <div className="home">
          <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
            <span href="/">Home</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
