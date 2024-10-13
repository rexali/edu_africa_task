const { Assignment } = require("../../assignments/models/assignment.model");
const { Submission } = require("../models/submission.model");
/**
 * Create a submission
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createSubmission = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            file,
            feedback,
            assignmentId,
            quizId,
            studentId,
            userId,
        } = req.body;

        const submission = await Submission.create({
            file,
            feedback,
            assigment: { _id: assignmentId },
            quiz: { _id: quizId },
            student: { _id: studentId },
            user: { _id: userId }
        });
        // update module lessons
        const assigment = await Assignment.findById(assignmentId).populate("submissions");
        assigment.submissions.push(submission._id);
        // save
        assigment.save();
        submission.save();

        if (submission != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { submission },
                message: "Submission created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { submission },
                message: "Submission creation failed"
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
    createSubmission
}