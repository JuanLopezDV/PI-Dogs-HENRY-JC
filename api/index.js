require("dotenv").config();
const server = require("./src/server");
const { database } = require("./src/db/db.js");
const { PORT_SERVER } = process.env;

database
  .sync({ alter: true })
  .then(
    server.listen(PORT_SERVER, () => {
      console.log(`Sever raised on port: ${PORT_SERVER}. Enjoy It!`);
    })
  )
  .catch((error) => console.log(error.message));
