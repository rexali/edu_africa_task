var { mongoose } = require("../config/database");

const replySchema = new mongoose.Schema({
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    content: String,
    createdAt: Date,
    updatedAt: Date,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = { 
    Reply, 
}
