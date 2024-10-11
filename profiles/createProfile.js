const { Profile } = require("../model/profile.model");
/**
 * Delete a client profile
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createProfile = async (req, res) => {

    try {
        // retrieve the request body data
        const data = req.body;

        const profile = await Profile.create(
            {
                ...data,
                user: { _id: data._id }
            });

        if (profile != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { profile },
                message: "Profile created"
            })

        } else {
            // send data as json
            res.status(400).json({
                status: "success",
                data: { profile },
                message: "Profile creation failed"
            })

        }


    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(500).json({
            status: "failed",
            data: null,
            message: "Error! " + error.message

        })
    }

};

module.exports = {
    createProfile
}