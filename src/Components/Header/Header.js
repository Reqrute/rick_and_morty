import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App/App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu" onClick={() => window.location.reload(false)}>
          Rick & Morty 
        </Link>
        <style>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>

              <div className="accordion" id='accordionID'> 
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button 
                      lass="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#collapseOne" 
                      aria-expanded="false" 
                      aria-controls="collapseOne"
                      >
                        User
                      </button>
                    </h2>
                </div>
               </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header ;