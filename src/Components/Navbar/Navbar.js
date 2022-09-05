import React from "react";
import "./Navbar.scss";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Chetan's portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav navLink">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                >
                  <span href="/">Home</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/projects"
                  className="nav-link"
                  style={{ textDecoration: "none" }}
                >
                  <span href="/projects">Projects</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
