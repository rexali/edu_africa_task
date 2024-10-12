const { Module } = require("../../modules/models/module.model");
const { Lesson } = require("../models/lesson.model");
/**
 * Create a lesson
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createLesson = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            _id, // lesson's module's id
            title,
            descriptition,
            content,
            video,
            duration,
            order,
        } = req.body;

        const lesson = await Lesson.create({
            title,
            descriptition,
            content,
            video,
            duration,
            order,
            module: { _id }
        });
        // update module lessons
        const module = await Module.findById(_id).populate("lessons");
        module.lessons.push(lesson._id);
        // save
        module.save();
        lesson.save();

        if (lesson != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { lesson },
                message: "Lesson created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { lesson },
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
    createLesson
}