var { mongoose } = require("../config/database");

const certificateSchema = new mongoose.Schema({
    name: String, // title
    description: String,
    issuer: String,
    issueDate: Date,
    expirationDate: Date,
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = {
    Certificate,
}
