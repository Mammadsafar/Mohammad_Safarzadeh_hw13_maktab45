const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, "Public")))

router.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index1.html'));
})
router.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index2.html'));
})
router.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index3.html'));
})
router.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index4.html'));
})
router.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/Html/index5.html'));
})



module.exports = router;