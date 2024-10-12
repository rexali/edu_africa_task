const { Lesson } = require("../models/lesson.model");
/**
 * Update a  lesson
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const updateLesson = async (req, res) => {
    try {
        // retrieve the request body data
        const {
            _id, // lesson id
            title,
            description,
            content,
            video,
            duration,
            order,
        } = req.body;

        const lesson = await Lesson.updateOne({ _id }, {
            title,
            description ,
            content,
            video,
            duration,
            order
        });

        if (lesson.modifiedCount) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { lesson },
                message: "Lesson updated"
            })
        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { lesson },
                message: "Lesson update failed"
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
    updateLesson
}