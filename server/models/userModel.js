const db = require("../config/database")

const registerUser = async (userInput) => {
    const [result] = await db.query(
        "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
        [userInput.username, userInput.password, userInput.role]
    )

    return result;
}

const loginUser = async (userInput) => {
    const [result] = await db.query(
        "SELECT * FROM users WHERE username = ?",
        [userInput.username]
    )

    return result;
}

module.exports = {
    registerUser,
    loginUser
}