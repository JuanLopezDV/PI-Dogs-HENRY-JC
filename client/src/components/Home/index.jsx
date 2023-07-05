/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SearchBar } from "../SearchBar";
import { addDogs, addTemperaments } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CardsDogs } from "../CardsDogs";
import { FilterContainer } from "../FilterContainer";
import { OrderBy } from "../OrderBy";

function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.filteredDogs);

  React.useEffect(() => {
    dispatch(addDogs());
    dispatch(addTemperaments());
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <SearchBar />
      <OrderBy />

      {!!dogs.length ? <CardsDogs dogs={dogs} /> : <></>}
      <FilterContainer />
    </>
  );
}

export { Home };
