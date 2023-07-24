import React from "react";
import CardDLStyles from "./CardDogLoading.module.css";

function CardDogLoading() {
  return (
    <>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
      <div className={CardDLStyles["dog-card"]}></div>
    </>
  );
}

export { CardDogLoading };
