const { Profile } = require("../model/profile.model");

/** 
 * Get an all clients
 * @param {object} req - request object
 * @param {object} res - response object to user request
 * @returns void
 */
const getProfiles = async (req, res) => {
    try {
        const page = parseInt(req.params?.page ?? 1);
        const limit = 10;
        const skip = (page - 1) * limit;

        const profile = await Profile.find()
            .skip(skip)
            .limit(limit)
            .populate('user', ["_id", "email", "role"])
            .exec();
        // send success data
        res.status(200).json({
            status: "success",
            data: { profile },
            message: "Profile read",
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
    getProfiles
}