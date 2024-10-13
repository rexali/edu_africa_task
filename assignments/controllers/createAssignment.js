const { Lesson } = require("../../lessons/models/lesson.model");
const { Assignment } = require("../models/assignment.model");
/**
 * Create a assigment
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createAssignment = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            lessonId,
            title,
            descriptition,
            content,
            dueDate,
            studentId
        } = req.body;

        const assigment = await Assignment.create({
            title,
            descriptition,
            content,
            dueDate,
            student: { _id: studentId },
            lesson: { _id: lessonId }
        });
        // update module lessons
        const lesson = await Lesson.findById(_id).populate("assignments");
        lesson.assignments.push(assigment._id);
        // save
        lesson.save();
        assigment.save();

        if (assigment != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { assigment },
                message: "Assignment created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { assigment },
                message: "Assignmenet creation failed"
            })
        }

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(500).json({
            status: "failed",
            data: result,
            message: "Error! " + error.message

        })
    }

};

module.exports = {
    createAssignment
}