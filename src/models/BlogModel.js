const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        require: true
    },
    likes: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        required: false
    },
    headerImage: {
        type: String,
        require: false
    },
    tags: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],
        enum: ["life", "travel", "photography", "coding"],
        required: true
    },

    editHistory: {
        type: [{user: String, timestamp: Date}],
        required: false
    }
},
{
    timestapms: true
})

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = {
    BlogModel
}