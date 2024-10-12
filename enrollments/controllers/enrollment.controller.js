const { Student } = require("../../students/models/student.model");
const { Enrollment } = require("../models/enrollment.model");
/**
 * Enroll a user to a course
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createEnrollment = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            userId, // user Id
            courseId
        } = req.body;

        const enrollment = await Enrollment.create({
            course: { _id: courseId },
            completed: false,
            createdAt: new Date(),
            user: { _id: userId }
        });

        await Student.create({
            user: { _id: userId },
            courses: [{ _id: courseId }],
            enrollments: [{ _id: enrollment._id }]
        })

        if (enrollment != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { enrollment },
                message: "Enrollment creation failed"
            })
        }

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Error! " + error.message

        })
    }

};

module.exports = {
    createEnrollment
}