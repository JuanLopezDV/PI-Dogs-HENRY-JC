import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderDogs } from "../../redux/actions";
import OrderByStyles from "./OrderBy.module.css";

function OrderBy() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.filteredDogs);

  const orderTypes = [
    {
      id: 1,
      label: "Nombre: A-Z",
      fn: (arrDogs) =>
        arrDogs.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        }),
    },
    {
      id: 2,
      label: "Nombre: Z-A",
      fn: (arrDogs) =>
        arrDogs.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        }),
    },
    {
      id: 3,
      label: "Peso: de menor a mayor",
      fn: (arrDogs) =>
        arrDogs.sort((a, b) => {
          if (
            Number(a.weight.metric.split(" ")[0]) <
            Number(b.weight.metric.split(" ")[0])
          ) {
            return -1;
          } else if (
            Number(a.weight.metric.split(" ")[0]) >
            Number(b.weight.metric.split(" ")[0])
          ) {
            return 1;
          }
          return 0;
        }),
    },
    {
      id: 4,
      label: "Peso: de mayor a menor",
      fn: (arrDogs) =>
        arrDogs.sort((a, b) => {
          if (
            Number(a.weight.metric.split(" ")[0]) >
            Number(b.weight.metric.split(" ")[0])
          ) {
            return -1;
          } else if (
            Number(a.weight.metric.split(" ")[0]) <
            Number(b.weight.metric.split(" ")[0])
          ) {
            return 1;
          }
          return 0;
        }),
    },
  ];

  const onChange = (event) => {
    const orderBy = event.target.value;

    const orderType = orderTypes.find(
      (orderType) => orderType.id === Number(orderBy)
    );

    const orderedDogs = orderType?.fn(dogs);

    dispatch(orderDogs(orderedDogs));
  };

  return (
    <div className={OrderByStyles["container-select"]}>
      <select name="OrderBy" id="OrderBy" onChange={onChange}>
        <option value="">Ordenar por: </option>

        {orderTypes.map((orderType) => (
          <option key={orderType.id} value={orderType.id}>
            {orderType.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export { OrderBy };
