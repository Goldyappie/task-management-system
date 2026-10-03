const { registerUserService, loginUserService } = require("../services/userService")
const { validationResult } = require("express-validator")

const register = async (req, res) => {
    try {
        const userInput = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()
            });
        }
        const result = await registerUserService(userInput);

        res.status(201).json({
            success: true,
            message: "Registered successfully!",
            data: {
                id: result.insertId
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Register failed!"
        })
    }
}

const login = async (req, res) => {
    try {
        const userInput = req.body;
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()
            });
        }

        const result = await loginUserService(userInput);

        res.status(200).json({
            success: true,
            message: "Logged in successfully!",
            data: {
                id: result.account.id,
                username: result.account.username,
                role: result.account.role
            },
            token: result.token
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    register,
    login
}