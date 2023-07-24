import React from "react";
import { FormDogs } from "../FormDogs";
import newDogStyles from "./NewDog.module.css";

function NewDog() {
  return (
    <section className={newDogStyles["container-new-dog"]}>
      <FormDogs />
    </section>
  );
}

export { NewDog };
