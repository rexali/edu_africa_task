const { Course } = require("../../courses/models/course.model");
const { Module } = require("../models/module.model");
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
            order,
            course: { _id: _id }
        });
        // update course modules
        const course = await Course.findById(_id).populate("modules");
        course.modules.push(module._id);
        // save
        course.save();
        module.save();

        if (module != null) {
            // send data as json
            res.status(200).json({
                status: "success",
                data: { module },
                message: "Module created"
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