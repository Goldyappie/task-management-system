const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require("../models/taskModel")

const createTaskService = async (userInput) => {
    const task = await createTask(userInput);

    return task;
};


const updateTaskService = async (id, userInput) => {
    const task = await updateTask(id, userInput);

    return task;
}

const getTasksService = async () => {
    const task = await getTasks();

    return task;
}

const getTaskByIdService = async (id) => {
    const task = await getTaskById(id);

    return task;
}

const deleteTaskService = async (id) => {
    const task = await deleteTask(id);

    return task;
}

module.exports = {
    createTaskService,
    updateTaskService,
    deleteTaskService,
    getTaskByIdService,
    getTasksService
}