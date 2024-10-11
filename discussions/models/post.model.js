var { mongoose } = require("../../config/database");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    createdAt: Date,
    updatedAt: Date,
    replies:[{type: mongoose.Schema.Types.ObjectId, ref: "Reply"}],
});

const Post = mongoose.model('Post', postSchema);

module.exports = { 
    Post, 
}
