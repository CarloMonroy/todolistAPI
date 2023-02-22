const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql://test:test@mysql:3306/tododb");

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
