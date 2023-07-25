import React from "react";
import CardDLStyles from "./CardDogLoading.module.css";

function CardDogLoading() {
  return (
    <section className="section-dogs">
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
    </section>
  );
}

export { CardDogLoading };
