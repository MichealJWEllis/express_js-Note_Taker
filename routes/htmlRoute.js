const path = require('path')
const router = require('express').Router()


// notes html pickup 
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
})
// return index page and default route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = router