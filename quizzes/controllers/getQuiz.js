const { Quiz } = require("../models/quiz.model");

/** 
 * Get a quiz
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getQuiz = async (req, res) => {
    try {
        const _id = req.params.id; // quiz's id
        const quiz = await Quiz.findById(_id)
            .populate("module")
            .populate("user") 
            .exec();
            
        if (Object.keys(quiz).length) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { quiz },
                message: "Quiz read",
            });
        } else {
            // send success data
            res.status(400).json({
                status: "success",
                data: { quiz },
                message: "Quiz reading failed",
            });
        }


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
    getQuiz
}