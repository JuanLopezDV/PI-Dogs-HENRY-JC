const regexNumber = /^\d+(\.\d+)?$/;

const validation = (object) => {
  const errors = {};
  //name
  if (!object.name) {
    errors.name = "Digite un nombre para la raza";
  }

  //Height
  if (!regexNumber.test(Number(object.minHeight))) {
    errors.minHeight = "Ingrese solo valores numéricos";
  }
  if (!regexNumber.test(Number(object.maxHeight))) {
    errors.maxHeight = "Ingrese solo valores numéricos";
  }
  if (Number(object.minHeight) >= Number(object.maxHeight)) {
    errors.height = "La altura mínima debe ser menor a la altura máxima";
  }

  //Weight
  if (!regexNumber.test(Number(object.minWeight))) {
    errors.minWeight = "Ingrese solo valores numéricos";
  }
  if (!regexNumber.test(Number(object.maxWeight))) {
    errors.maxWeight = "Ingrese solo valores numéricos";
  }
  if (Number(object.minWeight) >= Number(object.maxWeight)) {
    errors.weight = "El peso mínimo debe ser menor al peso máximo";
  }

  //LifeSpan
  if (!regexNumber.test(Number(object.minLifeSpan))) {
    errors.minLifeSpan = "Ingrese solo valores numéricos";
  }
  if (!regexNumber.test(Number(object.maxLifeSpan))) {
    errors.maxLifeSpan = "Ingrese solo valores numéricos";
  }
  if (Number(object.minLifeSpan) >= Number(object.maxLifeSpan)) {
    errors.lifeSpan = "La edad mínima debe ser menor a la edad máxima";
  }
  return errors;
};

export { validation };
