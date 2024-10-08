var { mongoose } = require("../config/database");

const quizSchema = new mongoose.Schema({
    text: String,
    type: String, // mmultiple choice, true/false, short answer
    options:[String], // for multiple choice question
    answer:String,
    module: { type: mongoose.Schema.Types.ObjectId, ref: "Module" }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = { Quiz }
