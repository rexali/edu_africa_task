const { Course } = require("../model/course.model");
/**
 * Delete a client course
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const updateCourse = async (req, res) => {
    try {
        // retrieve the request body data
        const {
            _id,
            title,
            description,
            instructor, // creator or user
            duration,
            level,
            photo,
            price,
            skills
        } = req.body;

        const course = await Course.updateOne(
            { _id},
            {
                $set: { title },
                $set: { description },
                $set: { instructor }, // creator or user
                $set: { duration },
                $set: { level },
                $set: { photo },
                $set: { price },
                $set: { skills }
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
            data: null,
            message: "Update failed"

        })
    }
};

module.exports = {
    updateCourse
}