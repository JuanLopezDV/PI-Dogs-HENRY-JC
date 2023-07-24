import React from "react";
import { Link } from "react-router-dom";
import NavStyles from "./Nav.module.css";

function Nav() {
  return (
    <header className={NavStyles["header"]}>
      <nav className={`${NavStyles["nav"]} ${NavStyles["container"]}`}>
        <h2 className={NavStyles["nav-logo"]}>
          <Link to={"/"}>App Dog Logo</Link>
        </h2>
        <ul className={NavStyles["nav-list"]}>
          <li>
            <Link to={"/home"} className={NavStyles["nav-link"]}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/new-dog"} className={NavStyles["nav-link"]}>
              Crear perro
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Nav };
