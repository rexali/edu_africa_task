const { Module } = require("../models/module.model");

/** 
 * Remove a module
 * @param {object} req - request object
 * @param {object} res - response object to user request
 */
const deleteModule = async (req, res) => {
    try {
        // get a module's id
        const _id = req.body._id; 
        //    delete module
        const module = await Module.deleteOne({ _id });

        if (module.deletedCount) {
            // send success data
            res.status(200).json({
                status: "success",
                data: { module },
                message: "Module deleted",
            });
        } else {
            // turn to json data
            res.status(400).json({
                status: "success",
                data: { module },
                message: "Module deletion failed",
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
    deleteModule
}