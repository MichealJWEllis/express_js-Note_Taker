// add the required modules
const express = require('express')
// Server info 
const app = express()
const PORT = process.env.PORT || 3001
// Read URL / JSON middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// public folder use
app.use(express.static("public"))

// Route Add
require('./routes/apiRoute')(app)
require('./routes/htmlRoute')(app)



// listener for port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})
















