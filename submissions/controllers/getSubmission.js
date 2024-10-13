const { Submission } = require("../models/submission.model");

/** 
 * Get a submission
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getSubmission = async (req, res) => {
    try {
        const _id = req.params.id; // submission's id
        const submission = await Submission.findById(_id)
            .populate("assignment")
            .populate("user") 
            .populate("student") 
            .populate("quiz") 
            .populate("grade") 
            .exec();
            
        if (Object.keys(submission).length) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { submission },
                message: "Quiz read",
            });
        } else {
            // send success data
            res.status(400).json({
                status: "success",
                data: { submission },
                message: "Quiz reading failed",
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
    getSubmission
}