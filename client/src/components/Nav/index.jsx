import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import NavStyles from "./Nav.module.css";

function Nav() {
  return (
    <header className={NavStyles["header"]}>
      <nav className={`${NavStyles["nav"]} ${NavStyles["container"]}`}>
        <div className={NavStyles["nav-logo"]}>
          <Link to={"/"}>
            <Logo className={NavStyles["nav-logo-svg"]} />
          </Link>
          <h2 className={NavStyles["nav-logo-title"]}>
            <Link to={"/"}>Dogs API</Link>
          </h2>
        </div>
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
