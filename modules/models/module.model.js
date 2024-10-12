var { mongoose } = require("../../config/database");

const moduleSchema = new mongoose.Schema({
    title: String,
    descriptition: String,
    resources:[String],
    order:Number,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    lessons:[{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
    quizzes:[{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }]
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = { 
    Module, 
}
