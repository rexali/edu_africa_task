const { Reply } = require("../models/reply.model");
/**
 * Create a reply
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createReply = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            content,
            postId,
            userId,
        } = req.body;

        const reply = await Reply.create({
            post: { _id: postId },
            content,
            author: { _id: userId },
            createdAt: new Date(),
            updatedAt: new Date()
        });

        if (reply != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { reply },
                message: "Reply created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { reply },
                message: "Reply creation failed"
            })
        }

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Error! " + error.message

        })
    }

};

module.exports = {
    createReply
}