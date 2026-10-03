const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

const { taskValidator } = require("../validators/taskValidator");

const taskRouter = require("express").Router()

taskRouter.post("/", authMiddleware, taskValidator, createTask);
taskRouter.get("/", authMiddleware, getTasks);
taskRouter.get("/:id", authMiddleware, getTaskById);
taskRouter.put("/:id", authMiddleware, taskValidator, updateTask);
taskRouter.delete("/:id", authMiddleware, deleteTask);

module.exports = taskRouter;