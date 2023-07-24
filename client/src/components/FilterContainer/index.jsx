import React from "react";
import { useSelector } from "react-redux";
import { FilterButton } from "../FilterButton";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import "./FilterContainer.css";

//! ojo testeo
import { temps } from "../../testing-obj";

function FilterContainer() {
  const [selected, setSelected] = React.useState(null);
  // const temperaments = useSelector((state) => state.allTemperaments); !!OJO example
  const temperaments = temps;
  console.log(temperaments);

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

  return (
    <div className="Container Container-wrapper">
      <div className="Container-dropdown">
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
              {type.content.map((source) => (
                <FilterButton
                  key={source.id}
                  name={source.name}
                  source={type.source}
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
