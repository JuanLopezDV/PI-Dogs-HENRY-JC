import React from "react";
import { validation } from "../../functions/validationForm";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FilterButton } from "../FilterButton";
import { addTemperaments } from "../../redux/actions";
import FormDogsStyles from "./FormDogs.module.css";

//! ojo testeo
import { temps } from "../../testing-obj";

function FormDogs() {
  const dispatch = useDispatch();
  //! const temperaments = useSelector((state) => state.allTemperaments);
  const temperaments = temps;

  const [newDog, setNewDog] = React.useState({
    name: "",
    image:
      "https://pawzvistas.com/cdn/shop/files/ezgif.com-webp-to-png_18.webp",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    temperament: [],
  });

  let msgError = "";

  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    setErrors(validation(newDog));
    // dispatch(addTemperaments());
  }, [newDog]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewDog({ ...newDog, [property]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({ ...errors, sending: true });

    try {
      if (!!Object.keys(errors).length) {
        return null;
      } else {
        console.log("estoy aca");
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
      msgError = `Error al enviar la solicitud: ${error.response.data}`;
      console.error(msgError);
    }
  };

  return (
    <section className={FormDogsStyles["container-form"]}>
      <div className={FormDogsStyles["container-preview-image"]}>
        <img src={newDog.image} alt="Preview" />
      </div>

      <div className={FormDogsStyles["continer-form-dog"]}>
        <h3 className={FormDogsStyles["continer-form-title"]}>
          Crea una nueva raza
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className={FormDogsStyles["form-input-label"]}>
            <span className={FormDogsStyles["form-input-span"]}>
              Nombre de la raza:
            </span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa el nombre de la nueva raza"
              onChange={handleChange}
            />
            {errors.sending && Object.keys(errors).length ? (
              <span className={FormDogsStyles["form-input-error"]}>
                {errors.name}
              </span>
            ) : (
              false
            )}
          </label>

          <label
            htmlFor="height"
            className={FormDogsStyles["form-input-label"]}
          >
            <span className={FormDogsStyles["form-input-span"]}>Altura:</span>
            <div className={FormDogsStyles["form-inputs-container"]}>
              <input
                type="text"
                id="minHeight"
                name="minHeight"
                placeholder="Altura mínima (cm)"
                onChange={handleChange}
              />
              {errors.sending && Object.keys(errors).length ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.minHeight}
                </span>
              ) : (
                false
              )}

              <input
                type="text"
                id="maxHeight"
                name="maxHeight"
                placeholder="Altura máxima (cm)"
                onChange={handleChange}
              />
              {errors.sending && Object.keys(errors).length ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.maxHeight}
                </span>
              ) : (
                false
              )}

              {!errors.minHeight && !errors.maxHeight && errors.sending ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.height}
                </span>
              ) : (
                false
              )}
            </div>
          </label>

          <label
            htmlFor="weight"
            className={FormDogsStyles["form-input-label"]}
          >
            <span className={FormDogsStyles["form-input-span"]}>Peso:</span>
            <div className={FormDogsStyles["form-inputs-container"]}>
              <input
                type="text"
                id="minWeight"
                name="minWeight"
                placeholder="Peso mínimo (kg)"
                onChange={handleChange}
              />
              {errors.sending && Object.keys(errors).length ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.minWeight}
                </span>
              ) : (
                false
              )}

              <input
                type="text"
                id="maxWeight"
                name="maxWeight"
                placeholder="Peso máximo (kg)"
                onChange={handleChange}
              />

              {errors.sending && Object.keys(errors).length ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.maxWeight}
                </span>
              ) : (
                false
              )}
              {!errors.minWeight && !errors.maxWeight && errors.sending ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.weight}
                </span>
              ) : (
                false
              )}
            </div>
          </label>

          <label
            htmlFor="lifeSpan"
            className={FormDogsStyles["form-input-label"]}
          >
            <span className={FormDogsStyles["form-input-span"]}>
              Años de vida:
            </span>
            <div className={FormDogsStyles["form-inputs-container"]}>
              <input
                type="text"
                id="minLifeSpan"
                name="minLifeSpan"
                placeholder="Años de vida mínimo"
                onChange={handleChange}
              />
              {errors.sending && Object.keys(errors).length ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.minLifeSpan}
                </span>
              ) : (
                false
              )}
              <input
                type="text"
                id="maxLifeSpan"
                name="maxLifeSpan"
                placeholder="Años de vida máximo"
                onChange={handleChange}
              />
              {errors.sending && Object.keys(errors).length ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.maxLifeSpan}
                </span>
              ) : (
                false
              )}
              {!errors.minLifeSpan && !errors.maxLifeSpan && errors.sending ? (
                <span className={FormDogsStyles["form-input-error"]}>
                  {errors.lifeSpan}
                </span>
              ) : (
                false
              )}
            </div>
          </label>

          <label htmlFor="image" className={FormDogsStyles["form-input-label"]}>
            <span className={FormDogsStyles["form-input-span"]}>
              URL de la imagen:
            </span>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Ingresa la URL de la imagen"
              onChange={handleChange}
            />
          </label>

          <label
            htmlFor="temperament"
            className={FormDogsStyles["form-input-label"]}
          >
            <span className={FormDogsStyles["form-input-span"]}>
              Temperamento:
            </span>

            {temperaments.map((temperament) => (
              <FilterButton
                key={temperament.id}
                name={temperament.name}
                source={"temp"}
              />
            ))}
          </label>

          <button className={FormDogsStyles["btn-api-dogs"]} type="submit">
            Crear raza de perro
          </button>
        </form>
      </div>
    </section>
  );
}

export { FormDogs };
