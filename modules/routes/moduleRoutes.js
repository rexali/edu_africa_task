const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { getModule } = require("../controllers/getModule");
const { createModule } = require("../controllers/createModule");
const { updateModule } = require("../controllers/updateModule");
const { deleteModule } = require("../controllers/deleteModule");

// initialize course router
const moduleRouter = express.Router();
// get a course
moduleRouter.get(
    '/:id',
    isAuthenticated, 
    getModule
);
// create a course
moduleRouter.post(
    '/',
    isAuthenticated,
    createModule
);
// update a course
moduleRouter.patch(
    "/",
    isAuthenticated,
    updateModule
);
// delete a course
moduleRouter.delete(
    "/",
    isAuthenticated,
    deleteModule
);
// export course router
module.exports = {
    moduleRouter
}