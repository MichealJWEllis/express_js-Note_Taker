const fs = require('fs')
const notesDb = require('../db/db.json')

module.exports = function(app) {

  function writeNotes(note) {
    note = JSON.stringify(note)
    console.log(note)

    fs.writeFileSync('./Develop/db/db.json', note, function(e){
      if (e) {
        return console.log(e)
      }
    })
  }

  app.get('/api/notes', function(req, res) {
    console.log(notesDb)
    res.json(notesDb)
  })

  app.post('/api/notes', function(req, res) {
    //   if (notesDb.length == 0){
    //     req.body.id = "0";
    // } else{
    //     req.body.id = JSON.stringify(JSON.parse(notesDb[notesDb.length - 1].id) + 1);
    // }

    notesDb.push(req.body)
    writeNotes(notesDb)
    res.json(req.body)
  })
  
  // writeNotes(notesDb)
}

