import React from "react";
import { ReactComponent as ArrowLeft } from "../../assets/svg/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrow-right.svg";
import PaginationStyles from "./Pagination.module.css";

function Pagination({ page, setPage, maxPages }) {
  const [input, setInput] = React.useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setPage(page + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setPage(page - 1);
  };

  const onInput = (event) => {
    const inputValue = Math.floor(event.target.value);
    if (event.key === "Enter") {
      if (inputValue < 1 || inputValue > maxPages || isNaN(inputValue)) {
        setPage(1);
        setInput(1);
      } else {
        setInput(inputValue);
        setPage(inputValue);
      }
    }
  };

  const onInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  return (
    <>
      <button
        className={PaginationStyles["pagination-btn"]}
        disabled={page <= 1}
        onClick={previousPage}
      >
        {<ArrowLeft className={PaginationStyles["icon"]} />}
      </button>
      <input
        className={PaginationStyles["pagination-input"]}
        onChange={onInputChange}
        onKeyDown={onInput}
        type="text"
        name="number-page"
        id="number-page"
        value={input}
      />
      <p>de {maxPages}</p>
      <button
        className={PaginationStyles["pagination-btn"]}
        disabled={page === maxPages}
        onClick={nextPage}
      >
        {<ArrowRight className={PaginationStyles["icon"]} />}
      </button>
    </>
  );
}

export { Pagination };
