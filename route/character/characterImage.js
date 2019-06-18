const express = require("express");
const router = express.Router();
var fs = require('fs');
var path = require('path');


/**
 * Api encargada de traer las images
 */
const pathImgLuke = 'images/luke.jpg';
const pathImgDarthVader = 'images/darth-vader.json';

/**
 * Trae la imagen de luke
 */
router.get("/luke", (req, res, next) => {
    
    res.sendFile(path.resolve(pathImgLuke));  
});

/**
 * Trae la imagen de darth vader
 */
router.get("/darthVader", (req, res, next) => {
    res.sendFile(path.resolve(pathImgDarthVader));
});


module.exports = router;