const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Todos = require("../models/todos");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/registros", async (req, res) => {
  let all_tasks = await Promise.resolve(Todos.findAll());
  res.json(all_tasks);
});

router.get("/registros/:id", async (req, res) => {
  let id = req.params.id;
  let task = await Promise.resolve(Todos.findOne({ where: { id: id } }));
  res.json(task);
});

router.post("/registros", (req, res) => {
  let new_task = req.body.task;
  const task = Todos.create({
    task: new_task,
  });

  res.send(`Task ${new_task} added to the database!`);
});

module.exports = router;
