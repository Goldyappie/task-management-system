const { registerUser, loginUser } = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const registerUserService = async (userInput) => {
    userInput.password = await bcrypt.hash(userInput.password, 10)
    const user = await registerUser(userInput);

    return user;
}

const loginUserService = async (userInput) => {
    const user = await loginUser(userInput);
    const [account] = user;

    if (!account) {
        throw new Error("Invalid username or password");
    }

    const isMatch = await bcrypt.compare(
        userInput.password,
        account.password
    );

    if (!isMatch) {
        throw new Error("Invalid username or password");
    }

    const token = jwt.sign(
        {
            id: account.id,
            username: account.username,
            role: account.role
        },
        process.env.JWT_SECRET
    );

    return { account, token };
}

module.exports = {
    registerUserService,
    loginUserService
}