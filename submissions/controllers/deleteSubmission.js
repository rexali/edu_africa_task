const { Submission } = require("../models/submission.model");

/** 
 * Remove a submission
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteSubmission = async (req, res) => {
    try {
        // get a submission's id
        const _id = req.body._id;
        //    delete submission
        const submission = await Submission.deleteOne({ _id });

        if (submission.deletedCount) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { submission },
                message: "Submission deleted",
            });
        } else {
            // turn to json data
            res.status(400).json({
                status: "success",
                data: { submission },
                message: "Submission deletion failed",
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
    deleteSubmission
}