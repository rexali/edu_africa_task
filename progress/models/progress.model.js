var { mongoose } = require("../../config/database");

const progressSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student"},
    grade: { type: mongoose.Schema.Types.ObjectId, ref: "Grade" },
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
    completed: Boolean
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = {
    Progress,
}
