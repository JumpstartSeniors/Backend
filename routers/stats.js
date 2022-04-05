const express = require('express')
const router = express.Router()

// import the model courses
const Courses = require('../models/courses')
// import the notes
const Notes = require('../models/notes')




router.get('/', async(req, res) => {
    try {
        // get length of courses
        const courses = await Courses.find()
        const courseLength = courses.length
        const notes = await Notes.find()
        const noteLength = notes.length
        // make a json objects with the lengths
        const json = {
            courseLength: courseLength,
            noteLength: noteLength
        }
        res.json(json)  
    } catch (err) {
        res.send('GET Request Error: ' + err)
    }
})





module.exports = router