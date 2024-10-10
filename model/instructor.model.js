var { mongoose } = require("../config/database");

const instructorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    bio: String,
    image: String,
    expertise: [{ type: String }]
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = {
    Instructor,
}
