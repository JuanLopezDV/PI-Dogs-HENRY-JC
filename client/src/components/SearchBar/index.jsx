import React from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../redux/actions";

function SearchBar() {
  const [raza, setRaza] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRaza(event.target.value);
  };

  const onSearch = (text) => {
    dispatch(searchDogs(text));
  };

  return (
    <>
      <input
        type="text"
        placeholder="... Escribe la raza de perros a buscar"
        onChange={handleChange}
      />

      <button onClick={() => onSearch(raza)}>Buscar</button>
    </>
  );
}

export { SearchBar };
