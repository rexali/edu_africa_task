const { Course } = require("../model/course.model");
/**
 * Create a course
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createCourse = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            title,
            description,
            instructor, // creator or user
            duration,
            level,
            photo,
            price,
            skills,
            category
        } = req.body;

        const course = await Course.create({
            title,
            description,
            instructor, // creator or user
            duration,
            level,
            photo,
            price,
            skills,
            category
        });

        // send data as json
        res.status(200).json({
            status: "success",
            data: { course },
            message: "Course updated"
        })

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(200).json({
            status: "failed",
            data: result,
            message: "Update failed"

        })
    }

};

module.exports = {
    createCourse
}