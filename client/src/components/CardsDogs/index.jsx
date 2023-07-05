/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CardDog } from "../CardDog";

function CardsDogs({ dogs }) {
  return (
    <div>
      {dogs.map((dog) => {
        return <CardDog key={dog.id} id={dog.name} />;
      })}
      card
    </div>
  );
}

export { CardsDogs };
