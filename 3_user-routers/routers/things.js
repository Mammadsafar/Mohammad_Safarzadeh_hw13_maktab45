const express = require('express');
const router = express.Router();


router.get('/Home', function (req, res){
    res.send("<h1>This is Home</h1>")
})
router.get('/About', function (req, res){
    res.send("<h1>This is About</h1>")
})
router.get('/User', function (req, res){
    res.send("<h1>This is User</h1>")
})
router.get('/Pages', function (req, res){
    res.send("<h1>This is Pages</h1>")
})
router.get('/News', function (req, res){
    res.send("<h1>This is News</h1>")
})
router.get('/ContactUs', function (req, res){
    res.send("<h1>This is ContactUs</h1>")
})






module.exports = router;
