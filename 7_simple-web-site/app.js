const express = require('express');
const app = express();
const things = require('./routes/pages');
const path = require('path');


app.use(express.static(path.join(__dirname, "public")))

app.get('/html', (req, res) => {
    res.send(" Welcome To root !!")
})

app.use('/', things)


app.listen(5005, () => { 
    console.log("server started on port 5005 !!");
});