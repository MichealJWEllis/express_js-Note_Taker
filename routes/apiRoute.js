const fs = require('fs')
const notesDb = require('../db/db.json')

module.exports = function (app) {

  function writeNotes(note) {
    note = JSON.stringify(note)
    console.log(note)

    fs.writeFileSync('db/db.json', note, function (e) {
      if (e) {
        return console.log(e)
      }
    })
  }

  app.get('/api/', function (req, res) {
    // console.log(req.body)
    res.json(notesDb)
  })

  app.post('/api/notes', function (req, res) {
    // console.log(notesDb)
    if (notesDb.length == 0) {
      req.body.id = "0";
    } else {
      req.body.id = notesDb.length.toString()
    }
    notesDb.push(req.body)
    writeNotes(notesDb)
    res.json(req.body)
  })

  // app.delete('/api/notes/:id', function (req, res) {
  //   console.log()
  // })
}

