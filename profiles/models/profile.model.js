var { mongoose } = require("../../config/database");

const profileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    firstName: String,
    lastName: String,
    photo: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = { 
    Profile, 
}
