
const express = require('express')
const router = express.Router()
const path = require('path');


router.use(express.static(path.join(__dirname, "Public")))

console.log("==========================>");

router.get('/:id', (req, res) => {
    console.log("dirname ===>  " + req.params.id);
    console.log("dirname ===>  " + __dirname);
    console.log("dirname ===>  " + __dirname, `../public/Html`);
res.sendFile(path.join(__dirname, `../public/Html`, `${req.params.id}.html`));
})
module.exports = router




// let routs = ["/page1", "/page2", "/page3", "/page4", "/page5", "/EXE6_EXE5IN1RUTER/public/Css/style1.css", "/EXE6_EXE5IN1RUTER/public/Css/style2.css", "/EXE6_EXE5IN1RUTER/public/Css/style3.css", "/EXE6_EXE5IN1RUTER/public/Css/style4.css", "/EXE6_EXE5IN1RUTER/public/Css/style5.css"]
// router.get(routs, (req, res) => {
//     let page = req.originalUrl.split('/');
//     console.log(page);
//     if (page[2] === "page1") {
//         res.sendFile(path.join(__dirname, '/../public/Html/index1.html'));
//     } else if (page[2] === "page2") {
//         res.sendFile(path.join(__dirname, '/../public/Html/index2.html'));
//     } else if (page[2] === "page3") {
//         res.sendFile(path.join(__dirname, '/../public/Html/index3.html'));
//     } else if (page[2] === "page4") {
//         res.sendFile(path.join(__dirname, '/../public/Html/index4.html'));
//     } else if (page[2] === "page5") {
//         res.sendFile(path.join(__dirname, '/../public/Html/index5.html'));
//     } else if (page[5] === "style1.css") {
//         res.sendFile(path.join(__dirname, '/../public/Css/style1.css'));
//     } else if (page[5] === "style2.css") {
//         res.sendFile(path.join(__dirname, '/../public/Css/style2.css'));
//     } else if (page[5] === "style3.css") {
//         res.sendFile(path.join(__dirname, '/../public/Css/style3.css'));
//     } else if (page[5] === "style4.css") {
//         res.sendFile(path.join(__dirname, '/../public/Css/style4.css'));
//     } else if (page[5] === 'style5.css') {
//         res.sendFile(path.join(__dirname, '/../public/Css/style5.css'));
//     } else {
//         res.send(" not found this pages");
//     }

// })

// module.exports = router;