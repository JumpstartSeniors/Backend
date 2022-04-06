const express = require('express')
const router = express.Router()

// import the model courses
const Courses = require('../models/courses')


router.get('/', async(req, res) => {
    try {
        const courses = await Courses.find()
        res.json(courses)
    } catch (err) {
        res.send('GET Request Error: ' + err)
    }
})

// push request
router.post('/', async(req, res) => {
    const course = new Courses({
        courseCode: req.body.courseCode,
        courseName: req.body.title,
        courseDescription: req.body.description,
        courseImage: req.body.image,
    })
    try {
        const savedCourse = await course.save()
        res.json(savedCourse)
    } catch (err) {
        res.send('POST Request Error: ' + err)
    }
})



module.exports = router