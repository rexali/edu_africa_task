const { Enrollment } = require("../models/enrollment.model");
/**
 * Update a  enrollment
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */

const updateEnrollment = async (req, res) => {
    try {
        // retrieve the request body data
        const {
            _id,
            completed,
        } = req.body;
                
        const enrollment = await Enrollment.updateOne({ _id }, {
            completed
        });
         
        if (enrollment.modifiedCount) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment updated"
            })
        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment update failed"
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
    updateEnrollment
}