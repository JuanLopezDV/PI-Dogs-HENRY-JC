import React from "react";
import { validation } from "../../functions/validationForm";
import axios from "axios";

function FormDogs() {
  const [newDog, setNewDog] = React.useState({
    name: "",
    image: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    temperament: [1, 6],
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewDog({ ...newDog, [property]: value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setErrors(validation(newDog));

      if (!!Object.keys(errors).length) {
        return errors;
      } else {
        const endpoint = `${process.env.REACT_APP_API_URL}/dogs`;
        const formDog = {
          name: newDog.name,
          image: newDog.image,
          height: {
            metric: `${newDog.minHeight} - ${newDog.maxHeight}`,
          },
          weight: {
            metric: `${newDog.minWeight} - ${newDog.maxWeight}`,
          },
          lifeSpan: `${newDog.minLifeSpan} - ${newDog.maxLifeSpan}`,
          temperament: newDog.temperament,
        };
        const { data } = await axios.post(endpoint, formDog);
        console.log(data);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }

    // const formDog = {
    //   name: "Perro 3 Astoy",
    // };

    // setNewDog(formDog);
    // console.log(formDog);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingresa el nombre de la nueva raza"
          onChange={handleChange}
        />

        <label htmlFor="height">Altura:</label>
        <input
          type="text"
          id="minHeight"
          name="minHeight"
          placeholder="Altura mínima (cm)"
          onChange={handleChange}
        />
        <input
          type="text"
          id="maxHeight"
          name="maxHeight"
          placeholder="Altura máxima (cm)"
          onChange={handleChange}
        />

        <label htmlFor="weight">Peso:</label>
        <input
          type="text"
          id="minWeight"
          name="minWeight"
          placeholder="Peso mínimo (kg)"
          onChange={handleChange}
        />
        <input
          type="text"
          id="maxWeight"
          name="maxWeight"
          placeholder="Peso máximo (kg)"
          onChange={handleChange}
        />

        <label htmlFor="lifeSpan">Años de vida:</label>
        <input
          type="text"
          id="minLifeSpan"
          name="minLifeSpan"
          placeholder="Años de vida mínimo"
          onChange={handleChange}
        />
        <input
          type="text"
          id="maxLifeSpan"
          name="maxLifeSpan"
          placeholder="Años de vida máximo"
          onChange={handleChange}
        />

        <label htmlFor="image">Imagen:</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Ingresa el URL de la imagen"
          onChange={handleChange}
        />
        <label htmlFor="temperament">Temperamento:</label>
        <button type="submit">Crear raza de perro</button>
      </form>
    </>
  );
}

export { FormDogs };
