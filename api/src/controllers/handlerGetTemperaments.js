const { Temperament } = require("../db/db");
const { getAllApiDogs } = require("./getAllApiDogs");

const handlerGetTemperaments = async (req, res) => {
  try {
    let temperametsDb = await Temperament.findAll();

    if (!temperametsDb.length) {
      const URL_API = `https://api.thedogapi.com/v1/breeds`;
      const dogsAPI = await getAllApiDogs(URL_API, { name: null });

      const allTemperamentsArray = dogsAPI.map((dog) => dog.temperament);
      const temperamentsSingleRaw = allTemperamentsArray
        .toString()
        .split(",")
        .map((e) => e.trim());

      const temperamentsSingleFiltered = temperamentsSingleRaw.filter(
        (temperament, index) => {
          if (temperament.length) {
            return temperamentsSingleRaw.indexOf(temperament) === index;
          }
        }
      );

      temperamentsSingleFiltered.forEach((element) => {
        Temperament.findOrCreate({
          where: { name: element },
        });
      });

      temperametsDb = await Temperament.findAll();
    }

    res.status(200).json(temperametsDb);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { handlerGetTemperaments };
