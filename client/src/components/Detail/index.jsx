import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailStyle from "./Detail.module.css";
import { DetailContainer } from "../DetailContainer";
import { FormButton } from "../FormButton";

function Detail() {
  const { id } = useParams();
  const [dog, setDog] = React.useState({});

  const findDog = async (id) => {
    const { data } = await axios(`${process.env.REACT_APP_API_URL}/dogs/${id}`);
    setDog(data);
  };

  React.useEffect(() => {
    findDog(id);

    return () => {
      setDog({});
    };
  }, [id]);

  const temperaments = dog?.temperament?.split(", ");

  return (
    <section className={DetailStyle["container-detail"]}>
      <section className={DetailStyle["container-detail-section"]}>
        <div className={DetailStyle["container-preview-image"]}>
          <img src={dog.image} alt={`${dog.name} figure`} />
        </div>

        <div className={DetailStyle["continer-form-dog"]}>
          <h3 className={DetailStyle["continer-form-title"]}>
            Detalles de la raza {dog.name}
          </h3>
          <div className={DetailStyle["container-prop"]}>
            <span className={DetailStyle["detail-span"]}>
              Características físicas:
            </span>
            <div className={DetailStyle["container-property-dog"]}>
              <DetailContainer
                property="Altura"
                valueProp={dog?.height?.metric}
                unit="cm"
              />

              <DetailContainer
                property="Peso"
                valueProp={dog?.weight?.metric}
                unit="cm"
              />

              <DetailContainer
                property="Esperanza de vida"
                valueProp={dog?.life_span}
                unit=""
              />
            </div>
          </div>

          <div className={DetailStyle["container-prop"]}>
            <span className={DetailStyle["detail-span"]}>Temperamento:</span>
            <div className={DetailStyle["container-temperaments"]}>
              {Array.isArray(temperaments) ? (
                temperaments.map((temperament) => (
                  <FormButton
                    key={temperaments.indexOf(temperament)}
                    name={temperament}
                    isActive={true}
                    handleButtonTemp={() => null}
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export { Detail };
