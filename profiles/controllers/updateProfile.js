const { Profile } = require("../models/profile.model");
/**
 * Delete a client profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const updateProfile = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            _id,
            firstName,
            lastName,
            photo
        } = req.body;

        const profile = await Profile.updateOne({ _id },
            {
                firstName,
                lastName,
                photo
            });

        if (profile.modifiedCount) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { profile },
                message: "Profile updated"
            })
        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { profile },
                message: "Profile update failed"
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
    updateProfile
}