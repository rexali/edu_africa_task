const { Course } = require("../models/course.model");
const { Enrollment } = require("../../enrollments/models/enrollment.model");
const { Grading } = require("../../gradings/models/grading.model");
const { Lesson } = require("../../lessons/models/lesson.model");
const { Module } = require("../../modules/models/module.model");
const { Progress } = require("../../progress/models/progress.model");
const { Quiz } = require("../../quizzes/models/quiz.model");
const { Rating } = require("../../ratings/models/rating.model");
/**
 * Create a course
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createCourse = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            title,
            description,
            instructor, // creator or user
            duration,
            level,
            photo,
            price,
            skills,
            category,
            userId,
        } = req.body;

        const course = await Course.create({
            title,
            description,
            instructor: { _id: userId }, // creator or user
            duration,
            level,
            photo,
            price,
            skills,
            category,
            user: { _id: userId }
        });
        // create new enrollment, rating, progress
        await Enrollment.create({ course: { _id: course._id } });
        await Rating.create({ course: { _id: course._id } });
        await Progress.create({ course: { _id: course._id } });

        // create new module
        const module = await Module.create({ course: { _id: course._id } });
        // create new lesson, quiz, grading
        await Lesson.create({ module: { _id: module._id } });
        await Quiz.create({ module: { _id: module._id } });
        await Grading.create({ module: { _id: module._id } });

        if (course !== null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { course },
                message: "Course updated"
            })
        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { course },
                message: "Course update failed"
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
    createCourse
}