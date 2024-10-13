const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { createSubmission } = require("../controllers/createSubmission");
const { getSubmission } = require("../controllers/getSubmission");
const { updateSubmission } = require("../controllers/updateSubmission");
const { deleteSubmission } = require("../controllers/deleteSubmission");

// initialize submission router
const submissionRouter = express.Router();
// get a submission
submissionRouter.get(
    '/:id',
    isAuthenticated, 
    getSubmission
);
// create a submission
submissionRouter.post(
    '/',
    isAuthenticated,
    createSubmission
);
// update a submission
submissionRouter.patch(
    "/",
    isAuthenticated,
    updateSubmission
);
// delete a submission
submissionRouter.delete(
    "/",
    isAuthenticated,
    deleteSubmission
);
// export submission router
module.exports = {
    submissionRouter
}