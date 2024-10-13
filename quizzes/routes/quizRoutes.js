const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { getQuiz } = require("../controllers/getQuiz");
const { updateQuiz } = require("../controllers/updateQuiz");
const { deleteQuiz } = require("../controllers/deleteQuiz");
const { createQuiz } = require("../controllers/createQuiz");

// initialize quiz router
const quizRouter = express.Router();
// get a quiz
quizRouter.get(
    '/:id',
    isAuthenticated, 
    getQuiz
);
// create a quiz
quizRouter.post(
    '/',
    isAuthenticated,
    createQuiz
);
// update a quiz
quizRouter.patch(
    "/",
    isAuthenticated,
    updateQuiz
);
// delete a quiz
quizRouter.delete(
    "/",
    isAuthenticated,
    deleteQuiz
);
// export quiz router
module.exports = {
    quizRouter
}