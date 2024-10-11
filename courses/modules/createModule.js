const { Course } = require("../../model/course.model");
const { Module } = require("../../model/module.model");
/**
 * Create a module
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const createModule = async (req, res) => {

    try {
        // retrieve the request body data
        const {
            _id, // course id
            title,
            descriptition,
            resources,
            order,
        } = req.body;

        const module = await Module.create({
            title,
            descriptition,
            resources,
            order
        });

        const course = await Course.findById(_id).populate("modules");
        course.modules.push(module._id);
        course.save();
        module.save();

        if (module != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { module },
                message: "Module updated"
            })
        } else {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { module },
                message: "Module creation failed"
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
    createModule
}