const { Course } = require("../model/course.model");

/** 
 * Get all courses
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getUserEnrolledCourses = async (req, res) => {
    try {

        const userId = req.params.id;

        const page = parseInt(req.params?.page ?? 1);
        const limit = 10;
        const skip = (page - 1) * limit;

        const courses = await Course.find()
            .skip(skip)
            .limit(limit)
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
            .populate({
                path: "enrollments",
                match: { user: { $eq: { _id: userId } } }, // user that enrolled in the course
            })
            .populate("quizzes", ["text", "type", "options", "answer"], "Quiz")
            .exec();

        if (courses != null) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { courses },
                message: "Course(s) read",
            });
        } else {
            // send success data
            res.status(404).json({
                status: "success",
                data: { courses },
                message: "No Course Found yet",
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
    getUserEnrolledCourses
}