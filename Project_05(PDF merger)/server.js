
const express = require('express')
const path = require('path')
const app = express()

//multer is used to take files as input in js
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// for the mergePdf object in merge.js file
const {mergePdfs} = require('./merge')

// used to give out static output
app.use('/static', express.static('public'))

const port = 3000


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async  (req, res, next) => {
    
    console.log(req.files)
   let d = await  mergePdfs(path.join(__dirname, req.files[0].path),path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:3000/static/${d}.pdf`)
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})



app.listen(port, () => {
  console.log(`Merge app listening on port https://localhost:${port}`)
})