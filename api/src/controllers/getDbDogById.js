const { Dog, Temperament } = require("../db/db");
const { Op } = require("sequelize");

const getDbDogById = async (id) => {
  let dogDbRaw = await Dog.findByPk(id, {
    include: {
      model: Temperament,
      as: "temperament",
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const tempToString = dogDbRaw.temperament
    .map((attTemp) => attTemp.name)
    .join([", "]);

  dogDbRaw = dogDbRaw.get({ plain: true });

  dogDbRaw.temperament = tempToString;

  return dogDbRaw;
};

module.exports = { getDbDogById };
