const db = require("../config/database");

const createTask = async (taskInput) => {
    const [result] = await db.query(
        "INSERT INTO tasks (title, description, createdBy) VALUES (?, ?, ?)",
        [taskInput.title, taskInput.description, taskInput.createdBy]
    );

    return result;
};

const getTasks = async () => {
    const [result] = await db.query(
        "SELECT * FROM tasks"
    )

    return result;
}

const getTaskById = async (id) => {
    const [result] = await db.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id]
    );

    return result;
}

const updateTask = async (id, taskInput) => {
    const [result] = await db.query(
        "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
        [taskInput.title, taskInput.description, id]
    );

    return result;
};

const deleteTask = async (id) => {
    const [result] = await db.query(
        "DELETE FROM tasks WHERE id = ?",
        [id]
    );
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};