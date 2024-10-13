const { Submission } = require("../models/submission.model");
/**
 * Update a  submission
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */

const updateSubmission = async (req, res) => {
    try {
        // retrieve the request body data
        const {
            _id,
            file,
            feedback
        } = req.body;
                
        const submission = await Submission.updateOne({ _id }, {
            file,
            feedback
        });
         
        if (submission.modifiedCount) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { submission },
                message: "Submission updated"
            })
        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { submission },
                message: "Submission update failed"
            })
        }

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Update failed"

        })
    }
};

module.exports = {
    updateSubmission
}