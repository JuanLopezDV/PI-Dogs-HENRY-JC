/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CardDog } from "../CardDog";
import { Pagination } from "../Pagination";

function CardsDogs({ dogs }) {
  const [page, setPage] = React.useState(1);

  const numCardsToShow = 8;
  const maxPages = Math.ceil(dogs.length / numCardsToShow);

  return (
    <div>
      {dogs
        .slice((page - 1) * numCardsToShow, numCardsToShow * page)
        .map((dog) => {
          return <CardDog key={dog.id} id={dog.name} />;
        })}
      <Pagination page={page} setPage={setPage} maxPages={maxPages} />
    </div>
  );
}

export { CardsDogs };
