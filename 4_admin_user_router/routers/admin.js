const express = require('express');
const router = express.Router();
const fs = require('fs');
const app = express();
const path = require('path');

let ages = [20, 34, 23, 45, 76];
console.log("--------------------------------------------");
// router.get('/', function (req, res){
//     res.send("Hello From Things")
// })
// console.log(data);

router.post("/", function (req, res){
    console.log("URL ===> "+req.url);
    console.log("ADMINNNNNNNNNNNNNNNNNNNNNNNNN");
    let data = fs.readFileSync("./routers/file/user.txt", "utf8");

    res.status(200)
    res.send(JSON.stringify(data));
    // if(ages.includes(Number(req.body.age))){

    // }
});







module.exports = router;