const express = require('express');
const router = express.Router();
const fs = require('fs');
const app = express();
const path = require('path');

let ages = [20, 34, 23, 45, 76];

// router.get('/', function (req, res){
//     res.send("Hello From Things")
// })

console.log("=============>");

function find_user(user) {
    let data = fs.readFileSync("./routers/file/user.txt", "utf8");
    data = JSON.parse(data);
    // console.log(data);
    // for (var i=0;i<data.length;i++) {
  // }
    for (const i in data) {
        console.log(data[i]);

        if (data[i].userName == user.username && data[i].password == user.password){
            return data[i];
        }
        // console.log();

    }return false;

}


router.post('/getUserInfo', (req, res) => {
    console.log(req.url);

    let User;

    req.on('data', function (data) {
        console.log("data ====> " + data);

        let temp = JSON.parse(data);

        User = find_user(temp);

        console.log(User);

        if (User !== "false") {
            console.log("Not False");
            res.status(200)
            res.send(User)
        } else {
            console.log("false");
            res.status(404).send('Not Found')
            // res.send("This User does not exist")
        }
    });



    // res.send(User)

});

app.get('/', (req, res) => {
    // console.log(2, req.test);
    res.sendFile(path.join(__dirname, 'public/login.html'))
    res.send(data)
});

app.use(express.static(path.join(__dirname, "public")));


router.post("/checkAge", function (req, res) {
    // console.log(req.url);
    // console.log(req.body);
    if (ages.includes(Number(req.body.age))) {

    }
});







module.exports = router;