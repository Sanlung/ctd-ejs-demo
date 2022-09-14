const express = require("express");

const router = express.Router();
const {
  addTask,
  editTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

router.route("/").get(getTasks).post(createTask);
router.route("/add").get(addTask);
router.route("/edit/:id").get(editTask);
router.route("/delete/:id").get(deleteTask);
router.route("/update/:id").post(updateTask);

module.exports = router;
