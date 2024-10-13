const { Module } = require("../../modules/models/module.model");
const { Lesson } = require("../models/quiz.model");
const { Quiz } = require("../models/quiz.model");
/**
 * Create a quiz
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createQuiz = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            text,
            type,
            options,
            answer,
            moduleId,
            userId  //userId
        } = req.body;

        const quiz = await Quiz.create({
            text,
            type,
            options: {
                A: options.A,
                B: options.B,
                C: options.C,
                D: options.D
            },
            answer,
            user: { _id: userId },
            module: { _id: moduleId }
        });
        // update module lessons
        const module = await Module.findById(moduleId).populate("quizzes");
        module.quizzes.push(quiz._id);
        // save
        module.save();
        quiz.save();

        if (quiz != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { quiz },
                message: "Lesson created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { quiz },
                message: "Lesson creation failed"
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
    createQuiz
}