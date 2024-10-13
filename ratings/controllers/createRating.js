const { Assignment } = require("../../assignments/models/assignment.model");
const { Course } = require("../../courses/models/course.model");
const { Rating, Rating } = require("../models/rating.model");
/**
 * Create a rating
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createRating = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            ratingScore,
            review,
            approved,
            userId,
            courseId
        } = req.body;

        const rating = await Rating.create({
            ratingScore,
            review,
            approved,
            course: { _id: courseId },
            user: { _id: userId }
        });
        // update module lessons
        const course = await Course.findById(courseId).populate("course");
        course.ratings.push(rating._id);
        // save
        course.save();
        rating.save();

        if (rating != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { rating },
                message: "Rating created"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { rating },
                message: "Rating creation failed"
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
    createRating
}