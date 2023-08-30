import React from "react";
import FooterStyles from "./Footer.module.css";
import logoHenry from "../../assets/images/ISOLOGO_HENRY_BLACK.webp";
import { ReactComponent as GithubLogo } from "../../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={FooterStyles["container-footer"]}>
      <ul className={FooterStyles["container-footer-ul"]}>
        <li>
          <h4 className={FooterStyles["container-footer-ul-title"]}>
            Proyecto Individual
          </h4>
        </li>
        <li>
          {" "}
          <Link
            to="https://www.soyhenry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={FooterStyles["container-footer-ul-title"]}>
              BootCamp SOYHENRY <img src={logoHenry} alt="Logo SOYHENRY" />
            </h4>
          </Link>
        </li>
      </ul>

      <ul className={FooterStyles["container-footer-ul"]}>
        <li>
          <h4 className={FooterStyles["container-footer-ul-title"]}>
            Juan Camilo López Yusty
          </h4>
        </li>
        <li>
          <Link
            to="https://github.com/JuanLopezDV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={FooterStyles["ul-li-svg"]}>
              <GithubLogo />
            </p>
          </Link>
          <Link
            to="https://www.linkedin.com/in/juan-lopez-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={FooterStyles["ul-li-svg"]}>
              <Linkedin />
            </p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export { Footer };
