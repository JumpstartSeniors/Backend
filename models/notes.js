const mongoose = require('mongoose')


const notesSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Notes', notesSchema)