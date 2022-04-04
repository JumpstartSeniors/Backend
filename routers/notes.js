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

// get all notes not just id's
router.get('/:id', async(req, res) => {
    try {
        const notes = await Notes.findById(req.params.id)
        res.json(notes)
    } catch (err) {
        res.send('GET Request Error: ' + err)
    }
})

// post request
router.post('/', async(req, res) => {
    const note = new Notes({
        courseCode: req.body.courseCode,
        title: req.body.title,
        description: req.body.description,
        source: req.body.source,
        datePosted: req.body.datePosted
    })
    try {
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (err) {
        res.send('POST Request Error: ' + err)
    }
})

// delete request
router.delete('/:id', async(req, res) => {
    try {
        const removedNote = await Notes.remove({ _id: req.params.id })
        res.json(removedNote)
    } catch (err) {
        res.send('DELETE Request Error: ' + err)
    }
})



module.exports = router