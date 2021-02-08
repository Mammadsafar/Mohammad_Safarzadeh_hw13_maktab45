const express = require('express');
const app = express();
const path = require('path');

const page = require('./routes/page');


app.use(express.static(path.join(__dirname, "Public")))

app.get('/', (req, res) => {
    res.send(" Welcome to root page")
})

app.use('/html', page);


app.listen(5005, () => {
    console.log("server started on port 5005 !!");
});