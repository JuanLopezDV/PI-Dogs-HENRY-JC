/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CardDog } from "../CardDog";
import { Pagination } from "../Pagination";
import "./CardsDogs.css";

function CardsDogs({ dogs }) {
  const [page, setPage] = React.useState(1);

  const numCardsToShow = 8;
  const maxPages = Math.ceil(dogs.length / numCardsToShow);

  return (
    <>
      <section className="section-dogs">
        {dogs
          .slice((page - 1) * numCardsToShow, numCardsToShow * page)
          .map((dog) => {
            return (
              <CardDog
                key={dog.id}
                id={dog.id}
                height={dog.height.metric}
                image={dog.image}
                life_span={dog.life_span}
                name={dog.name}
                temperament={dog.temperament}
                weight={dog.weight.metric}
              />
            );
          })}
      </section>
      <section className="section-pagination">
        <Pagination page={page} setPage={setPage} maxPages={maxPages} />
      </section>
    </>
  );
}

export { CardsDogs };
