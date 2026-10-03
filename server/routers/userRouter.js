const { register, login } = require("../controllers/userController");
const userRouter = require("express").Router()
const { userValidator, loginValidator } = require("../validators/userValidator");

userRouter.post("/register", userValidator, register)
userRouter.post("/login", loginValidator, login)

module.exports = userRouter