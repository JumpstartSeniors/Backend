const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({

    courseCode: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseImage: {
        type: String,
        required: true
    },
    notes: {
        type: Number,
        required: true,
        default: 0
    },
})

module.exports = mongoose.model('Courses',courseSchema)