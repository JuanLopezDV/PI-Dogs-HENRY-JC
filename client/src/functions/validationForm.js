const regexNumber = /^\d+(\.\d+)?$/;

const validateNumericValue = (value, fieldName) => {
  if (!regexNumber.test(Number(value)) || !(value === 0)) {
    return `Ingrese solo valores numéricos en ${fieldName}`;
  }
  return null;
};

const validation = (object) => {
  const errors = {};

  // Name
  if (!object.name) {
    errors.name = "Digite un nombre para la raza";
  }

  // Height
  const minHeightError = validateNumericValue(object.minHeight, "minHeight");
  if (minHeightError) {
    errors.minHeight = minHeightError;
  }

  const maxHeightError = validateNumericValue(object.maxHeight, "maxHeight");
  if (maxHeightError) {
    errors.maxHeight = maxHeightError;
  }

  if (Number(object.minHeight) >= Number(object.maxHeight)) {
    errors.height = "La altura mínima debe ser menor a la altura máxima";
  }

  // Weight
  const minWeightError = validateNumericValue(object.minWeight, "minWeight");
  if (minWeightError) {
    errors.minWeight = minWeightError;
  }

  const maxWeightError = validateNumericValue(object.maxWeight, "maxWeight");
  if (maxWeightError) {
    errors.maxWeight = maxWeightError;
  }

  if (Number(object.minWeight) >= Number(object.maxWeight)) {
    errors.weight = "El peso mínimo debe ser menor al peso máximo";
  }

  // LifeSpan
  const minLifeSpanError = validateNumericValue(
    object.minLifeSpan,
    "minLifeSpan"
  );
  if (minLifeSpanError) {
    errors.minLifeSpan = minLifeSpanError;
  }

  const maxLifeSpanError = validateNumericValue(
    object.maxLifeSpan,
    "maxLifeSpan"
  );
  if (maxLifeSpanError) {
    errors.maxLifeSpan = maxLifeSpanError;
  }

  if (Number(object.minLifeSpan) >= Number(object.maxLifeSpan)) {
    errors.lifeSpan = "La edad mínima debe ser menor a la edad máxima";
  }

  return errors;
};

export { validation };
