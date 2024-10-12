const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { getLesson } = require("../controllers/getLesson");
const { createLesson } = require("../controllers/createLesson");
const { updateLesson } = require("../controllers/updateLesson");
const { deleteLesson } = require("../controllers/deleteLesson");

// initialize lesson router
const lessonRouter = express.Router();
// get a lesson
lessonRouter.get(
    '/:id',
    isAuthenticated, 
    getLesson
);
// create a lesson
lessonRouter.post(
    '/',
    isAuthenticated,
    createLesson
);
// update a lesson
lessonRouter.patch(
    "/",
    isAuthenticated,
    updateLesson
);
// delete a lesson
lessonRouter.delete(
    "/",
    isAuthenticated,
    deleteLesson
);
// export lesson router
module.exports = {
    lessonRouter
}