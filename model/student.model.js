var {mongoose} = require("../config/database");

const studentSchema = new mongoose.Schema({
    user:{ type: mongoose.Schema.Types.ObjectId, ref: "User"},
    courses:[{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    progress:[{ type: mongoose.Schema.Types.ObjectId, ref: "Progress" }]
});


const Student = mongoose.model('Student',studentSchema);

module.exports={
    Student, 
}
