import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterButton } from "../FilterButton";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import "./FilterContainer.css";
import { addDogs } from "../../redux/actions";

function FilterContainer() {
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(null);
  const [activeIndices, setActiveIndices] = React.useState([]);
  const temperaments = useSelector((state) => state.allTemperaments);

  const fuentePerros = [
    { id: 1, name: "API externa" },
    { id: 2, name: "Creados" },
  ];

  const filters = [
    { source: "source", title: "Fuente de perros", content: fuentePerros },
    { source: "temperaments", title: "Temperamentos", content: temperaments },
  ];

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else {
      setSelected(i);
    }
  };

  const restoreFilters = () => {
    dispatch(addDogs());
  };

  return (
    <div className="Container Container-wrapper">
      <div className="Container-dropdown">
        <p
          onClick={() => {
            restoreFilters();
            setActiveIndices([]);
          }}
          className="Container-clean-filters"
        >
          Limpiar filtros
        </p>
        {filters.map((type, i) => (
          <div key={type.source} className="Container-type">
            <div className="Container-type-tittle" onClick={() => toggle(i)}>
              <h2>{type.title}</h2>
              <span>
                {selected === i ? (
                  <ArrowUp className="icon" />
                ) : (
                  <ArrowDown className="icon" />
                )}
              </span>
            </div>
            <div
              className={
                selected === i
                  ? "Container-type-content Container-type-content--show"
                  : "Container-type-content"
              }
            >
              {type.content.map((source, index) => (
                <FilterButton
                  key={source.id}
                  name={source.name}
                  source={type.source}
                  activeIndices={activeIndices}
                  buttonIndex={index}
                  setActiveIndices={setActiveIndices}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FilterContainer };
