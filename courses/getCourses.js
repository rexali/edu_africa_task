const { Course } = require("../model/course.model");

/** 
 * Get all courses
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getCourses = async (req, res) => {
    try {
        const page = parseInt(req.params?.page ?? 1);
        const limit = 10;
        const skip = (page - 1) * limit;
        const courses = await Course.find()
            .skip(skip)
            .limit(limit)
            .populate("users")
            .populate("ratings")
            .populate("modules")
            .populate("enrollments")
            .exec();
        // send success data
        res.status(200).json({
            status: "success",
            data: { courses },
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
    getCourses
}