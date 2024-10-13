const { Enrollment } = require("../models/enrollment.model");

/** 
 * Remove a enrollment
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteEnrollment = async (req, res) => {
    try {
        // get a enrollment's id
        const _id = req.body._id;
        //    delete enrollment
        const enrollment = await Enrollment.deleteOne({ _id });

        if (enrollment.deletedCount) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment deleted",
            });
        } else {
            // turn to json data
            res.status(400).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment deletion failed",
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
    deleteEnrollment
}