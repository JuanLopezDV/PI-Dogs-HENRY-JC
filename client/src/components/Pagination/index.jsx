import React from "react";

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
    <div>
      <button disabled={page <= 1} onClick={previousPage}>{`<`}</button>
      <input
        onChange={onInputChange}
        onKeyDown={onInput}
        type="text"
        name="number-page"
        id="number-page"
        value={input}
      />
      <p>de {maxPages}</p>
      <button disabled={page === maxPages} onClick={nextPage}>{`>`}</button>
    </div>
  );
}

export { Pagination };
