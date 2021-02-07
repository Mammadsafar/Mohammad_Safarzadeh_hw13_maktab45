const express = require('express');
const app = express();
const things = require('./routers/things');


app.use('/', things)




app.listen(5005, () => {
    console.log("server started on port 5005 !!");
});