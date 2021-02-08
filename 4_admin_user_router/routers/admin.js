const express = require('express');
const router = express.Router();
const fs = require('fs');
const app = express();
const path = require('path');



router.get("/getAllUsers", function (req, res){
    console.log("URL ===> "+req.url);
    console.log("ADMINNNNNNNNNNNNNNNNNNNNNNNNN");
    let data = fs.readFileSync("./routers/file/user.txt", "utf8");


    console.log(data);
    console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));


});


module.exports = router;