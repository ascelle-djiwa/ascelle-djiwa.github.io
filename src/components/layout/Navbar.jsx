import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light sticky-top bg-white shadow-sm px-3 py-3" 
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold text-brand fs-4" to="/">
          Laurence's<span className="text-dark"> Website</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Ouvrir le menu de navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3 fw-medium">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link text-brand fw-bold border-bottom border-brand border-2'
                    : 'nav-link text-dark'
                }
              >
                Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/experiences-projets"
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link text-brand fw-bold border-bottom border-brand border-2'
                    : 'nav-link text-dark'
                }
              >
                Expériences & Projets
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/formation"
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link text-brand fw-bold border-bottom border-brand border-2'
                    : 'nav-link text-dark'
                }
              >
                Formation
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/a-propos-contact"
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link text-brand fw-bold border-bottom border-brand border-2'
                    : 'nav-link text-dark'
                }
              >
                À propos & Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}