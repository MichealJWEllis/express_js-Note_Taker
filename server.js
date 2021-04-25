const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001
const notes = require('./Develop/db/db.json')

app.get('/api/notes', (req, res) => {
    res.json(notes)
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})