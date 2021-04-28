const path = require('path')

module.exports = function(app) {

    // notes html pickup 
    app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
  })
  // return index page defaults
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develp/public/index.html'))
  })
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))
  })    
}