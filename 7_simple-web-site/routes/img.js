
const express = require('express')
const router = express.Router()
const path = require('path');



console.log("=============params=============>");

router.get('/:id', (req, res) => {
    console.log("=================================================img=============>");
    console.log("params ===>  " + req.params.id);
    console.log("dirname ===>  " + __dirname);
    console.log("dirname ===>  " + __dirname, `../img`);
res.sendFile(path.join(__dirname, `../img`, `${req.params.id}`));
})

module.exports = router