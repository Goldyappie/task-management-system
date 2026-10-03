const { body } = require("express-validator");

const taskValidator = [
    body("title").notEmpty(),
    body("createdBy").notEmpty()
];

module.exports = {
    taskValidator
}