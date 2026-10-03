const db = require("../config/database");

const createTask = async (userInput) => {
    const [result] = await db.query(
        "INSERT INTO tasks (title, description, createdBy) VALUES (?, ?, ?)",
        [userInput.title, userInput.description, userInput.createdBy]
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

const updateTask = async (id, userInput) => {
    const [result] = await db.query(
        "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
        [userInput.title, userInput.description, id]
    );

    return result;
};

const deleteTask = async (id) => {
    const [result] = await db.query(
        "DELETE FROM tasks WHERE id = ?",
        [id]
    );

    return result;
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};