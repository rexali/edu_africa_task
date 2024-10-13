const express = require("express");

const { isAuthenticated } = require("../../auth/controllers/isAuthenticated");
const { updateEnrollment } = require("../controllers/updateEnrollement");
const { getEnrollment } = require("../controllers/getEnrollment");
const { createEnrollment } = require("../controllers/createEnrollment");
const { deleteEnrollment } = require("../controllers/deleteEnrollment");

// initialize enrollment router
const enrollmentRouter = express.Router();
// get a enrollment
enrollmentRouter.get(
    '/:id',
    isAuthenticated,
    getEnrollment
);
// create a enrollment
enrollmentRouter.post(
    '/',
    isAuthenticated,
    createEnrollment
);
// update a enrollment
enrollmentRouter.patch(
    "/",
    isAuthenticated,
    updateEnrollment
);
// delete a enrollment
enrollmentRouter.delete(
    "/",
    isAuthenticated,
    deleteEnrollment
);
// export enrollment router
module.exports = {
    enrollmentRouter
}