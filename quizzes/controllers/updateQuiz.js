const { Quiz } = require("../models/quiz.model");
/**
 * Update a  quiz
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const updateQuiz = async (req, res) => {
    try {
        // retrieve the request body data
        const {
            _id, // quiz id
            text,
            type,
            options,
            answer
        } = req.body;

        const quiz = await Quiz.updateOne({ _id }, {
            text,
            type,
            options: {
                A: options.A,
                B: options.B,
                C: options.C,
                D: options.D
            },
            answer
        });

        if (quiz.modifiedCount) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { quiz },
                message: "Quiz updated"
            })
        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { quiz },
                message: "Quiz update failed"
            })
        }

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Update failed"

        })
    }
};

module.exports = {
    updateQuiz
}