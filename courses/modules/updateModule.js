const { Module } = require("../../model/module.model");
/**
 * Update a  module
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @returns void
 */
const updateModule = async (req, res) => {
    try {
        // retrieve the request body data
        const {
            _id, // course id
            title,
            description,
            resources,
            order,
        } = req.body;

        const module = await Module.updateOne({ _id}, {
            $set: { title},
            $set: { description},
            $set: { resources},
            $set: { order},
        });

        // send data as json
        res.status(200).json({
            status: "success",
            data: { module },
            message: "Module updated"
        })

    } catch (error) {
        console.warn(error);
        // send data as json
        res.status(200).json({
            status: "failed",
            data: null,
            message: "Update failed"

        })
    }
};

module.exports = {
    updateModule
}