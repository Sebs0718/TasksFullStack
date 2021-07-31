const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({ status: false });
    res.json(tasks);
  } catch (error) {
    res.json({ message: "There was an error getting the data" });
  }
});

router.get("/all/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ message: "There was an error getting the data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tasks = await Task.findById(req.params.id);
    res.json(tasks);
  } catch (error) {
      res.json({message: "The id does not exist"})
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ message: "Task created" });
  } catch (error) {
    res.json({message:"Task could not be saved"})
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findOneAndUpdate(req.params.id, newTask);
    res.json({ message: "Task Updated" });
  } catch (error) {
    res.json({message:"Task could not be updated"})
  }
});

router.put("/completed/:id", async (req, res) => {
  try {
    const status = req.body;
    await Task.updateOne({ _id: req.params.id }, status);
    res.json({ message: "Task Updated" });
  } catch (error) {
    res.json({message:"Task could not be complete"})
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndRemove(req.params.id);
    res.json({ message: "Task Deleted" });
  } catch (error) {
    res.json({message:"Task could not be delete"})
  }
});

module.exports = router;
