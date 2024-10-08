const express = require("express");

const { getProfile } = require("./getProfile");
const { updateProfile } = require("./updateProfile");
const { deleteProfile } = require("./deleteProfile");
const { isAuthenticated } = require("../auth/isAuthenticated");

// initialize admin router
const profileRouter = express.Router();

// get all clients
profileRouter.get(
    '/',
    isAuthenticated,         // middleware to make sure the user is an admin
    getProfile
);
// update a client
profileRouter.patch(
    "/:id",
    isAuthenticated,        // middleware to make sure the user is an admin
    updateProfile
);
// delete a client
profileRouter.delete(
    "/:id",
    isAuthenticated,        // middleware to make sure the user is an admin
    deleteProfile
);

// export admin router
module.exports = {
    profileRouter
}