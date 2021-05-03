const fs = require('fs')
const notesDb = require('../db/db.json')
const router = require('express').Router()
const path = require('path')


function writeNotes(note) {
  note = JSON.stringify(note)
  console.log(note)

  fs.writeFileSync('db/db.json', note, function (e) {
    if (e) {
      return console.log(e)
    }
  })
}

router.get('/notes', function (req, res) {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) throw err
    res.json(JSON.parse(data))
  })
})

router.post('/notes', function (req, res) {
  // console.log(notesDb)
  if (notesDb.length == 0) {
    req.body.id = "0";
  } else {
    req.body.id = notesDb.length.toString()
  }
  notesDb.push(req.body)
  res.json(req.body)
  writeNotes(notesDb)

})

router.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
      if (err) throw err;
      const db = JSON.parse(data);
      const newDB = [];

      for(let i = 0; i < db.length; i++)
      {
          if (i !== id)
          {
              const newNote = {
                  title: db[i].title,
                  text: db[i].text,
                  id: newDB.length
              };

              newDB.push(newNote);
          }
      }

      fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newDB, null, 2), (err) => {
          if (err) throw err;
          res.json(req.body);
      });
  });
});





module.exports = router

