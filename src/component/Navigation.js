import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" href="#"></div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Acceuil
              </NavLink>
              <span className="sr-only"></span>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercice/1">
                Exercice 1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercice/2">
                Exercice 2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercice/3">
                Exercice 3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercice/4">
                Exercice 4
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercice/5">
                Exercice 5
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercice/6">
                Exercice 6
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/country/france">
                Api_France
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/country/german">
                Api_German
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/country/canada">
                Api_Canada
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
