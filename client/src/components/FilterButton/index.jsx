import btnStyles from "./FilterButton.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDogs } from "../../redux/actions";

const uuidRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

function FilterButton(props) {
  const [isToggled, setIsToggled] = React.useState(false);

  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.filteredDogs);

  const filterTypes = {
    source: (text) =>
      text.includes("API")
        ? dogs.filter((dog) => !uuidRegex.test(dog.id) && Number(dog.id))
        : dogs.filter((dog) => uuidRegex.test(dog.id)),
    temperaments: (text) =>
      dogs.filter((dog) => dog?.temperament?.includes(text)),
  };

  const onClick = (source, name) => {
    const dogsFilter = filterTypes[source](name);
    dispatch(filterDogs(dogsFilter));
    setIsToggled(!isToggled);
  };

  return (
    <>
      <button
        className={`${btnStyles["btn-styles"]} ${
          isToggled
            ? btnStyles["btn-styles--active"]
            : btnStyles["btn-styles--normal"]
        }`}
        onClick={() => onClick(props.source, props.name)}
      >
        {props.name}
      </button>
    </>
  );
}

export { FilterButton };
