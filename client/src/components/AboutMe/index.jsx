import React from "react";
import styles from "./AboutMe.module.css";
import { ReactComponent as GithubLogo } from "../../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { Link } from "react-router-dom";

function AboutMe({ setOpenModal }) {
  const closeModal = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  return (
    <section className={styles["container"]}>
      <h3>Creado por:</h3>
      <h2>Juan Camilo López Yusty</h2>
      <p>Proyecto individual - ¡Bootcamp SOY HENRY!</p>

      <ul className={styles["container-footer-ul"]}>
        <li>
          <Link
            to="https://github.com/JuanLopezDV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles["ul-li-svg"]}>
              <GithubLogo />
            </p>
          </Link>
          <Link
            to="https://www.linkedin.com/in/juanlopez96/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles["ul-li-svg"]}>
              <Linkedin />
            </p>
          </Link>
        </li>
      </ul>

      <button className={styles["container-btn"]} onClick={closeModal}>
        Cerrar
      </button>
    </section>
  );
}

export default AboutMe;
