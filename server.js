// add the required modules
const express = require('express')
const path = require('path')
// Server info 
const app = express()
const PORT = process.env.PORT || 3001
// Read URL / JSON middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Route Add 
require('./Develop/routes/htmlRoute')(app)
require('./Develop/routes/apiRoute')(app)
// public folder use
app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))
// listener for port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})
















