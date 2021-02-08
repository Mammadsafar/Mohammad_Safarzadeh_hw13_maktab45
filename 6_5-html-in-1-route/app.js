const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const pages = require('./routes/page')

// const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, "Public")))
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/html', (req, res) => {
    res.send(" Welcome To root !!")
})


app.use('/pages', pages)

app.listen(5005, () => {
    console.log("Staring Server in port 5005 !!!")
})