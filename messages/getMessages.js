const { Message } = require("../model/message.model");
/** 
 * Get all messages
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().populate('user', ["_id", "email", "role"]).exec();
        // send success data
        if (messages != null) {
            res.status(200).json({
                status: "success",
                data: { messages },
                message: "Messages read",
            });
        } else {
            res.status(404).json({
                status: "success",
                data: { messages },
                message: "No message found",
            });
        }

    } catch (error) {
        // catch  the error
        console.warn(error);
        // send error response
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Error!"
        })
    }

}

module.exports = {
    getMessages
}
