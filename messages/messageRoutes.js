const express = require("express");

const { isAuthenticated } = require("../auth/isAuthenticated");
const { deleteMessage } = require("./deleteMessage");
const { getMessage } = require("./getMessage");
const { getMessages } = require("./getMessages");
const { updateMessage } = require("./updateMessage");

// initialize admin router
const messageRouter = express.Router();
// get a message
messageRouter.get(
    '/:id',
    isAuthenticated, 
    getMessage
);
// get all messages
messageRouter.get(
    '/',
    isAuthenticated,
    getMessages
);
// update a message
messageRouter.patch(
    "/",
    isAuthenticated,
    updateMessage
);
// delete a message
messageRouter.delete(
    "/",
    isAuthenticated,
    deleteMessage
);
// export message router
module.exports = {
    messageRouter
}