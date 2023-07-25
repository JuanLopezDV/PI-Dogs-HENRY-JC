import React from "react";
import { ReactComponent as Check } from "../../assets/svg/check-icon.svg";
import styles from "./CreatedDog.module.css";

function CreatedDog({ setOpenModal, setResetBtn }) {
  const closeModal = (event) => {
    event.preventDefault();
    setOpenModal(false);
    setResetBtn(false);
  };

  return (
    <section className={styles["container"]}>
      <h3>¡Raza de perro creada con exito!</h3>
      <Check />
      <button className={styles["container-btn"]} onClick={closeModal}>
        Cerrar
      </button>
    </section>
  );
}

export { CreatedDog };
