const {
    createTaskService,
    getTasksService,
    getTaskByIdService,
    updateTaskService,
    deleteTaskService
} = require("../services/taskService");

const createTask = async (req, res) => {
    try {
        const userInput = req.body;
        const result = await createTaskService(userInput);
        res.status(201).json({
            success: true,
            message: "Task created successfully!",
            data: {
                id: result.insertId
            }
        })
    } catch {
        res.status(400).json({
            success: false,
            message: "Failed to create task."
        });
    };
};

const getTasks = async (req, res) => {
    try {
        const result = await getTasksService();
        res.status(200).json({
            success: true,
            message: "Tasks successfully retrieved!",
            data: result
        })
    } catch {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve tasks."
        });
    };
};

const getTaskById = async (req, res) => {
    try {
        const userInput = req.params.id;
        const result = await getTaskByIdService(userInput);
        res.status(200).json({
            success: true,
            message: "Task successfully retrieved!",
            data: result
        })
    } catch {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve task."
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const userInput = req.body
        const result = await updateTaskService(id, userInput);
        res.status(200).json({
            success: true,
            message: "Task successfully updated!",
            data: result
        })
    } catch {
        res.status(400).json({
            success: false,
            message: "Failed to change task."
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteTaskService(id);
        res.status(200).json({
            success: true,
            message: "Task deleted successfully!",
            data: result
        })
    } catch {
        res.status(400).json({
            success: false,
            message: "Failed to delete task."
        });
    }
};

module.exports = {
    createTask,
    getTaskById,
    getTasks,
    updateTask,
    deleteTask
}