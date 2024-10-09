const { Course } = require("../model/course.model");

/** 
 * Get a course
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getCourse = async (req, res) => {
    try {
        const _id = req.body._id
        const course = await Course.findById(_id)
        .populate("users")
        .populate("ratings")
        .populate("modules")
        .populate("enrollments").exec();
        // send success data
        res.status(200).json({
            status: "success",
            data: { course },
            message: "Course read",
        });

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
    getCourse
}