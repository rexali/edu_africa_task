const { Module } = require("../models/module.model");

/** 
 * Get a module
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getModule = async (req, res) => {
    try {
        const _id = req.params.id; // module's id
        const module = await Module.findById(_id)
            .populate("lessons")
            .populate("quizzes")
            .populate("course")
            .exec();
            
        if (Object.keys(module).length) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { module },
                message: "Module read",
            });
        } else {
            // send success data
            res.status(400).json({
                status: "success",
                data: { module },
                message: "Module reading failed",
            });
        }


    } catch (error) {
        // catch  the error
        console.warn(error);
        // send error response
        res.status(200).json({
            status: "failed",
            data: null,
            message: "Error!"
        })
    }

}

module.exports = {
    getModule
}