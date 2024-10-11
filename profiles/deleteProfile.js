const { Course } = require("../model/course.model");
const { Profile } = require("../model/profile.model");
const { User } = require("../model/user.model");

/** 
 * Remove a user profile details
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteProfile = async (req, res) => {
    try {
        // get a client id
        const _id = req.body._id;
        // delete profile
        const profile = await Profile.deleteOne({ _id });
        // send success data
        if (profile.deletedCount) {
            res.status(200).json({
                status: "success",
                data: { profile },
                message: "profile deleted",
            });
        } else {
            res.status(400).json({
                status: "success",
                data: { profile },
                message: "profile deletion failed",
            });
        }

    } catch (error) {
        // catch  the error
        console.warn(error);
        // send error response
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Error! "+error.message
        })
    }
}

module.exports = {
    deleteProfile
}