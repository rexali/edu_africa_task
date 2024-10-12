const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { getCourses } = require("../controllers/getCourses");
const { updateCourse } = require("../controllers/updateCourse");
const { getCourse } = require("../controllers/getCourse");
const { deleteCourse } = require("../controllers/deleteCourse");
const { createCourse } = require("../controllers/createCourse");

// initialize course router
const courseRouter = express.Router();
// get a course
courseRouter.get(
    '/:id',
    isAuthenticated, 
    getCourse
);
// get all user courses
courseRouter.get(
    '/',
    isAuthenticated,
    getCourses
);
// create a course
courseRouter.post(
    '/',
    isAuthenticated,
    createCourse
);
// update a course
courseRouter.patch(
    "/",
    isAuthenticated,
    updateCourse
);
// delete a course
courseRouter.delete(
    "/",
    isAuthenticated,
    deleteCourse
);
// export course router
module.exports = {
    courseRouter
}