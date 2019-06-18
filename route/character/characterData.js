const express = require("express");
const router = express.Router();
var fs = require('fs');


const jsonLuke = JSON.parse(fs.readFileSync('characters/luke.json', 'utf8'));
const darthVader = JSON.parse(fs.readFileSync('characters/darth-vader.json', 'utf8'));

router.get("/luke", (req, res, next) => {
    res.send(jsonLuke);    
});


router.get("/darthVader", (req, res, next) => {
    res.send(darthVader);    
});


module.exports = router;