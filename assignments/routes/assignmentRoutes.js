const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { createAssignment } = require("../controllers/createAssignment");
const { getAssignment } = require("../controllers/getAssignment");
const { updateAssignment } = require("../controllers/updateAssignment");
const { deleteAssignment } = require("../controllers/deleteAssignment");

// initialize assignment router
const assignmentRouter = express.Router();
// get an assignment
assignmentRouter.get(
    '/:id',
    isAuthenticated, 
    getAssignment
);
// create an assignment
assignmentRouter.post(
    '/',
    isAuthenticated,
    createAssignment
);
// update an assignment
assignmentRouter.patch(
    "/",
    isAuthenticated,
    updateAssignment
);
// delete an assignment
assignmentRouter.delete(
    "/",
    isAuthenticated,
    deleteAssignment
);
// export assignment router
module.exports = {
    assignmentRouter
}