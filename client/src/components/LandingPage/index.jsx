import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/home");
  };

  return (
    <>
      <h1>Landing</h1>
      <button onClick={onClick}>Ingresar</button>
    </>
  );
}

export { LandingPage };
