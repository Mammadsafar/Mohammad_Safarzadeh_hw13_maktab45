
const express = require('express')
const router = express.Router()
const path = require('path');


router.use(express.static(path.join(__dirname, "Public")))

console.log("==========================>");

router.get('/:id', (req, res) => {
    console.log("dirname ===>  " + req.params.id);
    console.log("dirname ===>  " + __dirname);
    console.log("dirname ===>  " + __dirname, `../public/Html`);
res.sendFile(path.join(__dirname, `../public/html`, `${req.params.id}.html`));
})
module.exports = router