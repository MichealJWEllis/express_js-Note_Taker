const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001
const notes = require('./Develop/db/db.json')

app.get('/api/notes', (req, res) => {
    res.json(notes)
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))
})


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})