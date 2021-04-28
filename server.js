// add the required modules
const express = require('express')
const path = require('path')

// Server info 
const app = express()
const PORT = process.env.PORT || 3001




// listener for port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})















// const { notes } = require('./Develop/db/db.json')



// app.get('/api/notes', (req, res) => {
//     res.json(notes)
//     console.log(notes)
// });
