var { mongoose } = require("../config/database");

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructor: String, // creator or user
    duration: Number,
    level: String,
    photo: String,
    price: Number,
    skills: [{ type: String }],
    modules: [{ type: mongoose.Schema.Types, ref: "Modules" }],
    user: { type: mongoose.Schema.Types, ref: "User" },
    ratings: [{ type: mongoose.Schema.Types, ref: "Rating" }],
    enrollments: [{ type: mongoose.Schema.Types, ref: "Enrollment" }],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = { Course }
