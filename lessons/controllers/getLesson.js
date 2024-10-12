const { Lesson } = require("../models/lesson.model");

/** 
 * Get a lesson
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getLesson = async (req, res) => {
    try {
        const _id = req.params.id; // lesson's id
        const lesson = await Lesson.findById(_id)
            .populate("module")
            // .populate("assignments") 
            .exec();
            
        if (Object.keys(lesson).length) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { lesson },
                message: "Lesson read",
            });
        } else {
            // send success data
            res.status(400).json({
                status: "success",
                data: { lesson },
                message: "Lesson reading failed",
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
    getLesson
}