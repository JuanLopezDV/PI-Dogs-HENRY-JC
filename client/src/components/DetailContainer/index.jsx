import React from "react";
import DetailContStyle from "./DetailContainer.module.css";

function DetailContainer({ property, valueProp, unit }) {
  return (
    <section className={DetailContStyle["detail-prop-container"]}>
      <h4>{property}</h4>

      <p>
        {valueProp} {unit}
      </p>
    </section>
  );
}

export { DetailContainer };
