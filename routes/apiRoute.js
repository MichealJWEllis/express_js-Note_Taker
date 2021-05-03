const fs = require('fs')
const notesDb = require('../db/db.json')
const router = require('express').Router()
const path = require('path')


function writeNotes(note) {
  note = JSON.stringify(note)
  // console.log(note)

  fs.writeFileSync('db/db.json', note, function (e) {
    if (e) {
      return console.log(e)
    }
  })
}

function readNotes(note) {
  note = JSON.stringify(note)
  console.log(note)

  fs.readFile('db/db.json', note, function (e) {
    if (e) {
      return console.log(e)
    }
  })
}

router.get('/notes', function (_req, res) {
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

// not working! 
router.put('/notes', function (req, res) {
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


router.delete('/notes/:id', (req, res) => {
  console.log('Got a Delete request')
  const id = req.params.id
  // const notes = notesDb[id]
  // console.log(notes)
  // console.log(notesDb)
  const filter = notesDb.filter((note) => note.id !== id)
  // console.log(notesDb)
  // console.log(filter)
  writeNotes(filter)
  location.reload()
})




module.exports = router

