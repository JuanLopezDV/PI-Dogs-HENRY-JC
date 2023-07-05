import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  return (
    <>
      <a href="http://localhost:3009/home">home</a>
      <h1>Detail page. ID: {id}</h1>
      {dog?.name}
    </>
  );
}

export { Detail };
