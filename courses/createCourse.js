const { Course } = require("../model/course.model");
const { Enrollment } = require("../model/enrollment");
const { Grading } = require("../model/grading.model");
const { Lesson } = require("../model/lesson.model");
const { Module } = require("../model/module.model");
const { Progress } = require("../model/progress.model");
const { Quiz } = require("../model/quiz.model");
const { Rating } = require("../model/rating.model");
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
            category
        } = req.body;

        const course = await Course.create({
            title,
            description,
            instructor, // creator or user
            duration,
            level,
            photo,
            price,
            skills,
            category
        });

        const module = await Module.create({ course: { _id: course._id } });

        await Lesson.create({ module: { _id: module._id } });
        await Quiz.create({ module: { _id: module._id } });
        await Grading.create({ module: { _id: module._id } });

        await Enrollment.create({ course: { _id: course._id } });
        await Rating.create({ course: { _id: course._id } });
        await Progress.create({ course: { _id: course._id } });


        // send data as json
        res.status(200).json({
            status: "success",
            data: { course },
            message: "Course updated"
        })

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(200).json({
            status: "failed",
            data: result,
            message: "Update failed"

        })
    }

};

module.exports = {
    createCourse
}