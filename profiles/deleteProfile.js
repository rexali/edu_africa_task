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
        // const profile = await Profile.findById(_id);
        // Profile.deleteMany({ _id }).then(() => {
        //     return User.deleteMany({ _id: profile?.user?._id });
        // }).then((profile) => {
        //     return Course.deleteMany({ user: { _id: profile?.user?._id } });
        // }).then((course) => {
        //     // send success data
        //     res.status(200).json({
        //         status: "success",
        //         data: { profile: course },
        //         message: "profile deleted with associated data",
        //     });
        // }).catch((error) => {
        //     console.warn(error);
        //     // send error response
        //     res.status(500).json({
        //         status: "failed",
        //         data: null,
        //         message: "Error! "+error.message
        //     })
        // })

        // send success data
        if (profile.deletedCount) {
            res.status(200).json({
                status: "success",
                data: { profile },
                message: "profile deleted",
            });
        } else {
            res.status(200).json({
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
            message: "Error!"
        })
    }
}

module.exports = {
    deleteProfile
}