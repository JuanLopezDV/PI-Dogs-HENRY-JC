import React from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderBy() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.filteredDogs);

  const onChange = (event) => {};

  return (
    <>
      <label>
        Ordenar por:
        <select name="OrderBy" id="OrderBy" onChange={onChange}>
          <option value="">--Escoge una opción--</option>
          <option value="Nombre: A-Z">Nombre: A-Z</option>
          <option value="Nombre: Z-A">Nombre: Z-A</option>
          <option value="Peso: de menor a mayor">Peso: de menor a mayor</option>
          <option value="Peso: de mayor a menor">Peso: de mayor a menor</option>
        </select>
      </label>
    </>
  );
}

export { OrderBy };
