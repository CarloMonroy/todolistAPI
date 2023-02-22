const express = require("express");
const morganMiddleware = require("./middlewares/morgan.middleware");
const logger = require("./utils/logger");
// import orm
const { Sequelize } = require("sequelize");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();
app.use(cors());
const sequelize = new Sequelize(
  "mysql://root:FlisrTniB3gRNVyZmGXC@containers-us-west-109.railway.app:6382/railway"
);

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

app.listen(PORT, () => {
  logger.info("Server started on port " + PORT + "");
});
