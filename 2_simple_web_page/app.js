const express = require('express');
const app = express();
const things = require('./routes/things');
const path = require('path');
const bodyParser = require('body-parser');

// app.use("/",function (req, res, next){
//     console.log(1);
//     // req.test = "test";
//     res.send("Hello World")
//     next();
// });
app.use(express.static(path.join(__dirname, "public")))
// app.use(bodyParser.json())


// app.get('/', function (req, res){
//     res.sendFile(path.join(__dirname+"/public/index.html"))

// });
// app.get('/loginForm.css', function (req, res){
//     res.sendFile(path.join(__dirname+"/public/loginForm.css"))

// });
// app.get('/photo_2020-12-21_12-04-33.jpg', function (req, res){
//     res.sendFile(path.join(__dirname+"/public/photo_2020-12-21_12-04-33.jpg"))

// });
app.use('/things', things)


// app.get('/a', function (req, res){
//     // console.log(req);
//         console.log(3);
//         res.json({
//         url: req.url,
//         method: req.method
//     })
// });
// app.get('/b', function (req, res){
//     // console.log(req);
//         console.log(4);
//         res.json({
//         url: req.url,
//         method: req.method
//     })
// });

app.listen(5005, () => { 
    console.log("server started on port 5005 !!");
});