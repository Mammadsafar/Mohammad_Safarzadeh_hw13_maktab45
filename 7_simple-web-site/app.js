const express = require('express');
const app = express();
const things = require('./routes/pages');
const user = require('./routes/user');
const img = require('./routes/img');
const card = require('./routes/card');
const path = require('path');


app.use(express.static(path.join(__dirname, "public")))

app.get('/html', (req, res) => {
    res.send(" Welcome To root !!")
})
app.use('/getUserData', user)
app.use('/img', img)
app.use('/', things)
app.use('/card', card)

app.listen(5005, () => {
    console.log("server started on port 5005 !!");
});