import React from "react";
import FormButtonStyles from "./FormButton.module.css";

function FormButton({ id, name, handleButtonTemp, resetBtn }) {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <button
      onClick={(event) => {
        handleButtonTemp(event, id);
        setIsToggled(!isToggled);
      }}
      className={`${FormButtonStyles["btn-styles"]} ${
        isToggled && !resetBtn
          ? FormButtonStyles["btn-styles--active"]
          : FormButtonStyles["btn-styles--normal"]
      }`}
    >
      {name}
    </button>
  );
}

export { FormButton };
