import React from "react";
import axios from "axios";

function SearchBar() {
  const [raza, setRaza] = React.useState("");

  const handleChange = (event) => {
    setRaza(event.target.value);
  };

  const onSearch = async (text) => {
    try {
      console.log(`${process.env.REACT_APP_API_URL}/dogs?name=${text}`);
      const { data } = await axios(
        `${process.env.REACT_APP_API_URL}/dogs?name=${text}`
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
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
