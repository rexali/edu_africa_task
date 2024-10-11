const { Post } = require("../models/post.model");
/**
 * Create a post
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createPost = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            title,
            content,
            userId,
        } = req.body;

        const post = await Post.create({
            title,
            content,
            author: { _id: userId },
            createdAt: new Date(),
            updatedAt: new Date()
        });

        if (post != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { post },
                message: "Post created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { post },
                message: "Post creation failed"
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
    createPost
}