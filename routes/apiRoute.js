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

function readNotes(note) {
  note = JSON.stringify(note)
  console.log(note)

  fs.readFile('db/db.json', note, function (e) {
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

router.put('/notes:id', function (req, res) {
  const noteId = parseInt(req.params.id)
  const body = req.body
  const noteSearch = notesDb[noteId]

  if (!noteSearch) {
    return res
      .status(404)
  }
  notesDb.push(req.body)
  res.json(req.body)
  writeNotes(notesDb)
})

// exports.update = function(req, res) {
//   var id = parseInt(req.params.id)
//   var noted = req.body
//   if(notesDb[id] != null){
//     notesDb[id] = noted
//     res.end(JSON.stringify(noted, null, 4))
//   } else {
//     res.end(JSON.stringify(noted, null, 4))
//   }
// }

// router.put('/notes/:id', notesDb.update)



// router.delete("/notes/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
//       if (err) throw err;
//       const db = JSON.parse(data);
//       const newDB = [];

//       for(let i = 0; i < db.length; i++)
//       {
//           if (i !== id)
//           {
//               const newNote = {
//                   title: db[i].title,
//                   text: db[i].text,
//                   id: newDB.length
//               };

//               newDB.push(newNote);
//           }
//       }

//       fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newDB, null, 2), (err) => {
//           if (err) throw err;
//           res.json(req.body);
//       });
//   });
// });

router.delete('/notes/:id', (req, res) => {
  console.log('Got a Delete request')
  const id = req.params.id
  const notes = notesDb[id]

  console.log(notes)

  
  

  // for(i=0; i < notes.length; i++){

  //   console.log(notes.length)

  // }
  // if(!notes) {
  //   return res 
  //           .status(404)
  //           .json({error: 'Note not found'})
  // }

  // delete notesDb[id]
  // notesDb.push(req.body)
  // res.json(req.body)
  // writeNotes(notesDb)
  // return res.status(204)

  // Notes.remove({
  //   id: req.params.id
  // }), function (err, user) {
  //   if (err) {
  //     return res.send(err)
  //   }
  //   res.json({ message: 'Deleted'})
  // }
})





module.exports = router

