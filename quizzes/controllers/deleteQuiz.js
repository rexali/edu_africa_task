const { Quiz } = require("../models/quiz.model");

/** 
 * Remove a quiz
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteQuiz = async (req, res) => {
    try {
        // get a quiz's id
        const _id = req.body._id;
        //    delete quiz
        const quiz = await Quiz.deleteOne({ _id });

        if (quiz.deletedCount) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { quiz },
                message: "Quiz deleted",
            });
        } else {
            // turn to json data
            res.status(400).json({
                status: "success",
                data: { quiz },
                message: "Quiz deletion failed",
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
    deleteQuiz
}