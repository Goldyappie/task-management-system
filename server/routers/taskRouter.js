const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const { taskValidator } = require("../validators/taskValidator");

const taskRouter = require("express").Router()

taskRouter.post("/", taskValidator, createTask);
taskRouter.get("/", getTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.put("/:id", taskValidator, updateTask);
taskRouter.delete("/:id", deleteTask);

module.exports = taskRouter;