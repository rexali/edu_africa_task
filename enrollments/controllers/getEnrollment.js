const { Enrollment } = require("../models/enrollment.model");

/** 
 * Get a enrollment
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getEnrollment = async (req, res) => {
    try {
        const _id = req.params.id; // enrollment's id
        const enrollment = await Enrollment.findById(_id)
            .populate("user") 
            .populate("course") 
            .exec();
            
        if (Object.keys(enrollment).length) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment read",
            });
        } else {
            // send success data
            res.status(400).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment reading failed",
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
    getEnrollment
}