const express = require("express");

const { updateNotification } = require("./updateNotification");
const { isAuthenticated } = require("../auth/isAuthenticated");
const { getNotifications } = require("./getNotifications");
const { getNotification } = require("./getNotification");
const { deleteNotification } = require("./deleteNotification");

// initialize admin router
const notificationRouter = express.Router();
// get a notification
notificationRouter.get(
    '/:id',
    isAuthenticated, 
    getNotification
);
// get all notifications
notificationRouter.get(
    '/',
    isAuthenticated,
    getNotifications
);
// update a notification
notificationRouter.patch(
    "/",
    isAuthenticated,
    updateNotification
);
// delete a notification
notificationRouter.delete(
    "/",
    isAuthenticated,
    deleteNotification
);
// export notification router
module.exports = {
    notificationRouter
}