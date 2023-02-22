const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:FlisrTniB3gRNVyZmGXC@containers-us-west-109.railway.app:6382/railway"
);

const Todos = sequelize.define("Todos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Todos.sync();

module.exports = Todos;
