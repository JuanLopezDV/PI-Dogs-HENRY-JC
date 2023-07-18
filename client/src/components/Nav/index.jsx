import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      <nav className="nav container">
        <h2 className="nav-logo">
          <Link to={"/"}>Pet logo</Link>
        </h2>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/new-dog"} className="nav-link">
              Crear perro
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Nav };
