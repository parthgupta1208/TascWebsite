const mongoose = require('mongoose')

const CoreMembersSchema = new mongoose.Schema({
    uid: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    usn: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        default: ""
    },
    image:{
        type: String,
        default: ""
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("CoreMembers", CoreMembersSchema)