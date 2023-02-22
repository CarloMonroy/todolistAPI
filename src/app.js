const express = require("express");
const morganMiddleware = require("./middlewares/morgan.middleware");
const logger = require("./utils/logger");
// import orm
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const sequelize = new Sequelize("mysql://test:test@mysql:3306/tododb");

try {
  sequelize.authenticate();
  logger.info("Connection has been established successfully.");
} catch (error) {
  logger.error("Unable to connect to the database:", error);
}

//add routes
app.use("", require("./routes/todo_routes"));

// use morgan middleware
app.use(morganMiddleware);

app.listen(3000, () => {
  logger.info("Server started on port 3000");
});
