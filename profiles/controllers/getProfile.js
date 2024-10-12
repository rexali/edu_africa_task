const { Profile } = require("../models/profile.model");

/** 
 * Get an all clients
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getProfile = async (req, res) => {
    try {
        const _id = req.params.id
        const profile = await Profile.findById(_id)
            .populate('user', ["_id", "email", "role"])
            .exec();
        // send success data
        if (Object.keys(profile).length) {
            res.status(200).json({
                status: "success",
                data: { profile },
                message: "Profile read",
            });
        } else {
            res.status(400).json({
                status: "success",
                data: { profile },
                message: "Profile empty",
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
    getProfile
}