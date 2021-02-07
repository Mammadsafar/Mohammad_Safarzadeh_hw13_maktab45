const express = require('express');
const router = express.Router();

let ages = [20, 34, 23, 45, 76];

router.get('/', function (req, res){
    res.send("Hello From Things")
})


router.post("/checkAge", function (req, res){
    console.log(req.url);
    console.log(req.body);
    if(ages.includes(Number(req.body.age))){

    }
});







module.exports = router;

