var { mongoose } = require("../../config/database");

const lessonSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String, // text, html etc
    video: String,
    duration: String,
    order:Number,
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }],
    module: { type: mongoose.Schema.Types.ObjectId, ref: "Module" }
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = {
    Lesson,
}
