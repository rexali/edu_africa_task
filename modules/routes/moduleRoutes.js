const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { getModule } = require("../controllers/getModule");
const { createModule } = require("../controllers/createModule");
const { updateModule } = require("../controllers/updateModule");
const { deleteModule } = require("../controllers/deleteModule");

// initialize module router
const moduleRouter = express.Router();
// get a module
moduleRouter.get(
    '/:id',
    isAuthenticated, 
    getModule
);
// create a module
moduleRouter.post(
    '/',
    isAuthenticated,
    createModule
);
// update a module
moduleRouter.patch(
    "/",
    isAuthenticated,
    updateModule
);
// delete a module
moduleRouter.delete(
    "/",
    isAuthenticated,
    deleteModule
);
// export module router
module.exports = {
    moduleRouter
}