const { Course } = require("../models/course.model");

/** 
 * Get a course
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getCourse = async (req, res) => {
    try {
        const _id = req.params.id
        const course = await Course.findById(_id)
            .populate("user")
            .populate("ratings")
            .populate({
                path: 'modules',
                model: "Module",
                select: ["title", "description", "resources", "order"],
                populate: {
                    path: "lessons",
                    model: "Lesson",
                    select: ["name", "description", "content", "video", "duration"],
                    populate: [
                        {
                            path: "assignments",
                            model: "Assignment",
                            select: ["title", "description", "content", "dueDate"],
                        },
                        {
                            path: "quizzes",
                            model: "Quiz",
                            select: ["text", "type", "options", "answer"],
                        }
                    ]
                }
            })
            .populate("enrollments")
            .populate("quizzes", ["text", "type", "options", "answer"], "Quiz")
            .exec();

        if (Object.keys(course).length) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { course },
                message: "Course read",
            });
        } else {
            // send success data
            res.status(400).json({
                status: "success",
                data: { course },
                message: "Course read failed",
            });
        }


    } catch (error) {
        // catch  the error
        console.warn(error);
        // send error response
        res.status(200).json({
            status: "failed",
            data: null,
            message: "Error! " + error.message
        })
    }

}

module.exports = {
    getCourse
}