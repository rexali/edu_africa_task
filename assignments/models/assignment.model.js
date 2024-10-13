var { mongoose } = require("../../config/database");

const assignmentSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    dueDate: Date,
    student:{ type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = {
    Assignment
}
 