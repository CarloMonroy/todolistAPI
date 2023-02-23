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

router.post("/registros", async (req, res) => {
  try {
    let new_task = await Promise.resolve(
      Todos.create({
        task: req.body.task,
      })
    );
    res.send(`Task ${new_task} added to the database!`);
  } catch (error) {
    logger.error(error);
    console.log(error);
  }
});

router.patch("/registros/:id", async (req, res) => {
  try {
    console.log("recibida peticion patch");
    console.log(req.body.task);
    console.log(typeof req.params.id);
    let task = await Todos.update(
      {
        task: req.body.task,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    let all_tasks = await Promise.resolve(Todos.findAll());
    res.json(all_tasks);
  } catch (error) {
    logger.error(error);
    console.log(error);
  }
});

router.delete("/registros/:id", async (req, res) => {
  try {
    let task = await Todos.destroy({
      where: {
        id: req.params.id,
      },
    });
    let all_tasks = await Todos.findAll();
    res.json(all_tasks);
  } catch (error) {
    logger.error(error);
  }
});

module.exports = router;
