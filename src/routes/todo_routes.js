const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Todos = require("../models/todos");
const logger = require("../utils/logger");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/registros", async (req, res) => {
  try {
    let all_tasks = await Promise.resolve(Todos.findAll());
    res.json(all_tasks);
  } catch (error) {
    logger.error(error);
  }
});

router.get("/registros/:id", async (req, res) => {
  try {
    let task = await Promise.resolve(Todos.findByPk(req.params.id));
    res.json(task);
  } catch (error) {
    logger.error(error);
  }
});

router.post("/registros", (req, res) => {
  try {
    let new_task = Todos.create({
      task: req.body.task,
    });
    res.send(`Task ${new_task} added to the database!`);
  } catch (error) {
    logger.error(error);
    res.error(error);
  }
});

router.patch("/registros/:id", (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params.id);
    let task = Todos.update(
      {
        task: req.body.task,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    let all_tasks = Todos.findAll();
    res.json(all_tasks);
  } catch (error) {
    logger.error(error);
    res.error(error);
  }
});

router.delete("/registros/:id", (req, res) => {
  try {
    let task = resolve(Todos.destroy({ where: { id: req.params.id } }));
    let all_tasks = Todos.findAll();
    res.json(all_tasks);
  } catch (error) {
    logger.error(error);
    console.log(error);
  }
});

module.exports = router;
