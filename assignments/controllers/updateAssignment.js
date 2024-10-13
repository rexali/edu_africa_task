const { Assignment } = require("../models/assignment.model");
/**
 * Update a  assignment
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const updateAssignment = async (req, res) => {
    try {
        // retrieve the request body data
        const {
            _id,
            title,
            descriptition,
            content,
            dueDate,
        } = req.body;

        const assignment = await Assignment.updateOne({ _id }, {
            title,
            descriptition,
            content,
            dueDate
        });

        if (assignment.modifiedCount) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { assignment },
                message: "Assignment updated"
            })
        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { assignment },
                message: "Assignment update failed"
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
    updateAssignment
}