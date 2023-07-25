import React from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../redux/actions";
import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import searchStyles from "./SearchBar.module.css";

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
    <div className={searchStyles["container-search"]}>
      <input
        type="text"
        className={searchStyles["search-input"]}
        placeholder="... Escribe la raza de perros a buscar"
        onChange={handleChange}
      />

      <button
        className={searchStyles["search-btn"]}
        onClick={() => onSearch(raza)}
      >
        <SearchIcon className={searchStyles["search-icon"]} />
      </button>
    </div>
  );
}

export { SearchBar };
