const express = require('express')
const router = express.Router()

// import the model notes
const Notes = require('../models/notes')
// get request to get all notes
router.get('/', async(req, res) => {
    try {
        const notes = await Notes.find()
        res.json(notes)
    } catch (err) {
        res.send('GET Request Error: ' + err)
    }
})
// get courses by courseCode
router.get('/:courseid', async(req, res) => {
    try {
        const notes = await Notes.find({ courseCode: req.params.courseid })
        res.json(notes)
    } catch (err) {
        res.send('GET by courseCode Request Error: ' + err)
    }
})

// post request to push new notes
router.post('/', async(req, res) => {
    const note = new Notes({
        courseCode: req.body.courseCode,
        title: req.body.title,
        description: req.body.description,
        source: req.body.source,
        datePosted: req.body.datePosted,
        likes: 0
    })
    try {
        // check if the source is a link
        if (note.source.includes('http')) {
            // dont allow duplicates
            const duplicate = await Notes.findOne({ source: note.source })
            if (duplicate) {
                return res.status(400).json({ msg: 'Duplicate source' })
            }
            const savedNote = await note.save()
            res.json(savedNote)
        }
        else {
            res.send("Failed Request: Source is not a link")
        }
    } catch (err) {
        res.send('POST Request Error: ' + err)
    }
})

// delete by course ID
router.delete('/:id', async(req, res) => {
    try {
        const removedNote = await Notes.remove({ _id: req.params.id })
        res.json(removedNote)
    } catch (err) {
        res.send('DELETE Request Error: ' + err)
    }
})

router.post('/like/:id', async(req, res) => {
    try {
        const note = await Notes.findById(req.params.id)
        note.likes += 1
        const updatedNote = await note.save()
        res.json(updatedNote)
    } catch (err) {
        res.send('POST Request Error: ' + err)
    }
})


module.exports = router