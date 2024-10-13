const { Assignment } = require("../models/assignment.model");

/** 
 * Remove a assigment
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteAssignment = async (req, res) => {
    try {
        // get a assigment's id
        const _id = req.body._id;
        //    delete assigment
        const assigment = await Assignment.deleteOne({ _id });

        if (assigment.deletedCount) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { assigment },
                message: "Lesson deleted",
            });
        } else {
            // turn to json data
            res.status(400).json({
                status: "success",
                data: { assigment },
                message: "Lesson deletion failed",
            });
        }

    } catch (error) {
        // catch  the error
        console.warn(error);
        // send error response
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Error! " + error.message
        })
    }

}

module.exports = {
    deleteAssignment
}