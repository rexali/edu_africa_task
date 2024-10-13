var { mongoose } = require("../../config/database");

const submissionSchema = new mongoose.Schema({
    file: String,
    feedback: String,
    assignment: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment" },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
    grade: { type: mongoose.Schema.Types.ObjectId, ref: "Grade" },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = {
    Submission,
}
