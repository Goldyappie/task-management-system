const registerValidator = [
    body("username").notEmpty(),
    body("password").notEmpty().isLength({ min: 8 })
];

const loginValidator = [
    body("username").notEmpty(),
    body("password").notEmpty()
];

module.exports = {
    registerValidator,
    loginValidator
};