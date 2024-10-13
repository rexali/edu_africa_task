const { Assignment } = require("../models/assignment.model");

/** 
 * Get a lesson
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getAssignment = async (req, res) => {
    try {
        const _id = req.params.id; // lesson's id
        const assigment = await Assignment.findById(_id)
            .populate("lesson")
            .populate("student") 
            .exec();
            
        if (Object.keys(lesson).length) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { assigment },
                message: "Assignment read",
            });
        } else {
            // send success data
            res.status(400).json({
                status: "success",
                data: { assigment},
                message: "Assignment reading failed",
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
    getAssignment
}