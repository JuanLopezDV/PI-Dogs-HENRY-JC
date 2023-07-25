/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SearchBar } from "../SearchBar";
import { addDogs, addTemperaments } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CardsDogs } from "../CardsDogs";
import { FilterContainer } from "../FilterContainer";
import { OrderBy } from "../OrderBy";
import { CardDogLoading } from "../CardDogLoading";
import HomeStyles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.filteredDogs);

  React.useEffect(() => {
    dispatch(addDogs());
    dispatch(addTemperaments());
  }, []);

  return (
    <>
      <main className={HomeStyles["main"]}>
        <section className={`${HomeStyles["main-section"]}`}>
          <div></div>
          <div className={HomeStyles["search-container"]}>
            <SearchBar />
            <OrderBy />
          </div>
        </section>

        <section className={`${HomeStyles["main-section"]}`}>
          <div className={HomeStyles["section-filter"]}>
            <FilterContainer />
          </div>
          <div className={HomeStyles["section-dogs-page"]}>
            {!!dogs.length ? <CardsDogs dogs={dogs} /> : <CardDogLoading />}
          </div>
        </section>
      </main>
    </>
  );
}

export { Home };
