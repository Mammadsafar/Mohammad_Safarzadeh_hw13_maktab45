const express = require('express');
const app = express();
const things = require('./routes/things');


app.use('/', things)


app.listen(5005, () => {
    console.log("server started on port 5005 !!");
});