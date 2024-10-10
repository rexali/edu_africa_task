var { mongoose } = require("../config/database");

const submissionSchema = new mongoose.Schema({
    file: String,
    feedback: String,
    assignment: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment" },
    grade: { type: mongoose.Schema.Types.ObjectId, ref: "Grade" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = {
    Submission,
}
