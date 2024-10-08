const { Course } = require("../model/course.model");

/** 
 * Remove a course
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteCourse = async (req, res) => {
    try {
        // get a client id
        const _id = req.body._id;
        //    delete course
        const course = await Course.deleteOne({ _id})
        // send success data
        res.status(200).json({
            status: "success",
            data: { course },
            message: "course deleted",
        });

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
    deleteCourse
}