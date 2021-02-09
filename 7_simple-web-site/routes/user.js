
const express = require('express')
const router = express.Router()
const fs = require('fs')

let user_data = JSON.parse(fs.readFileSync('./document/file.txt', 'utf8'));

router.get('/', (req, res) => {
    console.log("==============>  send data ");
    res.status(200).json(user_data);
})

module.exports = router