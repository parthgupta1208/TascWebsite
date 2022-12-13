const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    pid: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    image:{
        type: String,
        default: ""
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Post", PostSchema)