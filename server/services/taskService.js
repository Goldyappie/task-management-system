const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require("../models/taskModel")

const createTaskService = async (userInput) => {
    const task = await createTask(userInput);

    return task;
};

module.exports = {
    createTaskService
}