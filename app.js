const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/JumpstartSeniors'

const app = express()

const coursesRouter = require('./routers/courses')
const notesRouter = require('./routers/notes')

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected to db')
})

app.use(express.json())

app.use('/courses', coursesRouter)
app.use('/notes', notesRouter)

app.listen(9000, () => {
    console.log('listening on port 9000')
})