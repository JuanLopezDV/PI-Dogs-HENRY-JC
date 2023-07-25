import React from "react";
import axios from "axios";
import { validation } from "../../functions/validationForm";
import { useDispatch, useSelector } from "react-redux";
import { FormButton } from "../FormButton";
import FormDogsStyles from "./FormDogs.module.css";
import { Modal } from "../Modal";
import { CreatedDog } from "../CreatedDog";
import { addTemperaments } from "../../redux/actions";

const modelDog = {
  name: "",
  image: "",
  minHeight: "",
  maxHeight: "",
  minWeight: "",
  maxWeight: "",
  minLifeSpan: "",
  maxLifeSpan: "",
  temperament: [],
};

function FormDogs() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addTemperaments());
  }, []);

  const temperaments = useSelector((state) => state.allTemperaments);

  const [newDog, setNewDog] = React.useState(modelDog);
  const [openModal, setOpenModal] = React.useState(false);
  const [resetBtn, setResetBtn] = React.useState(false);

  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    setErrors(validation(newDog));
    if (!setOpenModal) {
      setNewDog(modelDog);
    }
  }, [newDog]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewDog({ ...newDog, [property]: value });
  };

  const handleButtonTemp = (event, id) => {
    event.preventDefault();

    if (!newDog.temperament.includes(id)) {
      const temp = newDog.temperament;
      temp.push(id);
      setNewDog({ ...newDog, temperament: temp });
    } else {
      const filterIdTemp = newDog.temperament.filter((btnId) => btnId !== id);
      setNewDog({ ...newDog, temperament: filterIdTemp });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({ ...errors, sending: true });

    try {
      if (!!Object.keys(errors).length) {
        return null;
      } else {
        const endpoint = `${process.env.REACT_APP_API_URL}/dogs`;
        const formDog = {
          name: newDog.name,
          image:
            newDog.image ||
            "https://pawzvistas.com/cdn/shop/files/ezgif.com-webp-to-png_18.webp",
          height: {
            metric: `${newDog.minHeight} - ${newDog.maxHeight}`,
          },
          weight: {
            metric: `${newDog.minWeight} - ${newDog.maxWeight}`,
          },
          lifeSpan: `${newDog.minLifeSpan} - ${newDog.maxLifeSpan}`,
          temperament: newDog.temperament,
        };
        const { data, status } = await axios.post(endpoint, formDog);

        if (Number(status) === 201) {
          setNewDog(modelDog);
          setOpenModal(true);
          setResetBtn(true);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <section className={FormDogsStyles["container-form"]}>
        <div className={FormDogsStyles["container-preview-image"]}>
          <img
            src={
              newDog.image ||
              "https://pawzvistas.com/cdn/shop/files/ezgif.com-webp-to-png_18.webp"
            }
            alt="Preview"
          />
        </div>

        <div className={FormDogsStyles["continer-form-dog"]}>
          <h3 className={FormDogsStyles["continer-form-title"]}>
            Crea una nueva raza
          </h3>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className={FormDogsStyles["form-input-label"]}
            >
              <span className={FormDogsStyles["form-input-span"]}>
                Nombre de la raza:
              </span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa el nombre de la nueva raza"
                onChange={handleChange}
                value={newDog.name}
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
                  value={newDog.minHeight}
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
                  value={newDog.maxHeight}
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
                  value={newDog.minWeight}
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
                  value={newDog.maxWeight}
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
                  value={newDog.minLifeSpan}
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
                  value={newDog.maxLifeSpan}
                />
                {errors.sending && Object.keys(errors).length ? (
                  <span className={FormDogsStyles["form-input-error"]}>
                    {errors.maxLifeSpan}
                  </span>
                ) : (
                  false
                )}
                {!errors.minLifeSpan &&
                !errors.maxLifeSpan &&
                errors.sending ? (
                  <span className={FormDogsStyles["form-input-error"]}>
                    {errors.lifeSpan}
                  </span>
                ) : (
                  false
                )}
              </div>
            </label>

            <label
              htmlFor="image"
              className={FormDogsStyles["form-input-label"]}
            >
              <span className={FormDogsStyles["form-input-span"]}>
                URL de la imagen:
              </span>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Ingresa la URL de la imagen"
                onChange={handleChange}
                value={newDog.image}
              />
            </label>

            <label
              htmlFor="temperament"
              className={FormDogsStyles["form-input-label"]}
            >
              <span className={FormDogsStyles["form-input-span"]}>
                Temperamento:
              </span>
              <div className={FormDogsStyles["container-temperaments"]}>
                {temperaments.map((temperament) => (
                  <FormButton
                    key={temperament.id}
                    id={temperament.id}
                    name={temperament.name}
                    resetBtn={resetBtn}
                    handleButtonTemp={handleButtonTemp}
                  />
                ))}
              </div>
            </label>

            <button className={FormDogsStyles["btn-api-dogs"]} type="submit">
              Crear raza de perro
            </button>
          </form>
        </div>
      </section>

      {openModal && (
        <Modal>
          <CreatedDog setOpenModal={setOpenModal} setResetBtn={setResetBtn} />
        </Modal>
      )}
    </>
  );
}

export { FormDogs };
