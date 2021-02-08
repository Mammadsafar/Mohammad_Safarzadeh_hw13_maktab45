const express = require('express');
const app = express();
const admin = require('./routers/admin');
const user = require('./routers/user');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")))



app.use('/user', user)
// app.use('/getUser', user)
console.log("admin");
app.use('/admin', admin)
console.log("after admin");

// app.get('/user/getUser', (req, res) => {
//     console.log(2, req.test);

//     res.sendFile(path.join(__dirname, 'public/index.html'))
// });

// app.get('/admin/getAllUser', (req, res) => {
//     console.log(2, req.test);

//     res.sendFile(path.join(__dirname, 'public/index.html'))
// });
app.use(express.static(path.join(__dirname, "public")));



app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})