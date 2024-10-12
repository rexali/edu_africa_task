const { Lesson } = require("../models/lesson.model");

/** 
 * Remove a lesson
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteLesson = async (req, res) => {
    try {
        // get a lesson's id
        const _id = req.body._id;
        //    delete lesson
        const lesson = await Lesson.deleteOne({ _id });

        if (lesson.deletedCount) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { lesson },
                message: "Lesson deleted",
            });
        } else {
            // turn to json data
            res.status(400).json({
                status: "success",
                data: { lesson },
                message: "Lesson deletion failed",
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
    deleteLesson
}