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
})

module.exports = mongoose.model('Notes', notesSchema)